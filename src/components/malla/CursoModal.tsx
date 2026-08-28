"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Curso } from "@/types/carrera";
import { Badge } from "@/components/ui/Badge";
import { BookOpen, Sparkles, MessageSquareQuote, ArrowRightCircle, Layers, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface CursoModalProps {
  curso: Curso | null;
  isOpen: boolean;
  onClose: () => void;
}

export const CursoModal: React.FC<CursoModalProps> = ({ curso, isOpen, onClose }) => {
  const [search, setSearch] = useState("");

  if (!curso) return null;

  const isElectivo = curso.tipo === "electivo" || Boolean(curso.opcionesElectivas && curso.opcionesElectivas.length > 0);
  const isEEGGCC = curso.tipo === "estudios_generales" || curso.ciclo <= 4;

  const opcionesFiltradas = curso.opcionesElectivas?.filter(
    (op) =>
      op.nombre.toLowerCase().includes(search.toLowerCase()) ||
      (op.codigo && op.codigo.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth={isElectivo ? "3xl" : "2xl"}
      title={
        <div className="flex items-center gap-3.5">
          <div
            className={cn(
              "w-11 h-11 rounded-2xl flex items-center justify-center text-white shrink-0 shadow-xs",
              isElectivo
                ? "bg-[#FF9929]"
                : isEEGGCC
                ? "bg-[#16C78E] text-[#042354]"
                : "bg-[#7F32C8]"
            )}
          >
            {isElectivo ? <Layers className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#042354] leading-tight font-['Montserrat',sans-serif]">
              {curso.nombre}
            </h3>
            <div className="flex flex-wrap items-center gap-2 mt-1.5">
              {curso.codigo && (
                <span className="text-xs font-mono text-slate-700 font-bold px-2 py-0.5 bg-white rounded border border-slate-300">
                  {curso.codigo}
                </span>
              )}
              {isElectivo ? (
                <Badge variant="orange" size="sm">
                  Curso Electivo
                </Badge>
              ) : isEEGGCC ? (
                <Badge variant="emerald" size="sm">
                  Estudios Generales Ciencias
                </Badge>
              ) : (
                <Badge variant="purple" size="sm">
                  Facultad de Ciencias e Ingeniería
                </Badge>
              )}

              {curso.creditos !== undefined && (
                <span className="text-xs font-mono font-bold text-[#042354] bg-white px-2 py-0.5 rounded border border-slate-300">
                  {curso.creditos > 0 ? `${curso.creditos} Créditos` : "Requisito"}
                </span>
              )}
              <span className="text-xs font-semibold text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                Ciclo {curso.ciclo}
              </span>
            </div>
          </div>
        </div>
      }
    >
      <div className="space-y-6">
        {/* Descripción general */}
        <div className="space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#042354] font-['Montserrat',sans-serif]">
            {isElectivo ? "¿Cómo funciona este espacio electivo?" : "¿Qué aprenderás en este curso?"}
          </h4>
          <p className="text-slate-700 text-sm leading-relaxed bg-[#F5F6F8] p-4 rounded-2xl border border-slate-200">
            {curso.descripcion}
          </p>
        </div>

        {/* Prerrequisitos si existen */}
        {curso.prerequisitos && curso.prerequisitos.length > 0 && (
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 font-['Montserrat',sans-serif]">
              <ArrowRightCircle className="w-4 h-4 text-[#042354]" />
              Requisitos previos
            </h4>
            <div className="flex flex-wrap gap-2">
              {curso.prerequisitos.map((req, i) => (
                <span key={i} className="text-xs font-mono px-3 py-1 rounded-lg bg-slate-100 text-[#042354] font-bold border border-slate-300">
                  {req}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Lista interactiva de opciones electivas disponibles */}
        {isElectivo && curso.opcionesElectivas && curso.opcionesElectivas.length > 0 && (
          <div className="space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#b35900] flex items-center gap-1.5 font-['Montserrat',sans-serif]">
                <Layers className="w-4 h-4 text-[#FF9929]" />
                Cursos disponibles para elegir ({curso.opcionesElectivas.length} opciones)
              </h4>
              {curso.opcionesElectivas.length > 4 && (
                <input
                  type="text"
                  placeholder="Buscar asignatura o código..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="px-3.5 py-1.5 rounded-xl bg-white border border-slate-300 text-xs text-[#1A1A1A] placeholder-slate-400 focus:outline-none focus:border-[#042354]"
                />
              )}
            </div>

            <div className="max-h-72 overflow-y-auto space-y-2 pr-1 custom-scrollbar">
              {opcionesFiltradas?.map((op, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-[#F5F6F8] hover:bg-white border border-slate-200 hover:border-[#FF9929] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center gap-2">
                      {op.codigo && (
                        <span className="font-mono text-xs font-bold text-[#b35900] bg-[#FF9929]/15 px-2 py-0.5 rounded border border-[#FF9929]/30">
                          {op.codigo}
                        </span>
                      )}
                      <span className="text-xs sm:text-sm font-bold text-[#1A1A1A] font-['Montserrat',sans-serif]">
                        {op.nombre}
                      </span>
                    </div>
                    {op.prerequisitos && (
                      <p className="text-[11px] text-slate-500">
                        Requisito: <span className="font-mono text-[#042354] font-semibold">{op.prerequisitos}</span>
                      </p>
                    )}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-700 bg-white px-2.5 py-1 rounded-lg border border-slate-200 shrink-0 self-start sm:self-auto shadow-2xs">
                    {op.creditos} cr.
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Tip de alumno mayor */}
        {curso.tipAlumno ? (
          <div className="relative overflow-hidden rounded-2xl bg-[#FEF9C3]/70 p-5 border-2 border-[#FAD634] shadow-xs">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-[#FAD634] flex items-center justify-center text-[#856404] shrink-0 mt-0.5 shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="space-y-1.5 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#856404] flex items-center gap-1 font-['Montserrat',sans-serif]">
                    <MessageSquareQuote className="w-3.5 h-3.5" />
                    Consejo de alumno mayor
                  </span>
                  {curso.autorTip && (
                    <span className="text-xs text-slate-700 font-bold font-['Montserrat',sans-serif]">
                      — {curso.autorTip}
                    </span>
                  )}
                </div>
                <p className="text-sm text-slate-800 italic leading-relaxed">
                  &ldquo;{curso.tipAlumno}&rdquo;
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </Modal>
  );
};
