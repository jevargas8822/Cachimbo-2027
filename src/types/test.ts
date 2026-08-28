import { Carrera } from "./carrera";

export interface OpcionTest {
  id: string;
  texto: string;
  subtexto?: string;
  icono?: string;
  carreraPuntos: Record<string, number>; // ej: { "ing-informatica": 3, "diseno-industrial": 1 }
}

export interface PreguntaTest {
  id: number;
  pregunta: string;
  descripcion?: string;
  categoria?: string;
  opciones: OpcionTest[];
}

export interface ResultadoTestItem {
  carreraId: string;
  carrera: Carrera;
  puntos: number;
  porcentaje: number;
  mensajePersonalizado: string;
}

export interface TestState {
  currentQuestionIndex: number;
  respuestas: Record<number, string>; // preguntaId -> opcionId
  isCompleted: boolean;
  resultados: ResultadoTestItem[];
}
