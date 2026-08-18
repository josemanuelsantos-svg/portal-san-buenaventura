export const SCHOOL_NOTICES = [
  {
    id: 1,
    title: "Entrega de Evaluaciones - Trimestre 3",
    date: "Hoy, 09:00",
    category: "Académico",
    priority: "high",
    author: "Jefatura de Estudios",
    content: "Recuerden que el plazo para la firma de actas finales termina este viernes a las 14:00h."
  },
  {
    id: 2,
    title: "Reserva de Chromebooks para Exámenes Digitales",
    date: "Ayer, 16:30",
    category: "Tecnología",
    priority: "medium",
    author: "Coordinación TIC",
    content: "Los carros C y D estarán reservados el jueves para las pruebas globales de 4º ESO."
  },
  {
    id: 3,
    title: "Menú Especial de Comedor por Jornada Cultural",
    date: "05 Ago, 11:15",
    category: "Servicios",
    priority: "low",
    author: "Comedor Escolar",
    content: "El próximo martes se servirá un menú especial. Rogamos confirmar comensales con alergias."
  }
];

export const GENERAL_METRICS = [
  {
    id: "active_teachers",
    title: "Docentes Conectados",
    value: "48 / 52",
    change: "+4 hoy",
    status: "positive",
    icon: "UserCheck",
    color: "from-blue-500/20 to-indigo-500/20 text-indigo-400"
  },
  {
    id: "chromebook_status",
    title: "Chromebooks Disponibles",
    value: "140 / 180",
    change: "77% disponible",
    status: "neutral",
    icon: "Laptop",
    color: "from-emerald-500/20 to-teal-500/20 text-teal-400"
  },
  {
    id: "comedor_today",
    title: "Comensales Comedor Hoy",
    value: "340 alumnos",
    change: "Pase al 95%",
    status: "positive",
    icon: "Utensils",
    color: "from-amber-500/20 to-orange-500/20 text-amber-400"
  },
  {
    id: "ai_prompts",
    title: "Consultas AIudateca",
    value: "1.420 este mes",
    change: "+28% vs mes anterior",
    status: "positive",
    icon: "Sparkles",
    color: "from-purple-500/20 to-pink-500/20 text-purple-400"
  }
];
