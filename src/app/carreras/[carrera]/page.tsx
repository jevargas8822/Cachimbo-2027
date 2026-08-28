"use client";

import React, { useState, use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCarreraById, getMallaByCarreraId, getVideosByCarreraId } from "@/lib/data";
import { MallaTimeline } from "@/components/malla/MallaTimeline";
import { ElectivosSection } from "@/components/malla/ElectivosSection";
import { VideoGallery } from "@/components/videos/VideoGallery";
import { CarreraOverview } from "@/components/carreras/CarreraOverview";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CareerIcon } from "@/components/ui/CareerIcon";
import {
  ArrowLeft,
  BookOpen,
  Layers,
  Video,
  Info,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface PageProps {
  params: Promise<{
    carrera: string;
  }>;
}

export default function CarreraDetailPage({ params }: PageProps) {
  const { carrera: carreraSlug } = use(params);
  const carrera = getCarreraById(carreraSlug);
  const malla = getMallaByCarreraId(carreraSlug);
  const videos = getVideosByCarreraId(carreraSlug);

  const [activeTab, setActiveTab] = useState<"malla" | "electivos" | "videos" | "info">(
    malla ? "malla" : "info"
  );

  if (!carrera) {
    notFound();
  }

  const tabs = [
    ...(malla
      ? [
          { id: "malla", label: "Malla Interactiva", icon: BookOpen, count: "10 Ciclos" },
          { id: "electivos", label: "Cursos Electivos", icon: Layers, count: "EEGGCC & Facultad" },
        ]
      : []),
    { id: "videos", label: "Video Testimonial", icon: Video, count: "1 Video" },
    { id: "info", label: "En qué consiste", icon: Info, count: "Perfil & Campo" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8 bg-white">
      {/* Botón de regreso */}
      <div>
        <Link
          href="/carreras"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#042354] hover:text-[#0A7BC2] px-3.5 py-2 rounded-xl bg-[#F5F6F8] hover:bg-slate-200 border border-slate-200 transition-all font-['Montserrat',sans-serif]"
        >
          <ArrowLeft className="w-4 h-4" />
          Volver a las carreras de ingeniería
        </Link>
      </div>

      {/* Hero Header Institucional de la Carrera */}
      <div className="rounded-3xl bg-[#042354] text-white p-6 sm:p-10 shadow-lg relative overflow-hidden">
        <div className="relative z-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white text-[#042354] flex items-center justify-center shadow-md shrink-0">
                <CareerIcon name={carrera.icono} className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full bg-[#41B9E4] text-[#042354] font-['Montserrat',sans-serif]">
                    {carrera.badge}
                  </span>
                  <span className="text-xs text-slate-300 font-semibold font-['Montserrat',sans-serif]">
                    {carrera.facultad}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white font-['Montserrat',sans-serif]">
                  {carrera.nombre}
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <Link href={`/carreras/comparar?c1=${carrera.id}`} className="self-start sm:self-auto">
                <Button variant="secondary" size="sm" leftIcon={<Layers className="w-4 h-4" />}>
                  Comparar
                </Button>
              </Link>
              <a
                href="https://admision.pucp.edu.pe/carreras"
                target="_blank"
                rel="noopener noreferrer"
                className="self-start sm:self-auto"
              >
                <Button variant="outline" size="sm" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                  Admisión PUCP
                </Button>
              </a>
            </div>
          </div>

          <p className="text-slate-200 text-sm sm:text-base max-w-3xl leading-relaxed">
            {carrera.descripcionCorta}
          </p>

          {/* Navegación por Tabs */}
          <div className="pt-4 border-t border-white/15 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {tabs.map((t) => {
              const Icon = t.icon;
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id as any)}
                  className={cn(
                    "flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shrink-0 cursor-pointer font-['Montserrat',sans-serif]",
                    isActive
                      ? "bg-white text-[#042354] shadow-md"
                      : "bg-[#03183b] text-slate-300 hover:text-white hover:bg-[#062659]"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span>{t.label}</span>
                  <span
                    className={cn(
                      "text-[10px] px-2 py-0.5 rounded-full font-mono font-bold",
                      isActive ? "bg-slate-100 text-[#042354]" : "bg-black/30 text-slate-300"
                    )}
                  >
                    {t.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Contenido según Tab Activa */}
      <div className="pt-2">
        {activeTab === "malla" && malla && (
          <MallaTimeline malla={malla} nombreCarrera={carrera.nombre} />
        )}

        {activeTab === "electivos" && malla && (
          <ElectivosSection
            electivosEEGGCC={malla.electivosEstudiosGenerales}
            electivosFacultad={malla.electivosFacultad}
            nombreCarrera={carrera.nombre}
          />
        )}

        {activeTab === "videos" && (
          <VideoGallery videos={videos} nombreCarrera={carrera.nombre} carreraId={carrera.id} />
        )}

        {activeTab === "info" && (
          <CarreraOverview carrera={carrera} />
        )}
      </div>
    </div>
  );
}
