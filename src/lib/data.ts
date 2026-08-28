import { Carrera, MallaCurricular } from "@/types/carrera";
import { PreguntaTest } from "@/types/test";
import { VideoTestimonio } from "@/types/video";

import rawCarreras from "@/data/carreras.json";
import rawAllPucpCarreras from "@/data/pucp-todas-carreras.json";
import rawMallas from "@/data/mallas.json";
import rawQuestions from "@/data/test-questions.json";
import rawVideos from "@/data/videos.json";

// Retorna las 3 carreras de ingeniería principales del proyecto
export const getCarreras = (): Carrera[] => {
  return rawCarreras as unknown as Carrera[];
};

// Retorna todas las carreras de la PUCP para el Test Vocacional
export const getAllPucpCarrerasForTest = (): Carrera[] => {
  return rawAllPucpCarreras as unknown as Carrera[];
};

export const getCarreraById = (id: string): Carrera | undefined => {
  const all = [...(rawCarreras as unknown as Carrera[]), ...(rawAllPucpCarreras as unknown as Carrera[])];
  return all.find((c) => c.id === id);
};

export const getMallaByCarreraId = (carreraId: string): MallaCurricular | undefined => {
  const mallasMap = rawMallas as unknown as Record<string, MallaCurricular>;
  return mallasMap[carreraId];
};

export const getQuestions = (): PreguntaTest[] => {
  return rawQuestions as unknown as PreguntaTest[];
};

export const getVideosByCarreraId = (carreraId: string): VideoTestimonio[] => {
  const videos = rawVideos as unknown as VideoTestimonio[];
  return videos.filter((v) => v.carreraId === carreraId);
};

export const getAllVideos = (): VideoTestimonio[] => {
  return rawVideos as unknown as VideoTestimonio[];
};
