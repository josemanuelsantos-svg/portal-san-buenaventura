// Base de datos oficial de horarios y profesorado (Primaria - Colegio San Buenaventura)
export const SCHOOL_TEACHERS = [
  {
    "id": "bleo0",
    "name": "Beatriz de León Ruiz",
    "dept": "Tutoría / General",
    "email": "beadeleon@sanbuenaventura.org"
  },
  {
    "id": "cduerto",
    "name": "Cristina Duerto",
    "dept": "Primaria",
    "email": "cristinaduerto@sanbuenaventura.org"
  },
  {
    "id": "dasenjo",
    "name": "Daniel Asenjo García",
    "dept": "Apoyo PT",
    "email": "danielasenjo@sanbuenaventura.org"
  },
  {
    "id": "d558",
    "name": "David Sagaseta Jiménez",
    "dept": "Educación Física",
    "email": "dsagaseta@sanbuenaventura.org"
  },
  {
    "id": "fra0",
    "name": "Francisco Javier Félix Fernández",
    "dept": "Religión",
    "email": "javierfelix@sanbuenaventura.org"
  },
  {
    "id": "ihid0",
    "name": "Isabel Hidalgo Castañeda",
    "dept": "Tutoría 2º EP-A",
    "email": "isabelhidalgo@sanbuenaventura.org"
  },
  {
    "id": "ipena",
    "name": "Isabel Peña Escudero",
    "dept": "Horario de Apoyo",
    "email": "isabelpena@sanbuenaventura.org"
  },
  {
    "id": "j414",
    "name": "Jose Antonio Utrillas Sánchez",
    "dept": "Tutoría / General",
    "email": "joseantonioutrillas@sanbuenaventura.org"
  },
  {
    "id": "jos7",
    "name": "José Manuel Santos Alejano",
    "dept": "Tutoría / General",
    "email": "josemanuelsantos@sanbuenaventura.org"
  },
  {
    "id": "j784",
    "name": "Juan Antonio Alfonso Pizarro",
    "dept": "Educación Física / General",
    "email": "juanalfonso@sanbuenaventura.org"
  },
  {
    "id": "j326",
    "name": "Julia Rodríguez Gutiérrez",
    "dept": "Tutoría / General",
    "email": "juliarodriguez@sanbuenaventura.org"
  },
  {
    "id": "l681",
    "name": "Lorena Moreno Barrigas",
    "dept": "Tutoría / General",
    "email": "lorenamoreno@sanbuenaventura.org"
  },
  {
    "id": "mar1",
    "name": "María Pilar Pérez Fernández",
    "dept": "Tutoría / Robótica",
    "email": "pilarperez@sanbuenaventura.org"
  },
  {
    "id": "mvazquez",
    "name": "María Vázquez",
    "dept": "Primaria",
    "email": "mariavazquez@sanbuenaventura.org"
  },
  {
    "id": "m851",
    "name": "Mª Belén Hernando Martín",
    "dept": "Tutoría / General",
    "email": "belenhernando@sanbuenaventura.org"
  },
  {
    "id": "m654",
    "name": "Mª Carmen Ibáñez Abad",
    "dept": "Inglés",
    "email": "carmenibanez@sanbuenaventura.org"
  },
  {
    "id": "n656",
    "name": "Nuria Jarillo García",
    "dept": "Inglés",
    "email": "nuriajarillo@sanbuenaventura.org"
  },
  {
    "id": "pgom0",
    "name": "Paula Gomez Buil",
    "dept": "Tutoría / General",
    "email": "paulagomez@sanbuenaventura.org"
  },
  {
    "id": "pgonzalez",
    "name": "Paula González",
    "dept": "Primaria",
    "email": "paulagonzalez@sanbuenaventura.org"
  },
  {
    "id": "pveg0",
    "name": "Pedro Vega Verdeja",
    "dept": "Tutoría / General",
    "email": "pedrovega@sanbuenaventura.org"
  },
  {
    "id": "ped4",
    "name": "Pedro Zapata Paredes",
    "dept": "Tutoría / General",
    "email": "pedrozapata@sanbuenaventura.org"
  },
  {
    "id": "p740",
    "name": "Pilar Fuentes Saavedra",
    "dept": "Música",
    "email": "pilarfuentes@sanbuenaventura.org"
  },
  {
    "id": "r299",
    "name": "Rubén Recio Molina",
    "dept": "Tutoría / Robótica",
    "email": "rubenrecio@sanbuenaventura.org"
  },
  {
    "id": "afer0",
    "name": "Álvaro Fernández Hervás",
    "dept": "Tutoría / General",
    "email": "alvarofernandez@sanbuenaventura.org"
  },
  {
    "id": "aort0",
    "name": "Álvaro Paris Ortega Bonilla",
    "dept": "Tutoría / General",
    "email": "alvaroortega@sanbuenaventura.org"
  },
  {
    "id": "omol0",
    "name": "Óscar Manuel Molina Márquez",
    "dept": "Tutoría / General",
    "email": "oscarmolina@sanbuenaventura.org"
  }
];

export const SCHOOL_CLASSROOMS = ["1ºEP-A", "1ºEP-B", "1ºEP-C", "2ºEP-A", "2ºEP-B", "2ºEP-C", "3ºEP-A", "3ºEP-B", "3ºEP-C", "4ºEP-A", "4ºEP-B", "4ºEP-C", "5ºEP-A", "5ºEP-B", "5ºEP-C", "6ºEP-A", "6ºEP-B", "6ºEP-C"];

export const SCHEDULE_PERIOD_COLUMNS = [
  { id: "1H", label: "1.ª Hora", time: "09:00 - 09:45", shortTime: "09:00" },
  { id: "2H", label: "2.ª Hora", time: "09:45 - 10:30", shortTime: "09:45" },
  { id: "REC", label: "☕ Recreo", time: "10:30 - 11:00", shortTime: "10:30", isBreak: true },
  { id: "3H", label: "3.ª Hora", time: "11:00 - 11:45", shortTime: "11:00" },
  { id: "4H", label: "4.ª Hora", time: "11:45 - 12:30", shortTime: "11:45" },
  { id: "COM", label: "🍽️ Mediodía", time: "12:30 - 14:15", shortTime: "12:30", isBreak: true },
  { id: "5H", label: "5.ª Hora (Tarde)", time: "14:15 - 15:15", shortTime: "14:15" },
  { id: "6H", label: "6.ª Hora (Tarde)", time: "15:15 - 16:15", shortTime: "15:15" }
];

// Mapa compacto: [tipo ("L"=Lectiva, "D"=Disponible/Apoyo, "N"=No disponible/Exento), aula, materia]
export const TEACHER_SCHEDULES = {"dasenjo": {"0": {"1H": ["L", "6ºEP-C", "PT Álvaro, Mª Laura, María, Cristhian (09:00 - 09:45)"], "2H": ["D", "", "Atención y Planificación PT"], "3H": ["L", "2ºEP-C", "PT 2ºEP-C (11:00 - 11:30) / 1ºESO-B Derek (11:30 - 12:25)"], "4H": ["L", "1ºESO-B", "PT Derek de León · Matemáticas (hasta 12:25)"], "5H": ["L", "Infantil", "PT 4 años A (14:00 - 14:30) / 3 años B Ian (14:30 - 15:15)"], "6H": ["L", "4ºEP-A", "PT Adrian Chuquimango & Dylan (15:15 - 16:00)"]}, "1": {"1H": ["L", "1ºESO-B", "PT 3 años B (08:45 - 09:10) / 1ºESO-B Derek Lengua (09:10 - 10:05)"], "2H": ["L", "1ºESO-B", "PT Derek de León · Lengua (hasta 10:05)"], "3H": ["L", "5ºEP-A", "PT 5ºEP-A Jhonathan & 6ºEP-A Ysabella (11:00 - 11:45)"], "4H": ["L", "2ºEP-C", "PT Juliette Cardoza & Oliver Luna (11:45 - 12:30)"], "5H": ["L", "6ºEP-C", "PT Álvaro, Mª Laura, María, Cristhian (14:15 - 15:15)"], "6H": ["L", "5 años C", "PT Mª Fernanda & Mª Flor Mendoza (15:15 - 16:00)"]}, "2": {"1H": ["L", "5ºEP-A", "PT 5ºEP-A Jhonathan & 6ºEP-A Ysabella (09:00 - 10:00)"], "2H": ["L", "5ºEP-A", "PT 5ºEP-A / 6ºEP-A (hasta 10:00)"], "3H": ["L", "4 años A", "PT 5 años C (10:30 - 11:15) / 4 años A Psico (11:15 - 12:25)"], "4H": ["L", "4 años A", "PT Psicomotricidad 4 años A (hasta 12:25)"], "5H": ["L", "Infantil", "PT 4 años A (14:00 - 14:30) / 3 años B Ian (14:30 - 15:15)"], "6H": ["L", "6ºEP-C", "PT Álvaro, Mª Laura, María, Cristhian (15:15 - 16:15)"]}, "3": {"1H": ["L", "4ºESO DIV2", "PT 3 años B (08:45 - 09:10) / 4ºESO DIV2 PDC (09:10 - 10:05)"], "2H": ["L", "4ºESO DIV2", "PT Rubén Pérez & Andrés Nafría (hasta 10:05)"], "3H": ["L", "6ºEP-C", "PT Álvaro, Mª Laura, María, Cristhian (11:00 - 11:45)"], "4H": ["L", "5ºEP-A", "PT 5ºEP-A Jhonathan & 6ºEP-A Ysabella (11:45 - 12:30)"], "5H": ["L", "Infantil", "PT 4 años A (14:00 - 14:45) / 3 años B Ian (14:30 - 15:15)"], "6H": ["L", "2ºEP-C", "PT Juliette & Oliver (15:30 - 16:15)"]}, "4": {"1H": ["L", "5ºEP-A", "PT 5ºEP-A Jhonathan & 6ºEP-A Ysabella (09:00 - 10:05)"], "2H": ["L", "2ºESO-C", "PT Carlos Álvarez 2ºESO-C (10:05 - 11:00)"], "3H": ["L", "3 años B", "PT 3 años B (11:00 - 11:30) / 4ºESO DIV2 PDC (11:30 - 12:25)"], "4H": ["L", "4ºESO DIV2", "PT Rubén Pérez & Andrés Nafría (hasta 12:25)"], "5H": ["L", "4ºEP-A", "PT Adrian Chuquimango & Dylan (14:15 - 15:00)"], "6H": ["L", "2ºEP-C", "PT Juliette Cardoza & Oliver Luna (15:15 - 16:15)"]}}, "j326": {"0": {"1H": ["L", "1ºEP-A", "Matemáticas"], "2H": ["L", "1ºEP-A", "Matemáticas"], "3H": ["L", "1ºEP-A", "Ciencias Sociales"], "4H": ["L", "1ºEP-A", "Lengua Castellana y Literatura"], "5H": ["L", "1ºEP-A", "Educación Física"], "6H": ["L", "1ºEP-B", "Educación Física"]}, "1": {"1H": ["L", "1ºEP-A", "Matemáticas"], "2H": ["L", "1ºEP-A", "Matemáticas"], "3H": ["L", "1ºEP-A", "Lengua Castellana y Literatura"], "4H": ["L", "1ºEP-A", "Religión"], "5H": ["L", "1ºEP-A", "Lengua Castellana y Literatura"], "6H": ["L", "1ºEP-A", "Programación y robótica"]}, "2": {"1H": ["L", "1ºEP-A", "Lengua Castellana y Literatura"], "2H": ["L", "1ºEP-A", "Matemáticas"], "3H": ["L", "1ºEP-B", "Programación y robótica"], "4H": ["L", "1ºEP-A", "Lengua Castellana y Literatura"], "5H": ["L", "1ºEP-A", "Educación Física"], "6H": ["L", "1ºEP-B", "Educación Física"]}, "3": {"1H": ["L", "1ºEP-A", "Religión"], "2H": ["L", "1ºEP-A", "Matemáticas"], "3H": ["L", "1ºEP-A", "Lengua Castellana y Literatura"], "4H": ["L", "1ºEP-B", "Educación Física"], "5H": ["L", "3ºEP-C", "Ciencias Sociales"], "6H": ["L", "1ºEP-A", "Ciencias Sociales"]}, "4": {"1H": ["L", "1ºEP-A", "Matemáticas"], "2H": ["L", "1ºEP-A", "Lengua Castellana y Literatura"], "3H": ["L", "3ºEP-C", "Ciencias Sociales"], "4H": ["L", "1ºEP-A", "Educación Física"], "5H": ["L", "1ºEP-A", "Educación Plastica y Visual"], "6H": ["L", "1ºEP-C", "Programación y robótica"]}}, "ped4": {"0": {"1H": ["L", "1ºEP-B", "Ciencias Sociales"], "2H": ["L", "1ºEP-B", "Lengua Castellana y Literatura"], "3H": ["L", "1ºEP-B", "Religión"], "4H": ["L", "1ºEP-B", "Matemáticas"], "5H": ["L", "1ºEP-B", "Speaking (Conversación en Inglés)"], "6H": ["L", "3ºEP-C", "Religión"]}, "1": {"1H": ["L", "1ºEP-B", "Speaking (Conversación en Inglés)"], "2H": ["L", "1ºEP-B", "Lengua Castellana y Literatura"], "3H": ["L", "1ºEP-B", "Lengua Castellana y Literatura"], "4H": ["L", "1ºEP-B", "Matemáticas"], "5H": ["L", "1ºEP-B", "Matemáticas"], "6H": ["L", "1ºEP-C", "Ciencias de la Naturaleza"]}, "2": {"1H": ["L", "1ºEP-C", "Ciencias de la Naturaleza"], "2H": ["L", "1ºEP-B", "Matemáticas"], "3H": ["L", "3ºEP-C", "Religión"], "4H": ["L", "1ºEP-B", "Lengua Castellana y Literatura"], "5H": ["L", "1ºEP-B", "Lengua Castellana y Literatura"], "6H": ["L", "1ºEP-A", "Ciencias de la Naturaleza"]}, "3": {"1H": ["L", "1ºEP-B", "Matemáticas"], "2H": ["L", "1ºEP-B", "Religión"], "3H": ["L", "1ºEP-B", "Speaking (Conversación en Inglés)"], "4H": ["L", "1ºEP-A", "Ciencias de la Naturaleza"], "5H": ["L", "1ºEP-B", "Lengua Castellana y Literatura"], "6H": ["L", "1ºEP-B", "Ciencias de la Naturaleza"]}, "4": {"1H": ["L", "1ºEP-B", "Lengua Castellana y Literatura"], "2H": ["L", "1ºEP-B", "Matemáticas"], "3H": ["L", "1ºEP-B", "Matemáticas"], "4H": ["L", "1ºEP-B", "Speaking (Conversación en Inglés)"], "5H": ["L", "1ºEP-B", "Ciencias de la Naturaleza"], "6H": ["L", "1ºEP-B", "Ciencias Sociales"]}}, "n656": {"0": {"1H": ["L", "1ºEP-C", "Ciencias Sociales"], "2H": ["L", "1ºEP-C", "Matemáticas"], "3H": ["L", "1ºEP-C", "Lengua Castellana y Literatura"], "4H": ["L", "1ºEP-C", "Lengua Castellana y Literatura"], "5H": ["L", "1ºEP-C", "Speaking (Conversación en Inglés)"], "6H": ["L", "1ºEP-A", "Speaking (Conversación en Inglés)"]}, "1": {"1H": ["L", "1ºEP-C", "Matemáticas"], "2H": ["L", "1ºEP-C", "Matemáticas"], "3H": ["L", "1ºEP-C", "Lengua Castellana y Literatura"], "4H": ["L", "1ºEP-C", "Speaking (Conversación en Inglés)"], "5H": ["L", "3ºEP-A", "Religión"], "6H": ["L", "1ºEP-B", "Educación Plastica y Visual"]}, "2": {"1H": ["L", "3ºEP-A", "Religión"], "2H": ["L", "1ºEP-C", "Matemáticas"], "3H": ["L", "1ºEP-A", "Speaking (Conversación en Inglés)"], "4H": ["L", "1ºEP-C", "Lengua Castellana y Literatura"], "5H": ["L", "1ºEP-C", "Lengua Castellana y Literatura"], "6H": ["L", "1ºEP-C", "Speaking (Conversación en Inglés)"]}, "3": {"1H": ["L", "1ºEP-C", "Lengua Castellana y Literatura"], "2H": ["L", "1ºEP-C", "Matemáticas"], "3H": ["L", "1ºEP-C", "Religión"], "4H": ["L", "1ºEP-C", "Speaking (Conversación en Inglés)"], "5H": ["L", "1ºEP-A", "Speaking (Conversación en Inglés)"], "6H": ["L", "1ºEP-C", "Educación Plastica y Visual"]}, "4": {"1H": ["L", "1ºEP-C", "Lengua Castellana y Literatura"], "2H": ["L", "1ºEP-C", "Ciencias Sociales"], "3H": ["L", "1ºEP-C", "Religión"], "4H": ["L", "1ºEP-C", "Matemáticas"], "5H": ["L", "1ºEP-C", "Matemáticas"], "6H": ["L", "1ºEP-A", "Speaking (Conversación en Inglés)"]}}, "r299": {"0": {"1H": ["L", "2ºEP-A", "Programación y robótica"], "2H": ["L", "2ºEP-B", "Matemáticas"], "5H": ["L", "2ºEP-B", "Ciencias Sociales"], "6H": ["L", "2ºEP-B", "Lengua Castellana y Literatura"]}, "1": {"3H": ["L", "2ºEP-B", "Lengua Castellana y Literatura"], "4H": ["L", "2ºEP-B", "Lengua Castellana y Literatura"], "5H": ["L", "2ºEP-A", "Ciencias Sociales"], "6H": ["L", "2ºEP-B", "Matemáticas"]}, "2": {"2H": ["L", "2ºEP-B", "Matemáticas"], "3H": ["L", "6ºEP-C", "Programación y robótica"], "4H": ["L", "2ºEP-B", "Lengua Castellana y Literatura"], "5H": ["L", "2ºEP-C", "Programación y robótica"], "6H": ["L", "2ºEP-B", "Programación y robótica"]}, "3": {"1H": ["L", "2ºEP-B", "Lengua Castellana y Literatura"], "3H": ["L", "2ºEP-B", "Matemáticas"], "4H": ["L", "2ºEP-B", "Matemáticas"], "5H": ["L", "2ºEP-B", "Ciencias Sociales"], "6H": ["L", "2ºEP-A", "Ciencias Sociales"]}, "4": {"1H": ["L", "2ºEP-B", "Lengua Castellana y Literatura"], "2H": ["L", "2ºEP-B", "Lengua Castellana y Literatura"], "3H": ["L", "2ºEP-B", "Matemáticas"], "4H": ["L", "2ºEP-B", "Matemáticas"], "6H": ["L", "2ºEP-B", "Educación Plastica y Visual"]}}, "aort0": {"0": {"1H": ["L", "2ºEP-B", "Ciencias de la Naturaleza"], "2H": ["L", "6ºEP-A", "Matemáticas"], "3H": ["L", "6ºEP-A", "Ciencias de la Naturaleza"], "4H": ["L", "6ºEP-A", "Lengua Castellana y Literatura"], "5H": ["L", "6ºEP-A", "Educación Plastica y Visual"], "6H": ["L", "6ºEP-A", "Speaking (Conversación en Inglés)"]}, "1": {"1H": ["L", "6ºEP-A", "Speaking (Conversación en Inglés)"], "2H": ["L", "6ºEP-A", "Ciencias Sociales"], "3H": ["L", "6ºEP-A", "Matemáticas"], "4H": ["L", "6ºEP-B", "Ciencias Sociales"], "5H": ["L", "2ºEP-B", "Ciencias de la Naturaleza"], "6H": ["L", "6ºEP-A", "Lengua Castellana y Literatura"]}, "2": {"1H": ["L", "6ºEP-A", "Ciencias Sociales"], "2H": ["L", "6ºEP-A", "Speaking (Conversación en Inglés)"], "3H": ["L", "6ºEP-B", "Ciencias de la Naturaleza"], "4H": ["L", "6ºEP-A", "Lengua Castellana y Literatura"], "5H": ["L", "6ºEP-A", "Matemáticas"], "6H": ["L", "6ºEP-A", "Lengua Castellana y Literatura"]}, "3": {"1H": ["L", "6ºEP-A", "Lengua Castellana y Literatura"], "2H": ["L", "6ºEP-B", "Ciencias de la Naturaleza"], "3H": ["L", "6ºEP-A", "Speaking (Conversación en Inglés)"], "4H": ["L", "6ºEP-A", "Ciencias de la Naturaleza"], "5H": ["L", "6ºEP-A", "Matemáticas"], "6H": ["L", "6ºEP-A", "Lengua Castellana y Literatura"]}, "4": {"1H": ["L", "6ºEP-A", "Matemáticas"], "2H": ["L", "6ºEP-A", "Matemáticas"], "3H": ["L", "6ºEP-A", "Speaking (Conversación en Inglés)"], "4H": ["L", "6ºEP-A", "Lengua Castellana y Literatura"], "5H": ["L", "6ºEP-B", "Ciencias Sociales"], "6H": ["L", "6ºEP-B", "Educación Plastica y Visual"]}}, "j414": {"0": {"1H": ["L", "2ºEP-C", "Matemáticas"], "2H": ["L", "3ºEP-C", "Educación Plastica y Visual"], "3H": ["L", "2ºEP-C", "Lengua Castellana y Literatura"], "4H": ["L", "2ºEP-C", "Lengua Castellana y Literatura"], "5H": ["L", "2ºEP-C", "Educación Plastica y Visual"], "6H": ["L", "2ºEP-C", "Ciencias Sociales"]}, "1": {"1H": ["L", "2ºEP-C", "Educación Física"], "2H": ["L", "2ºEP-B", "Educación Física"], "3H": ["L", "2ºEP-C", "Lengua Castellana y Literatura"], "4H": ["L", "2ºEP-C", "Lengua Castellana y Literatura"], "5H": ["L", "2ºEP-C", "Religión"], "6H": ["L", "2ºEP-C", "Matemáticas"]}, "2": {"1H": ["L", "2ºEP-C", "Matemáticas"], "2H": ["L", "3ºEP-B", "Religión"], "3H": ["L", "2ºEP-B", "Religión"], "4H": ["L", "2ºEP-C", "Lengua Castellana y Literatura"], "5H": ["L", "2ºEP-B", "Educación Física"], "6H": ["L", "2ºEP-C", "Educación Física"]}, "3": {"1H": ["L", "2ºEP-C", "Lengua Castellana y Literatura"], "2H": ["L", "2ºEP-B", "Religión"], "3H": ["L", "2ºEP-C", "Religión"], "4H": ["L", "2ºEP-C", "Matemáticas"], "5H": ["L", "2ºEP-C", "Ciencias Sociales"], "6H": ["L", "2ºEP-C", "Matemáticas"]}, "4": {"1H": ["L", "2ºEP-C", "Matemáticas"], "2H": ["L", "2ºEP-C", "Matemáticas"], "3H": ["L", "3ºEP-B", "Religión"], "4H": ["L", "2ºEP-C", "Educación Física"], "5H": ["L", "2ºEP-B", "Educación Física"], "6H": ["L", "2ºEP-C", "Lengua Castellana y Literatura"]}}, "omol0": {"0": {"1H": ["L", "3ºEP-A", "Matemáticas"], "2H": ["L", "3ºEP-A", "Matemáticas"], "3H": ["L", "3ºEP-A", "Ciencias de la Naturaleza"], "4H": ["L", "6ºEP-C", "Educación Física"], "5H": ["L", "3ºEP-A", "Speaking (Conversación en Inglés)"], "6H": ["L", "3ºEP-A", "Lengua Castellana y Literatura"]}, "1": {"1H": ["L", "3ºEP-A", "Speaking (Conversación en Inglés)"], "2H": ["L", "3ºEP-A", "Ciencias Sociales"], "3H": ["L", "3ºEP-A", "Matemáticas"], "4H": ["L", "3ºEP-A", "Matemáticas"], "5H": ["L", "3ºEP-B", "Educación Plastica y Visual"], "6H": ["L", "3ºEP-A", "Lengua Castellana y Literatura"]}, "2": {"1H": ["L", "6ºEP-C", "Educación Física"], "2H": ["L", "3ºEP-A", "Matemáticas"], "3H": ["L", "3ºEP-A", "Educación Física"], "4H": ["L", "3ºEP-A", "Speaking (Conversación en Inglés)"], "5H": ["L", "3ºEP-A", "Lengua Castellana y Literatura"], "6H": ["L", "3ºEP-A", "Educación Plastica y Visual"]}, "3": {"1H": ["L", "3ºEP-A", "Matemáticas"], "2H": ["L", "3ºEP-A", "Lengua Castellana y Literatura"], "3H": ["L", "3ºEP-A", "Ciencias de la Naturaleza"], "4H": ["L", "3ºEP-A", "Lengua Castellana y Literatura"], "5H": ["L", "3ºEP-A", "Educación Física"], "6H": ["L", "3ºEP-A", "Speaking (Conversación en Inglés)"]}, "4": {"1H": ["L", "3ºEP-A", "Speaking (Conversación en Inglés)"], "2H": ["L", "3ºEP-A", "Lengua Castellana y Literatura"], "3H": ["L", "3ºEP-A", "Matemáticas"], "4H": ["L", "3ºEP-A", "Ciencias Sociales"], "5H": ["L", "3ºEP-A", "Educación Física"], "6H": ["L", "6ºEP-C", "Educación Física"]}}, "ihid0": {"0": {"1H": ["L", "3ºEP-B", "Educación Física"], "2H": ["L", "2ºEP-A", "Lengua Castellana y Literatura"], "3H": ["L", "2ºEP-A", "Religión"], "4H": ["L", "2ºEP-A", "Educación Física"], "5H": ["L", "2ºEP-A", "Matemáticas"], "6H": ["L", "1ºEP-C", "Educación Física"]}, "1": {"1H": ["L", "2ºEP-A", "Matemáticas"], "2H": ["L", "2ºEP-A", "Ciencias de la Naturaleza"], "3H": ["L", "2ºEP-A", "Lengua Castellana y Literatura"], "4H": ["L", "3ºEP-B", "Educación Física"], "5H": ["L", "1ºEP-C", "Educación Física"], "6H": ["L", "2ºEP-A", "Educación Física"]}, "2": {"1H": ["L", "2ºEP-A", "Ciencias de la Naturaleza"], "2H": ["L", "2ºEP-A", "Lengua Castellana y Literatura"], "3H": ["L", "2ºEP-C", "Ciencias de la Naturaleza"], "4H": ["L", "2ºEP-A", "Educación Física"], "5H": ["L", "2ºEP-A", "Matemáticas"], "6H": ["L", "2ºEP-A", "Matemáticas"]}, "3": {"1H": ["L", "2ºEP-A", "Religión"], "2H": ["L", "2ºEP-A", "Matemáticas"], "3H": ["L", "2ºEP-A", "Lengua Castellana y Literatura"], "4H": ["L", "2ºEP-A", "Lengua Castellana y Literatura"], "5H": ["L", "1ºEP-C", "Educación Física"], "6H": ["L", "3ºEP-B", "Educación Física"]}, "4": {"1H": ["L", "2ºEP-A", "Matemáticas"], "2H": ["L", "2ºEP-A", "Matemáticas"], "3H": ["L", "2ºEP-C", "Ciencias de la Naturaleza"], "4H": ["L", "2ºEP-A", "Lengua Castellana y Literatura"], "5H": ["L", "2ºEP-A", "Educación Plastica y Visual"], "6H": ["L", "2ºEP-A", "Lengua Castellana y Literatura"]}}, "d558": {"0": {"1H": ["L", "3ºEP-C", "Lengua Castellana y Literatura"], "2H": ["L", "4ºEP-C", "Educación Física"], "3H": ["L", "3ºEP-C", "Ciencias de la Naturaleza"], "4H": ["L", "3ºEP-C", "Matemáticas"], "5H": ["L", "4ºEP-A", "Educación Física"], "6H": ["L", "4ºEP-B", "Educación Física"]}, "1": {"1H": ["L", "3ºEP-C", "Lengua Castellana y Literatura"], "2H": ["L", "3ºEP-C", "Lengua Castellana y Literatura"], "3H": ["L", "3ºEP-C", "Matemáticas"], "4H": ["L", "3ºEP-C", "Educación Física"], "5H": ["L", "6ºEP-A", "Educación Física"], "6H": ["L", "3ºEP-C", "Matemáticas"]}, "2": {"1H": ["L", "3ºEP-C", "Matemáticas"], "2H": ["L", "3ºEP-C", "Lengua Castellana y Literatura"], "3H": ["L", "6ºEP-A", "Educación Física"], "4H": ["L", "4ºEP-C", "Educación Física"], "5H": ["L", "3ºEP-C", "Matemáticas"], "6H": ["L", "3ºEP-C", "Ciencias de la Naturaleza"]}, "3": {"1H": ["L", "3ºEP-C", "Educación Física"], "2H": ["L", "3ºEP-C", "Lengua Castellana y Literatura"], "3H": ["L", "4ºEP-B", "Educación Física"], "4H": ["L", "3ºEP-C", "Matemáticas"], "5H": ["L", "4ºEP-C", "Educación Física"], "6H": ["L", "4ºEP-A", "Educación Física"]}, "4": {"1H": ["L", "3ºEP-C", "Matemáticas"], "2H": ["L", "3ºEP-C", "Lengua Castellana y Literatura"], "3H": ["L", "4ºEP-B", "Educación Física"], "4H": ["L", "4ºEP-A", "Educación Física"], "5H": ["L", "6ºEP-A", "Educación Física"], "6H": ["L", "3ºEP-C", "Educación Física"]}}, "l681": {"0": {"1H": ["L", "4ºEP-A", "Matemáticas"], "2H": ["L", "4ºEP-A", "Ciencias Sociales"], "3H": ["L", "4ºEP-A", "Lengua Castellana y Literatura"], "4H": ["L", "4ºEP-A", "Religión"], "5H": ["L", "6ºEP-C", "Speaking (Conversación en Inglés)"], "6H": ["L", "4ºEP-A", "Speaking (Conversación en Inglés)"]}, "1": {"1H": ["L", "4ºEP-A", "Matemáticas"], "2H": ["L", "6ºEP-C", "Speaking (Conversación en Inglés)"], "3H": ["L", "4ºEP-A", "Lengua Castellana y Literatura"], "4H": ["L", "4ºEP-A", "Lengua Castellana y Literatura"], "5H": ["L", "4ºEP-A", "Matemáticas"], "6H": ["L", "4ºEP-A", "Speaking (Conversación en Inglés)"]}, "2": {"1H": ["L", "4ºEP-A", "Religión"], "2H": ["L", "6ºEP-C", "Speaking (Conversación en Inglés)"], "3H": ["L", "4ºEP-A", "Ciencias Sociales"], "4H": ["L", "4ºEP-A", "Lengua Castellana y Literatura"], "5H": ["L", "4ºEP-A", "Speaking (Conversación en Inglés)"], "6H": ["L", "4ºEP-A", "Matemáticas"]}, "3": {"1H": ["L", "4ºEP-A", "Matemáticas"], "2H": ["L", "4ºEP-A", "Matemáticas"], "3H": ["L", "4ºEP-A", "Speaking (Conversación en Inglés)"], "4H": ["L", "4ºEP-A", "Lengua Castellana y Literatura"], "5H": ["L", "4ºEP-A", "Ciencias de la Naturaleza"], "6H": ["L", "6ºEP-C", "Speaking (Conversación en Inglés)"]}, "4": {"1H": ["L", "4ºEP-A", "Matemáticas"], "2H": ["L", "4ºEP-A", "Ciencias de la Naturaleza"], "3H": ["L", "4ºEP-A", "Lengua Castellana y Literatura"], "4H": ["L", "6ºEP-C", "Speaking (Conversación en Inglés)"], "5H": ["L", "4ºEP-A", "Speaking (Conversación en Inglés)"], "6H": ["L", "4ºEP-A", "Educación Plastica y Visual"]}}, "pveg0": {"0": {"1H": ["L", "4ºEP-B", "Religión"], "2H": ["L", "4ºEP-B", "Lengua Castellana y Literatura"], "3H": ["L", "4ºEP-B", "Speaking (Conversación en Inglés)"], "4H": ["L", "4ºEP-B", "Matemáticas"], "5H": ["L", "4ºEP-B", "Lengua Castellana y Literatura"], "6H": ["L", "5ºEP-A", "Speaking (Conversación en Inglés)"]}, "1": {"1H": ["L", "4ºEP-B", "Matemáticas"], "2H": ["L", "4ºEP-B", "Ciencias Sociales"], "3H": ["L", "4ºEP-B", "Educación Plastica y Visual"], "4H": ["L", "4ºEP-B", "Lengua Castellana y Literatura"], "5H": ["L", "5ºEP-A", "Speaking (Conversación en Inglés)"], "6H": ["L", "4ºEP-B", "Speaking (Conversación en Inglés)"]}, "2": {"1H": ["L", "4ºEP-B", "Matemáticas"], "2H": ["L", "4ºEP-B", "Religión"], "3H": ["L", "4ºEP-B", "Ciencias de la Naturaleza"], "4H": ["L", "4ºEP-B", "Lengua Castellana y Literatura"], "5H": ["L", "4ºEP-B", "Speaking (Conversación en Inglés)"], "6H": ["L", "4ºEP-B", "Matemáticas"]}, "3": {"1H": ["L", "4ºEP-B", "Lengua Castellana y Literatura"], "2H": ["L", "4ºEP-B", "Speaking (Conversación en Inglés)"], "3H": ["L", "5ºEP-A", "Speaking (Conversación en Inglés)"], "4H": ["L", "4ºEP-B", "Ciencias Sociales"], "5H": ["L", "5ºEP-C", "Educación Plastica y Visual"], "6H": ["L", "4ºEP-B", "Matemáticas"]}, "4": {"1H": ["L", "4ºEP-B", "Speaking (Conversación en Inglés)"], "2H": ["L", "4ºEP-B", "Ciencias de la Naturaleza"], "3H": ["L", "5ºEP-A", "Speaking (Conversación en Inglés)"], "4H": ["L", "4ºEP-B", "Matemáticas"], "5H": ["L", "4ºEP-B", "Lengua Castellana y Literatura"], "6H": ["L", "4ºEP-B", "Matemáticas"]}}, "afer0": {"0": {"1H": ["L", "4ºEP-C", "Programación y robótica"], "2H": ["L", "5ºEP-C", "Matemáticas"], "3H": ["L", "5ºEP-C", "Religión"], "4H": ["L", "5ºEP-C", "Lengua Castellana y Literatura"], "5H": ["L", "5ºEP-C", "Speaking (Conversación en Inglés)"], "6H": ["L", "5ºEP-C", "Lengua Castellana y Literatura"]}, "1": {"1H": ["L", "5ºEP-C", "Lengua Castellana y Literatura"], "2H": ["L", "5ºEP-C", "Speaking (Conversación en Inglés)"], "3H": ["L", "5ºEP-C", "Matemáticas"], "4H": ["L", "5ºEP-C", "Religión"], "5H": ["L", "5ºEP-C", "Ciencias de la Naturaleza"], "6H": ["L", "5ºEP-C", "Ciencias Sociales"]}, "2": {"1H": ["L", "5ºEP-C", "Ciencias de la Naturaleza"], "2H": ["L", "4ºEP-A", "Programación y robótica"], "3H": ["L", "5ºEP-C", "Matemáticas"], "4H": ["L", "5ºEP-C", "Lengua Castellana y Literatura"], "5H": ["L", "5ºEP-C", "Speaking (Conversación en Inglés)"], "6H": ["L", "5ºEP-C", "Educación Física"]}, "3": {"1H": ["L", "5ºEP-C", "Ciencias Sociales"], "2H": ["L", "5ºEP-C", "Educación Física"], "3H": ["L", "5ºEP-C", "Lengua Castellana y Literatura"], "4H": ["L", "5ºEP-C", "Educación en Valores Cívicos y Éticos"], "5H": ["L", "4ºEP-B", "Programación y robótica"], "6H": ["L", "5ºEP-C", "Matemáticas"]}, "4": {"1H": ["L", "5ºEP-C", "Educación en Valores Cívicos y Éticos"], "2H": ["L", "5ºEP-C", "Matemáticas"], "3H": ["L", "5ºEP-C", "Matemáticas"], "4H": ["L", "5ºEP-C", "Speaking (Conversación en Inglés)"], "5H": ["L", "5ºEP-C", "Lengua Castellana y Literatura"], "6H": ["L", "5ºEP-C", "Educación Física"]}}, "bleo0": {"0": {"1H": ["L", "5ºEP-A", "Religión"], "3H": ["L", "4ºEP-C", "Matemáticas"], "4H": ["L", "4ºEP-C", "Ciencias Sociales"], "5H": ["L", "4ºEP-C", "Lengua Castellana y Literatura"], "6H": ["L", "4ºEP-C", "Speaking (Conversación en Inglés)"]}, "1": {"1H": ["L", "4ºEP-C", "Speaking (Conversación en Inglés)"], "2H": ["L", "4ºEP-C", "Matemáticas"], "3H": ["L", "4ºEP-C", "Lengua Castellana y Literatura"], "5H": ["L", "4ºEP-C", "Ciencias de la Naturaleza"], "6H": ["L", "4ºEP-C", "Educación Plastica y Visual"]}, "2": {"1H": ["L", "4ºEP-C", "Matemáticas"], "2H": ["L", "4ºEP-C", "Matemáticas"], "3H": ["L", "4ºEP-C", "Religión"], "4H": ["L", "5ºEP-A", "Religión"], "5H": ["L", "4ºEP-C", "Speaking (Conversación en Inglés)"], "6H": ["L", "4ºEP-C", "Lengua Castellana y Literatura"]}, "3": {"1H": ["L", "4ºEP-C", "Religión"], "2H": ["L", "4ºEP-C", "Lengua Castellana y Literatura"], "3H": ["L", "4ºEP-C", "Speaking (Conversación en Inglés)"], "4H": ["L", "4ºEP-C", "Matemáticas"], "6H": ["L", "4ºEP-C", "Ciencias de la Naturaleza"]}, "4": {"1H": ["L", "4ºEP-C", "Matemáticas"], "2H": ["L", "4ºEP-C", "Matemáticas"], "3H": ["L", "4ºEP-C", "Lengua Castellana y Literatura"], "4H": ["L", "4ºEP-C", "Lengua Castellana y Literatura"], "5H": ["L", "4ºEP-C", "Ciencias Sociales"], "6H": ["L", "4ºEP-C", "Speaking (Conversación en Inglés)"]}}, "pgom0": {"0": {"1H": ["L", "5ºEP-B", "Matemáticas"], "2H": ["L", "6ºEP-B", "Lengua Castellana y Literatura"], "3H": ["L", "5ºEP-B", "Speaking (Conversación en Inglés)"], "4H": ["L", "5ºEP-B", "Lengua Castellana y Literatura"], "5H": ["L", "5ºEP-B", "Ciencias Sociales"], "6H": ["L", "6ºEP-B", "Lengua Castellana y Literatura"]}, "1": {"1H": ["L", "5ºEP-B", "Matemáticas"], "2H": ["L", "5ºEP-B", "Matemáticas"], "3H": ["L", "5ºEP-B", "Ciencias de la Naturaleza"], "4H": ["L", "5ºEP-B", "Lengua Castellana y Literatura"], "5H": ["L", "6ºEP-B", "Lengua Castellana y Literatura"], "6H": ["L", "5ºEP-B", "Speaking (Conversación en Inglés)"]}, "2": {"1H": ["L", "5ºEP-B", "Matemáticas"], "2H": ["L", "5ºEP-B", "Lengua Castellana y Literatura"], "3H": ["L", "5ºEP-B", "Ciencias Sociales"], "4H": ["L", "5ºEP-B", "Speaking (Conversación en Inglés)"], "5H": ["L", "6ºEP-B", "Lengua Castellana y Literatura"], "6H": ["L", "5ºEP-B", "Educación en Valores Cívicos y Éticos"]}, "3": {"1H": ["L", "5ºEP-B", "Lengua Castellana y Literatura"], "2H": ["L", "5ºEP-B", "Matemáticas"], "3H": ["L", "6ºEP-B", "Lengua Castellana y Literatura"], "4H": ["L", "6ºEP-B", "Lengua Castellana y Literatura"], "5H": ["L", "5ºEP-B", "Ciencias de la Naturaleza"], "6H": ["L", "5ºEP-B", "Educación en Valores Cívicos y Éticos"]}, "4": {"1H": ["L", "5ºEP-B", "Lengua Castellana y Literatura"], "2H": ["L", "5ºEP-B", "Lengua Castellana y Literatura"], "3H": ["L", "5ºEP-B", "Matemáticas"], "4H": ["L", "6ºEP-B", "Lengua Castellana y Literatura"], "5H": ["L", "5ºEP-B", "Speaking (Conversación en Inglés)"], "6H": ["L", "5ºEP-B", "Educación Plastica y Visual"]}}, "j784": {"0": {"1H": ["L", "5ºEP-C", "Programación y robótica"], "2H": ["L", "5ºEP-A", "Matemáticas"], "3H": ["L", "5ºEP-A", "Lengua Castellana y Literatura"], "4H": ["L", "5ºEP-A", "Ciencias Sociales"], "5H": ["L", "5ºEP-A", "Educación Física"], "6H": ["L", "5ºEP-B", "Programación y robótica"]}, "1": {"1H": ["L", "5ºEP-A", "Matemáticas"], "2H": ["L", "5ºEP-A", "Matemáticas"], "3H": ["L", "5ºEP-A", "Lengua Castellana y Literatura"], "4H": ["L", "5ºEP-A", "Ciencias de la Naturaleza"], "5H": ["L", "5ºEP-B", "Educación Física"], "6H": ["L", "5ºEP-A", "Educación Física"]}, "2": {"1H": ["L", "5ºEP-A", "Lengua Castellana y Literatura"], "2H": ["L", "5ºEP-A", "Lengua Castellana y Literatura"], "3H": ["L", "5ºEP-A", "Matemáticas"], "4H": ["L", "6ºEP-B", "Educación Física"], "5H": ["L", "5ºEP-B", "Educación Física"], "6H": ["L", "5ºEP-A", "Ciencias Sociales"]}, "3": {"1H": ["L", "5ºEP-A", "Educación en Valores Cívicos y Éticos"], "2H": ["L", "5ºEP-A", "Lengua Castellana y Literatura"], "3H": ["L", "5ºEP-B", "Educación Física"], "4H": ["L", "5ºEP-A", "Matemáticas"], "5H": ["L", "5ºEP-A", "Ciencias de la Naturaleza"], "6H": ["L", "6ºEP-B", "Educación Física"]}, "4": {"1H": ["L", "5ºEP-A", "Matemáticas"], "2H": ["L", "5ºEP-A", "Lengua Castellana y Literatura"], "3H": ["L", "6ºEP-B", "Educación Física"], "4H": ["L", "5ºEP-A", "Educación en Valores Cívicos y Éticos"], "5H": ["L", "5ºEP-A", "Programación y robótica"], "6H": ["L", "5ºEP-A", "Educación Física"]}}, "ipena": {"0": {"1H": ["L", "6ºEP-A", "Religión"], "2H": ["L", "6ºEP-C", "Religión"], "5H": ["N", "", "No disponible (Solo mañanas)"], "6H": ["N", "", "No disponible (Solo mañanas)"]}, "1": {"5H": ["N", "", "No disponible (Solo mañanas)"], "6H": ["N", "", "No disponible (Solo mañanas)"]}, "2": {"5H": ["N", "", "No disponible (Solo mañanas)"], "6H": ["N", "", "No disponible (Solo mañanas)"]}, "3": {"1H": ["L", "6ºEP-C", "Religión"], "2H": ["L", "6ºEP-A", "Religión"], "5H": ["N", "", "No disponible (Solo mañanas)"], "6H": ["N", "", "No disponible (Solo mañanas)"]}, "4": {"5H": ["N", "", "No disponible (Solo mañanas)"], "6H": ["N", "", "No disponible (Solo mañanas)"]}}, "jos7": {"0": {"1H": ["L", "6ºEP-B", "Speaking (Conversación en Inglés)"], "3H": ["L", "6ºEP-B", "Religión"], "4H": ["L", "6ºEP-B", "Matemáticas"], "5H": ["L", "6ºEP-B", "Matemáticas"]}, "1": {"1H": ["L", "6ºEP-B", "Matemáticas"], "2H": ["L", "6ºEP-B", "Matemáticas"], "3H": ["L", "6ºEP-B", "Speaking (Conversación en Inglés)"], "4H": ["L", "6ºEP-A", "Programación y robótica"]}, "2": {"1H": ["L", "6ºEP-B", "Religión"], "2H": ["L", "6ºEP-B", "Speaking (Conversación en Inglés)"], "6H": ["L", "6ºEP-B", "Programación y robótica"]}, "3": {"1H": ["L", "6ºEP-B", "Matemáticas"], "5H": ["L", "6ºEP-B", "Speaking (Conversación en Inglés)"]}, "4": {"1H": ["L", "6ºEP-B", "Speaking (Conversación en Inglés)"], "2H": ["L", "6ºEP-B", "Matemáticas"]}}, "mar1": {"0": {"1H": ["L", "6ºEP-C", "Matemáticas"], "2H": ["L", "5ºEP-B", "Religión"], "3H": ["L", "6ºEP-C", "Lengua Castellana y Literatura"], "5H": ["L", "3ºEP-B", "Programación y robótica"], "6H": ["L", "6ºEP-C", "Ciencias Sociales"]}, "1": {"1H": ["L", "6ºEP-C", "Lengua Castellana y Literatura"], "3H": ["L", "6ºEP-C", "Matemáticas"], "4H": ["L", "6ºEP-C", "Matemáticas"], "5H": ["L", "6ºEP-C", "Lengua Castellana y Literatura"], "6H": ["L", "6ºEP-C", "Ciencias de la Naturaleza"]}, "2": {"4H": ["L", "6ºEP-C", "Lengua Castellana y Literatura"], "5H": ["L", "5ºEP-A", "Educación Plastica y Visual"], "6H": ["L", "6ºEP-C", "Matemáticas"]}, "3": {"2H": ["L", "6ºEP-C", "Matemáticas"], "3H": ["L", "6ºEP-C", "Lengua Castellana y Literatura"], "4H": ["L", "6ºEP-C", "Lengua Castellana y Literatura"], "5H": ["L", "6ºEP-C", "Ciencias Sociales"], "6H": ["L", "3ºEP-C", "Programación y robótica"]}, "4": {"1H": ["L", "6ºEP-C", "Lengua Castellana y Literatura"], "2H": ["L", "6ºEP-C", "Matemáticas"], "3H": ["L", "6ºEP-C", "Ciencias de la Naturaleza"], "4H": ["L", "5ºEP-B", "Religión"], "5H": ["L", "6ºEP-C", "Educación Plastica y Visual"], "6H": ["L", "3ºEP-A", "Programación y robótica"]}}, "cduerto": {"0": {"1H": ["N", "", "No disponible"], "2H": ["N", "", "No disponible"], "3H": ["N", "", "No disponible"], "4H": ["N", "", "No disponible"], "5H": ["D", "", "Disponibilidad Sustitución"], "6H": ["D", "", "Disponibilidad Sustitución"]}, "1": {"1H": ["N", "", "No disponible"], "2H": ["N", "", "No disponible"], "3H": ["N", "", "No disponible"], "4H": ["N", "", "No disponible"], "5H": ["N", "", "No disponible"], "6H": ["N", "", "No disponible"]}, "2": {"1H": ["N", "", "No disponible"], "2H": ["N", "", "No disponible"], "3H": ["N", "", "No disponible"], "4H": ["N", "", "No disponible"], "5H": ["D", "", "Disponibilidad Sustitución"], "6H": ["D", "", "Disponibilidad Sustitución"]}, "3": {"1H": ["N", "", "No disponible"], "2H": ["N", "", "No disponible"], "3H": ["N", "", "No disponible"], "4H": ["N", "", "No disponible"], "5H": ["N", "", "No disponible"], "6H": ["N", "", "No disponible"]}, "4": {"1H": ["N", "", "No disponible"], "2H": ["N", "", "No disponible"], "3H": ["N", "", "No disponible"], "4H": ["N", "", "No disponible"], "5H": ["N", "", "No disponible"], "6H": ["N", "", "No disponible"]}}, "fra0": {"0": {"1H": ["N", "", "Exento de sustituciones"], "2H": ["N", "", "Exento de sustituciones"], "3H": ["N", "", "Exento de sustituciones"], "4H": ["N", "", "Exento de sustituciones"], "5H": ["N", "", "Exento de sustituciones"], "6H": ["N", "", "Exento de sustituciones"]}, "1": {"1H": ["N", "", "Exento de sustituciones"], "2H": ["N", "", "Exento de sustituciones"], "3H": ["N", "", "Exento de sustituciones"], "4H": ["N", "", "Exento de sustituciones"], "5H": ["N", "", "Exento de sustituciones"], "6H": ["N", "", "Exento de sustituciones"]}, "2": {"1H": ["N", "", "Exento de sustituciones"], "2H": ["N", "", "Exento de sustituciones"], "3H": ["N", "", "Exento de sustituciones"], "4H": ["N", "", "Exento de sustituciones"], "5H": ["N", "", "Exento de sustituciones"], "6H": ["N", "", "Exento de sustituciones"]}, "3": {"1H": ["N", "", "Exento de sustituciones"], "2H": ["N", "", "Exento de sustituciones"], "3H": ["N", "", "Exento de sustituciones"], "4H": ["N", "", "Exento de sustituciones"], "5H": ["N", "", "Exento de sustituciones"], "6H": ["N", "", "Exento de sustituciones"]}, "4": {"1H": ["N", "", "Exento de sustituciones"], "2H": ["N", "", "Exento de sustituciones"], "3H": ["N", "", "Exento de sustituciones"], "4H": ["N", "", "Exento de sustituciones"], "5H": ["N", "", "Exento de sustituciones"], "6H": ["N", "", "Exento de sustituciones"]}}, "m654": {"0": {"2H": ["L", "2ºEP-C", "Speaking (Conversación en Inglés)"], "3H": ["L", "3ºEP-B", "Speaking (Conversación en Inglés)"], "4H": ["L", "2ºEP-B", "Speaking (Conversación en Inglés)"], "5H": ["L", "3ºEP-C", "Speaking (Conversación en Inglés)"]}, "1": {"1H": ["L", "2ºEP-B", "Speaking (Conversación en Inglés)"], "2H": ["L", "2ºEP-C", "Speaking (Conversación en Inglés)"], "3H": ["L", "3ºEP-B", "Speaking (Conversación en Inglés)"], "4H": ["L", "2ºEP-A", "Speaking (Conversación en Inglés)"], "5H": ["L", "3ºEP-C", "Speaking (Conversación en Inglés)"]}, "2": {"1H": ["L", "2ºEP-B", "Speaking (Conversación en Inglés)"], "2H": ["L", "2ºEP-C", "Speaking (Conversación en Inglés)"], "3H": ["L", "2ºEP-A", "Speaking (Conversación en Inglés)"], "4H": ["L", "3ºEP-C", "Speaking (Conversación en Inglés)"], "6H": ["L", "3ºEP-B", "Speaking (Conversación en Inglés)"]}, "3": {"2H": ["L", "3ºEP-B", "Speaking (Conversación en Inglés)"], "3H": ["L", "3ºEP-C", "Speaking (Conversación en Inglés)"], "5H": ["L", "2ºEP-A", "Speaking (Conversación en Inglés)"], "6H": ["L", "2ºEP-B", "Speaking (Conversación en Inglés)"]}, "4": {"2H": ["L", "3ºEP-B", "Speaking (Conversación en Inglés)"], "3H": ["L", "2ºEP-A", "Speaking (Conversación en Inglés)"], "4H": ["L", "3ºEP-C", "Speaking (Conversación en Inglés)"], "5H": ["L", "2ºEP-C", "Speaking (Conversación en Inglés)"]}}, "p740": {"0": {"2H": ["L", "3ºEP-B", "Música y danza"], "3H": ["L", "2ºEP-B", "Música y danza"], "4H": ["L", "3ºEP-A", "Música y danza"], "6H": ["L", "2ºEP-A", "Música y danza"]}, "1": {"2H": ["L", "4ºEP-A", "Música y danza"], "4H": ["L", "4ºEP-C", "Música y danza"], "5H": ["L", "4ºEP-B", "Música y danza"], "6H": ["L", "6ºEP-B", "Música y danza"]}, "2": {"1H": ["L", "1ºEP-B", "Música y danza"], "2H": ["L", "5ºEP-C", "Música y danza"], "3H": ["L", "1ºEP-C", "Música y danza"], "5H": ["L", "6ºEP-C", "Música y danza"]}, "3": {"2H": ["L", "2ºEP-C", "Música y danza"], "4H": ["L", "5ºEP-B", "Música y danza"], "6H": ["L", "5ºEP-A", "Música y danza"]}, "4": {"3H": ["L", "1ºEP-A", "Música y danza"], "5H": ["L", "3ºEP-C", "Música y danza"], "6H": ["L", "6ºEP-A", "Música y danza"]}}, "m851": {"0": {"4H": ["L", "3ºEP-B", "Lengua Castellana y Literatura"], "6H": ["L", "3ºEP-B", "Matemáticas"]}, "1": {"1H": ["L", "3ºEP-B", "Lengua Castellana y Literatura"], "2H": ["L", "3ºEP-B", "Lengua Castellana y Literatura"], "6H": ["L", "3ºEP-B", "Matemáticas"]}, "2": {"1H": ["L", "3ºEP-B", "Ciencias Sociales"], "3H": ["L", "3ºEP-B", "Matemáticas"], "4H": ["L", "3ºEP-B", "Matemáticas"], "5H": ["L", "3ºEP-B", "Ciencias de la Naturaleza"]}, "3": {"1H": ["L", "3ºEP-B", "Matemáticas"], "3H": ["L", "3ºEP-B", "Matemáticas"], "4H": ["L", "3ºEP-B", "Ciencias Sociales"], "5H": ["L", "3ºEP-B", "Lengua Castellana y Literatura"]}, "4": {"1H": ["L", "3ºEP-B", "Lengua Castellana y Literatura"], "4H": ["L", "3ºEP-B", "Ciencias de la Naturaleza"], "5H": ["L", "3ºEP-B", "Matemáticas"], "6H": ["L", "3ºEP-B", "Lengua Castellana y Literatura"]}}, "pgonzalez": {"0": {"1H": ["N", "", "No disponible"], "2H": ["N", "", "No disponible"], "3H": ["N", "", "No disponible"], "4H": ["N", "", "No disponible"], "5H": ["N", "", "No disponible"], "6H": ["N", "", "No disponible"]}, "1": {"1H": ["D", "", "Disponibilidad Sustitución"], "2H": ["D", "", "Disponibilidad Sustitución"], "3H": ["D", "", "Disponibilidad Sustitución"], "4H": ["D", "", "Disponibilidad Sustitución"], "5H": ["D", "", "Disponibilidad Sustitución"], "6H": ["D", "", "Disponibilidad Sustitución"]}, "2": {"1H": ["D", "", "Disponibilidad Sustitución"], "2H": ["D", "", "Disponibilidad Sustitución"], "3H": ["D", "", "Disponibilidad Sustitución"], "4H": ["D", "", "Disponibilidad Sustitución"], "5H": ["N", "", "No disponible"], "6H": ["N", "", "No disponible"]}, "3": {"1H": ["N", "", "No disponible"], "2H": ["D", "", "Disponibilidad Sustitución"], "3H": ["D", "", "Disponibilidad Sustitución"], "4H": ["D", "", "Disponibilidad Sustitución"], "5H": ["N", "", "No disponible"], "6H": ["N", "", "No disponible"]}, "4": {"1H": ["D", "", "Disponibilidad Sustitución"], "2H": ["D", "", "Disponibilidad Sustitución"], "3H": ["D", "", "Disponibilidad Sustitución"], "4H": ["D", "", "Disponibilidad Sustitución"], "5H": ["D", "", "Disponibilidad Sustitución"], "6H": ["D", "", "Disponibilidad Sustitución"]}}};


// Horario específico con franjas individualizadas y alumnos de Daniel Asenjo (PT)
export const DANIEL_ASENJO_DRIVE_URL = "https://drive.google.com/file/d/1SX1gaGiksN99EGozOlbY498Ex5Ka_D45/view?usp=sharing";

export const DANIEL_ASENJO_CUSTOM_TIMETABLE = {
  "0": [
    {
      "start": "09:00",
      "end": "09:45",
      "time": "09:00 - 09:45",
      "aula": "6º EP C",
      "stage": "Primaria",
      "materia": "Apoyo PT",
      "students": "Álvaro Lionel Astupiña, Mª Laura Gonzales, María Cantero, Cristhian Hristov"
    },
    {
      "start": "10:30",
      "end": "11:00",
      "time": "10:30 - 11:00",
      "aula": "5 años C",
      "stage": "Infantil",
      "materia": "Apoyo PT",
      "students": "Mª Fernanda Mendoza, Mª Flor Mendoza"
    },
    {
      "start": "11:00",
      "end": "11:30",
      "time": "11:00 - 11:30",
      "aula": "2º EP C",
      "stage": "Primaria",
      "materia": "Apoyo PT",
      "students": "Juliette Cardoza, Oliver Luna"
    },
    {
      "start": "11:30",
      "end": "12:25",
      "time": "11:30 - 12:25",
      "aula": "1º ESO B",
      "stage": "Secundaria",
      "materia": "Matemáticas (Apoyo PT)",
      "students": "Derek de León"
    },
    {
      "start": "14:00",
      "end": "14:30",
      "time": "14:00 - 14:30",
      "aula": "4 años A",
      "stage": "Infantil",
      "materia": "Apoyo PT",
      "students": "Jeyco Andree Cerda, Jorge de la Purificación"
    },
    {
      "start": "14:30",
      "end": "15:15",
      "time": "14:30 - 15:15",
      "aula": "3 años B",
      "stage": "Infantil",
      "materia": "Apoyo PT",
      "students": "Ian Milan Vaca"
    },
    {
      "start": "15:15",
      "end": "16:00",
      "time": "15:15 - 16:00",
      "aula": "4º EP A",
      "stage": "Primaria",
      "materia": "Apoyo PT",
      "students": "Adrian Chuquimango, Dylan Villalba (ACNEAE)"
    }
  ],
  "1": [
    {
      "start": "08:45",
      "end": "09:10",
      "time": "08:45 - 09:10",
      "aula": "3 años B",
      "stage": "Infantil",
      "materia": "Apoyo PT",
      "students": "Ian Milan Vaca"
    },
    {
      "start": "09:10",
      "end": "10:05",
      "time": "09:10 - 10:05",
      "aula": "1º ESO B",
      "stage": "Secundaria",
      "materia": "Lengua Castellana (Apoyo PT)",
      "students": "Derek de León"
    },
    {
      "start": "10:30",
      "end": "11:00",
      "time": "10:30 - 11:00",
      "aula": "4 años A",
      "stage": "Infantil",
      "materia": "Apoyo PT",
      "students": "Jeyco Andree Cerda, Jorge de la Purificación"
    },
    {
      "start": "11:00",
      "end": "11:45",
      "time": "11:00 - 11:45",
      "aula": "5º EP A / 6º EP A",
      "stage": "Primaria",
      "materia": "Apoyo PT",
      "students": "Jhonathan Chino Camacho (5ºA), Ysabella Cardoza (6ºA)"
    },
    {
      "start": "11:45",
      "end": "12:30",
      "time": "11:45 - 12:30",
      "aula": "2º EP C",
      "stage": "Primaria",
      "materia": "Apoyo PT",
      "students": "Juliette Cardoza, Oliver Luna"
    },
    {
      "start": "14:15",
      "end": "15:15",
      "time": "14:15 - 15:15",
      "aula": "6º EP C",
      "stage": "Primaria",
      "materia": "Apoyo PT",
      "students": "Álvaro Lionel Astupiña, Mª Laura Gonzales, María Cantero, Cristhian Hristov"
    },
    {
      "start": "15:15",
      "end": "16:00",
      "time": "15:15 - 16:00",
      "aula": "5 años C",
      "stage": "Infantil",
      "materia": "Apoyo PT",
      "students": "Mª Fernanda Mendoza, Mª Flor Mendoza"
    }
  ],
  "2": [
    {
      "start": "09:00",
      "end": "10:00",
      "time": "09:00 - 10:00",
      "aula": "5º EP A / 6º EP A",
      "stage": "Primaria",
      "materia": "Apoyo PT",
      "students": "Jhonathan Chino Camacho (5ºA), Ysabella Cardoza (6ºA)"
    },
    {
      "start": "10:30",
      "end": "11:15",
      "time": "10:30 - 11:15",
      "aula": "5 años C",
      "stage": "Infantil",
      "materia": "Apoyo PT",
      "students": "Mª Fernanda Mendoza, Mª Flor Mendoza"
    },
    {
      "start": "11:15",
      "end": "12:25",
      "time": "11:15 - 12:25",
      "aula": "4 años A",
      "stage": "Infantil",
      "materia": "Psicomotricidad (Apoyo PT)",
      "students": "Jeyco Andree Cerda, Jorge de la Purificación"
    },
    {
      "start": "14:00",
      "end": "14:30",
      "time": "14:00 - 14:30",
      "aula": "4 años A",
      "stage": "Infantil",
      "materia": "Apoyo PT",
      "students": "Jeyco Andree Cerda, Jorge de la Purificación"
    },
    {
      "start": "14:30",
      "end": "15:15",
      "time": "14:30 - 15:15",
      "aula": "3 años B",
      "stage": "Infantil",
      "materia": "Apoyo PT",
      "students": "Ian Milan Vaca"
    },
    {
      "start": "15:15",
      "end": "16:15",
      "time": "15:15 - 16:15",
      "aula": "6º EP C",
      "stage": "Primaria",
      "materia": "Apoyo PT",
      "students": "Álvaro Lionel Astupiña, Mª Laura Gonzales, María Cantero, Cristhian Hristov"
    }
  ],
  "3": [
    {
      "start": "08:45",
      "end": "09:10",
      "time": "08:45 - 09:10",
      "aula": "3 años B",
      "stage": "Infantil",
      "materia": "Apoyo PT",
      "students": "Ian Milan Vaca"
    },
    {
      "start": "09:10",
      "end": "10:05",
      "time": "09:10 - 10:05",
      "aula": "4º ESO DIV2",
      "stage": "Secundaria",
      "materia": "Ámbito / PT (2º PDC)",
      "students": "Rubén Pérez (4ºB 2ºPDC), Andrés Nafría (4ºC 2ºPDC)"
    },
    {
      "start": "10:30",
      "end": "11:00",
      "time": "10:30 - 11:00",
      "aula": "5 años C",
      "stage": "Infantil",
      "materia": "Apoyo PT",
      "students": "Mª Fernanda Mendoza, Mª Flor Mendoza"
    },
    {
      "start": "11:00",
      "end": "11:45",
      "time": "11:00 - 11:45",
      "aula": "6º EP C",
      "stage": "Primaria",
      "materia": "Apoyo PT",
      "students": "Álvaro Lionel Astupiña, Mª Laura Gonzales, María Cantero, Cristhian Hristov"
    },
    {
      "start": "11:45",
      "end": "12:30",
      "time": "11:45 - 12:30",
      "aula": "5º EP A / 6º EP A",
      "stage": "Primaria",
      "materia": "Apoyo PT",
      "students": "Jhonathan Chino Camacho (5ºA), Ysabella Cardoza (6ºA)"
    },
    {
      "start": "14:00",
      "end": "14:45",
      "time": "14:00 - 14:45",
      "aula": "4 años A",
      "stage": "Infantil",
      "materia": "Apoyo PT",
      "students": "Jeyco Andree Cerda, Jorge de la Purificación"
    },
    {
      "start": "14:30",
      "end": "15:15",
      "time": "14:30 - 15:15",
      "aula": "3 años B",
      "stage": "Infantil",
      "materia": "Apoyo PT",
      "students": "Ian Milan Vaca"
    },
    {
      "start": "15:30",
      "end": "16:15",
      "time": "15:30 - 16:15",
      "aula": "2º EP C",
      "stage": "Primaria",
      "materia": "Apoyo PT",
      "students": "Juliette Cardoza, Oliver Luna"
    }
  ],
  "4": [
    {
      "start": "09:00",
      "end": "10:05",
      "time": "09:00 - 10:05",
      "aula": "5º EP A / 6º EP A",
      "stage": "Primaria",
      "materia": "Apoyo PT",
      "students": "Jhonathan Chino Camacho (5ºA), Ysabella Cardoza (6ºA)"
    },
    {
      "start": "10:05",
      "end": "11:00",
      "time": "10:05 - 11:00",
      "aula": "2º ESO C",
      "stage": "Secundaria",
      "materia": "Apoyo PT",
      "students": "Carlos Álvarez"
    },
    {
      "start": "11:00",
      "end": "11:30",
      "time": "11:00 - 11:30",
      "aula": "3 años B",
      "stage": "Infantil",
      "materia": "Apoyo PT",
      "students": "Ian Milan Vaca"
    },
    {
      "start": "11:30",
      "end": "12:25",
      "time": "11:30 - 12:25",
      "aula": "4º ESO DIV2",
      "stage": "Secundaria",
      "materia": "Ámbito / PT (2º PDC)",
      "students": "Rubén Pérez (4ºB 2ºPDC), Andrés Nafría (4ºC 2ºPDC)"
    },
    {
      "start": "14:15",
      "end": "15:00",
      "time": "14:15 - 15:00",
      "aula": "4º EP A",
      "stage": "Primaria",
      "materia": "Apoyo PT",
      "students": "Adrian Chuquimango, Dylan Villalba (ACNEAE)"
    },
    {
      "start": "15:15",
      "end": "16:15",
      "time": "15:15 - 16:15",
      "aula": "2º EP C",
      "stage": "Primaria",
      "materia": "Apoyo PT",
      "students": "Juliette Cardoza, Oliver Luna"
    }
  ]
};

export const DANIEL_ASENJO_STUDENTS = [
  {
    "stage": "Educación Infantil",
    "badge": "Infantil",
    "badgeColor": "bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300 border-pink-200 dark:border-pink-800",
    "groups": [
      {
        "curso": "3 años B",
        "tutor": "Patricia Rodríguez",
        "alumnos": [
          "Ian Milan Vaca"
        ]
      },
      {
        "curso": "4 años A",
        "tutor": "Eva Romo",
        "alumnos": [
          "Jeyco Andree Cerda",
          "Jorge de la Purificación"
        ]
      },
      {
        "curso": "5 años C",
        "tutor": "Marta Muñoz",
        "alumnos": [
          "Mª Fernanda Mendoza",
          "Mª Flor Mendoza"
        ]
      }
    ]
  },
  {
    "stage": "Educación Primaria",
    "badge": "Primaria",
    "badgeColor": "bg-indigo-100 text-indigo-700 dark:bg-indigo-900/30 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800",
    "groups": [
      {
        "curso": "2º EP C",
        "tutor": "José Manuel Santos",
        "alumnos": [
          "Juliette Cardoza",
          "Oliver Luna"
        ]
      },
      {
        "curso": "4º EP A",
        "tutor": "Lorena Moreno",
        "alumnos": [
          "Adrian Chuquimango",
          "Dylan Villalba (ACNEAE)"
        ]
      },
      {
        "curso": "5º EP A",
        "tutor": "Beatriz de León",
        "alumnos": [
          "Jhonathan Chino Camacho"
        ]
      },
      {
        "curso": "6º EP A",
        "tutor": "Álvaro Ortega",
        "alumnos": [
          "Ysabella Cardoza"
        ]
      },
      {
        "curso": "6º EP C",
        "tutor": "María Pilar Pérez",
        "alumnos": [
          "Álvaro Lionel Astupiña",
          "Mª Laura Gonzales",
          "María Cantero",
          "Cristhian Hristov"
        ]
      }
    ]
  },
  {
    "stage": "Educación Secundaria (ESO)",
    "badge": "Secundaria",
    "badgeColor": "bg-violet-100 text-violet-700 dark:bg-violet-900/30 dark:text-violet-300 border-violet-200 dark:border-violet-800",
    "groups": [
      {
        "curso": "1º ESO B",
        "tutor": "Secundaria",
        "alumnos": [
          "Derek de León (Matemáticas y Lengua)"
        ]
      },
      {
        "curso": "2º ESO C",
        "tutor": "Secundaria",
        "alumnos": [
          "Carlos Álvarez"
        ]
      },
      {
        "curso": "4º ESO DIV2 (2º PDC)",
        "tutor": "Secundaria / Diversificación",
        "alumnos": [
          "Rubén Pérez (4ºB - 2ºPDC)",
          "Andrés Nafría (4ºC - 2ºPDC)"
        ]
      }
    ]
  }
];

export const DANIEL_ASENJO_OBSERVATIONS = [
  {
    "student": "Jorge de la Purificación (4 años A)",
    "obs": "Lunes y Jueves no viene por la tarde al colegio. Martes, Miércoles y Viernes jornada reducida 09:00 - 12:15."
  },
  {
    "student": "Mª Flor y Mª Fernanda Mendoza (5 años C)",
    "obs": "Miércoles salen a las 15:00 del colegio. Jueves salen a las 15:30."
  }
];
