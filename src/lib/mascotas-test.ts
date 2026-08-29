export interface SideMascota {
  nombre: string;
  imagen: string;
  badge: string;
}

export interface CareerMascotasResult {
  left?: SideMascota;
  right?: SideMascota;
}

export const MASCOTAS_CATALOG: Record<string, SideMascota> = {
  crocky: {
    nombre: "Crocky",
    badge: "🐊 Crocky",
    imagen: "/images/mascota-cocodrilo.png",
  },
  panda: {
    nombre: "Panda",
    badge: "🐼 Panda",
    imagen: "/images/mascota-panda.png",
  },
  castor: {
    nombre: "Castor",
    badge: "🦫 Castor",
    imagen: "/images/mascota-castor.png",
  },
  hipopotamo: {
    nombre: "Hipopótamo",
    badge: "🦛 Hipopótamo",
    imagen: "/images/mascota-hipopotamo.png",
  },
  chuletras: {
    nombre: "Chuletras",
    badge: "🐾 Chuletras",
    imagen: "/images/mascota-chuletras.png",
  },
  lobo: {
    nombre: "Lobo",
    badge: "🐺 Lobo",
    imagen: "/images/mascota-lobo.png",
  },
  tibu: {
    nombre: "Tibu",
    badge: "🦈 Tibu",
    imagen: "/images/mascota-tiburon.png",
  },
  fenix: {
    nombre: "Fénix",
    badge: "🔥 Fénix",
    imagen: "/images/mascota-fenix.png",
  },
  dragon: {
    nombre: "Dragón",
    badge: "🐉 Dragón",
    imagen: "/images/mascota-dragon.png",
  },
  cuervo: {
    nombre: "Cuervo",
    badge: "🦅 Cuervo",
    imagen: "/images/mascota-cuervo.png",
  },
  salamandra: {
    nombre: "Lagarto",
    badge: "🦎 Lagarto",
    imagen: "/images/mascota-gastronomia.png",
  },
  quilla: {
    nombre: "Quilla",
    badge: "🐿️ Quilla",
    imagen: "/images/mascot-pucp.png",
  },
};

export function getMascotasForTestResult(carreraId: string, categoria: string): CareerMascotasResult {
  // 1. Todas las Ingenierías -> Crocky a la izquierda y Panda a la derecha
  if (categoria === "ingenieria" || carreraId.startsWith("ingenieria-")) {
    return {
      left: MASCOTAS_CATALOG.crocky,
      right: MASCOTAS_CATALOG.panda,
    };
  }

  // 2. Arquitectura y Urbanismo -> Castor
  if (carreraId === "arquitectura") {
    return {
      left: MASCOTAS_CATALOG.castor,
      right: MASCOTAS_CATALOG.castor,
    };
  }

  // 3. Ambos Diseños (Diseño Industrial y Diseño Gráfico) -> Hipopótamo
  if (carreraId === "diseno-industrial" || carreraId === "diseno-grafico" || categoria === "diseno" || categoria === "arte") {
    return {
      left: MASCOTAS_CATALOG.hipopotamo,
      right: MASCOTAS_CATALOG.hipopotamo,
    };
  }

  // 4. Derecho -> Chuletras a la izquierda y Lobo a la derecha
  if (carreraId === "derecho") {
    return {
      left: MASCOTAS_CATALOG.chuletras,
      right: MASCOTAS_CATALOG.lobo,
    };
  }

  // 5. Gestión y Alta Dirección -> Chuletras a la izquierda y Tibu a la derecha
  if (carreraId === "gestion") {
    return {
      left: MASCOTAS_CATALOG.chuletras,
      right: MASCOTAS_CATALOG.tibu,
    };
  }

  // 6. Psicología -> Chuletras a la izquierda y Fénix a la derecha
  if (carreraId === "psicologia") {
    return {
      left: MASCOTAS_CATALOG.chuletras,
      right: MASCOTAS_CATALOG.fenix,
    };
  }

  // 7. Economía -> Chuletras a la izquierda y Dragón a la derecha
  if (carreraId === "economia") {
    return {
      left: MASCOTAS_CATALOG.chuletras,
      right: MASCOTAS_CATALOG.dragon,
    };
  }

  // 8. Comunicación Audiovisual y Publicidad -> Chuletras a la izquierda y Cuervo a la derecha
  if (
    carreraId === "comunicacion-audiovisual" ||
    carreraId === "publicidad" ||
    categoria === "comunicaciones"
  ) {
    return {
      left: MASCOTAS_CATALOG.chuletras,
      right: MASCOTAS_CATALOG.cuervo,
    };
  }

  // 9. Gastronomía -> Chuletras a la izquierda y Lagarto a la derecha
  if (carreraId === "gastronomia") {
    return {
      left: MASCOTAS_CATALOG.chuletras,
      right: MASCOTAS_CATALOG.salamandra,
    };
  }

  // Por defecto (si aún no tiene mascota asignada)
  return {
    left: MASCOTAS_CATALOG.quilla,
    right: MASCOTAS_CATALOG.quilla,
  };
}
