const fs = require('fs');
const path = require('path');

const mallasPath = path.join(__dirname, '../src/data/mallas.json');
const mallas = JSON.parse(fs.readFileSync(mallasPath, 'utf8'));

// Diccionario exhaustivo de descripciones de 3 a 4 líneas por código o nombre
const descriptionsByCode = {
  // EEGGCC Comunes
  "1MAT04": "Estudia el álgebra lineal aplicada, espacios vectoriales en 2D y 3D, transformaciones lineales y sistemas de ecuaciones matriciales. Permite modelar geométricamente problemas estructurales y físicos con rigor analítico. Es la base indispensable para los cursos de física y modelado computacional.",
  "1MAT05": "Desarrolla el estudio formal de funciones de variable real, continuidad y límites con demostraciones analíticas rigurosas. Es la base conceptual indispensable para comprender la razón de cambio en todo fenómeno físico e ingenieril. Te prepara para el razonamiento matemático superior.",
  "1FIS01": "Analiza las leyes de Newton, estática, cinemática de partículas, trabajo mecánico, conservación de energía y momento lineal. Desarrolla la intuición física para plantear diagramas de cuerpo libre en sistemas mecánicos reales. Es el primer pilar de la física universitaria en ingeniería.",
  "1QUI01": "Comprende la estructura atómica, enlaces químicos, estequiometría de reacciones, disoluciones y estados de la materia. Otorga las bases moleculares para comprender las propiedades físico-químicas de los materiales de ingeniería. Esencial para entender el comportamiento de sustancias y compuestos.",
  "1QUI02": "Espacio práctico experimental donde aplicarás técnicas analíticas de laboratorio, medición volumétrica y manejo seguro de reactivos químicos. Desarrolla habilidades de rigor experimental, toma de datos y elaboración de informes científicos. Complementa de forma práctica los conceptos de Química 1.",
  "1LIN15": "Fortalece las competencias de redacción académica universitaria, comprensión crítica de textos de divulgación científica y argumentación lógica formal. Clave para comunicar ideas técnicas de ingeniería con claridad, coherencia y precisión profesional en informes y proyectos.",
  "1MAT06": "Aborda la derivada, optimización matemática, teoremas fundamentales del cálculo diferencial e integración indefinida y definida. Aprenderás a modelar tasas de variación y calcular áreas bajo la curva aplicadas a la física y la ingeniería. Fundamental para el análisis dinámico de sistemas.",
  "1FIS02": "Profundiza en dinámica rotacional, momento de inercia, gravitación universal, oscilaciones armónicas simples y mecánica de fluidos. Proporciona las herramientas analíticas para entender sistemas en movimiento periódico y equilibrio de fluidos en reposo y movimiento.",
  "1FIS03": "Sesiones experimentales con sensores digitales y software de adquisición de datos para verificar leyes de la cinemática, dinámica y conservación de energía. Desarrolla capacidades de análisis de incertidumbre, propagación de errores y ajuste de curvas experimentales.",
  "1ING02": "Introduce los principios del diseño ingenieril, dibujo técnico normalizado, proyecciones ortogonales y modelado digital en software CAD 2D/3D. Aprenderás a interpretar y generar planos técnicos de proyectos reales siguiendo normas de representación internacional.",
  "1LIN16": "Enfocado en la argumentación académica avanzada, investigación documental rigurosa y exposición oral formal frente a auditorios calificados. Te prepara para defender proyectos, sustentar investigaciones y exponer propuestas técnicas con solvencia y seguridad profesional.",
  "1FIL01": "Reflexiona sobre la epistemología del conocimiento científico, dilemas éticos contemporáneos y la responsabilidad social del quehacer universitario. Promueve una visión humanista y crítica del impacto de la tecnología en la sociedad y el desarrollo sostenible del país.",
  "IDM101": "Acreditación obligatoria del dominio del idioma inglés en nivel básico/intermedio según el marco de referencia internacional. Esencial para acceder a literatura científica global, manuales de equipos, documentación técnica y programas de intercambio internacional.",
  "1MAT07": "Trata técnicas avanzadas de integración, sucesiones y series infinitas, funciones vectoriales y geometría analítica del espacio tridimensional. Permite calcular volúmenes de revolución, longitudes de arco y convergencia de aproximaciones numéricas en ingeniería.",
  "1MAT08": "Cubre variables aleatorias, distribuciones de probabilidad continuas y discretas, muestreo estadístico e inferencia de pruebas de hipótesis. Vital para el control de calidad, toma de decisiones bajo incertidumbre, confiabilidad de sistemas y análisis de datos en ingeniería.",
  "1FIS04": "Estudia electromagnetismo clásico, electrostática, ley de Gauss, circuitos de corriente continua y alterna, magnetostática e inducción electromagnética. Base fundamental para comprender la energía eléctrica, campos electromagnéticos, motores y circuitos modernos.",
  "1FIS05": "Experimentos con instrumentos de medición eléctrica (multímetros, osciloscopios, fuentes de poder) para contrastar leyes de Faraday, Kirchhoff y circuitos RLC. Fortalece la destreza experimental en sistemas electromagnéticos y circuitos en laboratorio.",
  "1IEE04": "Enseña lógica algorítmica, estructuras de control, funciones, arreglos y programación estructurada aplicada a la resolución de problemas técnicos. Te capacita para automatizar cálculos matemáticos, procesar datos y crear simulaciones de ingeniería mediante código.",
  "1INF01": "Introduce los fundamentos del pensamiento computacional, diseño de algoritmos modulares, estructuras de datos básicas y resolución de problemas. Aprenderás a traducir requerimientos lógicos en programas computacionales eficientes y correctamente documentados.",
  "1MAT09": "Cálculo multivariable que abarca derivadas parciales, gradientes, optimización con multiplicadores de Lagrange, integrales dobles y triples, y teoremas de Green, Stokes y Gauss. Indispensable para modelar flujos de calor, mecánica continua y dinámica de fluidos.",
  "1FIS06": "Explora termodinámica clásica, leyes de los gases, ciclos térmicos, entropía, ondas mecánicas, acústica y principios de óptica física. Clave para comprender la transferencia de calor, eficiencia de máquinas térmicas y propagación de ondas acústicas y lumínicas.",
  "1FIS07": "Prácticas de laboratorio sobre calorimetría, dilatación térmica, velocidad del sonido, óptica geométrica y difracción de la luz. Te entrena en la medición rigurosa de variables térmicas y fenómenos ondulatorios con instrumental especializado.",
  "ING693": "Analiza el ciclo de vida de proyectos de ingeniería, evaluación de impacto ambiental, sostenibilidad ecológica y marco normativo peruano. Fomenta el diseño de soluciones de infraestructura y tecnología con bajo impacto ecológico y compromiso con la sociedad.",

  // Civil Facultad
  "1CIV01": "Estudia el equilibrio de partículas y cuerpos rígidos, análisis de armaduras, vigas, marcos, fuerzas internas y fricción estática. Es el pilar del diseño estructural que te enseña a calcular si una obra permanece firme y estable ante cargas externas gravitacionales.",
  "1CIV02": "Aborda mineralogía, petrología, geomorfología y riesgos geológicos como fallas activas, deslizamientos y sismicidad regional. Te enseña a reconocer las formaciones rocosas y características del subsuelo para emplazar proyectos civiles de manera segura.",
  "1CIV03": "Enseña técnicas de medición planimétrica y altimétrica del terreno, levantamientos con estación total, nivelación geométrica y tecnologías GPS/GIS. Esencial para trazar carreteras, urbanizaciones, canales y obras de infraestructura sobre la topografía real.",
  "1CIV04": "Analiza esfuerzo, deformación unitaria, torsión, flexión en vigas y transformaciones de esfuerzos mediante el Círculo de Mohr. Permite dimensionar elementos estructurales para que no fallen ni se deformen excesivamente bajo tensión, compresión o corte.",
  "1CIV05": "Comprende propiedades índice, clasificación de suelos (SUCS/AASHTO), permeabilidad, consolidación y presiones efectivas en el terreno. Clave para predecir cómo responderá el suelo bajo el peso de una cimentación y evitar asentamientos perjudiciales.",
  "1CIV06": "Estudia hidrostática, presión de fluidos, principio de conservación de masa y energía, ecuación de Bernoulli y flujo en tuberías y canales abiertos. Base para diseñar sistemas de agua potable, alcantarillado, redes de distribución y obras hidráulicas.",
  "1CIV07": "Profundiza en deflexiones en vigas por métodos de energía, pandeo de columnas esbeltas, recipientes a presión y estados multiaxiales de esfuerzo. Permite evaluar la estabilidad elástica de componentes estructurales complejos bajo diversas combinaciones de carga.",
  "1CIV08": "Estudia la resistencia al corte del suelo, capacidad portante de cimentaciones superficiales y profundas (zapatas y pilotes) y estabilidad de taludes. Vital para diseñar cimentaciones seguras y obras de contención de tierras en laderas y excavaciones profundas.",
  "1CIV09": "Analiza los componentes del concreto (cemento, agua, agregados y aditivos químicos), diseño de mezclas, fraguado, curado y ensayos destructivos. Enseña a formular y controlar la calidad de concretos resistentes, trabajables y durables en obras de edificación.",
  "1CIV10": "Aplica métodos clásicos de análisis estructural (método de fuerzas, método de rigidez y distribución de momentos) a vigas y pórticos hiperestáticos. Te permite determinar diagramas de momento flector y fuerza cortante para el posterior diseño de refuerzo.",
  "1CIV11": "Cubre procesos constructivos en edificaciones y obras viales, movimiento de tierras, encofrados, colocación de acero, vaciado de concreto y seguridad en obra. Desarrolla la capacidad de planificar y supervisar la ejecución física de proyectos civiles.",
  "1CIV12": "Trata la planificación de sistemas viales, diseño geométrico de carreteras en planta y perfil, cálculo de curvas horizontales/verticales y tránsito. Te capacita para proyectar vías de transporte seguras y fluidas según el manual de diseño del MTC.",
  "1CIV13": "Enseña el análisis matricial de estructuras reticulares y continuas, formulación directa de rigidez y modelado por elementos finitos. Capacita para interpretar resultados de software profesional de cálculo estructural (SAP2000, ETABS) con criterio crítico.",
  "1CIV14": "Diseño de elementos de concreto armado como vigas, losas unidireccionales y columnas sometidas a flexión, cortante y flexo-compresión según la norma E.060. Fundamental para el cálculo y detallado del acero de refuerzo en edificaciones sismorresistentes.",
  "1CIV15": "Analiza cuencas hidrográficas, precipitación, escorrentía, balance hídrico, diseño de presas, aliviaderos y obras de captación de agua. Capacita para gestionar los recursos hídricos para abastecimiento poblacional, riego tecnificado y generación hidroeléctrica.",
  "1CIV16": "Profundiza en dinámica de suelos, respuesta sísmica local, licuación de arenas, cimentaciones especiales y anclajes en roca. Permite abordar proyectos de infraestructura pesada como puentes, túneles y puertos sobre terrenos geotécnicamente complejos.",
  "1CIV17": "Diseño de sistemas estructurales avanzados en concreto armado: muros de corte (placas), zapatas combinadas y conectadas, losas bidireccionales y torsión. Completa el dimensionamiento estructural de edificios multifamiliares y comerciales sismorresistentes.",
  "1CIV18": "Estudia el comportamiento y diseño de elementos de acero estructural (vigas, columnas, arriostres), conexiones soldadas y empernadas, y estructuras de madera. Clave para diseñar naves industriales, puentes metálicos, techos de gran luz y edificaciones ligeras.",
  "1CIV19": "Aborda la gestión moderna de proyectos bajo lineamientos PMI y Lean Construction, planificación Last Planner, estimación de costos con S10 y programación Gantt. Te capacita para liderar la gestión económica, contractual y de plazos en megaproyectos de construcción.",
  "1CIV20": "Estudia la dinámica de estructuras ante sismos, espectros de aceleración, grados de libertad y aplicación rigurosa de la norma sísmica peruana E.030. Enseña a concebir y estructurar edificios que protejan la vida humana durante terremotos de gran magnitud.",
  "1CIV21": "Primera etapa del desarrollo del proyecto de grado o tesis profesional bajo la asesoría de docentes especialistas. Incluye el marco teórico, estado del arte, caracterización del problema ingenieril y propuesta metodológica de diseño o investigación.",
  "1CIV22": "Culminación, validación experimental o numérica, redacción formal y sustentación pública del proyecto de tesis en ingeniería civil. Demuestra tu solvencia técnica y criterio profesional para obtener el grado académico de bachiller e iniciar la titulación.",

  // Informática Facultad
  "1INF02": "Estudia estructuras de datos avanzadas como listas enlazadas, árboles balanceados, grafos, tablas hash y análisis de complejidad asintótica (Big O). Desarrolla el pensamiento algorítmico riguroso para escribir software altamente eficiente, escalable y mantenible.",
  "1INF03": "Comprende la organización interna de la CPU, arquitectura del procesador, lenguaje ensamblador, jerarquía de memorias caché y buses del sistema. Permite entender con precisión cómo el hardware ejecuta las instrucciones de software a nivel de bajo nivel.",
  "1INF04": "Profundiza en los paradigmas de programación orientada a objetos, herencia, polimorfismo, encapsulamiento, interfaces y principios de diseño SOLID en Java/C++. Base fundamental para diseñar arquitecturas de software limpias, desacopladas y reutilizables.",
  "1INF05": "Cubre el modelado de datos conceptual, entidad-relación, normalización de tablas, lenguaje SQL avanzado, diseño de esquemas e integridad transaccional ACID. Esencial para construir sistemas que gestionan de forma segura y consistente grandes volúmenes de datos.",
  "1INF06": "Analiza la gestión de procesos, hilos, concurrencia, mecanismos de sincronización (semáforos/mutex), memoria virtual y sistemas de archivos. Enseña cómo los sistemas operativos modernos administran de forma óptima y segura los recursos físicos de la computadora.",
  "1INF07": "Estudia el modelo OSI y TCP/IP, direccionamiento IPv4/IPv6, protocolos de transporte (TCP/UDP), enrutamiento, DNS, HTTP/HTTPS y seguridad en redes. Capacita para diseñar, implementar y diagnosticar la conectividad en infraestructuras digitales corporativas.",
  "1INF08": "Introduce metodologías ágiles de desarrollo (Scrum, Kanban), modelado UML, levantamiento de requerimientos y patrones de diseño de software (GoF). Te enseña a trabajar en equipo construyendo productos de software robustos desde la concepción hasta la entrega.",
  "1INF09": "Aborda técnicas avanzadas de diseño de algoritmos: programación dinámica, algoritmos voraces (Greedy), divide y vencerás y teoría de complejidad NP-completa. Desarrolla habilidades analíticas superiores para resolver problemas computacionales de alta exigencia.",
  "1INF10": "Trata arquitecturas de software modernas (microservicios, arquitecturas hexagonales, event-driven), integración y despliegue continuo (CI/CD) y pruebas unitarias (TDD). Te entrena para diseñar y poner en producción plataformas empresariales resilientes y escalables.",
  "1INF11": "Introduce algoritmos de búsqueda en grafos, búsqueda heurística (A*), juegos, lógica de primer orden, algoritmos genéticos y sistemas de razonamiento. Capacita para crear agentes inteligentes que toman decisiones autónomas en entornos con incertidumbre.",
  "1INF12": "Cubre modelos de cómputo distribuido, tolerancia a fallos, replicación de datos, consistencia eventual, contenedores (Docker/Kubernetes) y servicios en la nube (AWS/GCP). Clave para edificar sistemas distribuidos globales con alta disponibilidad y balanceo de carga.",
  "1INF13": "Estudia criptografía clásica y asimétrica, protocolos de autenticación segura (OAuth/JWT), análisis de vulnerabilidades, pruebas de penetración y seguridad web (OWASP). Capacita para proteger aplicaciones, redes y bases de datos frente a ataques y fugas de información.",
  "1INF14": "Aborda algoritmos de aprendizaje supervisado y no supervisado: regresión lineal/logística, árboles de decisión, redes neuronales profundas y clustering. Enseña a entrenar modelos predictivos capaces de aprender patrones a partir de grandes volúmenes de datos reales.",
  "1INF15": "Primera fase del proyecto de titulación en ingeniería informática donde formularás la arquitectura, marco conceptual y prototipo inicial del sistema. Se trabaja bajo asesoría continua de docentes investigadores especializados en software e inteligencia artificial.",
  "1INF16": "Implementación final, evaluación de rendimiento, pruebas de seguridad, documentación técnica y sustentación pública de la tesis de grado. Representa la culminación de tu formación como ingeniero de software y científico de la computación.",

  // Mecatrónica Facultad
  "1MTR01": "Analiza la cinemática y dinámica de partículas y cuerpos rígidos en el plano y espacio 3D, centros de gravedad, momentos de inercia y energía mecánica. Base analítica para modelar matemáticamente el movimiento y las fuerzas en mecanismos y sistemas mecánicos.",
  "1MTR02": "Estudia circuitos con amplificadores operacionales, semiconductores (diodos, transistores BJT y MOSFET), filtros analógicos y fuentes de alimentación reguladas. Enseña a diseñar circuitos electrónicos para acondicionar señales de sensores y alimentar etapas de potencia.",
  "1MTR03": "Cubre lógica combinacional y secuencial, microcontroladores modernos (ARM Cortex / STM32), periféricos embebidos (ADC, PWM, UART, I2C, SPI) y programación en C embebido. Permite programar el hardware de control para gobernar dispositivos mecatrónicos en tiempo real.",
  "1MTR04": "Aborda el cálculo de esfuerzos mecánicos, concentración de tensiones, fatiga de materiales y dimensionamiento de ejes, engranajes, fajas y rodamientos. Te capacita para diseñar estructuras mecánicas y transmisiones de potencia confiables para robots y maquinaria.",
  "1MTR05": "Estudia el principio de funcionamiento de transductores de posición, aceleración, fuerza, temperatura, visión, así como motores DC, servomotores, paso a paso y neumática. Esencial para conectar los algoritmos digitales con el mundo físico mediante sensores y actuadores.",
  "1MTR06": "Trata el modelado dinámico de sistemas físicos mediante funciones de transferencia, análisis de respuesta temporal y frecuencial (Bode/Nyquist) y sintonización de controladores PID. Enseña a lograr que los sistemas automáticos alcancen estabilidad y precisión de respuesta.",
  "1MTR07": "Cubre la programación de controladores lógicos programables (PLC) industriales mediante lenguajes estandarizados (Ladder, Grafcet), buses industriales y sistemas HMI/SCADA. Te prepara para automatizar procesos productivos en plantas industriales modernas.",
  "1MTR08": "Estudia la cinemática directa e inversa de robots manipuladores, transformaciones homogéneas (Denavit-Hartenberg), jacobianos de velocidad y planificación de trayectorias. Capacita para modelar, simular y programar brazos robóticos en tareas de manufactura y servicio.",
  "1MTR09": "Aborda el control en espacio de estados para sistemas multivariables, controlabilidad, observabilidad, reguladores cuadráticos lineales (LQR) y filtros de Kalman. Permite controlar sistemas dinámicos complejos y no lineales como drones, vehículos autónomos y robots bípedos.",
  "1MTR10": "Metodología de diseño concurrente que integra mecánica de precisión, electrónica de potencia, firmware embebido y algoritmos de control en un único producto. Los estudiantes desarrollan prototipos mecatrónicos completos trabajando en equipos multidisciplinarios.",
  "1MTR11": "Trata el procesamiento digital de imágenes, filtrado espacial, segmentación de objetos, detección de características visuales y reconocimiento con OpenCV. Capacita a los sistemas mecatrónicos y robots para percibir su entorno y tomar decisiones basadas en cámaras.",
  "1MTR12": "Primera etapa de la tesis o proyecto profesional en mecatrónica: formulación del problema tecnológico, diseño de la arquitectura mecatrónica y modelado. Se cuenta con asesoría docente especializada en robótica, automatización y control inteligente.",
  "1MTR13": "Construcción del prototipo funcional, validación experimental de los algoritmos de control, redacción del documento de tesis y sustentación final ante jurado. Acredita tu capacidad como ingeniero mecatrónico para innovar y liderar desarrollos tecnológicos."
};

let updatedCount = 0;

for (const [carreraKey, carreraData] of Object.entries(mallas)) {
  for (const ciclo of carreraData.ciclos) {
    for (const curso of ciclo.cursos) {
      const code = curso.codigo;
      const name = curso.nombre.toLowerCase();

      // Check if we have a direct code match
      if (code && descriptionsByCode[code]) {
        curso.descripcion = descriptionsByCode[code];
        updatedCount++;
      } else if (curso.tipo === 'electivo' || (curso.opcionesElectivas && curso.opcionesElectivas.length > 0)) {
        curso.descripcion = `Espacio curricular flexible de ${ciclo.nombre} que te permite seleccionar asignaturas de profundización o interdisciplinarias entre una amplia lista de opciones aprobadas por la facultad. Te permite orientar tu perfil hacia menciones especializadas y áreas de investigación de vanguardia.`;
        updatedCount++;
      } else if (name.includes('inglés') || name.includes('idioma') || code === 'IDM101') {
        curso.descripcion = descriptionsByCode['IDM101'];
        updatedCount++;
      } else if (name.includes('tesis 1') || name.includes('proyecto de fin de carrera 1') || name.includes('proyecto 1')) {
        curso.descripcion = "Primera etapa del desarrollo del proyecto de grado o tesis profesional bajo la asesoría de docentes especialistas. Incluye el marco teórico, estado del arte, caracterización del problema ingenieril y propuesta metodológica de diseño o investigación.";
        updatedCount++;
      } else if (name.includes('tesis 2') || name.includes('proyecto de fin de carrera 2') || name.includes('proyecto 2')) {
        curso.descripcion = "Culminación, validación experimental o numérica, redacción formal y sustentación pública del proyecto de tesis en ingeniería. Demuestra tu solvencia técnica y criterio profesional para obtener el grado académico de bachiller e iniciar la titulación.";
        updatedCount++;
      } else {
        // Fallback description based on course name
        curso.descripcion = `Asignatura especializada de ${ciclo.nombre} enfocada en el dominio teórico y práctico de los fundamentos de ${curso.nombre}. Desarrolla competencias técnicas analíticas mediante el estudio de casos y resolución de problemas aplicados a la ingeniería moderna.`;
        updatedCount++;
      }
    }
  }
}

fs.writeFileSync(mallasPath, JSON.stringify(mallas, null, 2), 'utf8');
console.log(`Successfully updated ${updatedCount} courses with 3-4 line rich descriptions!`);
