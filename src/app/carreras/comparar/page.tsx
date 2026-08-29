import React, { Suspense } from "react";
import { getCarreras } from "@/lib/data";
import { ComparisonView } from "@/components/comparar/ComparisonView";
import { Scale } from "lucide-react";

export const metadata = {
  title: "Comparador de Especialidades PUCP | Mi Carrera PUCP",
  description: "Compara planes de estudio, enfoque técnico y salidas laborales entre dos especialidades de ingeniería PUCP.",
};

export default function CompararPage() {
  const carreras = getCarreras();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10 bg-white">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#042354]/10 text-xs font-bold text-[#042354] font-['Montserrat',sans-serif]">
          <Scale className="w-4 h-4 text-[#042354]" />
          <span>Comparador de Especialidades PUCP</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#042354] font-['Montserrat',sans-serif]">
          Compara Dos Carreras Lado a Lado
        </h1>
        <p className="text-slate-600 text-sm sm:text-base">
          Analiza qué tienen en común durante Estudios Generales y en qué se diferencian al pasar a Facultad.
        </p>
      </div>

      <Suspense fallback={<div className="text-center text-slate-500 py-10">Cargando comparador...</div>}>
        <ComparisonView carreras={carreras} />
      </Suspense>
    </div>
  );
}
