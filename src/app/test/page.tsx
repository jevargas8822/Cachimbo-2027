import React from "react";
import { getQuestions, getAllPucpCarrerasForTest } from "@/lib/data";
import { TestWizard } from "@/components/test/TestWizard";
import { HelpCircle } from "lucide-react";

export const metadata = {
  title: "Test Vocacional PUCP | Mi Carrera PUCP",
  description: "Descubre qué carrera de la PUCP se alinea mejor con tus talentos, pasiones y estilo de trabajo.",
};

export default function TestPage() {
  const preguntas = getQuestions();
  const carreras = getAllPucpCarrerasForTest();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-8 bg-white">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#042354]/10 border border-[#042354]/20 text-xs font-bold text-[#042354] font-['Montserrat',sans-serif]">
          <HelpCircle className="w-4 h-4 text-[#042354]" />
          <span>Test Vocacional Integral PUCP 2027</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#042354] font-['Montserrat',sans-serif]">
          Descubre tu Verdadera Afinidad Vocacional
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
          10 preguntas sobre retos reales, pasiones y formas de resolver problemas para identificar tu especialidad ideal entre todas las carreras de la universidad.
        </p>
      </div>

      {/* Flujo Interactivo */}
      <TestWizard preguntas={preguntas} carreras={carreras} />
    </div>
  );
}
