export interface VideoTestimonio {
  id: string;
  carreraId: string;
  titulo: string;
  nombreAlumno: string;
  ciclo: string; // Ej: "8vo Ciclo"
  fotoAlumno?: string;
  thumbnail: string;
  videoUrl: string; // URL de video (YouTube embed, Drive o MP4)
  tipoVideo: "youtube" | "direct" | "iframe";
  destacado?: boolean;
  duracion?: string;
  resumen?: string;
}

export interface VideoSubmissionForm {
  carreraId: string;
  nombreAlumno: string;
  ciclo: string;
  correo: string;
  tituloVideo: string;
  enlaceVideo: string;
  comentarios?: string;
}
