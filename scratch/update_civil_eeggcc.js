const fs = require('fs');

const mallasPath = 'src/data/mallas.json';
const mallas = JSON.parse(fs.readFileSync(mallasPath, 'utf8'));

// Cursos Nivel 1 (1er Ciclo)
const ciclo1 = [
  {
    id: "civ-101",
    codigo: "1MAT04",
    nombre: "Álgebra Matricial y Geometría Analítica",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 1,
    descripcion: "Estudia el álgebra lineal aplicada, espacios vectoriales en 2D y 3D, transformaciones lineales y sistemas de ecuaciones matriciales. Permite modelar geométricamente problemas estructurales y físicos con rigor analítico. Es la base indispensable para los cursos de física y modelado computacional.",
    tipAlumno: "Entiende vectores en 3D; será vital en Estática y Resistencia de Materiales.",
    autorTip: "Gonzalo V. (7mo Ciclo)"
  },
  {
    id: "civ-102",
    codigo: "1LIN15",
    nombre: "Comunicación Académica",
    creditos: 3.0,
    tipo: "estudios_generales",
    ciclo: 1,
    descripcion: "Fortalece las competencias de redacción académica universitaria, comprensión crítica de textos de divulgación científica y argumentación lógica formal. Clave para comunicar ideas técnicas de ingeniería con claridad, coherencia y precisión profesional en informes y proyectos."
  },
  {
    id: "civ-103",
    codigo: "1MAT05",
    nombre: "Fundamentos de Cálculo",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 1,
    descripcion: "Desarrolla el estudio formal de funciones de variable real, continuidad y límites con demostraciones analíticas rigurosas. Es la base conceptual indispensable para comprender la razón de cambio en todo fenómeno físico e ingenieril. Te prepara para el razonamiento matemático superior.",
    tipAlumno: "Domina el razonamiento formal y análisis de funciones desde la semana 1.",
    autorTip: "Camila T. (5to Ciclo)"
  },
  {
    id: "civ-104",
    codigo: "1FIS01",
    nombre: "Fundamentos de Física",
    creditos: 3.5,
    tipo: "estudios_generales",
    ciclo: 1,
    descripcion: "Analiza las leyes de Newton, estática, cinemática de partículas, trabajo mecánico, conservación de energía y momento lineal. Desarrolla la intuición física para plantear diagramas de cuerpo libre en sistemas mecánicos reales. Es el primer pilar de la física universitaria en ingeniería.",
    tipAlumno: "Los diagramas de cuerpo libre (DCL) deben ser impecables.",
    autorTip: "Mateo R. (8vo Ciclo)"
  },
  {
    id: "civ-105",
    codigo: "1QUI01",
    nombre: "Química 1",
    creditos: 3.5,
    tipo: "estudios_generales",
    ciclo: 1,
    descripcion: "Comprende la estructura atómica, enlaces químicos, estequiometría de reacciones, disoluciones y estados de la materia. Otorga las bases moleculares para comprender las propiedades físico-químicas de los materiales de ingeniería. Esencial para entender el comportamiento de sustancias y compuestos."
  },
  {
    id: "civ-106",
    codigo: "1QUI02",
    nombre: "Laboratorio de Química 1",
    creditos: 0.75,
    tipo: "estudios_generales",
    ciclo: 1,
    prerequisitos: ["1QUI01"],
    descripcion: "Espacio práctico experimental donde aplicarás técnicas analíticas de laboratorio, medición volumétrica y manejo seguro de reactivos químicos. Desarrolla habilidades de rigor experimental, toma de datos y elaboración de informes científicos. Complementa de forma práctica los conceptos de Química 1."
  }
];

// Cursos Nivel 2 (2do Ciclo)
const electivosHum1 = mallas["ingenieria-civil"].ciclos[1].cursos.find(c => c.codigo === "EH1") || {
  id: "civ-208",
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

const ciclo2 = [
  {
    id: "civ-201",
    codigo: "1MAT06",
    nombre: "Cálculo Diferencial",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 2,
    prerequisitos: ["1MAT05", "1MAT04"],
    descripcion: "Aborda la derivada, optimización matemática, teoremas fundamentales del cálculo diferencial e integración indefinida y definida. Aprenderás a modelar tasas de variación y calcular áreas bajo la curva aplicadas a la física y la ingeniería. Fundamental para el análisis dinámico de sistemas."
  },
  {
    id: "civ-202",
    codigo: "1FIL01",
    nombre: "Ciencia y Filosofía",
    creditos: 3.0,
    tipo: "estudios_generales",
    ciclo: 2,
    descripcion: "Reflexiona sobre la epistemología del conocimiento científico, dilemas éticos contemporáneos y la responsabilidad social del quehacer universitario. Promueve una visión humanista y crítica del impacto de la tecnología en la sociedad y el desarrollo sostenible del país."
  },
  {
    id: "civ-203",
    codigo: "1ING02",
    nombre: "Dibujo en Ingeniería",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 2,
    prerequisitos: ["1MAT04"],
    descripcion: "Introduce los principios del diseño ingenieril, dibujo técnico normalizado, proyecciones ortogonales y modelado digital en software CAD 2D/3D. Aprenderás a interpretar y generar planos técnicos de proyectos reales siguiendo normas de representación internacional.",
    tipAlumno: "Los planos son el lenguaje diario del ingeniero civil. Domina AutoCAD.",
    autorTip: "Gonzalo V. (7mo Ciclo)"
  },
  {
    id: "civ-204",
    codigo: "1FIS02",
    nombre: "Física 1",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 2,
    prerequisitos: ["1FIS01", "1MAT06"],
    descripcion: "Profundiza en dinámica rotacional, momento de inercia, gravitación universal, oscilaciones armónicas simples y mecánica de fluidos. Proporciona las herramientas analíticas para entender sistemas en movimiento periódico y equilibrio de fluidos en reposo y movimiento.",
    tipAlumno: "El momento de inercia es la base directa para calcular vigas y columnas.",
    autorTip: "Renzo D. (8vo Ciclo)"
  },
  {
    id: "civ-205",
    codigo: "1FIS03",
    nombre: "Laboratorio de Física 1",
    creditos: 0.5,
    tipo: "estudios_generales",
    ciclo: 2,
    prerequisitos: ["1FIS02"],
    descripcion: "Sesiones experimentales con sensores digitales y software de adquisición de datos para verificar leyes de la cinemática, dinámica y conservación de energía. Desarrolla capacidades de análisis de incertidumbre, propagación de errores y ajuste de curvas experimentales."
  },
  {
    id: "civ-206",
    codigo: "1LIN16",
    nombre: "Trabajo Académico",
    creditos: 3.0,
    tipo: "estudios_generales",
    ciclo: 2,
    prerequisitos: ["1LIN15"],
    descripcion: "Enfocado en la argumentación académica avanzada, investigación documental rigurosa y exposición oral formal frente a auditorios calificados. Te prepara para defender proyectos, sustentar investigaciones y exponer propuestas técnicas con solvencia y seguridad profesional."
  },
  {
    id: "civ-207",
    codigo: "IDM101",
    nombre: "Idioma Extranjero (Nivel Básico de Inglés)",
    creditos: 0,
    tipo: "estudios_generales",
    ciclo: 2,
    descripcion: "Acreditación obligatoria del dominio del idioma inglés en nivel básico/intermedio según el marco de referencia internacional. Esencial para acceder a literatura científica global, manuales de equipos, documentación técnica y programas de intercambio internacional."
  },
  electivosHum1
];

// Cursos Nivel 3 (3er Ciclo)
const electivosHum2 = mallas["ingenieria-civil"].ciclos[2].cursos.find(c => c.codigo === "EH2") || {
  id: "civ-307",
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

const ciclo3 = [
  {
    id: "civ-301",
    codigo: "1MAT07",
    nombre: "Cálculo Integral",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 3,
    prerequisitos: ["1MAT06", "1MAT04"],
    descripcion: "Trata técnicas avanzadas de integración, sucesiones y series infinitas, funciones vectoriales y geometría analítica del espacio tridimensional. Permite calcular volúmenes de revolución, longitudes de arco y convergencia de aproximaciones numéricas en ingeniería."
  },
  {
    id: "civ-302",
    codigo: "1MAT08",
    nombre: "Cálculo en Varias Variables",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 3,
    prerequisitos: ["1MAT07"],
    descripcion: "Estudia funciones de varias variables, derivadas parciales, planos tangentes, optimización con y sin restricciones, integrales dobles y triples aplicadas a centros de masa y momentos de inercia en cuerpos tridimensionales."
  },
  {
    id: "civ-303",
    codigo: "1FIS04",
    nombre: "Física 2",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 3,
    prerequisitos: ["1FIS02", "1FIS03", "1MAT07"],
    descripcion: "Estudia electromagnetismo clásico, electrostática, ley de Gauss, circuitos de corriente continua y alterna, magnetostática e inducción electromagnética. Base fundamental para comprender la energía eléctrica, campos electromagnéticos, motores y circuitos modernos.",
    tipAlumno: "Comprende bien los conceptos de campo y potencial; son la base para instalaciones eléctricas.",
    autorTip: "Renzo D. (8vo Ciclo)"
  },
  {
    id: "civ-304",
    codigo: "1FIS05",
    nombre: "Laboratorio de Física 2",
    creditos: 0.5,
    tipo: "estudios_generales",
    ciclo: 3,
    prerequisitos: ["1FIS04"],
    descripcion: "Experimentos con instrumentos de medición eléctrica (multímetros, osciloscopios, fuentes de poder) para contrastar leyes de Faraday, Kirchhoff y circuitos RLC. Fortalece la destreza experimental en sistemas electromagnéticos y circuitos en laboratorio."
  },
  {
    id: "civ-305",
    codigo: "1CIV43",
    nombre: "Introducción a la Ingeniería Civil",
    creditos: 2.0,
    tipo: "estudios_generales",
    ciclo: 3,
    prerequisitos: ["1ING02"],
    descripcion: "Ofrece un panorama integral sobre el rol del ingeniero civil en el desarrollo de infraestructura sostenible, áreas de especialización (estructuras, geotecnia, hidráulica, transportes, construcción), ética profesional, normatividad y visitas técnicas a grandes obras representativas.",
    tipAlumno: "Aprovecha este curso para conocer de cerca las distintas ramas de la carrera antes de pasar a facultad.",
    autorTip: "Mateo R. (8vo Ciclo)"
  },
  {
    id: "civ-306",
    codigo: "1INF01",
    nombre: "Fundamentos de Programación",
    creditos: 3.0,
    tipo: "estudios_generales",
    ciclo: 3,
    prerequisitos: ["1FIS02"],
    descripcion: "Introduce los fundamentos del pensamiento computacional, diseño de algoritmos estructurados y programación en lenguaje de alto nivel (C++/Python). Permite automatizar cálculos numéricos, procesar matrices de rigidez y modelar problemas analíticos de ingeniería."
  },
  electivosHum2
];

// Cursos Nivel 4 (4to Ciclo)
const electivosTeologia = mallas["ingenieria-civil"].ciclos[3].cursos.find(c => c.codigo === "TEO") || {
  id: "civ-407",
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

const ciclo4 = [
  {
    id: "civ-401",
    codigo: "1MAT09",
    nombre: "Cálculo Aplicado",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 4,
    prerequisitos: ["1MAT08"],
    descripcion: "Cálculo vectorial avanzado y ecuaciones diferenciales aplicadas. Abarca integrales de línea y superficie, teoremas de Green, Stokes y Gauss, y resolución de ecuaciones diferenciales ordinarias esenciales para modelar sistemas mecánicos y estructurales."
  },
  {
    id: "civ-402",
    codigo: "CIV156",
    nombre: "Campo de Topografía",
    creditos: 1.5,
    tipo: "estudios_generales",
    ciclo: 4,
    prerequisitos: ["1CIV42"],
    descripcion: "Práctica intensiva de campo donde aplicarás métodos de levantamiento topográfico real con estación total, teodolito y nivel de precisión. Incluye brigadas de trabajo para procesar datos, cálculo de poligonales y generación de planos topográficos de obra.",
    tipAlumno: "El trabajo en equipo en el campo de topografía es la primera experiencia real de obra de la carrera.",
    autorTip: "Gonzalo V. (7mo Ciclo)"
  },
  {
    id: "civ-403",
    codigo: "ING135",
    nombre: "Estática",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 4,
    prerequisitos: ["1FIS02", "1MAT07"],
    descripcion: "Estudia el equilibrio estático de partículas y cuerpos rígidos en 2D y 3D, análisis de armaduras y marcos, fuerzas internas, centroides, momentos de inercia y trazado riguroso de diagramas de fuerza cortante y momento flector en vigas.",
    tipAlumno: "¡El curso más importante de EEGGCC para Civil! Los diagramas de momento y cortante los usarás en toda la carrera.",
    autorTip: "Mateo R. (8vo Ciclo)"
  },
  {
    id: "civ-404",
    codigo: "1FIS06",
    nombre: "Física 3",
    creditos: 4.5,
    tipo: "estudios_generales",
    ciclo: 4,
    prerequisitos: ["1FIS04", "1FIS05"],
    descripcion: "Explora termodinámica clásica, leyes de los gases, ciclos térmicos, entropía, ondas mecánicas, acústica y principios de óptica física. Clave para comprender la transferencia de calor, dilatación térmica de materiales y propagación de ondas."
  },
  {
    id: "civ-405",
    codigo: "1FIS07",
    nombre: "Laboratorio de Física 3",
    creditos: 0.5,
    tipo: "estudios_generales",
    ciclo: 4,
    prerequisitos: ["1FIS06"],
    descripcion: "Prácticas de laboratorio sobre calorimetría, dilatación térmica, velocidad del sonido, óptica geométrica y difracción de la luz. Te entrena en la medición rigurosa de variables térmicas y fenómenos ondulatorios con instrumental especializado."
  },
  {
    id: "civ-406",
    codigo: "1CIV42",
    nombre: "Topografía",
    creditos: 3.5,
    tipo: "estudios_generales",
    ciclo: 4,
    prerequisitos: ["1ING02", "1MAT04"],
    descripcion: "Teoría y cálculos de planimetría, altimetría, nivelación geométrica y trigonométrica, curvas de nivel, taquimetría y fotogrametría digital para el diseño de trazados viales, obras hidráulicas y explanaciones.",
    tipAlumno: "Aprende bien el cálculo de errores y cierre angular en poligonales.",
    autorTip: "Renzo D. (8vo Ciclo)"
  },
  electivosTeologia
];

mallas["ingenieria-civil"].ciclos[0].cursos = ciclo1;
mallas["ingenieria-civil"].ciclos[1].cursos = ciclo2;
mallas["ingenieria-civil"].ciclos[2].cursos = ciclo3;
mallas["ingenieria-civil"].ciclos[3].cursos = ciclo4;

fs.writeFileSync(mallasPath, JSON.stringify(mallas, null, 2), 'utf8');
console.log('✅ Malla de Ingeniería Civil actualizada con éxito para los Niveles 1 al 4 de EEGGCC según la imagen oficial.');
