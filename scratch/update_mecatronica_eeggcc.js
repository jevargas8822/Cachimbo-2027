const fs = require('fs');

const mallasPath = 'src/data/mallas.json';
const mallas = JSON.parse(fs.readFileSync(mallasPath, 'utf8'));

// Nivel 1 (1er Ciclo) - 6 cursos
const mtrCiclo1 = [
  {
    id: "mtr-101",
    codigo: "1MAT04",
    nombre: "Álgebra Matricial y Geometría Analítica",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 1,
    descripcion: "Estudia el álgebra lineal aplicada, espacios vectoriales en 2D y 3D, transformaciones lineales y sistemas de ecuaciones matriciales. Permite modelar geométricamente cinemática de mecanismos y robótica con rigor analítico.",
    tipAlumno: "Vectores y matrices son la base directa para cinemática de robots y visión artificial.",
    autorTip: "Sebastián P. (8vo Ciclo)"
  },
  {
    id: "mtr-102",
    codigo: "1LIN15",
    nombre: "Comunicación Académica",
    creditos: 3.0,
    tipo: "estudios_generales",
    ciclo: 1,
    descripcion: "Fortalece las competencias de redacción académica universitaria, comprensión crítica de textos científicos y argumentación lógica formal. Clave para documentar planos, reportes técnicos y proyectos mecatrónicos interdisciplinarios."
  },
  {
    id: "mtr-103",
    codigo: "1MAT05",
    nombre: "Fundamentos de Cálculo",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 1,
    descripcion: "Desarrolla el estudio formal de funciones de variable real, continuidad y límites con demostraciones analíticas rigurosas. Es la base conceptual indispensable para comprender la dinámica de sistemas mecatrónicos.",
    tipAlumno: "Domina el razonamiento formal y análisis de funciones desde la semana 1.",
    autorTip: "Lucía A. (6to Ciclo)"
  },
  {
    id: "mtr-104",
    codigo: "1FIS01",
    nombre: "Fundamentos de Física",
    creditos: 3.5,
    tipo: "estudios_generales",
    ciclo: 1,
    descripcion: "Analiza las leyes de Newton, estática, cinemática de partículas, trabajo mecánico, conservación de energía y momento lineal. Desarrolla la intuición física para plantear diagramas de cuerpo libre en mecanismos mecatrónicos."
  },
  {
    id: "mtr-105",
    codigo: "1QUI01",
    nombre: "Química 1",
    creditos: 3.5,
    tipo: "estudios_generales",
    ciclo: 1,
    descripcion: "Comprende la estructura atómica, enlaces químicos, estequiometría de reacciones, disoluciones y estados de la materia. Otorga las bases moleculares para comprender las propiedades físico-químicas de los materiales de manufactura."
  },
  {
    id: "mtr-106",
    codigo: "1QUI02",
    nombre: "Laboratorio de Química 1",
    creditos: 0.75,
    tipo: "estudios_generales",
    ciclo: 1,
    prerequisitos: ["1QUI01"],
    descripcion: "Espacio práctico experimental donde aplicarás técnicas analíticas de laboratorio, medición volumétrica y manejo seguro de reactivos químicos. Desarrolla habilidades de rigor experimental y análisis de datos."
  }
];

// Nivel 2 (2do Ciclo) - 6 cursos + electivo
const electivosHum1Mtr = {
  id: "mtr-207",
  codigo: "EH1",
  nombre: "Electivos de Humanidades 1",
  creditos: 2.0,
  tipo: "electivo",
  ciclo: 2,
  descripcion: "Espacio curricular flexible de 2do Ciclo que te permite seleccionar asignaturas de formación humanística, ciudadana y cultural aprobadas por Estudios Generales Ciencias.",
  opcionesElectivas: [
    { codigo: "1HIS02", nombre: "Historia de la Ciencia", creditos: 2 },
    { codigo: "1HIS03", nombre: "Historia Contemporánea", creditos: 2 },
    { codigo: "1HUM02", nombre: "Ética y Ciudadanía", creditos: 2 },
    { codigo: "1PSI02", nombre: "Motivación y Liderazgo", creditos: 2 },
    { codigo: "1PSI03", nombre: "Desarrollo de Habilidades Personales", creditos: 2 }
  ]
};

const mtrCiclo2 = [
  {
    id: "mtr-201",
    codigo: "1MAT06",
    nombre: "Cálculo Diferencial",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 2,
    prerequisitos: ["1MAT05", "1MAT04"],
    descripcion: "Aborda la derivada, optimización matemática, teoremas fundamentales del cálculo diferencial e integración indefinida y definida. Aprenderás a modelar tasas de variación aplicadas a la cinemática de sistemas mecánicos y electrónicos."
  },
  {
    id: "mtr-202",
    codigo: "1FIL01",
    nombre: "Ciencia y Filosofía",
    creditos: 3.0,
    tipo: "estudios_generales",
    ciclo: 2,
    descripcion: "Reflexiona sobre la epistemología del conocimiento científico, dilemas éticos contemporáneos (incluyendo automatización, robótica e impacto social) y la responsabilidad del ingeniero en el desarrollo sostenible."
  },
  {
    id: "mtr-203",
    codigo: "1ING02",
    nombre: "Dibujo en Ingeniería",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 2,
    prerequisitos: ["1MAT04"],
    descripcion: "Introduce los principios del diseño ingenieril, dibujo técnico normalizado, proyecciones ortogonales y modelado CAD 2D/3D. Aprenderás a diseñar piezas mecánicas y ensambles para fabricación digital y prototipado.",
    tipAlumno: "El modelado CAD 3D es fundamental para diseñar tus primeros robots y carcasas mecatrónicas.",
    autorTip: "Sebastián P. (8vo Ciclo)"
  },
  {
    id: "mtr-204",
    codigo: "1FIS02",
    nombre: "Física 1",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 2,
    prerequisitos: ["1FIS01", "1MAT06"],
    descripcion: "Profundiza en dinámica rotacional, momento de inercia, gravitación universal, oscilaciones armónicas simples y mecánica de fluidos. Proporciona las herramientas analíticas para comprender dinámica de rotores y actuadores."
  },
  {
    id: "mtr-205",
    codigo: "1FIS03",
    nombre: "Laboratorio de Física 1",
    creditos: 0.5,
    tipo: "estudios_generales",
    ciclo: 2,
    prerequisitos: ["1FIS02"],
    descripcion: "Sesiones experimentales con sensores digitales y software de adquisición de datos para verificar leyes de la cinemática, dinámica y conservación de energía. Desarrolla capacidades de análisis experimental e instrumentación."
  },
  {
    id: "mtr-206",
    codigo: "1LIN16",
    nombre: "Trabajo Académico",
    creditos: 3.0,
    tipo: "estudios_generales",
    ciclo: 2,
    prerequisitos: ["1LIN15"],
    descripcion: "Enfocado en la argumentación académica avanzada, investigación documental rigurosa y exposición oral formal frente a auditorios calificados. Te prepara para sustentar proyectos y avances tecnológicos con solvencia."
  },
  electivosHum1Mtr
];

// Nivel 3 (3er Ciclo) - 5 cursos + electivo
const electivosHum2Mtr = {
  id: "mtr-306",
  codigo: "EH2",
  nombre: "Electivos de Humanidades 2",
  creditos: 3.0,
  tipo: "electivo",
  ciclo: 3,
  descripcion: "Espacio curricular de profundización en ciencias humanas y sociales (antropología, literatura, sociología, psicología) aprobado por Estudios Generales Ciencias.",
  opcionesElectivas: [
    { codigo: "1ANT01", nombre: "Antropología Urbana", creditos: 3 },
    { codigo: "1ARQ11", nombre: "Tecnología Prehispánica", creditos: 3 },
    { codigo: "1LIT16", nombre: "Literatura", creditos: 3 },
    { codigo: "1PSI04", nombre: "Psicología", creditos: 3 },
    { codigo: "1SOC01", nombre: "Sociología", creditos: 3 }
  ]
};

const mtrCiclo3 = [
  {
    id: "mtr-301",
    codigo: "1MAT07",
    nombre: "Cálculo Integral",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 3,
    prerequisitos: ["1MAT06", "1MAT04"],
    descripcion: "Trata técnicas avanzadas de integración, sucesiones y series infinitas, funciones vectoriales y geometría analítica del espacio tridimensional. Permite calcular centros de gravedad y momentos de inercia en mecanismos mecatrónicos."
  },
  {
    id: "mtr-302",
    codigo: "1MAT08",
    nombre: "Cálculo en Varias Variables",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 3,
    prerequisitos: ["1MAT07"],
    descripcion: "Estudia funciones de varias variables, derivadas parciales, planos tangentes, optimización multivariable, integrales dobles y triples. Esencial para modelar espacios de trabajo tridimensionales de brazos robóticos."
  },
  {
    id: "mtr-303",
    codigo: "1IEE04",
    nombre: "Diseño Digital",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 3,
    prerequisitos: ["1FIS01", "1MAT04"],
    descripcion: "Estudia el álgebra de Boole, compuertas lógicas, sistemas combinacionales, biestables (flip-flops), contadores, registros y máquinas de estado síncronas. Introduce la lógica digital y circuitos que componen los microcontroladores y procesadores embebidos.",
    tipAlumno: "¡El primer curso de hardware mecatrónico! Domina tablas de verdad, mapas de Karnaugh y máquinas de estados.",
    autorTip: "Lucía A. (6to Ciclo)"
  },
  {
    id: "mtr-304",
    codigo: "1FIS04",
    nombre: "Física 2",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 3,
    prerequisitos: ["1FIS02", "1FIS03", "1MAT07"],
    descripcion: "Estudia electromagnetismo clásico, electrostática, ley de Gauss, circuitos de corriente continua y alterna, magnetostática e inducción electromagnética. Base fundamental para comprender motores eléctricos, sensores electromagnéticos y transformadores."
  },
  {
    id: "mtr-305",
    codigo: "1FIS05",
    nombre: "Laboratorio de Física 2",
    creditos: 0.5,
    tipo: "estudios_generales",
    ciclo: 3,
    prerequisitos: ["1FIS04"],
    descripcion: "Experimentos con instrumentos de medición eléctrica (multímetros, osciloscopios, generadores de señales) para contrastar leyes electromagnéticas y circuitos RLC en laboratorio."
  },
  electivosHum2Mtr
];

// Nivel 4 (4to Ciclo) - 5 cursos + electivo
const electivosTeologiaMtr = {
  id: "mtr-406",
  codigo: "TEO",
  nombre: "Electivos de Teología y Religión",
  creditos: 3.5,
  tipo: "electivo",
  ciclo: 4,
  descripcion: "Espacio de formación ética, humanista y teológica promovido por la universidad para reflexionar sobre el sentido de la vida, la justicia social y el bien común.",
  opcionesElectivas: [
    { codigo: "CDR121", nombre: "Ciencia, Ética y Cristianismo", creditos: 3.5 },
    { codigo: "1CDR01", nombre: "Cultura y Cristianismo", creditos: 3.5 },
    { codigo: "CDR123", nombre: "Pensamiento Cristiano y Realidad Social", creditos: 3.5 },
    { codigo: "TEO111", nombre: "Teología 1", creditos: 3.5 }
  ]
};

const mtrCiclo4 = [
  {
    id: "mtr-401",
    codigo: "1MAT09",
    nombre: "Cálculo Aplicado",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 4,
    prerequisitos: ["1MAT08"],
    descripcion: "Cálculo vectorial avanzado y ecuaciones diferenciales aplicadas. Abarca integrales de línea y superficie, teoremas de Green, Stokes y Gauss, y resolución de ecuaciones diferenciales ordinarias esenciales para modelar sistemas de control y dinámica mecatrónica."
  },
  {
    id: "mtr-402",
    codigo: "1FIS06",
    nombre: "Física 3",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 4,
    prerequisitos: ["1FIS04", "1FIS05"],
    descripcion: "Explora termodinámica clásica, leyes de los gases, ciclos térmicos, entropía, ondas mecánicas, acústica y principios de óptica física. Clave para comprender la transferencia térmica en motores y sensores ultrasónicos/ópticos.",
    tipAlumno: "Comprende la propagación de ondas; te servirá cuando trabajes con sensores ultrasónicos en robótica.",
    autorTip: "Sebastián P. (8vo Ciclo)"
  },
  {
    id: "mtr-403",
    codigo: "1FIS07",
    nombre: "Laboratorio de Física 3",
    creditos: 0.5,
    tipo: "estudios_generales",
    ciclo: 4,
    prerequisitos: ["1FIS06"],
    descripcion: "Prácticas de laboratorio sobre calorimetría, dilatación térmica, velocidad del sonido, óptica geométrica y difracción de la luz. Te entrena en la medición de variables térmicas y ópticas con instrumental de precisión."
  },
  {
    id: "mtr-404",
    codigo: "1INF01",
    nombre: "Fundamentos de Programación",
    creditos: 3.0,
    tipo: "estudios_generales",
    ciclo: 4,
    prerequisitos: ["1MAT04"],
    descripcion: "Introduce los fundamentos del pensamiento computacional, algoritmos estructurados, tipos de datos, control de flujo y programación en C/C++. Permite programar la lógica de control en sistemas embebidos y microcontroladores (Arduino, ESP32, STM32)."
  },
  {
    id: "mtr-405",
    codigo: "ING693",
    nombre: "Mecánica para Ingenieros 1",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 4,
    prerequisitos: ["1FIS02", "1MAT07"],
    descripcion: "Estudia el equilibrio estático de cuerpos rígidos, análisis de fuerzas internas en estructuras y mecanismos articulados, centroides, momentos de inercia y fricción. Base fundamental para el cálculo y dimensionamiento de componentes mecánicos y chasis de robots.",
    tipAlumno: "Los diagramas de cuerpo libre y cálculo de momentos de inercia son indispensables para diseñar brazos y articulaciones mecánicas.",
    autorTip: "Lucía A. (6to Ciclo)"
  },
  electivosTeologiaMtr
];

mallas["ingenieria-mecatronica"].ciclos[0].cursos = mtrCiclo1;
mallas["ingenieria-mecatronica"].ciclos[1].cursos = mtrCiclo2;
mallas["ingenieria-mecatronica"].ciclos[2].cursos = mtrCiclo3;
mallas["ingenieria-mecatronica"].ciclos[3].cursos = mtrCiclo4;

// Re-indexar todos los IDs para que sean 100% únicos y consistentes
const prefixes = {
  'ingenieria-civil': 'civ',
  'ingenieria-informatica': 'inf',
  'ingenieria-mecatronica': 'mtr'
};

for (const [carreraKey, carreraData] of Object.entries(mallas)) {
  const prefix = prefixes[carreraKey] || carreraKey.slice(0, 3);
  carreraData.ciclos.forEach(ciclo => {
    ciclo.cursos.forEach((curso, idx) => {
      curso.id = `${prefix}-${ciclo.numero}${String(idx + 1).padStart(2, '0')}`;
    });
  });
}

fs.writeFileSync(mallasPath, JSON.stringify(mallas, null, 2), 'utf8');
console.log('✅ Ingeniería Mecatrónica EEGGCC actualizada con éxito con IDs únicos.');
