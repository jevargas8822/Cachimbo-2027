"use client";

import React from "react";
import { Curso } from "@/types/carrera";
import { Sparkles, ArrowRight, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface CursoNodeProps {
  curso: Curso;
  onClick: () => void;
}

export const CursoNode: React.FC<CursoNodeProps> = ({ curso, onClick }) => {
  const hasTip = Boolean(curso.tipAlumno);
  const isElectivo = curso.tipo === "electivo" || Boolean(curso.opcionesElectivas && curso.opcionesElectivas.length > 0);
  const isEEGGCC = curso.tipo === "estudios_generales" || curso.ciclo <= 4;

  return (
    <button
      onClick={onClick}
      className={cn(
        "w-full text-left p-4 rounded-2xl transition-all duration-200 border-2 group relative flex flex-col justify-between h-full",
        "bg-white shadow-sm hover:shadow-md cursor-pointer select-none",
        isElectivo
          ? "border-[#FF9929] hover:bg-amber-50/40 hover:border-[#e68019]"
          : isEEGGCC
          ? "border-[#16C78E] hover:bg-emerald-50/30 hover:border-[#12a876]"
          : "border-[#7F32C8] hover:bg-purple-50/30 hover:border-[#6a25ac]"
      )}
    >
      <div>
        {/* Header: Código & Créditos */}
        <div className="flex items-center justify-between w-full gap-2 mb-2">
          <div className="flex items-center gap-1.5 flex-wrap">
            {curso.codigo && (
              <span
                className={cn(
                  "text-[11px] font-mono font-bold px-2 py-0.5 rounded border",
                  isElectivo
                    ? "text-[#b35900] bg-[#FF9929]/15 border-[#FF9929]/30"
                    : isEEGGCC
                    ? "text-[#0b7956] bg-[#16C78E]/15 border-[#16C78E]/30"
                    : "text-[#7F32C8] bg-[#7F32C8]/10 border-[#7F32C8]/25"
                )}
              >
                {curso.codigo}
              </span>
            )}

            {isElectivo ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#b35900] bg-[#FF9929]/15 px-2 py-0.5 rounded-full border border-[#FF9929]/30 font-['Montserrat',sans-serif]">
                <Layers className="w-2.5 h-2.5" />
                Electivo
              </span>
            ) : isEEGGCC ? (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#0b7956] bg-[#16C78E]/15 px-2 py-0.5 rounded-full border border-[#16C78E]/30 font-['Montserrat',sans-serif]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#16C78E]" />
                EEGGCC
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#7F32C8] bg-[#7F32C8]/10 px-2 py-0.5 rounded-full border border-[#7F32C8]/25 font-['Montserrat',sans-serif]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7F32C8]" />
                Facultad
              </span>
            )}

            {hasTip && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#042354] bg-[#FAD634] px-1.5 py-0.5 rounded-full shadow-2xs font-['Montserrat',sans-serif]">
                <Sparkles className="w-2.5 h-2.5 text-[#042354]" />
                Tip
              </span>
            )}
          </div>

          <span className="text-[11px] font-bold text-slate-600 font-mono shrink-0">
            {curso.creditos !== undefined ? (curso.creditos > 0 ? `${curso.creditos} cr.` : "Req.") : ""}
          </span>
        </div>

        {/* Nombre del curso */}
        <h4 className="text-sm font-bold text-[#1A1A1A] group-hover:text-[#042354] transition-colors leading-snug line-clamp-2 mb-1 font-['Montserrat',sans-serif]">
          {curso.nombre}
        </h4>
      </div>

      {/* Footer: Etapa y CTA */}
      <div className="flex items-center justify-between w-full mt-3 pt-2 border-t border-slate-100 text-[11px]">
        <span
          className={cn(
            "font-semibold font-['Montserrat',sans-serif]",
            isElectivo
              ? "text-[#b35900]"
              : isEEGGCC
              ? "text-[#0b7956]"
              : "text-[#7F32C8]"
          )}
        >
          {isElectivo ? "Ver opciones" : isEEGGCC ? "Ciclo Base" : "Especialidad"}
        </span>
        <span className="text-slate-500 group-hover:text-[#042354] flex items-center gap-1 font-bold group-hover:translate-x-0.5 transition-all">
          Detalles <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </button>
  );
};
