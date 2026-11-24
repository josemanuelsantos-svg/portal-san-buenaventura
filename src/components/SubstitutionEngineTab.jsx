import React, { useState } from 'react';
import IconRenderer from './IconHelper';

function SubstitutionEngineTab({
  teachers,
  primariaClassrooms,
  infantilClassrooms,
  schedules,
  periodColumns,
  supportAssignments,
  initialDayIdx = 0,
  formatShortAula,
  formatShortSubject,
  onSelectTeacher,
  onNotifyToast
}) {
  const dayNames = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
  const activePeriods = periodColumns.filter((c) => !c.isBreak);

  const [selectedDay, setSelectedDay] = useState(
    initialDayIdx >= 0 && initialDayIdx <= 4 ? initialDayIdx : 0
  );
  const [absentTeacherIds, setAbsentTeacherIds] = useState([]);
  const [outClassrooms, setOutClassrooms] = useState([]);
  const [affectedPeriods, setAffectedPeriods] = useState(["1H", "2H", "3H", "4H"]);
  const [teacherQuery, setTeacherQuery] = useState("");
  const [manualOverrides, setManualOverrides] = useState({});

  const allClassrooms = [...(infantilClassrooms || []), ...(primariaClassrooms || [])];

  const togglePeriod = (pId) => {
    setAffectedPeriods((prev) =>
      prev.includes(pId) ? prev.filter((x) => x !== pId) : [...prev, pId]
    );
  };

  const setPresetPeriods = (preset) => {
    if (preset === "morning") setAffectedPeriods(["1H", "2H", "3H", "4H"]);
    else if (preset === "afternoon") setAffectedPeriods(["5H", "6H"]);
    else setAffectedPeriods(["1H", "2H", "3H", "4H", "5H", "6H"]);
  };

  const toggleAbsentTeacher = (id) => {
    setAbsentTeacherIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const toggleOutClassroom = (aula) => {
    setOutClassrooms((prev) => {
      const exists = prev.includes(aula);
      return exists ? prev.filter((x) => x !== aula) : [...prev, aula];
    });
  };

  const resetSimulation = () => {
    setAbsentTeacherIds([]);
    setOutClassrooms([]);
    setManualOverrides({});
    setTeacherQuery("");
  };

  // Filtrado rápido de docentes para añadir ausencias/acompañantes
  const qNorm = teacherQuery.trim().toLowerCase();
  const filteredTeachers = teachers.filter(
    (t) =>
      !qNorm ||
      t.name.toLowerCase().includes(qNorm) ||
      (t.dept || "").toLowerCase().includes(qNorm)
  );

  // Tutores sugeridos cuyos grupos han salido fuera (y aún no están marcados como acompañantes)
  const suggestedTutors = teachers.filter((t) => {
    if (absentTeacherIds.includes(t.id) || outClassrooms.length === 0) return false;
    const dept = (t.dept || "").toLowerCase();
    return outClassrooms.some((aula) => {
      const shortA = formatShortAula(aula).toLowerCase();
      return dept.includes(aula.toLowerCase()) || dept.includes(shortA);
    });
  });

  // =========================================================================
  // MOTOR DE RESOLUCIÓN HORARIA («REGLA SAN BUENAVENTURA»)
  // =========================================================================
  const dayKey = String(selectedDay);
  const periodPlan = activePeriods
    .filter((col) => affectedPeriods.includes(col.id))
    .map((col) => {
      const pId = col.id;

      // 1. Especialistas que tenían clase "L" con un grupo en excursión -> quedan LIBERADOS en el centro
      const freedSpecialists = [];
      if (outClassrooms.length > 0) {
        teachers.forEach((t) => {
          if (absentTeacherIds.includes(t.id)) return;
          const slot = schedules[t.id]?.[dayKey]?.[pId];
          if (!slot) return;
          const [typeCode, aula, materia] = slot;
          if (typeCode === "L" && aula && outClassrooms.includes(aula)) {
            freedSpecialists.push({
              teacher: t,
              reasonTag: `Liberado por salida de ${formatShortAula(aula)}`,
              priority: 1,
              freedFromAula: aula,
              freedMateria: materia
            });
          }
        });
      }

      // 2. Docentes en tramo oficial de Disponibilidad / Guardia ("D") que no están ausentes
      const availableGuardias = [];
      teachers.forEach((t) => {
        if (absentTeacherIds.includes(t.id)) return;
        if (freedSpecialists.some((f) => f.teacher.id === t.id)) return;
        const slot = schedules[t.id]?.[dayKey]?.[pId];
        if (!slot) return;
        const [typeCode, , materia] = slot;
        if (typeCode === "D") {
          availableGuardias.push({
            teacher: t,
            reasonTag: materia ? `Disponible (${formatShortSubject(materia)})` : "Disponible / Guardia",
            priority: 2
          });
        }
      });

      // 3. Docentes asignados a Apoyo en este tramo (por si faltan manos)
      const supportCandidates = [];
      (supportAssignments || []).forEach((sup) => {
        if (sup.day !== selectedDay || sup.period !== pId) return;
        const tId = sup.teacherId === "ipena" ? "feli" : sup.teacherId;
        if (absentTeacherIds.includes(tId)) return;
        if (
          freedSpecialists.some((f) => f.teacher.id === tId) ||
          availableGuardias.some((g) => g.teacher.id === tId) ||
          supportCandidates.some((s) => s.teacher.id === tId)
        ) {
          return;
        }
        // Si el aula a la que apoyaba está de excursión, sube su prioridad
        const supAulaOut = (sup.aulas || []).every((a) => outClassrooms.includes(a));
        const tObj = teachers.find((x) => x.id === tId) || {
          id: tId,
          name: sup.teacherName || tId,
          dept: "Apoyo"
        };
        supportCandidates.push({
          teacher: tObj,
          reasonTag: supAulaOut
            ? `Apoyo liberado (${formatShortAula((sup.aulas || []).join("/"))})`
            : `En apoyo (${formatShortAula((sup.aulas || []).join("/"))})`,
          priority: supAulaOut ? 1 : 3
        });
      });

      const candidatePool = [
        ...freedSpecialists,
        ...supportCandidates.filter((c) => c.priority === 1),
        ...availableGuardias,
        ...supportCandidates.filter((c) => c.priority === 3)
      ];

      // 4. Detectar huecos reales que dejan los docentes ausentes
      const uncoveredSlots = [];
      const skippedOutGroupSlots = [];

      absentTeacherIds.forEach((absId) => {
        const absTeacher = teachers.find((t) => t.id === absId);
        if (!absTeacher) return;
        const slot = schedules[absId]?.[dayKey]?.[pId];
        if (!slot) return;
        const [typeCode, aula, materia] = slot;
        if (typeCode !== "L") return;

        // Si el aula de esa clase es uno de los grupos que se han ido de excursión, no requiere sustituto en el edificio
        if (aula && outClassrooms.includes(aula)) {
          skippedOutGroupSlots.push({
            absentTeacher: absTeacher,
            aula,
            materia
          });
          return;
        }

        uncoveredSlots.push({
          slotKey: `${selectedDay}-${pId}-${absId}`,
          absentTeacher: absTeacher,
          aula: aula || "Aula / Grupo",
          materia: materia || "Sesión lectiva"
        });
      });

      // 5. Asignación automática sin repetir sustituto en la misma hora
      const usedInThisPeriod = new Set();
      const assignments = uncoveredSlots.map((u) => {
        const manualId = manualOverrides[u.slotKey];
        if (manualId) {
          const foundManual =
            candidatePool.find((c) => c.teacher.id === manualId) ||
            (teachers.find((t) => t.id === manualId)
              ? {
                  teacher: teachers.find((t) => t.id === manualId),
                  reasonTag: "Selección manual",
                  priority: 0
                }
              : null);
          if (foundManual) {
            usedInThisPeriod.add(foundManual.teacher.id);
            return { ...u, chosen: foundManual, candidates: candidatePool };
          }
        }

        const autoCandidate = candidatePool.find(
          (c) => !usedInThisPeriod.has(c.teacher.id)
        );
        if (autoCandidate) {
          usedInThisPeriod.add(autoCandidate.teacher.id);
        }
        return {
          ...u,
          chosen: autoCandidate || null,
          candidates: candidatePool
        };
      });

      return {
        period: col,
        assignments,
        skippedOutGroupSlots,
        candidatePool
      };
    });

  const totalUncovered = periodPlan.reduce((acc, p) => acc + p.assignments.length, 0);
  const totalResolved = periodPlan.reduce(
    (acc, p) => acc + p.assignments.filter((a) => Boolean(a.chosen)).length,
    0
  );

  const handleCopySummary = () => {
    const lines = [
      `📋 CUADRANTE DE SUSTITUCIONES · ${dayNames[selectedDay].toUpperCase()}`,
      outClassrooms.length > 0
        ? `🚌 Grupos en salida: ${outClassrooms.map((a) => formatShortAula(a)).join(", ")}`
        : null,
      absentTeacherIds.length > 0
        ? `👤 Ausencias / Acompañantes: ${absentTeacherIds
            .map((id) => teachers.find((t) => t.id === id)?.name.split(" ").slice(0, 2).join(" "))
            .filter(Boolean)
            .join(", ")}`
        : null,
      ""
    ].filter((x) => x !== null);

    periodPlan.forEach((p) => {
      if (p.assignments.length === 0) return;
      lines.push(`🕒 ${p.period.label} (${p.period.time}):`);
      p.assignments.forEach((a) => {
        const subName = a.chosen
          ? `${a.chosen.teacher.name} [${a.chosen.reasonTag}]`
          : "⚠️ PENDIENTE DE ASIGNAR";
        lines.push(
          `  • ${formatShortAula(a.aula)} (${formatShortSubject(a.materia)}, por ${a.absentTeacher.name.split(" ")[0]}) → ${subName}`
        );
      });
    });

    const text = lines.join("\n");
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      if (onNotifyToast) {
        onNotifyToast("📋 Cuadrante de sustituciones copiado para WhatsApp / Educamos");
      }
    }
  };

  return (
    <div className="space-y-4">
      {/* Barra superior: Día, Tramos y Acciones */}
      <div className="bg-stone-50 dark:bg-slate-950 border border-stone-200 dark:border-slate-800 rounded-2xl p-3.5 space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-stone-500 dark:text-slate-400 mr-1">
              Día:
            </span>
            {dayNames.map((dName, idx) => (
              <button
                key={dName}
                type="button"
                onClick={() => setSelectedDay(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-extrabold transition cursor-pointer ${
                  selectedDay === idx
                    ? "bg-tau text-white shadow-2xs"
                    : "bg-white dark:bg-slate-900 text-stone-700 dark:text-slate-300 border border-stone-200 dark:border-slate-800 hover:border-stone-400"
                }`}
              >
                {dName}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-[11px] font-extrabold uppercase tracking-wider text-stone-500 dark:text-slate-400 mr-1">
              Franja:
            </span>
            <button
              type="button"
              onClick={() => setPresetPeriods("morning")}
              className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700 text-stone-700 dark:text-slate-200 hover:bg-stone-100 cursor-pointer"
            >
              Mañana (1ª–4ª)
            </button>
            <button
              type="button"
              onClick={() => setPresetPeriods("afternoon")}
              className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700 text-stone-700 dark:text-slate-200 hover:bg-stone-100 cursor-pointer"
            >
              Tarde (5ª–6ª)
            </button>
            <button
              type="button"
              onClick={() => setPresetPeriods("all")}
              className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700 text-stone-700 dark:text-slate-200 hover:bg-stone-100 cursor-pointer"
            >
              Todo el día
            </button>
            {(absentTeacherIds.length > 0 || outClassrooms.length > 0) && (
              <button
                type="button"
                onClick={resetSimulation}
                className="px-2.5 py-1 rounded-lg text-[11px] font-bold bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 hover:bg-rose-100 cursor-pointer"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Tramos individuales */}
        <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-stone-200/70 dark:border-slate-800">
          {activePeriods.map((p) => {
            const active = affectedPeriods.includes(p.id);
            return (
              <button
                key={p.id}
                type="button"
                onClick={() => togglePeriod(p.id)}
                className={`px-2.5 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${
                  active
                    ? "bg-tau-soft text-tau border-tau font-extrabold"
                    : "bg-white dark:bg-slate-900 text-stone-400 border-stone-200 dark:border-slate-800"
                }`}
              >
                {p.short} ({p.time.split(" - ")[0]})
              </button>
            );
          })}
        </div>
      </div>

      {/* Configuración en 2 columnas: 1) Grupos en salida  2) Docentes ausentes */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5">
        {/* Columna 1: Cursos fuera del centro (excursiones / actividades) */}
        <div className="bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl p-3.5 space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h4 className="font-extrabold text-xs text-stone-900 dark:text-white flex items-center gap-1.5">
                <span>🚌 1. Cursos en Salida / Excursión (Opcional)</span>
              </h4>
              <p className="text-[11px] text-stone-500 dark:text-slate-400">
                Libera automáticamente a los especialistas que tenían clase con ellos
              </p>
            </div>
            {outClassrooms.length > 0 && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-300">
                {outClassrooms.length} fuera
              </span>
            )}
          </div>

          <div className="flex flex-wrap gap-1">
            {allClassrooms.map((aula) => {
              const isSelected = outClassrooms.includes(aula);
              return (
                <button
                  key={aula}
                  type="button"
                  onClick={() => toggleOutClassroom(aula)}
                  className={`px-2 py-1 rounded-lg text-[11px] font-bold border transition cursor-pointer ${
                    isSelected
                      ? "bg-amber-600 text-white border-amber-700 shadow-2xs"
                      : "bg-stone-50 dark:bg-slate-950 text-stone-700 dark:text-slate-300 border-stone-200 dark:border-slate-800 hover:border-amber-400"
                  }`}
                >
                  {formatShortAula(aula)}
                </button>
              );
            })}
          </div>

          {suggestedTutors.length > 0 && (
            <div className="pt-2 border-t border-stone-100 dark:border-slate-800 flex flex-wrap items-center gap-1.5">
              <span className="text-[10px] font-bold text-amber-800 dark:text-amber-300">
                💡 ¿Acompañan al grupo?
              </span>
              {suggestedTutors.map((tut) => (
                <button
                  key={tut.id}
                  type="button"
                  onClick={() => toggleAbsentTeacher(tut.id)}
                  className="px-2 py-0.5 rounded-lg text-[10px] font-extrabold bg-amber-50 hover:bg-amber-100 dark:bg-amber-950/40 text-amber-900 dark:text-amber-200 border border-amber-300 dark:border-amber-700 transition cursor-pointer"
                >
                  + Añadir {tut.name.split(" ").slice(0, 2).join(" ")}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Columna 2: Docentes ausentes o acompañantes */}
        <div className="bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 rounded-2xl p-3.5 space-y-2.5">
          <div className="flex items-center justify-between gap-2">
            <div>
              <h4 className="font-extrabold text-xs text-stone-900 dark:text-white">
                👤 2. Docentes Ausentes o Acompañantes
              </h4>
              <p className="text-[11px] text-stone-500 dark:text-slate-400">
                Selecciona quién falta para calcular sus huecos lectivos reales
              </p>
            </div>
            <input
              type="text"
              value={teacherQuery}
              onChange={(e) => setTeacherQuery(e.target.value)}
              placeholder="Filtrar docente..."
              className="px-2.5 py-1 rounded-xl bg-stone-50 dark:bg-slate-950 border border-stone-200 dark:border-slate-700 text-xs outline-none focus:border-stone-400 w-36 sm:w-44"
            />
          </div>

          {absentTeacherIds.length > 0 && (
            <div className="flex flex-wrap gap-1 pb-1.5 border-b border-stone-100 dark:border-slate-800">
              {absentTeacherIds.map((id) => {
                const t = teachers.find((x) => x.id === id);
                if (!t) return null;
                return (
                  <button
                    key={id}
                    type="button"
                    onClick={() => toggleAbsentTeacher(id)}
                    className="inline-flex items-center gap-1 px-2 py-0.5 rounded-lg text-[11px] font-extrabold bg-rose-600 text-white cursor-pointer"
                  >
                    <span>{t.name.split(" ").slice(0, 2).join(" ")}</span>
                    <span>✕</span>
                  </button>
                );
              })}
            </div>
          )}

          <div className="max-h-32 overflow-y-auto flex flex-wrap gap-1 pr-1">
            {filteredTeachers.map((t) => {
              const isAbs = absentTeacherIds.includes(t.id);
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => toggleAbsentTeacher(t.id)}
                  className={`px-2 py-1 rounded-lg text-[11px] font-semibold border transition cursor-pointer ${
                    isAbs
                      ? "bg-rose-50 dark:bg-rose-950/40 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-700 font-bold"
                      : "bg-stone-50 dark:bg-slate-950 text-stone-700 dark:text-slate-300 border-stone-200 dark:border-slate-800 hover:border-stone-400"
                  }`}
                >
                  {t.name.split(" ").slice(0, 2).join(" ")}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Resultado de Sustituciones */}
      {absentTeacherIds.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-stone-300 dark:border-slate-800 bg-stone-50/60 dark:bg-slate-950/40 p-6 text-center space-y-1">
          <p className="text-xs font-extrabold text-stone-700 dark:text-slate-300">
            Selecciona uno o varios docentes ausentes (y, si aplica, los cursos que salen de excursión)
          </p>
          <p className="text-[11px] text-stone-500 dark:text-slate-400">
            El motor cruzará automáticamente especialistas liberados por salidas, tramos de guardia y apoyos sin solapar profesores en la misma hora.
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2 bg-tau-soft border border-tau rounded-2xl px-4 py-2.5">
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="font-extrabold text-tau">
                Resultado · {dayNames[selectedDay]}:
              </span>
              <span className="font-bold text-stone-800 dark:text-slate-200">
                {totalResolved} de {totalUncovered} sesiones cubiertas automáticamente
              </span>
            </div>
            {totalUncovered > 0 && (
              <button
                type="button"
                onClick={handleCopySummary}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-tau text-white text-xs font-extrabold shadow-2xs transition cursor-pointer"
              >
                <IconRenderer name="Copy" className="w-3.5 h-3.5" />
                <span>Copiar cuadrante (WhatsApp / Educamos)</span>
              </button>
            )}
          </div>

          {totalUncovered === 0 ? (
            <div className="p-4 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-900 dark:text-emerald-200 font-semibold">
              ✅ Los docentes seleccionados no dejan ninguna sesión lectiva presencial sin cubrir en las franjas indicadas (o sus grupos están fuera en la salida).
            </div>
          ) : (
            <div className="space-y-2.5">
              {periodPlan.map((p) => {
                if (p.assignments.length === 0 && p.skippedOutGroupSlots.length === 0) return null;
                return (
                  <div
                    key={p.period.id}
                    className="rounded-2xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden"
                  >
                    <div className="px-3.5 py-2 bg-stone-50 dark:bg-slate-950 border-b border-stone-200 dark:border-slate-800 flex items-center justify-between gap-2">
                      <span className="text-xs font-extrabold text-stone-900 dark:text-white">
                        🕒 {p.period.label} <span className="font-mono text-[11px] text-stone-500">({p.period.time})</span>
                      </span>
                      <span className="text-[10px] font-bold text-stone-500 dark:text-slate-400">
                        {p.candidatePool.length} docentes disponibles en tramo
                      </span>
                    </div>

                    <div className="divide-y divide-stone-100 dark:divide-slate-800/80">
                      {p.assignments.map((item) => (
                        <div
                          key={item.slotKey}
                          className="p-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 text-xs"
                        >
                          <div className="flex items-center gap-2.5 flex-wrap min-w-0">
                            <span className="px-2 py-0.5 rounded-lg bg-tau text-white font-black text-[11px]">
                              {formatShortAula(item.aula)}
                            </span>
                            <span className="font-extrabold text-stone-900 dark:text-white">
                              {formatShortSubject(item.materia)}
                            </span>
                            <span className="text-[11px] text-stone-500 dark:text-slate-400">
                              (ausencia de{" "}
                              <button
                                type="button"
                                onClick={() => onSelectTeacher && onSelectTeacher(item.absentTeacher.id)}
                                className="underline hover:text-stone-800 dark:hover:text-white cursor-pointer"
                              >
                                {item.absentTeacher.name}
                              </button>
                              )
                            </span>
                          </div>

                          <div className="flex items-center gap-2 flex-wrap shrink-0">
                            {item.chosen ? (
                              <span
                                className={`px-2 py-0.5 rounded-md text-[10px] font-extrabold ${
                                  item.chosen.priority === 1
                                    ? "bg-amber-100 text-amber-900 dark:bg-amber-500/20 dark:text-amber-300"
                                    : "bg-emerald-100 text-emerald-900 dark:bg-emerald-500/20 dark:text-emerald-300"
                                }`}
                              >
                                {item.chosen.priority === 1 ? "⭐ " : "🟢 "}
                                {item.chosen.reasonTag}
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded-md text-[10px] font-extrabold bg-rose-100 text-rose-800">
                                ⚠️ Sin guardia libre
                              </span>
                            )}

                            <select
                              value={item.chosen?.teacher.id || ""}
                              onChange={(e) =>
                                setManualOverrides((prev) => ({
                                  ...prev,
                                  [item.slotKey]: e.target.value
                                }))
                              }
                              className="bg-stone-50 dark:bg-slate-950 border border-stone-300 dark:border-slate-700 rounded-xl px-2.5 py-1 text-xs font-extrabold text-stone-900 dark:text-white outline-none"
                            >
                              <option value="">— Sin asignar —</option>
                              <optgroup label="Propuestos en este tramo">
                                {item.candidates.map((c) => (
                                  <option key={c.teacher.id} value={c.teacher.id}>
                                    {c.teacher.name} · {c.reasonTag}
                                  </option>
                                ))}
                              </optgroup>
                              <optgroup label="Resto del claustro">
                                {teachers
                                  .filter(
                                    (t) =>
                                      !absentTeacherIds.includes(t.id) &&
                                      !item.candidates.some((c) => c.teacher.id === t.id)
                                  )
                                  .map((t) => (
                                    <option key={t.id} value={t.id}>
                                      {t.name} ({t.dept})
                                    </option>
                                  ))}
                              </optgroup>
                            </select>
                          </div>
                        </div>
                      ))}

                      {p.skippedOutGroupSlots.map((sk, idx) => (
                        <div
                          key={`sk-${idx}`}
                          className="px-3 py-1.5 bg-stone-50/60 dark:bg-slate-950/40 text-[11px] text-stone-500 dark:text-slate-400 italic flex items-center gap-1.5"
                        >
                          <span>🚌</span>
                          <span>
                            {formatShortAula(sk.aula)} ({formatShortSubject(sk.materia)}, {sk.absentTeacher.name.split(" ")[0]}) está en salida externa: no requiere sustitución en aula.
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SubstitutionEngineTab;
