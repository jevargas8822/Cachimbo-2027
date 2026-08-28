"use client";

import React from "react";
import { Modal } from "@/components/ui/Modal";
import { VideoTestimonio } from "@/types/video";
import { getYouTubeEmbedUrl } from "@/lib/video-utils";
import { Play, User, Calendar } from "lucide-react";

interface VideoPlayerModalProps {
  video: VideoTestimonio | null;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoPlayerModal: React.FC<VideoPlayerModalProps> = ({
  video,
  isOpen,
  onClose,
}) => {
  if (!video) return null;

  const embedUrl = getYouTubeEmbedUrl(video.videoUrl);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="4xl"
      title={
        <div className="flex items-center gap-3.5">
          <div className="w-10 h-10 rounded-xl bg-[#042354] text-white flex items-center justify-center shrink-0 shadow-xs">
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-[#042354] font-['Montserrat',sans-serif] line-clamp-1">
              {video.titulo}
            </h3>
            <div className="flex items-center gap-3 mt-1 text-xs text-slate-500 font-medium">
              <span className="flex items-center gap-1 font-bold text-slate-800">
                <User className="w-3.5 h-3.5 text-[#042354]" />
                {video.nombreAlumno}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {video.ciclo}
              </span>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-4">
        {/* Contenedor del video 16:9 responsivo */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-slate-200 shadow-md">
          <iframe
            src={embedUrl}
            title={video.titulo}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute inset-0 w-full h-full border-0"
          />
        </div>

        {/* Resumen o descripción del testimonio */}
        {video.resumen && (
          <div className="p-4 rounded-xl bg-[#F5F6F8] border border-slate-200 text-sm text-slate-700 leading-relaxed">
            <p className="font-bold text-[#042354] text-xs uppercase tracking-wider mb-1 font-['Montserrat',sans-serif]">
              En este video:
            </p>
            <p>{video.resumen}</p>
          </div>
        )}
      </div>
    </Modal>
  );
};
