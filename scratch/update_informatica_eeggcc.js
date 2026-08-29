const fs = require('fs');

const mallasPath = 'src/data/mallas.json';
const mallas = JSON.parse(fs.readFileSync(mallasPath, 'utf8'));

// 1. Quitar IDM101 de Ingeniería Civil (Nivel 2)
mallas["ingenieria-civil"].ciclos[1].cursos = mallas["ingenieria-civil"].ciclos[1].cursos.filter(
  c => c.codigo !== "IDM101"
);

// 2. Quitar IDM101 de Ingeniería Mecatrónica (Nivel 2)
mallas["ingenieria-mecatronica"].ciclos[1].cursos = mallas["ingenieria-mecatronica"].ciclos[1].cursos.filter(
  c => c.codigo !== "IDM101"
);

// 3. Configurar Informática EEGGCC (Nivel 1 al 4)

// Nivel 1 (1er Ciclo)
const infCiclo1 = [
  {
    id: "inf-101",
    codigo: "1MAT04",
    nombre: "Álgebra Matricial y Geometría Analítica",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 1,
    descripcion: "Estudia el álgebra lineal aplicada, espacios vectoriales en 2D y 3D, transformaciones lineales y sistemas de ecuaciones matriciales. Permite modelar geométricamente problemas y algoritmos con rigor analítico. Es la base matemática para computación gráfica y ciencia de datos.",
    tipAlumno: "Vectores y matrices serán tu pan de cada día en computación gráfica e IA.",
    autorTip: "Carlos M. (6to Ciclo)"
  },
  {
    id: "inf-102",
    codigo: "1LIN15",
    nombre: "Comunicación Académica",
    creditos: 3.0,
    tipo: "estudios_generales",
    ciclo: 1,
    descripcion: "Fortalece las competencias de redacción académica universitaria, comprensión crítica de textos científicos y argumentación lógica formal. Clave para documentar código, redactar informes técnicos y sustentar proyectos de software."
  },
  {
    id: "inf-103",
    codigo: "1MAT05",
    nombre: "Fundamentos de Cálculo",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 1,
    descripcion: "Desarrolla el estudio formal de funciones de variable real, continuidad y límites con demostraciones analíticas rigurosas. Es la base conceptual indispensable para comprender la razón de cambio y el análisis asintótico.",
    tipAlumno: "Practica límites y continuidad desde el primer día para no complicarte en las prácticas.",
    autorTip: "Valeria S. (7mo Ciclo)"
  },
  {
    id: "inf-104",
    codigo: "1FIS01",
    nombre: "Fundamentos de Física",
    creditos: 3.5,
    tipo: "estudios_generales",
    ciclo: 1,
    descripcion: "Analiza las leyes de Newton, estática, cinemática de partículas, trabajo mecánico, conservación de energía y momento lineal. Desarrolla la intuición analítica para plantear diagramas de cuerpo libre en sistemas reales."
  },
  {
    id: "inf-105",
    codigo: "1QUI01",
    nombre: "Química 1",
    creditos: 3.5,
    tipo: "estudios_generales",
    ciclo: 1,
    descripcion: "Comprende la estructura atómica, enlaces químicos, estequiometría de reacciones, disoluciones y estados de la materia. Otorga las bases moleculares para comprender las propiedades físico-químicas de los materiales semiconductores."
  },
  {
    id: "inf-106",
    codigo: "1QUI02",
    nombre: "Laboratorio de Química 1",
    creditos: 0.75,
    tipo: "estudios_generales",
    ciclo: 1,
    prerequisitos: ["1QUI01"],
    descripcion: "Espacio práctico experimental donde aplicarás técnicas analíticas de laboratorio, medición volumétrica y manejo seguro de reactivos químicos. Desarrolla habilidades de rigor experimental y toma de datos científicos."
  }
];

// Nivel 2 (2do Ciclo)
const electivosHum1Inf = {
  id: "inf-207",
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

const infCiclo2 = [
  {
    id: "inf-201",
    codigo: "1MAT06",
    nombre: "Cálculo Diferencial",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 2,
    prerequisitos: ["1MAT05", "1MAT04"],
    descripcion: "Aborda la derivada, optimización matemática, teoremas fundamentales del cálculo diferencial e integración indefinida y definida. Aprenderás a modelar tasas de variación aplicadas a la modelación y optimización de funciones matemáticas."
  },
  {
    id: "inf-202",
    codigo: "1FIL01",
    nombre: "Ciencia y Filosofía",
    creditos: 3.0,
    tipo: "estudios_generales",
    ciclo: 2,
    descripcion: "Reflexiona sobre la epistemología del conocimiento científico, dilemas éticos contemporáneos (incluyendo ética en algoritmos e inteligencia artificial) y la responsabilidad social del profesional en la era digital."
  },
  {
    id: "inf-203",
    codigo: "1ING02",
    nombre: "Dibujo en Ingeniería",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 2,
    prerequisitos: ["1MAT04"],
    descripcion: "Introduce los principios del diseño ingenieril, dibujo técnico normalizado, proyecciones ortogonales y modelado digital en software CAD 2D/3D. Desarrolla la visión espacial tridimensional y el rigor de representación gráfica."
  },
  {
    id: "inf-204",
    codigo: "1FIS02",
    nombre: "Física 1",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 2,
    prerequisitos: ["1FIS01", "1MAT06"],
    descripcion: "Profundiza en dinámica rotacional, momento de inercia, gravitación universal, oscilaciones armónicas simples y mecánica de fluidos. Proporciona las herramientas analíticas para modelar sistemas físicos en movimiento periódico."
  },
  {
    id: "inf-205",
    codigo: "1FIS03",
    nombre: "Laboratorio de Física 1",
    creditos: 0.5,
    tipo: "estudios_generales",
    ciclo: 2,
    prerequisitos: ["1FIS02"],
    descripcion: "Sesiones experimentales con sensores digitales y software de adquisición de datos para verificar leyes de la cinemática, dinámica y conservación de energía. Desarrolla capacidades de análisis de incertidumbre y ajuste de curvas experimentales."
  },
  {
    id: "inf-206",
    codigo: "1LIN16",
    nombre: "Trabajo Académico",
    creditos: 3.0,
    tipo: "estudios_generales",
    ciclo: 2,
    prerequisitos: ["1LIN15"],
    descripcion: "Enfocado en la argumentación académica avanzada, investigación documental rigurosa y exposición oral formal frente a auditorios calificados. Te prepara para sustentar proyectos técnicos y propuestas de innovación con solvencia profesional."
  },
  electivosHum1Inf
];

// Nivel 3 (3er Ciclo) - 6 cursos
const infCiclo3 = [
  {
    id: "inf-301",
    codigo: "1MAT07",
    nombre: "Cálculo Integral",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 3,
    prerequisitos: ["1MAT06", "1MAT04"],
    descripcion: "Trata técnicas avanzadas de integración, sucesiones y series infinitas, funciones vectoriales y geometría analítica del espacio tridimensional. Permite modelar fenómenos continuos y convergencia de métodos numéricos en ciencias de la computación."
  },
  {
    id: "inf-302",
    codigo: "1MAT08",
    nombre: "Cálculo en Varias Variables",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 3,
    prerequisitos: ["1MAT07"],
    descripcion: "Estudia funciones de varias variables, derivadas parciales, gradientes, optimización multivariable, integrales dobles y triples. Fundamental para comprender el descenso de gradiente en algoritmos de machine learning e inteligencia artificial."
  },
  {
    id: "inf-303",
    codigo: "INF134",
    nombre: "Estructuras Discretas",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 3,
    prerequisitos: ["1MAT04", "1MAT05"],
    descripcion: "Estudia la lógica proposicional y de predicados, teoría de conjuntos, relaciones y funciones, técnicas de demostración matemática, inducción, combinatoria y teoría de grafos y árboles. Es la base matemática indispensable para el análisis de algoritmos, diseño de bases de datos y autómatas.",
    tipAlumno: "¡Curso vital para Informática! Lógica y teoría de grafos se usan en toda la carrera.",
    autorTip: "Valeria S. (7mo Ciclo)"
  },
  {
    id: "inf-304",
    codigo: "1FIS04",
    nombre: "Física 2",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 3,
    prerequisitos: ["1FIS02", "1FIS03", "1MAT07"],
    descripcion: "Estudia electromagnetismo clásico, electrostática, ley de Gauss, circuitos de corriente continua y alterna, magnetostática e inducción electromagnética. Base para comprender el funcionamiento físico del hardware y la microelectrónica."
  },
  {
    id: "inf-305",
    codigo: "1FIS05",
    nombre: "Laboratorio de Física 2",
    creditos: 0.5,
    tipo: "estudios_generales",
    ciclo: 3,
    prerequisitos: ["1FIS04"],
    descripcion: "Experimentos con instrumentos de medición eléctrica (multímetros, osciloscopios, fuentes de poder) para contrastar leyes de Faraday, Kirchhoff y circuitos RLC. Fortalece la destreza experimental en sistemas de circuitos en laboratorio."
  },
  {
    id: "inf-306",
    codigo: "1INF01",
    nombre: "Fundamentos de Programación",
    creditos: 3.0,
    tipo: "estudios_generales",
    ciclo: 3,
    prerequisitos: ["1MAT04"],
    descripcion: "Introduce los fundamentos del pensamiento computacional, diseño de algoritmos estructurados, tipos de datos, control de flujo y modularización en lenguaje de programación (C/Python). Te entrena en la resolución lógica y algorítmica de problemas reales.",
    tipAlumno: "Aprende a modularizar y documentar tu código desde el inicio; te ahorrará horas depurando.",
    autorTip: "Carlos M. (6to Ciclo)"
  }
];

// Nivel 4 (4to Ciclo) - 4 cursos + 2 electivos
const electivosHum2Inf = {
  id: "inf-405",
  codigo: "EH2",
  nombre: "Electivos de Humanidades 2",
  creditos: 3.0,
  tipo: "electivo",
  ciclo: 4,
  descripcion: "Espacio curricular de profundización en ciencias humanas y sociales (antropología, literatura, sociología, psicología) aprobado por Estudios Generales Ciencias.",
  opcionesElectivas: [
    { codigo: "1ANT01", nombre: "Antropología Urbana", creditos: 3 },
    { codigo: "1ARQ11", nombre: "Tecnología Prehispánica", creditos: 3 },
    { codigo: "1LIT16", nombre: "Literatura", creditos: 3 },
    { codigo: "1PSI04", nombre: "Psicología", creditos: 3 },
    { codigo: "1SOC01", nombre: "Sociología", creditos: 3 }
  ]
};

const electivosTeologiaInf = {
  id: "inf-406",
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

const infCiclo4 = [
  {
    id: "inf-401",
    codigo: "1MAT09",
    nombre: "Cálculo Aplicado",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 4,
    prerequisitos: ["1MAT08"],
    descripcion: "Cálculo vectorial avanzado y ecuaciones diferenciales aplicadas. Abarca integrales de línea y superficie, teoremas de Green, Stokes y Gauss, y resolución de ecuaciones diferenciales ordinarias esenciales para modelar sistemas computacionales continuos."
  },
  {
    id: "inf-402",
    codigo: "1FIS06",
    nombre: "Física 3",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 4,
    prerequisitos: ["1FIS04", "1FIS05"],
    descripcion: "Explora termodinámica clásica, leyes de los gases, ciclos térmicos, entropía, ondas mecánicas, acústica y principios de óptica física. Clave para comprender la disipación térmica en centros de datos y procesamiento de señales ópticas y acústicas."
  },
  {
    id: "inf-403",
    codigo: "1FIS07",
    nombre: "Laboratorio de Física 3",
    creditos: 0.5,
    tipo: "estudios_generales",
    ciclo: 4,
    prerequisitos: ["1FIS06"],
    descripcion: "Prácticas de laboratorio sobre calorimetría, dilatación térmica, velocidad del sonido, óptica geométrica y difracción de la luz. Te entrena en la medición rigurosa de variables térmicas y fenómenos ondulatorios con instrumental especializado."
  },
  {
    id: "inf-404",
    codigo: "INF144",
    nombre: "Técnicas de Programación",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 4,
    prerequisitos: ["1INF01"],
    descripcion: "Profundiza en el paradigma de programación estructurada y modular avanzada, punteros, gestión dinámica de memoria, estructuras de datos enlazadas (listas, pilas, colas), recursividad y modularización en lenguaje C/C++. Prepara al estudiante para el desarrollo de software de alto rendimiento.",
    tipAlumno: "¡El curso filtro de EEGGCC! Domina punteros, memoria dinámica y estructuras enlazadas en C.",
    autorTip: "Carlos M. (6to Ciclo)"
  },
  electivosHum2Inf,
  electivosTeologiaInf
];

mallas["ingenieria-informatica"].ciclos[0].cursos = infCiclo1;
mallas["ingenieria-informatica"].ciclos[1].cursos = infCiclo2;
mallas["ingenieria-informatica"].ciclos[2].cursos = infCiclo3;
mallas["ingenieria-informatica"].ciclos[3].cursos = infCiclo4;

fs.writeFileSync(mallasPath, JSON.stringify(mallas, null, 2), 'utf8');
console.log('✅ Informática EEGGCC y eliminación de Idioma Extranjero actualizados con éxito.');
