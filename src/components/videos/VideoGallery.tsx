"use client";

import React, { useState } from "react";
import Image from "next/image";
import { VideoTestimonio } from "@/types/video";
import { VideoPlayerModal } from "./VideoPlayerModal";
import { VideoUploadModal } from "./VideoUploadModal";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Play, UploadCloud, User, Clock, Sparkles, MessageSquareQuote } from "lucide-react";

interface VideoGalleryProps {
  videos: VideoTestimonio[];
  carreraId: string;
  nombreCarrera: string;
}

export const VideoGallery: React.FC<VideoGalleryProps> = ({
  videos,
  carreraId,
  nombreCarrera,
}) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoTestimonio | null>(null);
  const [isUploadOpen, setIsUploadOpen] = useState(false);

  const video = videos[0]; // Solo 1 video por carrera

  return (
    <div className="space-y-8">
      {/* Header y CTA de Subir Video */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F5F6F8] p-6 rounded-3xl border border-slate-200 shadow-xs">
        <div>
          <h3 className="text-xl font-bold text-[#042354] font-['Montserrat',sans-serif] flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#042354]" />
            Testimonio en Video de {nombreCarrera}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-xl">
            Conoce la experiencia real contada por un estudiante de ciclo mayor sobre laboratorios, retos y la vida universitaria en la PUCP.
          </p>
        </div>

        <Button
          onClick={() => setIsUploadOpen(true)}
          variant="outline"
          className="shrink-0 text-xs sm:text-sm font-bold"
          leftIcon={<UploadCloud className="w-4 h-4 text-[#042354]" />}
        >
          ¿Eres de ciclo mayor? Sube tu video
        </Button>
      </div>

      {/* Showcase Destacado del Video Único */}
      {!video ? (
        <Card className="text-center py-12 space-y-4 bg-white border-slate-200">
          <p className="text-slate-500 text-sm">
            Aún no hay video para esta sección. ¡Sé el primero en compartir tu experiencia!
          </p>
          <Button onClick={() => setIsUploadOpen(true)} size="sm">
            Subir video
          </Button>
        </Card>
      ) : (
        <div className="max-w-4xl mx-auto">
          <Card
            onClick={() => setSelectedVideo(video)}
            hoverEffect
            className="p-0 overflow-hidden group border-slate-200 bg-white shadow-md hover:shadow-lg cursor-pointer grid grid-cols-1 md:grid-cols-12 gap-0"
          >
            {/* Thumbnail con botón Play (7 columnas) */}
            <div className="md:col-span-7 relative aspect-video w-full overflow-hidden bg-slate-900">
              <Image
                src={video.thumbnail}
                alt={video.titulo}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, 600px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-black/30" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-[#042354] text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:bg-[#0A7BC2] transition-all">
                  <Play className="w-6 h-6 fill-white ml-1" />
                </div>
              </div>

              {/* Badges sobre el thumbnail */}
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                <span className="text-xs font-bold text-white bg-[#042354] px-3 py-1 rounded-full font-['Montserrat',sans-serif] shadow-xs">
                  {video.ciclo}
                </span>
                {video.duracion && (
                  <span className="text-xs font-mono text-white bg-black/70 px-2.5 py-1 rounded-lg backdrop-blur-sm flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {video.duracion}
                  </span>
                )}
              </div>
            </div>

            {/* Info detallada del Video (5 columnas) */}
            <div className="md:col-span-5 p-6 sm:p-7 flex flex-col justify-between space-y-4 bg-white">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#042354] bg-[#042354]/10 px-2.5 py-0.5 rounded-full font-['Montserrat',sans-serif]">
                  <MessageSquareQuote className="w-3.5 h-3.5" />
                  Video Testimonial
                </div>
                <h4 className="text-base sm:text-lg font-bold text-[#042354] group-hover:text-[#0A7BC2] transition-colors leading-snug font-['Montserrat',sans-serif]">
                  {video.titulo}
                </h4>
                {video.resumen && (
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-4">
                    {video.resumen}
                  </p>
                )}
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-700">
                <span className="flex items-center gap-2 font-bold text-slate-800">
                  <User className="w-4 h-4 text-[#042354]" />
                  {video.nombreAlumno}
                </span>
                <span className="text-[#042354] font-bold group-hover:underline flex items-center gap-1 font-['Montserrat',sans-serif]">
                  Reproducir video →
                </span>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Modales */}
      <VideoPlayerModal
        video={selectedVideo}
        isOpen={Boolean(selectedVideo)}
        onClose={() => setSelectedVideo(null)}
      />

      <VideoUploadModal
        carreraId={carreraId}
        nombreCarrera={nombreCarrera}
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
      />
    </div>
  );
};
