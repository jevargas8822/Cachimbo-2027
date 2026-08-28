"use client";

import React, { useState } from "react";
import { MallaCurricular, Curso, Ciclo } from "@/types/carrera";
import { CursoNode } from "./CursoNode";
import { CursoModal } from "./CursoModal";
import { Sparkles, BookOpen, GraduationCap, ChevronRight, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface MallaTimelineProps {
  malla: MallaCurricular;
  nombreCarrera: string;
}

export const MallaTimeline: React.FC<MallaTimelineProps> = ({ malla, nombreCarrera }) => {
  const [selectedCurso, setSelectedCurso] = useState<Curso | null>(null);
  const [etapaFiltro, setEtapaFiltro] = useState<"todos" | "eeggcc" | "facultad">("todos");

  const ciclosFiltrados = malla.ciclos.filter((ciclo) => {
    if (etapaFiltro === "eeggcc") return ciclo.numero <= 4;
    if (etapaFiltro === "facultad") return ciclo.numero >= 5;
    return true;
  });

  const totalCursos = malla.ciclos.reduce((acc, c) => acc + c.cursos.length, 0);
  const totalTips = malla.ciclos.reduce(
    (acc, c) => acc + c.cursos.filter((cur) => cur.tipAlumno).length,
    0
  );

  return (
    <div className="space-y-8">
      {/* Barra de Filtros, Métricas y LEYENDA OFICIAL */}
      <div className="flex flex-col space-y-4 bg-[#F5F6F8] p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-sm">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          {/* Métricas rápidas */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-[#042354] font-['Montserrat',sans-serif] shadow-xs">
              <BookOpen className="w-4 h-4 text-[#042354]" />
              <span>10 Ciclos Académicos</span>
            </div>
            <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#FAD634]/25 border border-[#FAD634]/50 text-xs font-bold text-[#856404] font-['Montserrat',sans-serif]">
              <Sparkles className="w-4 h-4 text-[#856404]" />
              <span>{totalTips} Consejos de Alumnos Mayores</span>
            </div>
          </div>

          {/* Switcher de Etapa */}
          <div className="flex items-center gap-1.5 p-1 bg-white rounded-2xl border border-slate-200 shrink-0 shadow-xs">
            <button
              onClick={() => setEtapaFiltro("todos")}
              className={cn(
                "px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer font-['Montserrat',sans-serif]",
                etapaFiltro === "todos"
                  ? "bg-[#042354] text-white shadow-sm"
                  : "text-slate-600 hover:text-[#042354]"
              )}
            >
              Malla Completa (1-10)
            </button>
            <button
              onClick={() => setEtapaFiltro("eeggcc")}
              className={cn(
                "px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer font-['Montserrat',sans-serif]",
                etapaFiltro === "eeggcc"
                  ? "bg-[#16C78E] text-[#042354] shadow-sm font-extrabold"
                  : "text-emerald-700 hover:text-emerald-900"
              )}
            >
              <span className="w-2 h-2 rounded-full bg-[#16C78E]" />
              EEGGCC (1-4)
            </button>
            <button
              onClick={() => setEtapaFiltro("facultad")}
              className={cn(
                "px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer font-['Montserrat',sans-serif]",
                etapaFiltro === "facultad"
                  ? "bg-[#7F32C8] text-white shadow-sm font-extrabold"
                  : "text-purple-700 hover:text-purple-900"
              )}
            >
              <span className="w-2 h-2 rounded-full bg-[#7F32C8]" />
              Facultad (5-10)
            </button>
          </div>
        </div>

        {/* LEYENDA VISUAL OFICIAL PUCP */}
        <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-slate-500 font-bold uppercase tracking-wider text-[11px] font-['Montserrat',sans-serif]">
            Leyenda de la Malla:
          </span>
          <div className="flex flex-wrap items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border-2 border-[#16C78E] text-[#0b7956] font-bold text-xs shadow-xs font-['Montserrat',sans-serif]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#16C78E]" />
              <span>Estudios Generales Ciencias (EEGGCC)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border-2 border-[#7F32C8] text-[#7F32C8] font-bold text-xs shadow-xs font-['Montserrat',sans-serif]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#7F32C8]" />
              <span>Facultad (Especialidad)</span>
            </div>
            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border-2 border-[#FF9929] text-[#b35900] font-bold text-xs shadow-xs font-['Montserrat',sans-serif]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF9929]" />
              <span>Cursos Electivos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Píldoras de salto rápido a Ciclo */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 shrink-0 mr-1 font-['Montserrat',sans-serif]">
          Ir al Ciclo:
        </span>
        {ciclosFiltrados.map((ciclo) => {
          const isEE = ciclo.numero <= 4;
          return (
            <button
              key={ciclo.numero}
              onClick={() => {
                const el = document.getElementById(`ciclo-${ciclo.numero}`);
                if (el) {
                  el.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className={cn(
                "px-3.5 py-1.5 rounded-xl border text-xs font-bold shrink-0 transition-all font-mono cursor-pointer shadow-xs",
                isEE
                  ? "bg-white border-[#16C78E] text-[#0b7956] hover:bg-emerald-50"
                  : "bg-white border-[#7F32C8] text-[#7F32C8] hover:bg-purple-50"
              )}
            >
              {ciclo.numero}° Ciclo
            </button>
          );
        })}
      </div>

      {/* Grid de Ciclos con Cursos */}
      <div className="space-y-8">
        {ciclosFiltrados.map((ciclo) => {
          const totalCreditosCiclo = ciclo.cursos.reduce(
            (acc, cur) => acc + (cur.creditos || 0),
            0
          );
          const isEEGGCC = ciclo.numero <= 4;

          return (
            <div
              key={ciclo.numero}
              id={`ciclo-${ciclo.numero}`}
              className="scroll-mt-28 space-y-4"
            >
              {/* Header del Ciclo */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-[#F5F6F8] border border-slate-200 shadow-xs">
                <div className="flex items-center gap-3.5">
                  <div
                    className={cn(
                      "w-10 h-10 rounded-2xl flex items-center justify-center font-bold text-base font-['Montserrat',sans-serif] shadow-xs shrink-0",
                      isEEGGCC
                        ? "bg-[#16C78E] text-[#042354] font-extrabold"
                        : "bg-[#7F32C8] text-white font-extrabold"
                    )}
                  >
                    {ciclo.numero}°
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold text-[#042354] font-['Montserrat',sans-serif]">
                        {ciclo.nombre}
                      </h3>
                      <span
                        className={cn(
                          "text-[11px] font-bold px-2.5 py-0.5 rounded-full border font-['Montserrat',sans-serif]",
                          isEEGGCC
                            ? "bg-[#16C78E]/15 text-[#0b7956] border-[#16C78E]/30"
                            : "bg-[#7F32C8]/10 text-[#7F32C8] border-[#7F32C8]/25"
                        )}
                      >
                        {ciclo.etapa}
                      </span>
                    </div>
                    {ciclo.descripcion && (
                      <p className="text-xs text-slate-600 mt-0.5">
                        {ciclo.descripcion}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
                  <span className="text-xs text-slate-700 bg-white px-3 py-1.5 rounded-xl border border-slate-200 font-mono font-semibold shadow-xs">
                    {ciclo.cursos.length} Asignaturas • {totalCreditosCiclo.toFixed(1)} cr. aprox
                  </span>
                </div>
              </div>

              {/* Grid de Cursos del Ciclo */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {ciclo.cursos.map((curso) => (
                  <CursoNode
                    key={curso.id}
                    curso={curso}
                    onClick={() => setSelectedCurso(curso)}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal de Detalle de Curso */}
      <CursoModal
        curso={selectedCurso}
        isOpen={Boolean(selectedCurso)}
        onClose={() => setSelectedCurso(null)}
      />
    </div>
  );
};
