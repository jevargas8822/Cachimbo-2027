import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Sparkles, Compass, BookOpen, MessageSquareText, ArrowRight, Layers, CheckCircle2, Heart } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      {/* Hero Section Institucional con Mascota PUCP */}
      <section className="relative overflow-hidden py-12 lg:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-100 bg-gradient-to-b from-[#F5F6F8] via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Columna Izquierda: Textos y Acciones */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Top Pill / Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-bold text-[#042354] shadow-xs font-['Montserrat',sans-serif]">
                <span className="w-2 h-2 rounded-full bg-[#16C78E]" />
                <span>Cachimbo PUCP 2027 • Construye para el que viene</span>
              </div>

              {/* Main Title */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#042354] font-['Montserrat',sans-serif] leading-[1.12]">
                Conoce tu carrera{" "}
                <span className="text-[#0A7BC2]">
                  antes de vivirla
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Explora las mallas curriculares oficiales de 10 ciclos (Estudios Generales y Facultad) con consejos de alumnos mayores, haz el test vocacional integral y descubre de qué trata tu especialidad de verdad.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
                <Link href="/test" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto text-base font-bold shadow-md" rightIcon={<ArrowRight className="w-5 h-5" />}>
                    Hacer Test Vocacional PUCP
                  </Button>
                </Link>
                <Link href="/carreras" className="w-full sm:w-auto">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto text-base font-bold" leftIcon={<Compass className="w-5 h-5 text-[#042354]" />}>
                    Explorar Carreras y Mallas
                  </Button>
                </Link>
              </div>

              {/* Mini Highlights */}
              <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-600 font-['Montserrat',sans-serif]">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16C78E]" />
                  Mallas Oficiales 100% Reales
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#16C78E]" />
                  Consejos de Alumnos Mayores
                </span>
              </div>
            </div>

            {/* Columna Derecha: Mascota Ardilla PUCP Saludando */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
              {/* Bocadillo de diálogo animado */}
              <div className="relative mb-3 animate-bubble-float z-20 max-w-xs sm:max-w-sm">
                <div className="bg-[#042354] text-white px-5 py-3 rounded-2xl shadow-lg border border-[#0A7BC2]/30 relative text-center">
                  <p className="text-xs sm:text-sm font-bold font-['Montserrat',sans-serif] leading-snug">
                    ¡Hola Cachimbo! 👋 Te doy la bienvenida a la PUCP. ¿Listo para descubrir tu carrera?
                  </p>
                  <span className="text-[10px] text-emerald-300 font-medium block mt-1">
                    🐿️ Quilla
                  </span>
                  {/* Triangulito de bocadillo */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#042354] rotate-45 border-r border-b border-[#0A7BC2]/30" />
                </div>
              </div>

              {/* Mascota con animación de saludo suave */}
              <div className="relative group cursor-pointer">
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-92 lg:h-92">
                  <Image
                    src="/images/mascot-pucp.png"
                    alt="Mascota Quilla"
                    fill
                    className="object-contain animate-mascot-wave drop-shadow-xl"
                    priority
                  />
                </div>

                {/* Sombra suave de suelo */}
                <div className="w-48 sm:w-60 h-4 bg-slate-300/40 rounded-full blur-md mx-auto -mt-2" />
              </div>
            </div>
          </div>

          {/* Value Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-14 text-left">
            <Card hoverEffect className="border-slate-200 bg-white p-6 space-y-3 shadow-sm">
              <div className="w-11 h-11 rounded-2xl bg-[#16C78E]/15 text-[#0b7956] flex items-center justify-center font-bold">
                <BookOpen className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#042354] font-['Montserrat',sans-serif]">Mallas Interactivas</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Navega los 10 ciclos oficiales (Estudios Generales y Facultad), electivos y descripciones de cada materia.
              </p>
            </Card>

            <Card hoverEffect className="border-slate-200 bg-white p-6 space-y-3 shadow-sm">
              <div className="w-11 h-11 rounded-2xl bg-[#042354]/10 text-[#042354] flex items-center justify-center font-bold">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#042354] font-['Montserrat',sans-serif]">Test Vocacional</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                10 preguntas calibradas basadas en todas las facultades de la PUCP para medir tu afinidad profesional real.
              </p>
            </Card>

            <Card hoverEffect className="border-slate-200 bg-white p-6 space-y-3 shadow-sm">
              <div className="w-11 h-11 rounded-2xl bg-[#41B9E4]/20 text-[#02688f] flex items-center justify-center font-bold">
                <MessageSquareText className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-[#042354] font-['Montserrat',sans-serif]">Voz de Alumnos</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Videos y testimonios sinceros sobre laboratorios, exámenes y qué esperar del día a día universitario.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
