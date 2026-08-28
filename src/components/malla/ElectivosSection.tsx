"use client";

import React, { useState } from "react";
import { GrupoElectivo } from "@/types/carrera";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { BookMarked, GraduationCap, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

interface ElectivosSectionProps {
  electivosEEGGCC: GrupoElectivo[];
  electivosFacultad: GrupoElectivo[];
  nombreCarrera: string;
}

export const ElectivosSection: React.FC<ElectivosSectionProps> = ({
  electivosEEGGCC,
  electivosFacultad,
  nombreCarrera,
}) => {
  const [tab, setTab] = useState<"facultad" | "eeggcc">("facultad");

  const gruposActivos = tab === "facultad" ? electivosFacultad : electivosEEGGCC;

  return (
    <div className="space-y-8">
      {/* Header explicativo */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-[#F5F6F8] p-6 rounded-3xl border border-slate-200 shadow-xs">
        <div>
          <h3 className="text-xl font-bold text-[#042354] font-['Montserrat',sans-serif] flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#FF9929]" />
            Catálogo de Cursos Electivos de {nombreCarrera}
          </h3>
          <p className="text-sm text-slate-600 mt-1 max-w-2xl">
            Tanto en Estudios Generales como en Facultad puedes personalizar tu formación eligiendo asignaturas de tu preferencia según tu área de especialización.
          </p>
        </div>

        {/* Switcher de etapa */}
        <div className="flex items-center gap-1.5 p-1 bg-white rounded-2xl border border-slate-200 shrink-0 shadow-xs">
          <button
            onClick={() => setTab("facultad")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer font-['Montserrat',sans-serif]",
              tab === "facultad"
                ? "bg-[#7F32C8] text-white shadow-sm"
                : "text-slate-600 hover:text-[#042354]"
            )}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            Electivos de Facultad
          </button>
          <button
            onClick={() => setTab("eeggcc")}
            className={cn(
              "px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer font-['Montserrat',sans-serif]",
              tab === "eeggcc"
                ? "bg-[#16C78E] text-[#042354] shadow-sm font-extrabold"
                : "text-slate-600 hover:text-[#042354]"
            )}
          >
            <BookMarked className="w-3.5 h-3.5" />
            Electivos de EEGGCC
          </button>
        </div>
      </div>

      {/* Lista de grupos de electivos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {gruposActivos.map((grupo, idx) => (
          <Card key={idx} className="space-y-4 border-slate-200 hover:border-slate-300 p-6 bg-white shadow-sm">
            <div className="flex items-start justify-between gap-2 pb-3 border-b border-slate-100">
              <div>
                <h4 className="text-base font-bold text-[#042354] font-['Montserrat',sans-serif]">{grupo.titulo}</h4>
                {grupo.descripcion && <p className="text-xs text-slate-500 mt-0.5">{grupo.descripcion}</p>}
              </div>
              {grupo.creditosRequeridos && (
                <Badge variant={tab === "eeggcc" ? "emerald" : "purple"} size="sm">
                  {grupo.creditosRequeridos}
                </Badge>
              )}
            </div>

            <div className="space-y-2.5">
              {grupo.cursos.map((curso, cIdx) => (
                <div
                  key={cIdx}
                  className="flex items-center justify-between p-3.5 rounded-xl bg-[#F5F6F8] hover:bg-slate-100/80 border border-slate-200 transition-all text-xs"
                >
                  <div className="space-y-0.5 pr-2">
                    <div className="flex items-center gap-2">
                      {curso.codigo && (
                        <span className="font-mono font-bold text-[#042354] bg-white px-2 py-0.5 rounded border border-slate-300">
                          {curso.codigo}
                        </span>
                      )}
                      <span className="font-bold text-[#1A1A1A] font-['Montserrat',sans-serif]">{curso.nombre}</span>
                    </div>
                    {curso.prerequisitos && (
                      <p className="text-[11px] text-slate-500">
                        Req: <span className="font-mono text-[#042354] font-semibold">{curso.prerequisitos}</span>
                      </p>
                    )}
                  </div>
                  <span className="font-mono font-bold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shrink-0 self-start sm:self-auto shadow-2xs">
                    {curso.creditos} cr.
                  </span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
