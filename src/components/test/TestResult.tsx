"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import confetti from "canvas-confetti";
import { ResultadoTestItem } from "@/types/test";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CareerIcon } from "@/components/ui/CareerIcon";
import { getMascotasForTestResult } from "@/lib/mascotas-test";
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
        particleCount: 6,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#16C78E", "#042354", "#41B9E4", "#FF9929"],
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#16C78E", "#042354", "#41B9E4", "#FF9929"],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  }, []);

  if (!topResult) return null;

  const sideMascotas = getMascotasForTestResult(
    topResult.carrera.id,
    topResult.carrera.categoria || ""
  );

  return (
    <div className="relative max-w-4xl mx-auto space-y-10 animate-in fade-in duration-200">
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

      {/* ========================================================================= */}
      {/* CONTENEDOR DE LA TARJETA PRINCIPAL FLANQUEADA POR MASCOTAS EN LOS COSTADOS */}
      {/* ========================================================================= */}
      <div className="relative">
        {/* MASCOTA IZQUIERDA (FUERA DE LA TARJETA) */}
        {sideMascotas.left && (
          <div className="hidden lg:flex flex-col items-center absolute -left-52 xl:-left-64 2xl:-left-72 top-1/2 -translate-y-1/2 z-20 animate-mascot-wave select-none pointer-events-none">
            <div className="relative w-48 h-48 xl:w-60 xl:h-60 2xl:w-68 2xl:h-68">
              <Image
                src={sideMascotas.left.imagen}
                alt={sideMascotas.left.nombre}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <div className="bg-[#042354] text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-lg -mt-2 font-['Montserrat',sans-serif]">
              {sideMascotas.left.badge}
            </div>
          </div>
        )}

        {/* MASCOTA DERECHA (FUERA DE LA TARJETA) */}
        {sideMascotas.right && (
          <div className="hidden lg:flex flex-col items-center absolute -right-52 xl:-right-64 2xl:-right-72 top-1/2 -translate-y-1/2 z-20 animate-mascot-wave select-none pointer-events-none">
            <div className="relative w-48 h-48 xl:w-60 xl:h-60 2xl:w-68 2xl:h-68">
              <Image
                src={sideMascotas.right.imagen}
                alt={sideMascotas.right.nombre}
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
            <div className="bg-[#042354] text-white text-xs font-bold px-3.5 py-1 rounded-full shadow-lg -mt-2 font-['Montserrat',sans-serif]">
              {sideMascotas.right.badge}
            </div>
          </div>
        )}

        {/* Tarjeta Destacada Número 1 (100% Limpia sin mascotas por dentro) */}
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
                  <CheckCircle className="w-4 h-4 text-[#16C78E]" />
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
      </div>

      {/* Mascotas visibles en móviles abajo de la tarjeta si la pantalla es pequeña */}
      {(sideMascotas.left || sideMascotas.right) && (
        <div className="flex lg:hidden items-center justify-center gap-8 pt-2">
          {sideMascotas.left && (
            <div className="flex flex-col items-center animate-mascot-wave">
              <div className="relative w-28 h-28">
                <Image
                  src={sideMascotas.left.imagen}
                  alt={sideMascotas.left.nombre}
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>
              <span className="text-xs font-bold text-[#042354] mt-1 font-['Montserrat',sans-serif]">
                {sideMascotas.left.badge}
              </span>
            </div>
          )}

          {sideMascotas.right && sideMascotas.right.nombre !== sideMascotas.left?.nombre && (
            <div className="flex flex-col items-center animate-mascot-wave">
              <div className="relative w-28 h-28">
                <Image
                  src={sideMascotas.right.imagen}
                  alt={sideMascotas.right.nombre}
                  fill
                  className="object-contain drop-shadow-md"
                />
              </div>
              <span className="text-xs font-bold text-[#042354] mt-1 font-['Montserrat',sans-serif]">
                {sideMascotas.right.badge}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Otras Opciones con Alta Compatibilidad (Limpias) */}
      {otherResults.length > 0 && (
        <div className="space-y-4 pt-4">
          <h3 className="text-xl font-bold text-[#042354] font-['Montserrat',sans-serif]">
            Otras Opciones con Alta Afinidad Vocacional
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {otherResults.map((res, index) => (
              <Card
                key={res.carrera.id}
                className="p-5 border-slate-200 bg-white flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold text-slate-500 font-mono">
                      #{index + 2} Opción
                    </span>
                    <span className="text-xs font-bold text-[#042354] bg-[#042354]/10 px-2 py-0.5 rounded-full font-['Montserrat',sans-serif]">
                      {res.porcentaje}% Afinidad
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#042354]/5 border border-[#042354]/15 flex items-center justify-center text-[#042354] shrink-0">
                      <CareerIcon name={res.carrera.icono} className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#042354] font-['Montserrat',sans-serif] line-clamp-1">
                        {res.carrera.nombre}
                      </h4>
                      <span className="text-[10px] text-slate-500 line-clamp-1">
                        {res.carrera.facultad}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 line-clamp-2">
                    {res.carrera.descripcionCorta}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-end">
                  <Link href={`/carreras/${res.carrera.id}`}>
                    <Button variant="ghost" size="sm" className="text-xs text-[#042354] font-bold p-0 h-auto hover:underline">
                      Ver carrera →
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Botón de Reiniciar Test */}
      <div className="text-center pt-6">
        <Button
          onClick={onRestart}
          variant="outline"
          leftIcon={<RotateCcw className="w-4 h-4 text-slate-500" />}
          className="text-xs text-slate-600"
        >
          Volver a realizar el test
        </Button>
      </div>
    </div>
  );
};
