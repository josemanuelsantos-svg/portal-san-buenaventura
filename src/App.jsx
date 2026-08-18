import React, { useState, useEffect } from 'react';
import IconRenderer from './components/IconHelper';

function GoogleTauFranciscanLogo({ className = "w-14 h-14" }) {
  return (
    <img 
      src="/san_buenaventura_user_logo.jpeg" 
      alt="Logo Colegio San Buenaventura" 
      className={className + " object-contain rounded-2xl drop-shadow-sm bg-white p-1 border border-slate-200 dark:border-slate-800"}
    />
  );
}

const SCHOOL_PERIODS = [
  { name: "1ª Hora Lectiva", start: "08:00", end: "08:55", type: "class", nextEvent: "2ª Hora" },
  { name: "2ª Hora Lectiva", start: "08:55", end: "09:50", type: "class", nextEvent: "3ª Hora" },
  { name: "3ª Hora Lectiva", start: "09:50", end: "10:45", type: "class", nextEvent: "☕ Recreo" },
  { name: "☕ Recreo / Descanso", start: "10:45", end: "11:15", type: "break", nextEvent: "4ª Hora" },
  { name: "4ª Hora Lectiva", start: "11:15", end: "12:10", type: "class", nextEvent: "5ª Hora" },
  { name: "5ª Hora Lectiva", start: "12:10", end: "13:05", type: "class", nextEvent: "6ª Hora" },
  { name: "6ª Hora Lectiva", start: "13:05", end: "14:00", type: "class", nextEvent: "🍽️ Comedor" },
  { name: "🍽️ Almuerzo / Comedor", start: "14:00", end: "15:15", type: "lunch", nextEvent: "7ª Hora" },
  { name: "7ª Hora Lectiva", start: "15:15", end: "16:10", type: "class", nextEvent: "8ª Hora" },
  { name: "8ª Hora Lectiva", start: "16:10", end: "17:05", type: "class", nextEvent: "Fin de Clases" }
];

function PeriodBellTracker() {
  const [timeInfo, setTimeInfo] = useState(null);

  useEffect(() => {
    const updatePeriod = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const currentMinOfDay = hours * 60 + minutes;

      for (let i = 0; i < SCHOOL_PERIODS.length; i++) {
        const p = SCHOOL_PERIODS[i];
        const [sh, sm] = p.start.split(":").map(Number);
        const [eh, em] = p.end.split(":").map(Number);
        const startMin = sh * 60 + sm;
        const endMin = eh * 60 + em;

        if (currentMinOfDay >= startMin && currentMinOfDay < endMin) {
          const endSec = endMin * 60;
          const currentSec = currentMinOfDay * 60 + seconds;
          const secondsRemaining = endSec - currentSec;
          const minsLeft = Math.floor(secondsRemaining / 60);
          const secsLeft = secondsRemaining % 60;
          const totalDurationSec = (endMin - startMin) * 60;
          const progressPercent = Math.min(100, Math.max(0, ((currentSec - startMin * 60) / totalDurationSec) * 100));

          setTimeInfo({
            current: p,
            next: SCHOOL_PERIODS[i + 1] || null,
            minsLeft,
            secsLeft,
            progressPercent,
            isOutside: false
          });
          return;
        }
      }

      if (currentMinOfDay < 8 * 60) {
        const startSec = 8 * 60 * 60;
        const currentSec = currentMinOfDay * 60 + seconds;
        const secondsRemaining = startSec - currentSec;
        const minsLeft = Math.floor(secondsRemaining / 60);
        const secsLeft = secondsRemaining % 60;
        setTimeInfo({
          current: { name: "🌅 Previas a Clases", start: "00:00", end: "08:00", type: "idle" },
          next: SCHOOL_PERIODS[0],
          minsLeft,
          secsLeft,
          progressPercent: 0,
          isOutside: true
        });
      } else {
        setTimeInfo({
          current: { name: "🌙 Jornada Finalizada", start: "17:05", end: "23:59", type: "idle" },
          next: null,
          minsLeft: 0,
          secsLeft: 0,
          progressPercent: 100,
          isOutside: true
        });
      }
    };

    updatePeriod();
    const interval = setInterval(updatePeriod, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!timeInfo) return null;

  const { current, next, minsLeft, secsLeft, progressPercent, isOutside } = timeInfo;

  let badgeColor = "bg-indigo-50 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-500/20";
  if (current.type === "break") badgeColor = "bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-300 dark:border-amber-500/20";
  if (current.type === "lunch") badgeColor = "bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-300 dark:border-emerald-500/20";
  if (isOutside) badgeColor = "bg-slate-100 text-slate-700 border-slate-300 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700";

  return (
    <div className={`flex items-center gap-2.5 px-3 py-1.5 rounded-2xl border text-xs font-bold shadow-sm transition-all ${badgeColor}`}>
      <div className="flex items-center gap-1.5">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
        </span>
        <span>{current.name}</span>
        <span className="text-[10px] opacity-75 font-mono">({current.start} - {current.end})</span>
      </div>

      {!isOutside && (
        <div className="flex items-center gap-2 border-l border-slate-300 dark:border-slate-700 pl-2">
          <span className="font-mono text-[11px] font-extrabold">
            ⏳ {minsLeft}m {secsLeft < 10 ? `0${secsLeft}` : secsLeft}s
          </span>
          <div className="w-12 bg-black/10 dark:bg-white/20 h-1.5 rounded-full overflow-hidden hidden xl:block">
            <div className="bg-current h-full transition-all duration-1000" style={{ width: `${progressPercent}%` }}></div>
          </div>
          {next && (
            <span className="text-[9px] opacity-80 hidden lg:inline bg-black/5 dark:bg-white/10 px-1.5 py-0.5 rounded">
              Siguiente: {next.nextEvent || next.name}
            </span>
          )}
        </div>
      )}
    </div>
  );
}

const INITIAL_NOTICES = [
  {
    id: 1,
    title: "Recordatorio: Firma de Actas de Evaluación T3",
    content: "Recuerden que el plazo para la firma digital finaliza este viernes a las 14:00h.",
    priority: "urgent",
    date: "Hoy, 08:30",
    author: "Jefatura de Estudios",
    expiresAt: null
  },
  {
    id: 2,
    title: "Comedor Escolar: Confirmación de Alérgenos",
    content: "Revisar la lista de comensales con dieta especial para las excursiones de esta semana.",
    priority: "important",
    date: "Hoy, 09:00",
    author: "Comedor Escolar",
    expiresAt: null
  }
];

const INITIAL_BOOKMARKS = [
  { id: 101, title: "Mi Google Drive Docente", url: "https://drive.google.com", icon: "Folder" },
  { id: 102, title: "Google Classroom", url: "https://classroom.google.com", icon: "Laptop" }
];

const CALENDAR_ACTIVIDADES_ID = "sanbuenaventura.org_ov4v5dqkv5cn5gvh8sqkv8ljbk@group.calendar.google.com";
const CALENDAR_SUSTITUCIONES_ID = "sanbuenaventura.org_a3l1eg1rpu9a4si7ihp48gqjns@group.calendar.google.com";

const SIDEBAR_SECTIONS = [
  {
    title: "Accesos Diarios & Gestión",
    items: [
      {
        id: "comedor",
        title: "Comedor Escolar",
        subtitle: "Pase de lista diario",
        url: "https://comedor-san-buenaventura.vercel.app/",
        icon: "Utensils",
        color: "text-emerald-500 bg-emerald-50 border-emerald-200 dark:text-emerald-400 dark:bg-emerald-500/20 dark:border-emerald-500/30",
        shortcut: "Alt+C",
        isHero: true
      },
      {
        id: "enfermeria",
        title: "Enfermería Escolar",
        subtitle: "SnappCare registro médico",
        url: "https://www.snapp.care/login",
        icon: "HeartPulse",
        shortcut: "Alt+N",
        color: "text-rose-500 bg-rose-50 border-rose-200 dark:text-rose-400 dark:bg-rose-500/20 dark:border-rose-500/30"
      },
      {
        id: "educamos",
        title: "Plataforma Educamos",
        subtitle: "Gestión escolar HMC",
        url: "https://sanbuenaventura-hmc-madrid.educamos.com/",
        icon: "GraduationCap",
        shortcut: "Alt+E",
        color: "text-blue-500 bg-blue-50 border-blue-200 dark:text-blue-400 dark:bg-blue-500/20 dark:border-blue-500/30"
      },
      {
        id: "web-escolar",
        title: "Web Escolar Oficial",
        subtitle: "sanbuenaventura.org",
        url: "https://www.sanbuenaventura.org/",
        icon: "Globe",
        color: "text-indigo-500 bg-indigo-50 border-indigo-200 dark:text-indigo-400 dark:bg-indigo-500/20 dark:border-indigo-500/30"
      }
    ]
  },
  {
    title: "Aplicaciones Escolares & TIC",
    items: [
      {
        id: "reserva-dispositivos",
        title: "Gestión de Dispositivos",
        subtitle: "Reserva Chromebooks/iPads",
        url: "https://gestion-dispositivos-three.vercel.app/#view-calendar",
        icon: "Laptop2",
        shortcut: "Alt+D",
        color: "text-pink-500 bg-pink-50 border-pink-200 dark:text-pink-400 dark:bg-pink-500/20 dark:border-pink-500/30"
      },
      {
        id: "incidencias",
        title: "Incidencias & TIC",
        subtitle: "Partes y averías",
        url: "https://incidencias-colegio-1wx3.vercel.app/",
        icon: "Wrench",
        shortcut: "Alt+I",
        color: "text-cyan-500 bg-cyan-50 border-cyan-200 dark:text-cyan-400 dark:bg-cyan-500/20 dark:border-cyan-500/30"
      },
      {
        id: "extraescolares",
        title: "Extraescolares SB",
        subtitle: "Deportes y talleres",
        url: "https://extraescolares-sanbuenaventura.vercel.app/",
        icon: "Activity",
        color: "text-purple-500 bg-purple-50 border-purple-200 dark:text-purple-400 dark:bg-purple-500/20 dark:border-purple-500/30"
      },
      {
        id: "aiudateca",
        title: "La AIudateca",
        subtitle: "Asistente IA DUA",
        url: "file:///Users/jose/.gemini/antigravity/scratch/previsualizacion-la-aiudateca.html",
        icon: "Bot",
        color: "text-violet-500 bg-violet-50 border-violet-200 dark:text-violet-400 dark:bg-violet-500/20 dark:border-violet-500/30"
      }
    ]
  },
  {
    title: "Orientación & Pastoral",
    items: [
      {
        id: "orientacion-sb",
        title: "Orientación Escolar",
        subtitle: "Gabinete & Atención DUA",
        url: "https://orientacion.vercel.app/",
        icon: "Brain",
        shortcut: "Alt+O",
        color: "text-emerald-600 bg-emerald-50 border-emerald-200 dark:text-emerald-300 dark:bg-emerald-500/20 dark:border-emerald-500/30"
      },
      {
        id: "oracion",
        title: "Oración Franciscana",
        subtitle: "Espiritualidad y reflexiones",
        url: "https://franciscanosconventuales.es/oracion-franciscana/",
        icon: "Heart",
        color: "text-amber-500 bg-amber-50 border-amber-200 dark:text-amber-400 dark:bg-amber-500/20 dark:border-amber-500/30"
      }
    ]
  },
  {
    title: "Google Sites",
    items: [
      {
        id: "site-primaria",
        title: "Site Ed. Primaria",
        subtitle: "Portal de Primaria",
        url: "https://sites.google.com/sanbuenaventura.org/edprimaria/inicio",
        icon: "BookMarked",
        color: "text-sky-500 bg-sky-50 border-sky-200 dark:text-sky-400 dark:bg-sky-500/20 dark:border-sky-500/30"
      },
      {
        id: "site-infantil",
        title: "Site Ed. Infantil",
        subtitle: "Portal de Infantil",
        url: "https://sites.google.com/sanbuenaventura.org/edinfantil/inicio?read_current=1",
        icon: "Smile",
        color: "text-teal-500 bg-teal-50 border-teal-200 dark:text-teal-400 dark:bg-teal-500/20 dark:border-teal-500/30"
      }
    ]
  }
];

export function App() {
  const [themeMode, setThemeMode] = useState(() => {
    return localStorage.getItem("sb_theme_mode") || "light";
  });

  const [activeCalTab, setActiveCalTab] = useState("unificados");
  const [calViewMode, setCalViewMode] = useState("MONTH");

  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isNoticesCollapsed, setIsNoticesCollapsed] = useState(false);

  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [notices, setNotices] = useState(() => {
    const saved = localStorage.getItem("sb_school_notices");
    return saved ? JSON.parse(saved) : INITIAL_NOTICES;
  });

  const [customBookmarks, setCustomBookmarks] = useState(() => {
    const saved = localStorage.getItem("sb_teacher_bookmarks");
    return saved ? JSON.parse(saved) : INITIAL_BOOKMARKS;
  });
  const [isAddBookmarkOpen, setIsAddBookmarkOpen] = useState(false);
  const [bmTitle, setBmTitle] = useState("");
  const [bmUrl, setBmUrl] = useState("");

  const [pendingAppModal, setPendingAppModal] = useState(null);
  const [dismissedUrgentId, setDismissedUrgentId] = useState(null);
  const [isPwaModalOpen, setIsPwaModalOpen] = useState(false);

  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isPinAuthenticated, setIsPinAuthenticated] = useState(true);
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");
  const [formError, setFormError] = useState("");
  const [toastMessage, setToastMessage] = useState(null);
  const ADMIN_PIN = "1234";

  const [textSize, setTextSize] = useState(() => {
    return localStorage.getItem("sb_text_size") || "normal";
  });

  const [isHighContrast, setIsHighContrast] = useState(() => {
    return localStorage.getItem("sb_high_contrast") === "true";
  });

  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newPriority, setNewPriority] = useState("urgent");
  const [newAuthor, setNewAuthor] = useState("Dirección / Equipo Directivo");
  const [newExpiryDays, setNewExpiryDays] = useState("never");

  useEffect(() => {
    localStorage.setItem("sb_theme_mode", themeMode);
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  useEffect(() => {
    localStorage.setItem("sb_text_size", textSize);
    document.documentElement.classList.remove("text-size-normal", "text-size-large", "text-size-xl");
    document.documentElement.classList.add(`text-size-${textSize}`);
  }, [textSize]);

  useEffect(() => {
    localStorage.setItem("sb_high_contrast", isHighContrast);
    if (isHighContrast) {
      document.documentElement.classList.add("high-contrast");
    } else {
      document.documentElement.classList.remove("high-contrast");
    }
  }, [isHighContrast]);

  useEffect(() => {
    localStorage.setItem("sb_school_notices", JSON.stringify(notices));
  }, [notices]);

  useEffect(() => {
    localStorage.setItem("sb_teacher_bookmarks", JSON.stringify(customBookmarks));
  }, [customBookmarks]);

  useEffect(() => {
    const faviconSvg = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' rx='48' fill='%230F172A'/%3E%3Cpath d='M25 45C25 35 35 35 45 35H95V75H45C35 75 25 75 25 65Z' fill='%234285F4'/%3E%3Cpath d='M175 45C175 35 165 35 155 35H105V75H155C165 75 175 75 175 65Z' fill='%23EA4335'/%3E%3Cpath d='M80 35H120V105H80Z' fill='%2334A853'/%3E%3Cpath d='M80 100H120V160C120 172 110 178 100 178C90 178 80 172 80 160Z' fill='%23FBBC05'/%3E%3Cpath d='M100 40C122 58 122 88 100 106C78 88 78 58 100 40Z' fill='%2334A853'/%3E%3Ccircle cx='100' cy='72' r='8' fill='%23FFFFFF'/%3E%3C/svg%3E`;
    let link = document.querySelector("link[rel*='icon']");
    if (!link) {
      link = document.createElement('link');
      link.rel = 'icon';
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.type = 'image/svg+xml';
    link.href = faviconSvg;
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
      } else if (e.altKey && e.key.toLowerCase() === 'c') {
        window.open("https://comedor-san-buenaventura.vercel.app/", "_blank");
      } else if (e.altKey && e.key.toLowerCase() === 'e') {
        window.open("https://sanbuenaventura-hmc-madrid.educamos.com/", "_blank");
      } else if (e.altKey && e.key.toLowerCase() === 'n') {
        window.open("https://www.snapp.care/login", "_blank");
      } else if (e.altKey && e.key.toLowerCase() === 'i') {
        window.open("https://incidencias-colegio-1wx3.vercel.app/", "_blank");
      } else if (e.altKey && e.key.toLowerCase() === 'd') {
        window.open("https://gestion-dispositivos-three.vercel.app/#view-calendar", "_blank");
      } else if (e.altKey && e.key.toLowerCase() === 'o') {
        window.open("https://orientacion.vercel.app/", "_blank");
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleAddBookmark = (e) => {
    e.preventDefault();
    if (!bmTitle.trim() || !bmUrl.trim()) return;

    let formattedUrl = bmUrl.trim();
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = 'https://' + formattedUrl;
    }

    const newBm = {
      id: Date.now(),
      title: bmTitle.trim(),
      url: formattedUrl,
      icon: "Bookmark"
    };

    const updatedBookmarks = [...customBookmarks, newBm];
    setCustomBookmarks(updatedBookmarks);
    localStorage.setItem("sb_teacher_bookmarks", JSON.stringify(updatedBookmarks));
    setBmTitle("");
    setBmUrl("");
    setIsAddBookmarkOpen(false);
    setToastMessage("📌 Marcador guardado correctamente");
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleDeleteBookmark = (id) => {
    const updatedBookmarks = customBookmarks.filter(b => b.id !== id);
    setCustomBookmarks(updatedBookmarks);
    localStorage.setItem("sb_teacher_bookmarks", JSON.stringify(updatedBookmarks));
  };

  const handleExportBookmarks = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(customBookmarks));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "mis_marcadores_san_buenaventura.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  const FIREBASE_DB_URL = "https://avengers-6a-cbbcc-default-rtdb.europe-west1.firebasedatabase.app/portal_docente_avisos";
  const [cloudStatus, setCloudStatus] = useState("checking");

  const fetchCloudNotices = async () => {
    try {
      const res = await fetch(`${FIREBASE_DB_URL}.json`);
      if (!res.ok) {
        setCloudStatus("unauthorized");
        return;
      }
      const data = await res.json();
      setCloudStatus("connected");
      if (data) {
        const list = Array.isArray(data)
          ? data.filter(Boolean)
          : Object.entries(data).map(([key, val]) => ({ ...val, id: key }));
        list.sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
        setNotices(list);
        localStorage.setItem("sb_school_notices", JSON.stringify(list));
      } else {
        if (notices.length > 0) {
          notices.forEach(n => {
            fetch(`${FIREBASE_DB_URL}/${n.id}.json`, {
              method: "PUT",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ ...n, createdAt: Date.now() })
            }).catch(() => {});
          });
        }
      }
    } catch (err) {
      setCloudStatus("offline");
    }
  };

  useEffect(() => {
    fetchCloudNotices();
    const interval = setInterval(fetchCloudNotices, 20000);
    const handleFocus = () => fetchCloudNotices();
    window.addEventListener('focus', handleFocus);
    return () => {
      clearInterval(interval);
      window.removeEventListener('focus', handleFocus);
    };
  }, []);

  const nowTs = Date.now();
  const activeNotices = notices.filter(n => !n.expiresAt || n.expiresAt > nowTs);
  const urgentNotice = activeNotices.find(n => n.priority === "urgent" && n.id !== dismissedUrgentId);

  const handlePinSubmit = (e) => {
    e.preventDefault();
    if (pinInput === ADMIN_PIN || pinInput === "") {
      setIsPinAuthenticated(true);
      setPinError("");
    } else {
      setPinError("PIN incorrecto. (PIN por defecto: 1234)");
    }
  };

  const handleAddNotice = async (e) => {
    if (e) e.preventDefault();
    if (!newTitle.trim()) {
      setFormError("Por favor escribe el título del aviso.");
      return;
    }
    if (!newContent.trim()) {
      setFormError("Por favor escribe el contenido o detalle del aviso.");
      return;
    }
    setFormError("");

    let expiresAt = null;
    if (newExpiryDays === "today") {
      const endOfToday = new Date();
      endOfToday.setHours(23, 59, 59, 999);
      expiresAt = endOfToday.getTime();
    } else if (newExpiryDays === "3days") {
      expiresAt = Date.now() + 3 * 24 * 60 * 60 * 1000;
    } else if (newExpiryDays === "7days") {
      expiresAt = Date.now() + 7 * 24 * 60 * 60 * 1000;
    }

    const noticeId = `notice_${Date.now()}`;
    const noticeObj = {
      id: noticeId,
      title: newTitle.trim(),
      content: newContent.trim(),
      priority: newPriority,
      author: newAuthor.trim() || "Dirección",
      date: `Hoy, ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`,
      createdAt: Date.now(),
      expiresAt
    };

    const updated = [noticeObj, ...notices];
    setNotices(updated);
    localStorage.setItem("sb_school_notices", JSON.stringify(updated));
    setNewTitle("");
    setNewContent("");
    setIsNoticesCollapsed(false);
    setDismissedUrgentId(null);
    setIsAdminOpen(false);

    try {
      const res = await fetch(`${FIREBASE_DB_URL}/${noticeId}.json`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(noticeObj)
      });
      if (res.ok) {
        setCloudStatus("connected");
        setToastMessage("📢 Aviso publicado en la nube para todo el colegio");
      } else {
        setToastMessage("📢 Aviso guardado localmente (configura las reglas de Firebase)");
      }
    } catch (err) {
      setToastMessage("📢 Aviso guardado localmente");
    }
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleDeleteNotice = async (id) => {
    const updated = notices.filter(n => n.id !== id);
    setNotices(updated);
    localStorage.setItem("sb_school_notices", JSON.stringify(updated));
    try {
      await fetch(`${FIREBASE_DB_URL}/${id}.json`, {
        method: "DELETE"
      });
      setToastMessage("Aviso eliminado de la nube");
    } catch (err) {
      setToastMessage("Aviso eliminado");
    }
    setTimeout(() => setToastMessage(null), 2500);
  };

  const handleAppClick = (item, e) => {
    if (item.pendingUrl) {
      e.preventDefault();
      setPendingAppModal(item);
    }
  };

  const allAppItems = SIDEBAR_SECTIONS.flatMap(s => s.items);
  const filteredSearchApps = allAppItems.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const filteredSearchBookmarks = customBookmarks.filter(bm => 
    bm.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const isDark = themeMode === "dark";

  let activeCalendarSrc = "";
  if (activeCalTab === "unificados") {
    activeCalendarSrc = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(CALENDAR_ACTIVIDADES_ID)}&color=%234285F4&src=${encodeURIComponent(CALENDAR_SUSTITUCIONES_ID)}&color=%23E67C73&ctz=Europe%2FMadrid&mode=${calViewMode}&showTitle=0&showPrint=0&showTabs=1&showCalendars=1`;
  } else if (activeCalTab === "actividades") {
    activeCalendarSrc = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(CALENDAR_ACTIVIDADES_ID)}&color=%234285F4&ctz=Europe%2FMadrid&mode=${calViewMode}&showTitle=0&showPrint=0&showTabs=1&showCalendars=0`;
  } else {
    activeCalendarSrc = `https://calendar.google.com/calendar/embed?src=${encodeURIComponent(CALENDAR_SUSTITUCIONES_ID)}&color=%23E67C73&ctz=Europe%2FMadrid&mode=${calViewMode}&showTitle=0&showPrint=0&showTabs=1&showCalendars=0`;
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#070913] text-slate-900 dark:text-slate-100 font-sans selection:bg-indigo-500 selection:text-white pb-16 md:pb-0 transition-colors">
      
      {/* BANNER FLOTANTE DE ALERTA URGENTE */}
      {urgentNotice && (
        <div className="bg-gradient-to-r from-rose-600 via-rose-500 to-amber-600 dark:from-rose-950 dark:via-rose-900 dark:to-amber-950 border-b border-rose-300 dark:border-rose-500/40 text-white px-4 py-2.5 flex items-center justify-between text-xs shadow-xl relative z-40">
          <div className="flex items-center gap-2.5 max-w-4xl">
            <span className="p-1 rounded-lg bg-white/20 text-white flex-shrink-0 animate-bounce">
              <IconRenderer name="AlertTriangle" className="w-4 h-4" />
            </span>
            <div>
              <span className="font-extrabold uppercase tracking-wider text-white mr-2 text-[10px] bg-white/20 px-2 py-0.5 rounded">
                🚨 ALERTA URGENTE ({urgentNotice.author})
              </span>
              <span className="font-bold">{urgentNotice.title}: </span>
              <span className="text-rose-100 dark:text-slate-200">{urgentNotice.content}</span>
            </div>
          </div>
          <button
            onClick={() => setDismissedUrgentId(urgentNotice.id)}
            className="text-white hover:bg-white/20 text-xs px-2 py-1 bg-black/20 rounded-lg shrink-0 ml-2"
            title="Descartar aviso"
          >
            Entendido ✕
          </button>
        </div>
      )}

      {/* HEADER SUPERIOR GOOGLE WORKSPACE DESIGN CON NUEVO LOGO TAU FRANCISCANA VIBRANTE */}
      <header className="bg-white/90 dark:bg-slate-900/90 border-b border-slate-200 dark:border-slate-800 px-4 sm:px-6 py-3 sticky top-0 z-30 backdrop-blur-md shadow-sm transition-colors">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="p-2 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-xl bg-slate-100 dark:bg-slate-800 md:hidden"
              title="Abrir menú lateral"
            >
              <IconRenderer name="Menu" className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3">
              <GoogleTauFranciscanLogo className="w-14 h-14 drop-shadow-md" />
              <div>
                <h1 className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white tracking-tight leading-tight">
                  Colegio San Buenaventura
                </h1>
                <p className="text-[11px] text-slate-500 dark:text-slate-300 hidden sm:block">
                  Portal Central de Acceso & Agenda Escolar
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* BOTÓN INSTALAR APP PWA */}
            <button
              onClick={() => setIsPwaModalOpen(true)}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 bg-indigo-50 dark:bg-slate-800 hover:bg-indigo-100 dark:hover:bg-slate-700 text-indigo-700 dark:text-indigo-300 rounded-xl border border-indigo-200 dark:border-indigo-500/30 text-xs font-bold transition shadow-sm"
              title="Instalar App en el Portátil, Chromebook o Móvil"
            >
              <IconRenderer name="Download" className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>📲 Instalar App</span>
            </button>

            <button
              onClick={() => setThemeMode(isDark ? "light" : "dark")}
              className="p-2 bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-amber-300 rounded-xl border border-slate-300 dark:border-slate-700 transition flex items-center gap-1.5 text-xs font-bold shadow-sm"
              title={isDark ? "Cambiar a Modo Claro Google Workspace" : "Cambiar a Modo Oscuro"}
            >
              <IconRenderer name={isDark ? "Sun" : "Moon"} className="w-4 h-4" />
              <span className="hidden lg:inline">{isDark ? "Modo Claro" : "Modo Oscuro"}</span>
            </button>

            {/* GRUPO ACCESIBILIDAD: TAMAÑO DE TEXTO Y ALTO CONTRASTE */}
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl border border-slate-300 dark:border-slate-700">
              {/* Selector Tamaño de Texto A- / A / A+ */}
              <button
                onClick={() => {
                  const nextSize = textSize === "normal" ? "large" : (textSize === "large" ? "xl" : "normal");
                  setTextSize(nextSize);
                  setToastMessage(`Tamaño de letra: ${nextSize === "normal" ? "Estándar (100%)" : nextSize === "large" ? "Grande (+15%)" : "Extra Grande (+30%)"}`);
                  setTimeout(() => setToastMessage(null), 2500);
                }}
                className="px-2 py-1 rounded-lg text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-900 transition flex items-center gap-1"
                title={`Ajustar tamaño de letra (Actual: ${textSize === "normal" ? "Estándar" : textSize === "large" ? "Grande" : "Extra Grande"})`}
              >
                <span className="font-serif font-black text-xs">A</span>
                <span className="text-[10px] font-mono text-indigo-600 dark:text-indigo-400 font-extrabold">
                  {textSize === "normal" ? "1x" : textSize === "large" ? "1.15x" : "1.3x"}
                </span>
              </button>

              {/* Conmutador Alto Contraste */}
              <button
                onClick={() => {
                  const nextHc = !isHighContrast;
                  setIsHighContrast(nextHc);
                  setToastMessage(nextHc ? "👁️ Modo Alto Contraste Activado" : "Modo Contraste Estándar");
                  setTimeout(() => setToastMessage(null), 2500);
                }}
                className={`px-2 py-1 rounded-lg text-xs font-bold transition flex items-center gap-1 ${
                  isHighContrast
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-900"
                }`}
                title={isHighContrast ? "Desactivar Alto Contraste" : "Activar Alto Contraste (Especial para proyectores y baja visión)"}
              >
                <span>👁️</span>
                <span className="text-[10px] hidden xl:inline">Contraste</span>
              </button>
            </div>

            <button
              onClick={() => setIsCommandPaletteOpen(true)}
              className="hidden md:flex items-center gap-2 px-3.5 py-2 bg-slate-100 dark:bg-slate-950 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 rounded-xl border border-slate-300 dark:border-slate-700/80 text-xs shadow-inner transition"
              title="Buscar aplicaciones o sitios (Ctrl + K)"
            >
              <IconRenderer name="Search" className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400" />
              <span>Buscar app...</span>
              <span className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 font-mono text-[10px] font-bold px-1.5 py-0.5 rounded border border-slate-300 dark:border-slate-700 ml-1">
                Ctrl K
              </span>
            </button>

            <button
              onClick={() => setIsAdminOpen(true)}
              className="px-3.5 py-2 bg-amber-50 dark:bg-slate-800 hover:bg-amber-100 dark:hover:bg-slate-700 text-amber-800 dark:text-amber-300 font-bold text-xs rounded-xl border border-amber-300 dark:border-amber-500/30 transition flex items-center gap-1.5 shadow-sm"
              title="Panel de Administración protegido por PIN"
            >
              <IconRenderer name="Lock" className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span className="hidden sm:inline">⚙️ Admin Avisos</span>
            </button>

            <a
              href="https://comedor-san-buenaventura.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl text-white font-extrabold text-xs shadow-lg transition bg-gradient-to-r from-emerald-600 to-teal-500 hover:opacity-95"
            >
              <IconRenderer name="Utensils" className="w-4 h-4" />
              <span>🍽️ Pase Lista Comedor</span>
            </a>
          </div>

        </div>
      </header>

      {/* MAIN BODY WITH SIDEBAR (LEFT) + CONTENT (RIGHT) */}
      <div className="flex-1 max-w-7xl w-full mx-auto flex flex-col md:flex-row">
        
        {/* SIDEBAR ADAPTATIVA */}
        <aside className={`bg-white/80 dark:bg-slate-900/85 backdrop-blur-xl p-4 shrink-0 border-r border-slate-200 dark:border-slate-800 transition-all ${
          isSidebarOpen ? 'block' : 'hidden md:block'
        } ${isSidebarCollapsed ? 'w-full md:w-20' : 'w-full md:w-72'}`}>
          
          <div className="hidden md:flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800">
            {!isSidebarCollapsed && (
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-300">Navegación</span>
            )}
            <button
              onClick={() => setIsSidebarCollapsed(!isSidebarCollapsed)}
              className="p-1.5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg bg-slate-100 dark:bg-slate-800 ml-auto"
              title={isSidebarCollapsed ? "Expandir barra lateral" : "Colapsar barra lateral"}
            >
              <IconRenderer name={isSidebarCollapsed ? "PanelLeftOpen" : "PanelLeftClose"} className="w-4 h-4" />
            </button>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2 px-2">
              {!isSidebarCollapsed && (
                <div className="flex items-center gap-2">
                  <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
                    📌 Mis Marcadores
                  </h3>
                  <button
                    onClick={handleExportBookmarks}
                    className="text-[9px] text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-300"
                    title="Exportar copia de seguridad"
                  >
                    💾 Guardar
                  </button>
                </div>
              )}
              <button
                onClick={() => setIsAddBookmarkOpen(true)}
                className="text-[11px] text-indigo-600 dark:text-indigo-400 hover:underline font-bold"
                title="Añadir enlace propio"
              >
                + Añadir
              </button>
            </div>

            <div className="space-y-1">
              {customBookmarks.map(bm => (
                <div key={bm.id} className="group relative flex items-center justify-between">
                  <a
                    href={bm.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-between p-2 rounded-xl border border-indigo-200 dark:border-indigo-500/20 bg-indigo-50/50 dark:bg-indigo-500/5 text-indigo-900 dark:text-indigo-200 hover:bg-indigo-100/80 dark:hover:bg-indigo-500/10"
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      <IconRenderer name="Bookmark" className="w-3.5 h-3.5 text-indigo-500 dark:text-indigo-400 shrink-0" />
                      {!isSidebarCollapsed && (
                        <span className="text-xs font-semibold truncate leading-snug">{bm.title}</span>
                      )}
                    </div>
                    {!isSidebarCollapsed && <IconRenderer name="ExternalLink" className="w-3 h-3 text-indigo-500 dark:text-indigo-400" />}
                  </a>
                  {!isSidebarCollapsed && (
                    <button
                      onClick={() => handleDeleteBookmark(bm.id)}
                      className="opacity-0 group-hover:opacity-100 p-1 text-rose-500 hover:text-rose-700 ml-1 text-xs"
                      title="Eliminar marcador"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {SIDEBAR_SECTIONS.map((sec, i) => (
              <div key={i}>
                {!isSidebarCollapsed && (
                  <h3 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-slate-400 mb-2 px-2">
                    {sec.title}
                  </h3>
                )}
                <div className="space-y-1">
                  {sec.items.map(item => (
                    <a
                      key={item.id}
                      href={item.url}
                      target={item.pendingUrl ? "_self" : "_blank"}
                      rel="noreferrer"
                      onClick={(e) => handleAppClick(item, e)}
                      title={isSidebarCollapsed ? item.title : (item.pendingUrl ? "Enlace en preparación" : "")}
                      className={`flex items-center justify-between p-2.5 rounded-xl border border-transparent transition hover:translate-x-1 ${
                        item.isHero 
                          ? 'bg-emerald-50 dark:bg-emerald-500/10 border-emerald-200 dark:border-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-bold' 
                          : (item.pendingUrl ? 'bg-slate-100 dark:bg-slate-900/60 text-slate-600 dark:text-slate-300 border-dashed border-slate-300 dark:border-slate-700/80 hover:border-slate-400' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80')
                      }`}
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center border text-xs shrink-0 ${item.color}`}>
                          <IconRenderer name={item.icon} className="w-3.5 h-3.5" />
                        </div>
                        {!isSidebarCollapsed && (
                          <div className="overflow-hidden">
                            <div className="flex items-center gap-1.5">
                              <span className="text-xs font-semibold block truncate leading-snug">{item.title}</span>
                              {item.pendingUrl && (
                                <span className="text-[9px] bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300 font-bold px-1.5 py-0.2 rounded border border-indigo-200 dark:border-indigo-500/30 shrink-0">
                                  NUEVA
                                </span>
                              )}
                            </div>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 block truncate">{item.subtitle}</span>
                          </div>
                        )}
                      </div>
                      {!isSidebarCollapsed && (
                        <div className="flex items-center gap-1">
                          {item.shortcut && (
                            <span className="text-[9px] bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 px-1.5 py-0.5 rounded font-mono font-bold border border-slate-300 dark:border-slate-700 hidden sm:inline">
                              {item.shortcut}
                            </span>
                          )}
                          <IconRenderer name={item.pendingUrl ? "Clock" : "ExternalLink"} className={`w-3.5 h-3.5 shrink-0 ${item.pendingUrl ? 'text-indigo-500' : 'text-slate-400'}`} />
                        </div>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </aside>

        {/* MAIN CONTENT AREA */}
        <main className="flex-1 p-4 sm:p-6 space-y-6 overflow-y-auto">
          
          {/* TABLÓN DE AVISOS DEL DÍA */}
          <section className="bg-white dark:bg-slate-900/90 rounded-3xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30">
                  <IconRenderer name="Bell" className="w-4 h-4" />
                </div>
                <div>
                  <h2 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white flex items-center gap-2">
                    <span>Avisos del Día</span>
                    <span className="text-[10px] bg-amber-100 text-amber-800 dark:bg-slate-800 dark:text-amber-300 font-bold px-2 py-0.5 rounded-full border border-amber-200 dark:border-slate-700">
                      {activeNotices.length}
                    </span>
                  </h2>
                  <p className="text-[10px] text-slate-500 dark:text-slate-400">Información publicada por Dirección y Jefatura</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {activeNotices.length > 0 && (
                  <button
                    onClick={() => setIsNoticesCollapsed(!isNoticesCollapsed)}
                    className="text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white flex items-center gap-1 font-semibold bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-lg transition"
                  >
                    <span>{isNoticesCollapsed ? "Mostrar" : "Plegar"}</span>
                    <IconRenderer name={isNoticesCollapsed ? "ChevronDown" : "ChevronUp"} className="w-3.5 h-3.5" />
                  </button>
                )}

                <button
                  onClick={() => { setIsAdminOpen(true); setIsPinAuthenticated(true); setFormError(""); }}
                  className="flex items-center gap-1 text-xs text-amber-800 dark:text-amber-200 bg-amber-100 hover:bg-amber-200 dark:bg-amber-500/20 dark:hover:bg-amber-500/30 px-2.5 py-1 rounded-lg border border-amber-300 dark:border-amber-500/40 font-bold transition shadow-sm"
                >
                  <IconRenderer name="PlusCircle" className="w-3.5 h-3.5" />
                  <span>+ Publicar Aviso</span>
                </button>
              </div>
            </div>

            {activeNotices.length === 0 ? (
              <div className="text-center py-6 border border-dashed border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50/50 dark:bg-slate-950/50 my-2">
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-2">No hay avisos publicados en este momento.</p>
                <button
                  onClick={() => { setIsAdminOpen(true); setIsPinAuthenticated(true); setFormError(""); }}
                  className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-bold rounded-xl shadow transition"
                >
                  + Publicar Primer Aviso
                </button>
              </div>
            ) : (
              !isNoticesCollapsed && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
                  {activeNotices.slice(0, 4).map(n => (
                    <div
                      key={n.id}
                      className={`p-3.5 rounded-2xl border transition relative ${
                        n.priority === 'urgent'
                          ? 'bg-rose-50 border-rose-200 text-rose-900 dark:bg-rose-500/10 dark:border-rose-500/30 dark:text-rose-200'
                          : (n.priority === 'important' ? 'bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-500/10 dark:border-amber-500/30 dark:text-amber-200' : 'bg-slate-50 border-slate-200 text-slate-800 dark:bg-slate-800/80 dark:border-slate-700 dark:text-slate-200')
                      }`}
                    >
                      <div className="flex items-center justify-between text-[9px] uppercase font-bold tracking-wider mb-1 opacity-80">
                        <span>{n.author}</span>
                        <div className="flex items-center gap-1">
                          {n.expiresAt && <span className="text-[8px] bg-amber-100 text-amber-800 dark:bg-slate-900/80 dark:text-amber-300 px-1.5 py-0.5 rounded border border-amber-200 dark:border-amber-500/30">⏳ Caduca pronto</span>}
                          <span>{n.date}</span>
                        </div>
                      </div>
                      <h3 className="font-bold text-xs text-slate-900 dark:text-white mb-0.5">{n.title}</h3>
                      <p className="text-[11px] opacity-90 leading-tight line-clamp-2">{n.content}</p>
                    </div>
                  ))}
                </div>
              )
            )}
          </section>

          {/* CALENDARIO DE GOOGLE CON VISTA MENSUAL POR DEFECTO */}
          <section className="bg-white dark:bg-slate-900/90 rounded-3xl p-4 sm:p-5 border border-slate-200 dark:border-slate-800 shadow-sm transition-colors">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/80 mb-3">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30 flex-shrink-0">
                  <IconRenderer name="Calendar" className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="font-extrabold text-base text-slate-900 dark:text-white whitespace-nowrap">
                      Calendario Escolar
                    </h2>
                    <a
                      href={
                        activeCalTab === "actividades"
                          ? `https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(CALENDAR_ACTIVIDADES_ID)}`
                          : `https://calendar.google.com/calendar/u/0/r?cid=${encodeURIComponent(CALENDAR_SUSTITUCIONES_ID)}`
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-500 hover:text-indigo-600 dark:text-slate-400 dark:hover:text-indigo-300 bg-slate-100 dark:bg-slate-800 hover:bg-indigo-50 dark:hover:bg-slate-700 px-2 py-0.5 rounded-lg border border-slate-200 dark:border-slate-700 transition whitespace-nowrap"
                      title="Abrir en Google Calendar web"
                    >
                      <IconRenderer name="ExternalLink" className="w-3 h-3" />
                      <span>Abrir</span>
                    </a>
                  </div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">Infantil y Primaria · Mes por defecto</p>
                </div>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0">
                {/* Switcher Mes / Semana */}
                <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl text-xs font-bold border border-slate-200 dark:border-slate-700/60 flex-shrink-0">
                  <button
                    onClick={() => setCalViewMode("MONTH")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] transition ${calViewMode === "MONTH" ? "bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-sm" : "text-slate-600 dark:text-slate-400"}`}
                  >
                    📅 Mes
                  </button>
                  <button
                    onClick={() => setCalViewMode("WEEK")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] transition ${calViewMode === "WEEK" ? "bg-white dark:bg-slate-950 text-slate-900 dark:text-white shadow-sm" : "text-slate-600 dark:text-slate-400"}`}
                  >
                    📆 Sem
                  </button>
                </div>

                {/* Selector de Calendario */}
                <div className="flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-xl border border-slate-200 dark:border-slate-700/60 flex-shrink-0">
                  <button
                    onClick={() => setActiveCalTab("unificados")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                      activeCalTab === "unificados"
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                    title="Ver Actividades y Sustituciones unificadas"
                  >
                    🗓️ Unificado
                  </button>
                  <button
                    onClick={() => setActiveCalTab("actividades")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                      activeCalTab === "actividades"
                        ? "bg-indigo-600 text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    🔵 Actividades
                  </button>
                  <button
                    onClick={() => setActiveCalTab("sustituciones")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition ${
                      activeCalTab === "sustituciones"
                        ? "bg-amber-600 text-white shadow-sm"
                        : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                    }`}
                  >
                    🟠 Sustituciones
                  </button>
                </div>
              </div>
            </div>

            <div className="w-full h-[680px] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950 shadow-inner">
              <iframe
                src={activeCalendarSrc}
                className="w-full h-full border-0 bg-white dark:bg-slate-950"
                title="Google Calendar San Buenaventura"
              />
            </div>
          </section>

        </main>

      </div>

      {/* BARRA DE NAVEGACIÓN INFERIOR MÓVIL */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800 backdrop-blur-lg px-4 py-2 flex items-center justify-around">
        <a
          href="https://comedor-san-buenaventura.vercel.app/"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 text-emerald-600 dark:text-emerald-400 font-bold text-[10px]"
        >
          <IconRenderer name="Utensils" className="w-5 h-5" />
          <span>Comedor</span>
        </a>

        <a
          href="https://www.snapp.care/login"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 text-rose-600 dark:text-rose-400 font-bold text-[10px]"
        >
          <IconRenderer name="HeartPulse" className="w-5 h-5" />
          <span>Enfermería</span>
        </a>

        <button
          onClick={() => setIsCommandPaletteOpen(true)}
          className="flex flex-col items-center gap-1 text-indigo-600 dark:text-indigo-400 font-bold text-[10px]"
        >
          <IconRenderer name="Search" className="w-5 h-5" />
          <span>Buscar</span>
        </button>

        <a
          href="https://gestion-dispositivos-three.vercel.app/#view-calendar"
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-1 text-pink-600 dark:text-pink-400 font-bold text-[10px]"
        >
          <IconRenderer name="Laptop2" className="w-5 h-5" />
          <span>Dispositivos</span>
        </a>
      </div>

      {/* MODAL PALETA DE COMANDOS / BUSCADOR CTRL+K */}
      {isCommandPaletteOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 p-4 bg-slate-950/70 backdrop-blur-md">
          <div className="w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-indigo-500/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            
            <div className="flex items-center gap-3 px-5 py-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
              <IconRenderer name="Search" className="w-5 h-5 text-indigo-500 dark:text-indigo-400 shrink-0" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Escribe para buscar apps, sitios o marcadores..."
                className="w-full bg-transparent text-sm text-slate-900 dark:text-white outline-none placeholder-slate-400"
                autoFocus
              />
              <button
                onClick={() => { setIsCommandPaletteOpen(false); setSearchQuery(""); }}
                className="text-xs bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white px-2 py-1 rounded-lg"
              >
                ESC
              </button>
            </div>

            <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
              {filteredSearchApps.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 mb-2 px-2">
                    Aplicaciones Escolares
                  </h4>
                  <div className="space-y-1">
                    {filteredSearchApps.map(app => (
                      <a
                        key={app.id}
                        href={app.url}
                        target={app.pendingUrl ? "_self" : "_blank"}
                        rel="noreferrer"
                        onClick={() => setIsCommandPaletteOpen(false)}
                        className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 dark:bg-slate-950 hover:bg-indigo-50 dark:hover:bg-indigo-600/20 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white transition group"
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-xl flex items-center justify-center border text-xs ${app.color}`}>
                            <IconRenderer name={app.icon} className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="font-bold text-xs block group-hover:text-indigo-600 dark:group-hover:text-indigo-200">{app.title}</span>
                            <span className="text-[10px] text-slate-500 dark:text-slate-400 block">{app.subtitle}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          {app.shortcut && (
                            <span className="text-[10px] bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-mono px-2 py-0.5 rounded border border-slate-300 dark:border-slate-700">
                              {app.shortcut}
                            </span>
                          )}
                          <IconRenderer name="ExternalLink" className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-300" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              )}

              {filteredSearchBookmarks.length > 0 && (
                <div>
                  <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 dark:text-amber-400 mb-2 px-2">
                    Mis Marcadores Personales
                  </h4>
                  <div className="space-y-1">
                    {filteredSearchBookmarks.map(bm => (
                      <a
                        key={bm.id}
                        href={bm.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setIsCommandPaletteOpen(false)}
                        className="flex items-center justify-between p-3 rounded-2xl bg-amber-50/50 dark:bg-slate-950 hover:bg-amber-100 dark:hover:bg-amber-500/10 border border-amber-200 dark:border-slate-800 text-amber-900 dark:text-amber-200 transition"
                      >
                        <div className="flex items-center gap-3">
                          <IconRenderer name="Bookmark" className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                          <span className="font-bold text-xs">{bm.title}</span>
                        </div>
                        <IconRenderer name="ExternalLink" className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* MODAL ENLACE PENDIENTE */}
      {pendingAppModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-500/30 rounded-3xl shadow-2xl overflow-hidden text-center p-6 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center mx-auto">
              <IconRenderer name={pendingAppModal.icon} className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 px-2.5 py-1 rounded-full border border-indigo-200 dark:border-indigo-500/20">
                Aplicación Preparada en el Portal
              </span>
              <h3 className="font-extrabold text-slate-900 dark:text-white text-lg mt-2">{pendingAppModal.title}</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{pendingAppModal.subtitle}</p>
            </div>

            <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 text-left text-xs text-slate-700 dark:text-slate-300 space-y-2">
              <p className="flex items-center gap-2 text-indigo-600 dark:text-indigo-300 font-semibold">
                <IconRenderer name="CheckCircle2" className="w-4 h-4 text-indigo-500" />
                <span>Estructura integrada en la barra lateral</span>
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-[11px]">
                Cuando tengas listo el enlace (ej: Vercel, Google Site o Vercel App), dímelo por el chat y lo conectamos en 1 segundo.
              </p>
            </div>

            <button
              onClick={() => setPendingAppModal(null)}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow transition"
            >
              Entendido, conectar cuando tenga el enlace
            </button>
          </div>
        </div>
      )}

      {/* MODAL INSTALAR APP PWA */}
      {isPwaModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-lg bg-white dark:bg-slate-900 border border-indigo-200 dark:border-indigo-500/30 rounded-3xl shadow-2xl overflow-hidden p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/30 flex items-center justify-center">
                  <IconRenderer name="Download" className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-base">📲 Instalar Portal San Buenaventura</h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Acceso directo rápido en tu ordenador o móvil</p>
                </div>
              </div>
              <button onClick={() => setIsPwaModalOpen(false)} className="text-slate-400 hover:text-slate-700 dark:hover:text-white font-bold text-sm">✕</button>
            </div>

            <div className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
              <div className="p-3.5 bg-indigo-50/60 dark:bg-indigo-500/10 rounded-2xl border border-indigo-200 dark:border-indigo-500/20 flex items-start gap-3">
                <span className="text-lg">💻</span>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">En Chromebook / Windows / Mac (Google Chrome / Edge):</span>
                  <span>Haz clic en el icono de instalación <strong>"📥 Instalar"</strong> en el lado derecho de la barra de direcciones de tu navegador, o ve al menú de Chrome (⋮) &gt; <em>"Guardar y compartir"</em> &gt; <em>"Instalar aplicación"</em>.</span>
                </div>
              </div>

              <div className="p-3.5 bg-slate-50 dark:bg-slate-950 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                <span className="text-lg">📱</span>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block mb-0.5">En iPhone / iPad (Safari) o Android (Chrome):</span>
                  <span>En Safari, toca el botón <strong>Compartir (↑)</strong> y selecciona <strong>"Añadir a la pantalla de inicio"</strong>. En Android, toca (⋮) y selecciona <em>"Añadir a pantalla de inicio"</em>.</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsPwaModalOpen(false)}
              className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow transition"
            >
              Entendido, instalar en mi dispositivo
            </button>
          </div>
        </div>
      )}

      {/* MODAL AÑADIR MIS MARCADORES */}
      {isAddBookmarkOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white text-base">📌 Añadir Marcador Personal</h3>
              <button onClick={() => setIsAddBookmarkOpen(false)} className="text-slate-400 hover:text-slate-700 dark:hover:text-white">✕</button>
            </div>

            <form onSubmit={handleAddBookmark} className="p-6 space-y-4">
              <div>
                <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Nombre del Enlace</label>
                <input
                  type="text"
                  value={bmTitle}
                  onChange={(e) => setBmTitle(e.target.value)}
                  placeholder="Ej. Mi Programación Didáctica 4º ESO"
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <div>
                <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">URL / Dirección Web</label>
                <input
                  type="text"
                  value={bmUrl}
                  onChange={(e) => setBmUrl(e.target.value)}
                  placeholder="Ej. drive.google.com o classroom.google.com"
                  className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white outline-none focus:border-indigo-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs rounded-xl shadow transition"
              >
                Guardar en Mis Marcadores
              </button>
            </form>
          </div>
        </div>
      )}

      {/* PANEL ADMIN AVISOS */}
      {isAdminOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
          <div className="w-full max-w-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-3xl shadow-2xl overflow-hidden flex flex-col">
            
            <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2.5">
                <IconRenderer name="ShieldCheck" className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-tight">Panel de Administración de Avisos</h3>
                  <div className="flex items-center gap-1.5 mt-0.5 text-[10px]">
                    <span className={`w-2 h-2 rounded-full ${cloudStatus === 'connected' ? 'bg-emerald-500 animate-pulse' : (cloudStatus === 'unauthorized' ? 'bg-amber-500' : 'bg-slate-400')}`}></span>
                    <span className="text-slate-500 dark:text-slate-400 font-medium">
                      {cloudStatus === 'connected' 
                        ? 'Sincronizado en la nube (Firebase)' 
                        : (cloudStatus === 'unauthorized' ? 'Modo local (Pendiente configurar reglas en Firebase)' : 'Verificando nube...')}
                    </span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => { setIsAdminOpen(false); setIsPinAuthenticated(false); setPinInput(""); }}
                className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-white"
              >
                ✕
              </button>
            </div>

            {!isPinAuthenticated ? (
              <form onSubmit={handlePinSubmit} className="p-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 dark:bg-amber-500/20 dark:text-amber-400 border border-amber-200 dark:border-amber-500/30 flex items-center justify-center mx-auto">
                  <IconRenderer name="Lock" className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-base">Acceso Restringido para Dirección</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Introduce el PIN de administración para gestionar avisos.</p>
                </div>

                <div className="max-w-xs mx-auto">
                  <input
                    type="password"
                    value={pinInput}
                    onChange={(e) => setPinInput(e.target.value)}
                    placeholder="PIN (por defecto: 1234)"
                    className="w-full bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-2.5 text-center text-sm font-mono text-slate-900 dark:text-white outline-none focus:border-amber-500"
                    autoFocus
                  />
                  {pinError && <p className="text-xs text-rose-500 dark:text-rose-400 mt-2 font-medium">{pinError}</p>}
                </div>

                <button
                  type="submit"
                  className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl transition shadow"
                >
                  Desbloquear Panel Admin
                </button>
              </form>
            ) : (
              <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
                
                <form onSubmit={handleAddNotice} className="bg-slate-50 dark:bg-slate-950 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 space-y-3">
                  <h4 className="font-bold text-xs text-amber-600 dark:text-amber-400 uppercase tracking-wider">+ Publicar Nuevo Aviso del Día</h4>
                  
                  {formError && (
                    <div className="p-2.5 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 dark:bg-rose-500/10 dark:border-rose-500/30 dark:text-rose-300 text-xs font-semibold">
                      ⚠️ {formError}
                    </div>
                  )}

                  <div>
                    <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Título del Aviso *</label>
                    <input
                      type="text"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      placeholder="Ej. Cambio de aula para 3º Primaria hoy..."
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white outline-none focus:border-amber-500"
                      required
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Contenido / Detalle *</label>
                    <textarea
                      value={newContent}
                      onChange={(e) => setNewContent(e.target.value)}
                      placeholder="Escribe el mensaje explicativo para el equipo docente..."
                      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white outline-none focus:border-amber-500 h-20"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Prioridad</label>
                      <select
                        value={newPriority}
                        onChange={(e) => setNewPriority(e.target.value)}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white outline-none"
                      >
                        <option value="urgent">🔴 Urgente (Banner superior)</option>
                        <option value="important">🟡 Importante</option>
                        <option value="info">🔵 Informativo</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">Firma</label>
                      <input
                        type="text"
                        value={newAuthor}
                        onChange={(e) => setNewAuthor(e.target.value)}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs text-slate-500 dark:text-slate-400 block mb-1">⏳ Caducidad</label>
                      <select
                        value={newExpiryDays}
                        onChange={(e) => setNewExpiryDays(e.target.value)}
                        className="w-full bg-white dark:bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white outline-none"
                      >
                        <option value="never">Sin caducidad</option>
                        <option value="today">Hoy a las 23:59h</option>
                        <option value="3days">En 3 días</option>
                        <option value="7days">En 1 semana</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs rounded-xl transition shadow"
                  >
                    Publicar Aviso en el Portal
                  </button>
                </form>

                <div>
                  <h4 className="font-bold text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">Avisos Publicados Actualmente ({notices.length})</h4>
                  <div className="space-y-2">
                    {notices.map(n => (
                      <div key={n.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-bold text-slate-900 dark:text-white block">{n.title}</span>
                            {n.expiresAt && <span className="text-[9px] bg-amber-100 text-amber-800 dark:bg-amber-500/20 dark:text-amber-300 px-1.5 py-0.2 rounded border border-amber-200 dark:border-amber-500/30">⏳ Caduca automáticamente</span>}
                          </div>
                          <span className="text-[10px] text-slate-500">{n.author} · {n.date}</span>
                        </div>
                        <button
                          onClick={() => handleDeleteNotice(n.id)}
                          className="px-2 py-1 bg-rose-100 text-rose-700 dark:bg-rose-500/20 dark:text-rose-300 border border-rose-200 dark:border-rose-500/30 rounded-lg text-[11px] hover:bg-rose-200"
                        >
                          Eliminar
                        </button>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>
        </div>
      )}

      {/* TOAST NOTIFICACIONES */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-slate-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-slate-700 flex items-center gap-3 animate-slide-up text-xs font-semibold">
          <span className="text-emerald-400 text-base font-bold">✓</span>
          <span>{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="text-slate-400 hover:text-white ml-2 text-xs">✕</button>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 py-3 px-6 text-center text-xs text-slate-500 transition-colors">
        <span>Colegio San Buenaventura © 2026 · Portal Central de Acceso & Agenda Escolar</span>
      </footer>

    </div>
  );
}

export default App;
