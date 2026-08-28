export type TipoCurso = "obligatorio" | "electivo" | "estudios_generales" | "facultad";

export interface OpcionElectiva {
  codigo?: string;
  nombre: string;
  creditos: number;
  prerequisitos?: string;
  area?: string;
  descripcion?: string;
}

export interface Curso {
  id: string;
  codigo?: string;
  nombre: string;
  creditos?: number;
  tipo: TipoCurso;
  ciclo: number;
  descripcion: string;
  tipAlumno?: string;
  autorTip?: string;
  prerequisitos?: string[];
  area?: string;
  opcionesElectivas?: OpcionElectiva[];
}

export interface Ciclo {
  numero: number;
  nombre: string;
  etapa: "Estudios Generales Ciencias" | "Facultad de Ciencias e Ingeniería";
  descripcion?: string;
  cursos: Curso[];
}

export interface GrupoElectivo {
  titulo: string;
  tipo: "estudios_generales" | "facultad";
  creditosRequeridos?: string;
  descripcion?: string;
  cursos: OpcionElectiva[];
}

export interface MallaCurricular {
  carreraId: string;
  totalCiclos: number;
  ciclos: Ciclo[];
  electivosEstudiosGenerales: GrupoElectivo[];
  electivosFacultad: GrupoElectivo[];
}

export interface DiaEnLaVida {
  titulo: string;
  narrativa: string[];
  autor?: string;
  ciclo?: string;
}

export interface Carrera {
  id: string; // slug e.g. 'ingenieria-civil'
  nombre: string;
  facultad: string;
  categoria?: "ingenieria" | "ciencias" | "gestion" | "sociales" | "humanidades" | "artes" | "educacion" | "derecho";
  icono: string; // nombre del icono de Lucide
  color: string; // color hex primario
  gradiente: string; // clases de tailwind para el gradiente
  badge: string;
  descripcionCorta: string;
  descripcionLarga: string[];
  unDiaEnLaVida?: DiaEnLaVida;
  habilidadesClave: string[];
  campoLaboral: string[];
  disponible: boolean;
  tieneMallaDetallada?: boolean;
  tags: string[]; // Usado para el test vocacional
}
