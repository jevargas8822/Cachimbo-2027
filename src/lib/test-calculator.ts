import { PreguntaTest, ResultadoTestItem } from "@/types/test";
import { Carrera } from "@/types/carrera";

export function calculateTestResults(
  respuestas: Record<number, string>, // preguntaId -> opcionId
  preguntas: PreguntaTest[],
  carreras: Carrera[]
): ResultadoTestItem[] {
  const puntosPorCarrera: Record<string, number> = {};

  // Inicializar todas las carreras disponibles con 0 puntos
  carreras.forEach((c) => {
    puntosPorCarrera[c.id] = 0;
  });

  // Sumar puntos según cada respuesta seleccionada
  preguntas.forEach((pregunta) => {
    const opcionSeleccionadaId = respuestas[pregunta.id];
    if (!opcionSeleccionadaId) return;

    const opcion = pregunta.opciones.find((op) => op.id === opcionSeleccionadaId);
    if (!opcion || !opcion.carreraPuntos) return;

    Object.entries(opcion.carreraPuntos).forEach(([carreraId, puntos]) => {
      puntosPorCarrera[carreraId] = (puntosPorCarrera[carreraId] || 0) + puntos;
    });
  });

  // Encontrar el puntaje máximo obtenido
  const maxPuntos = Math.max(...Object.values(puntosPorCarrera), 1);

  // Ordenar y mapear a resultados
  const resultados: ResultadoTestItem[] = Object.entries(puntosPorCarrera)
    .map(([carreraId, puntos]) => {
      const carrera = carreras.find((c) => c.id === carreraId);
      if (!carrera) return null;

      // Porcentaje relativo al puntaje más alto (o escala ponderada)
      const porcentaje = Math.min(Math.round((puntos / maxPuntos) * 100), 100);

      let mensajePersonalizado = "Tus respuestas reflejan afinidad con las áreas clave de esta carrera.";
      if (porcentaje >= 85) {
        mensajePersonalizado = "¡Match sobresaliente! Tus intereses y habilidades coinciden fuertemente con el perfil de esta carrera.";
      } else if (porcentaje >= 65) {
        mensajePersonalizado = "¡Gran afinidad! Comparte varias de tus principales áreas de interés y enfoque profesional.";
      }

      return {
        carreraId,
        carrera,
        puntos,
        porcentaje,
        mensajePersonalizado,
      };
    })
    .filter((res): res is ResultadoTestItem => res !== null)
    .sort((a, b) => b.puntos - a.puntos);

  return resultados;
}
