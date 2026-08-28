import React from "react";
import Link from "next/link";
import { getCarreras } from "@/lib/data";
import { CarreraCard } from "@/components/carreras/CarreraCard";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { BookOpen, Sparkles, ArrowRight, Layers } from "lucide-react";

export const metadata = {
  title: "Carreras de Ingeniería PUCP | Cachimbo 2027",
  description: "Descubre las mallas curriculares interactivas, cursos electivos e inglés de Ingeniería Civil, Informática y Mecatrónica.",
};

export default function CarrerasPage() {
  const carreras = getCarreras();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 space-y-12 bg-white">
      {/* Header de la sección */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#042354]/10 text-xs font-bold text-[#042354] font-['Montserrat',sans-serif]">
          <BookOpen className="w-4 h-4 text-[#042354]" />
          <span>Mallas Curriculares Oficiales PUCP (10 Ciclos)</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-[#042354] font-['Montserrat',sans-serif]">
          Explora las Especialidades de Ingeniería
        </h1>
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
          Navega la línea de tiempo completa desde los primeros ciclos en Estudios Generales (con electivos y acreditación de inglés) hasta los cursos avanzados y menciones de Facultad.
        </p>
      </div>

      {/* Grid de las 3 Carreras Principales */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {carreras.map((carrera) => (
          <CarreraCard key={carrera.id} carrera={carrera} />
        ))}
      </div>

      {/* Banner de Test Vocacional */}
      <Card
        className="p-8 sm:p-10 border-slate-200 bg-[#F5F6F8] flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm"
      >
        <div className="space-y-2 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#042354] uppercase tracking-wider font-['Montserrat',sans-serif]">
            <Sparkles className="w-4 h-4 text-[#042354]" />
            ¿Aún no estás seguro de tu vocación?
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#042354] font-['Montserrat',sans-serif]">
            Haz nuestro Test Vocacional Integral PUCP
          </h2>
          <p className="text-sm text-slate-600 max-w-xl">
            Responde 10 preguntas calibradas y descubre tu nivel de afinidad con todas las carreras y facultades de la universidad.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link href="/test">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Empezar Test Vocacional
            </Button>
          </Link>
          <Link href="/carreras/comparar">
            <Button variant="outline" size="lg" leftIcon={<Layers className="w-4 h-4" />}>
              Comparar Carreras
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
