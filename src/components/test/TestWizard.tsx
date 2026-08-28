"use client";

import React, { useState } from "react";
import { PreguntaTest, ResultadoTestItem } from "@/types/test";
import { Carrera } from "@/types/carrera";
import { calculateTestResults } from "@/lib/test-calculator";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TestResult } from "./TestResult";
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestWizardProps {
  preguntas: PreguntaTest[];
  carreras: Carrera[];
}

export const TestWizard: React.FC<TestWizardProps> = ({ preguntas, carreras }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [respuestas, setRespuestas] = useState<Record<number, string>>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [resultados, setResultados] = useState<ResultadoTestItem[]>([]);

  const currentQuestion = preguntas[currentIndex];
  const totalQuestions = preguntas.length;
  const currentSelectedOption = respuestas[currentQuestion.id];

  const handleSelectOption = (opcionId: string) => {
    setRespuestas((prev) => ({
      ...prev,
      [currentQuestion.id]: opcionId,
    }));
  };

  const handleNext = () => {
    if (currentIndex < totalQuestions - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Finalizar y calcular afinidad
      const res = calculateTestResults(respuestas, preguntas, carreras);
      setResultados(res);
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setRespuestas({});
    setCurrentIndex(0);
    setIsCompleted(false);
    setResultados([]);
  };

  if (isCompleted) {
    return <TestResult resultados={resultados} onRestart={handleRestart} />;
  }

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-in fade-in duration-200">
      {/* Barra de Progreso */}
      <ProgressBar
        current={currentIndex + 1}
        total={totalQuestions}
        className="px-2"
      />

      {/* Tarjeta de Pregunta */}
      <Card className="p-6 sm:p-10 space-y-8 border-slate-200 bg-[#F5F6F8] shadow-sm relative">
        {/* Categoría & Pregunta */}
        <div className="space-y-3">
          {currentQuestion.categoria && (
            <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#042354] uppercase tracking-wider bg-white px-3 py-1 rounded-full border border-slate-200 font-['Montserrat',sans-serif]">
              <Sparkles className="w-3.5 h-3.5 text-[#16C78E]" />
              {currentQuestion.categoria}
            </span>
          )}
          <h2 className="text-xl sm:text-3xl font-bold text-[#042354] font-['Montserrat',sans-serif] leading-snug">
            {currentQuestion.pregunta}
          </h2>
          {currentQuestion.descripcion && (
            <p className="text-sm text-slate-600">
              {currentQuestion.descripcion}
            </p>
          )}
        </div>

        {/* Opciones Clickeables */}
        <div className="space-y-3.5">
          {currentQuestion.opciones.map((opcion) => {
            const isSelected = currentSelectedOption === opcion.id;
            return (
              <button
                key={opcion.id}
                onClick={() => handleSelectOption(opcion.id)}
                className={cn(
                  "w-full text-left p-4 sm:p-5 rounded-2xl border transition-all duration-150 flex items-start gap-4 group cursor-pointer",
                  isSelected
                    ? "bg-white border-2 border-[#042354] shadow-md scale-[1.005]"
                    : "bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300"
                )}
              >
                {/* Radio indicator circle */}
                <div
                  className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-0.5 transition-colors",
                    isSelected
                      ? "border-[#042354] bg-[#042354] text-white"
                      : "border-slate-300 group-hover:border-[#042354] bg-white"
                  )}
                >
                  {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                </div>

                <div className="space-y-1">
                  <p
                    className={cn(
                      "text-sm sm:text-base font-bold transition-colors font-['Montserrat',sans-serif]",
                      isSelected ? "text-[#042354]" : "text-[#1A1A1A] group-hover:text-[#042354]"
                    )}
                  >
                    {opcion.texto}
                  </p>
                  {opcion.subtexto && (
                    <p className="text-xs text-slate-500">
                      {opcion.subtexto}
                    </p>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer con Botones de Navegación */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-200">
          <Button
            variant="ghost"
            onClick={handlePrev}
            disabled={currentIndex === 0}
            leftIcon={<ArrowLeft className="w-4 h-4" />}
            className="text-slate-600"
          >
            Anterior
          </Button>

          <span className="text-xs font-bold text-slate-500 font-mono">
            {currentIndex + 1} de {totalQuestions}
          </span>

          <Button
            variant="primary"
            onClick={handleNext}
            disabled={!currentSelectedOption}
            rightIcon={<ArrowRight className="w-4 h-4" />}
          >
            {currentIndex === totalQuestions - 1 ? "Ver Resultados" : "Siguiente"}
          </Button>
        </div>
      </Card>
    </div>
  );
};
