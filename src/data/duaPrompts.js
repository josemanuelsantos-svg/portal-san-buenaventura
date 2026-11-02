// Base de datos de prompts pedagógicos DUA y adaptaciones curriculares San Buenaventura

export const DUA_CATEGORIES = [
  { id: "all", label: "✨ Todos", icon: "Sparkles" },
  { id: "adaptacion", label: "🧩 Adaptación & DUA", icon: "Sliders" },
  { id: "evaluacion", label: "📊 Rúbricas & Criterios", icon: "CheckSquare" },
  { id: "actividades", label: "💡 Actividades & Dinámicas", icon: "Lightbulb" },
  { id: "comunicacion", label: "💬 Mensajes & Familias", icon: "Mail" },
  { id: "situaciones", label: "🎯 Sit. de Aprendizaje", icon: "Target" }
];

export const DUA_PROMPTS = [
  {
    id: "dua-multinivel",
    category: "adaptacion",
    title: "Tarea Multinivel en 3 Niveles (Acceso, Medio y Reto)",
    stage: "Primaria",
    description: "Genera actividades adaptadas simultáneamente para alumnos con desfase curricular, nivel ordinario y altas capacidades.",
    template: `Actúa como especialista en Diseño Universal para el Aprendizaje (DUA) en Educación Primaria.
Quiero que diseñes una propuesta de tarea sobre el contenido: "[CONTENIDO_O_TEMA]" para [CURSO_GRUPO].

Estructura la tarea en 3 niveles de logro para atender a toda la diversidad del aula:
1. Nivel Semilla (Acceso / Soporte DUA): Enunciado directo, apoyos visuales/iconográficos sugeridos, vocabulario sencillo y estructura paso a paso.
2. Nivel Tronco (Nivel Ordinario): Competencia curricular esperada para el curso, aplicación práctica y resolución guiada.
3. Nivel Copa (Profundización / Reto): Pregunta de pensamiento crítico, conexión interdisciplinar o reto de creatividad sin aumentar volumen de trabajo mecánico.

Proporciona también una breve pauta de evaluación formativa en 2 líneas.`,
    variables: [
      { key: "[CONTENIDO_O_TEMA]", label: "Tema o contenido", placeholder: "Ej. Las fracciones y su representación gráfica" },
      { key: "[CURSO_GRUPO]", label: "Curso / Grupo", placeholder: "Ej. 4.º de Primaria" }
    ]
  },
  {
    id: "dua-lectura-facil",
    category: "adaptacion",
    title: "Adaptación de Texto a Lectura Fácil y Comprensión",
    stage: "Infantil / Primaria",
    description: "Reescribe un texto explicativo haciéndolo accesible para alumnos con TEA, TDAH, dificultades lectoras o de comprensión.",
    template: `Actúa como especialista en inclusión educativa y adaptación de textos escolares para el Colegio San Buenaventura.
Adapta el siguiente texto escolar aplicando las pautas europeas de Lectura Fácil y principios DUA para alumnos de [CURSO_GRUPO]:

TEXTO ORIGINAL:
"""
[TEXTO_ORIGINAL]
"""

Pautas de adaptación requeridas:
1. Frases cortas (sujeto + verbo + predicado), sin oraciones subordinadas complejas.
2. Glosario previo con 3 palabras clave definidas con ejemplos cotidianos.
3. Preguntas de comprensión intercaladas (verdadero/falso o de opción múltiple) para comprobar lectura.
4. Sugerencia de apoyos visuales o pictogramas recomendados para acompañar el texto.`,
    variables: [
      { key: "[CURSO_GRUPO]", label: "Curso", placeholder: "Ej. 3.º de Primaria" },
      { key: "[TEXTO_ORIGINAL]", label: "Pega el texto original", placeholder: "Pega aquí el párrafo o explicación del libro de texto..." }
    ]
  },
  {
    id: "rubrica-loe",
    category: "evaluacion",
    title: "Rúbrica Competencial LOMLOE en 4 Niveles",
    stage: "Primaria",
    description: "Crea una rúbrica lista para usar con descriptores cualitativos claros (Insuficiente, Suficiente, Notable, Sobresaliente).",
    template: `Actúa como docente experto en evaluación formativa LOMLOE en la Comunidad de Madrid.
Diseña una rúbrica analítica en tabla para evaluar la siguiente tarea o proyecto:
- Tarea / Producto: [PRODUCTO_A_EVALUAR]
- Asignatura y Curso: [ASIGNATURA_CURSO]
- Criterios clave a observar: [CRITERIOS]

Formato de salida:
Tabla Markdown con 4 niveles de desempeño:
• Insuficiente (1-4)
• Suficiente / Bien (5-6)
• Notable (7-8)
• Sobresaliente (9-10)

Usa un lenguaje constructivo, enfocado en lo que el alumno sí demuestra y con descriptores observables y medibles.`,
    variables: [
      { key: "[PRODUCTO_A_EVALUAR]", label: "Producto o proyecto", placeholder: "Ej. Exposición oral sobre los ecosistemas con soporte digital" },
      { key: "[ASIGNATURA_CURSO]", label: "Asignatura y Curso", placeholder: "Ej. Ciencias de la Naturaleza - 5.º EP" },
      { key: "[CRITERIOS]", label: "Criterios clave", placeholder: "Ej. Claridad oral, rigor científico, uso de vocabulario y cooperación" }
    ]
  },
  {
    id: "dinamica-inicio",
    category: "actividades",
    title: "Dinámica de 5 Minutos (Calma o Activación)",
    stage: "Infantil y Primaria",
    description: "Propuestas de inicio de clase para captar la atención, activar conocimientos previos o serenar al grupo tras el recreo.",
    template: `Actúa como maestro creativo y especialista en neuroeducación del Colegio San Buenaventura.
Necesito 3 opciones de dinámicas rápidas de [DURACION] minutos para [CURSO_GRUPO] al inicio de la sesión de [ASIGNATURA].
Objetivo del momento: [OBJETIVO] (ej. bajar pulsaciones tras el recreo, romper el hielo, activar curiosidad).

Para cada dinámica incluye:
- Nombre atractivo
- Material necesario (preferiblemente ninguno o pizarra)
- Instrucciones en 3 pasos sencillos
- Frase de cierre para enlazar con la explicación del tema.`,
    variables: [
      { key: "[CURSO_GRUPO]", label: "Curso", placeholder: "Ej. 2.º de Primaria" },
      { key: "[ASIGNATURA]", label: "Asignatura", placeholder: "Ej. Lengua Castellana" },
      { key: "[DURACION]", label: "Minutos", placeholder: "5" },
      { key: "[OBJETIVO]", label: "Objetivo", placeholder: "Serenar y focalizar atención después del patio" }
    ]
  },
  {
    id: "comunicacion-familias",
    category: "comunicacion",
    title: "Mensaje Asertivo y Empático para Educamos",
    stage: "Infantil / Primaria",
    description: "Redacta un comunicado claro, amable y profesional para las familias ante una situación académica o de conducta.",
    template: `Actúa como tutor experimentado del Colegio San Buenaventura, con un tono cercano, franciscanamente empático, profesional y asertivo.
Ayúdame a redactar un mensaje para enviar por Educamos a la familia de un alumno de [CURSO_GRUPO].

Motivo del mensaje:
[MOTIVO]

Requisitos:
1. Comienza destacando un aspecto positivo o una fortaleza del alumno.
2. Explica la situación observada de forma objetiva, sin emitir juicios ni etiquetas.
3. Propón una pauta concreta de colaboración entre colegio y familia.
4. Cierra ofreciendo disponibilidad para tutoría con tono cordial y constructivo.`,
    variables: [
      { key: "[CURSO_GRUPO]", label: "Curso / Grupo", placeholder: "Ej. 4.º EP-B" },
      { key: "[MOTIVO]", label: "Motivo del mensaje", placeholder: "Ej. Olvido reiterado del material de clase y distracción en las sesiones de matemáticas" }
    ]
  },
  {
    id: "situacion-aprendizaje",
    category: "situaciones",
    title: "Situación de Aprendizaje LOMLOE Exprés",
    stage: "Primaria",
    description: "Diseña un reto competencial contextualizado con conexión con el entorno, fases y producto final evaluable.",
    template: `Actúa como asesor pedagógico experto en LOMLOE y diseño curricular para centros concertados de Madrid.
Diseña un esquema de Situación de Aprendizaje para [CURSO_GRUPO] en el área de [ASIGNATURA].
Centro de interés / Reto: [RETO_O_TEMA]

El esquema debe contener:
1. Título motivador y pregunta-reto disparadora.
2. Contexto significativo (vida cotidiana del alumno o colegio).
3. Conexión curricular: 2 Competencias Específicas y Saberes Básicos implicados.
4. Secuencia didáctica en 3 fases: Motivación/Exploración, Desarrollo/Aplicación y Comunicación/Reflexión.
5. Producto final tangible y medidas de atención a la diversidad (DUA).`,
    variables: [
      { key: "[CURSO_GRUPO]", label: "Curso", placeholder: "Ej. 6.º de Primaria" },
      { key: "[ASIGNATURA]", label: "Asignatura", placeholder: "Ej. Ciencias Sociales" },
      { key: "[RETO_O_TEMA]", label: "Tema o reto", placeholder: "Ej. ¿Cómo reducir el desperdicio de plástico en los almuerzos del colegio?" }
    ]
  }
];
