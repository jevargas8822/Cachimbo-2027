"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import confetti from "canvas-confetti";
import { ResultadoTestItem } from "@/types/test";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CareerIcon } from "@/components/ui/CareerIcon";
import {
  Sparkles,
  Trophy,
  ArrowRight,
  RotateCcw,
  CheckCircle,
} from "lucide-react";

interface TestResultProps {
  resultados: ResultadoTestItem[];
  onRestart: () => void;
}

export const TestResult: React.FC<TestResultProps> = ({ resultados, onRestart }) => {
  const topResult = resultados[0];
  const otherResults = resultados.slice(1, 4); // Top 2, 3 y 4

  useEffect(() => {
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#16C78E", "#042354", "#41B9E4"],
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#16C78E", "#042354", "#41B9E4"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  if (!topResult) return null;

  return (
    <div className="max-w-4xl mx-auto space-y-10 animate-in fade-in duration-200">
      {/* Header de Celebración */}
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#16C78E]/15 border border-[#16C78E]/30 text-xs font-bold text-[#0b7956] font-['Montserrat',sans-serif]">
          <Trophy className="w-4 h-4 text-[#0b7956]" />
          <span>¡Test Vocacional PUCP Completado!</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#042354] font-['Montserrat',sans-serif]">
          Tu Carrera Recomendada
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
          Basado en tus respuestas y aptitudes profesionales, este es tu perfil vocacional principal en la PUCP:
        </p>
      </div>

      {/* Tarjeta Destacada Número 1 */}
      <Card
        className="p-6 sm:p-10 border-2 border-[#042354] bg-white space-y-8 shadow-lg relative overflow-hidden"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-[#042354]/5 border border-[#042354]/15 flex items-center justify-center text-[#042354] shadow-xs shrink-0">
              <CareerIcon name={topResult.carrera.icono} className="w-9 h-9" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2 flex-wrap">
                <Badge variant="navy" size="sm">
                  {topResult.carrera.badge}
                </Badge>
                <span className="text-xs text-[#0b7956] font-bold bg-[#16C78E]/15 px-2.5 py-0.5 rounded-full font-['Montserrat',sans-serif]">
                  #1 Match Principal
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-[#042354] font-['Montserrat',sans-serif]">
                {topResult.carrera.nombre}
              </h3>
              <p className="text-xs text-slate-500 font-semibold font-['Montserrat',sans-serif]">
                {topResult.carrera.facultad}
              </p>
            </div>
          </div>

          {/* Porcentaje de Compatibilidad */}
          <div className="flex sm:flex-col items-center justify-between sm:justify-center p-4 sm:p-5 rounded-2xl bg-[#F5F6F8] border border-slate-200 text-center shrink-0">
            <span className="text-3xl sm:text-4xl font-black text-[#042354] font-['Montserrat',sans-serif]">
              {topResult.porcentaje}%
            </span>
            <span className="text-[11px] uppercase tracking-wider font-bold text-slate-500 mt-0.5 font-['Montserrat',sans-serif]">
              Afinidad
            </span>
          </div>
        </div>

        {/* Mensaje de por qué encajas */}
        <div className="p-5 rounded-2xl bg-[#F5F6F8] border border-slate-200 space-y-2">
          <h4 className="text-xs font-bold uppercase tracking-wider text-[#042354] flex items-center gap-1.5 font-['Montserrat',sans-serif]">
            <Sparkles className="w-4 h-4 text-[#16C78E]" />
            ¿Por qué eres ideal para esta carrera?
          </h4>
          <p className="text-sm text-slate-800 font-medium leading-relaxed">
            {topResult.mensajePersonalizado}
          </p>
          <p className="text-xs text-slate-600 mt-1">
            {topResult.carrera.descripcionCorta}
          </p>
        </div>

        {/* Habilidades que desarrollarás */}
        <div className="space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-['Montserrat',sans-serif]">
            Habilidades clave que potenciarás:
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {topResult.carrera.habilidadesClave.slice(0, 4).map((hab, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs text-slate-800 bg-[#F5F6F8] p-3 rounded-xl border border-slate-200 font-medium"
              >
                <CheckCircle className="w-4 h-4 text-[#16C78E] shrink-0" />
                <span>{hab}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA para ver Malla Interactiva */}
        <div className="pt-2 flex flex-col sm:flex-row gap-4">
          <Link href={`/carreras/${topResult.carrera.id}`} className="flex-1">
            <Button
              size="lg"
              className="w-full font-bold text-sm sm:text-base"
              rightIcon={<ArrowRight className="w-5 h-5" />}
            >
              {topResult.carrera.tieneMallaDetallada
                ? "Explorar Malla Curricular y Videos"
                : "Ver Perfil y Campo Laboral"}
            </Button>
          </Link>
          <Link href="/carreras/comparar" className="sm:w-auto">
            <Button variant="outline" size="lg" className="w-full text-xs sm:text-sm">
              Comparar Carreras
            </Button>
          </Link>
        </div>
      </Card>

      {/* Otras Carreras con Alta Compatibilidad */}
      {otherResults.length > 0 && (
        <div className="space-y-4 pt-4">
          <h3 className="text-xl sm:text-2xl font-bold text-[#042354] font-['Montserrat',sans-serif] text-center sm:text-left">
            Otras Carreras de Alta Afinidad
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherResults.map((item, idx) => (
              <Card
                key={idx}
                hoverEffect
                className="p-5 flex flex-col justify-between space-y-4 border-slate-200 bg-white shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-[#042354]/5 border border-[#042354]/15 flex items-center justify-center text-[#042354]">
                      <CareerIcon name={item.carrera.icono} className="w-5 h-5" />
                    </div>
                    <Badge variant="navy" size="sm">
                      {item.porcentaje}% Afinidad
                    </Badge>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#042354] font-['Montserrat',sans-serif] line-clamp-1">
                      {item.carrera.nombre}
                    </h4>
                    <p className="text-[11px] text-slate-500 font-semibold line-clamp-1">
                      {item.carrera.facultad}
                    </p>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {item.carrera.descripcionCorta}
                  </p>
                </div>

                <Link href={`/carreras/${item.carrera.id}`}>
                  <Button variant="outline" size="sm" className="w-full text-xs" rightIcon={<ArrowRight className="w-3.5 h-3.5" />}>
                    Ver detalles
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Botón para reiniciar */}
      <div className="text-center pt-6">
        <Button
          variant="ghost"
          onClick={onRestart}
          leftIcon={<RotateCcw className="w-4 h-4" />}
          className="text-slate-600 hover:text-[#042354]"
        >
          Volver a realizar el test
        </Button>
      </div>
    </div>
  );
};
