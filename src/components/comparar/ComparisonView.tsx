"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Carrera } from "@/types/carrera";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CareerIcon } from "@/components/ui/CareerIcon";
import {
  Layers,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Scale,
  Briefcase,
  Target,
  Zap,
} from "lucide-react";

interface ComparisonViewProps {
  carreras: Carrera[];
  initialC1?: string;
  initialC2?: string;
}

export const ComparisonView: React.FC<ComparisonViewProps> = ({
  carreras,
  initialC1 = "ingenieria-informatica",
  initialC2 = "ingenieria-mecatronica",
}) => {
  const [c1Id, setC1Id] = useState(initialC1);
  const [c2Id, setC2Id] = useState(initialC2);

  const carrera1 = carreras.find((c) => c.id === c1Id) || carreras[0];
  const carrera2 = carreras.find((c) => c.id === c2Id) || carreras[1] || carreras[0];

  // Helper para sintetizar el diferenciador clave de cada carrera
  const getDiferenciador = (id: string) => {
    switch (id) {
      case "ingenieria-civil":
        return "Diseño estructural sismorresistente, mecánica de suelos, obras viales e hidráulica para infraestructura pública y privada.";
      case "ingenieria-informatica":
        return "Arquitectura de software de alta escala, inteligencia artificial, ciberseguridad, gestión masiva de datos y cloud computing.";
      case "ingenieria-mecatronica":
        return "Integración sinérgica de mecánica de precisión, electrónica de potencia, automatización industrial y robótica con control embebido.";
      default:
        return "Formación especializada en ingeniería con alta proyección técnica y de gestión.";
    }
  };

  return (
    <div className="space-y-8">
      {/* Selectores de Carreras */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 bg-[#F5F6F8] p-5 sm:p-6 rounded-3xl border border-slate-200 shadow-xs">
        {/* Selector 1 */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[#042354] flex items-center gap-1.5 font-['Montserrat',sans-serif]">
            <Scale className="w-3.5 h-3.5 text-[#042354]" />
            Primera Especialidad
          </label>
          <select
            value={c1Id}
            onChange={(e) => setC1Id(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-[#042354] font-bold font-['Montserrat',sans-serif] text-sm focus:outline-none focus:border-[#042354] shadow-2xs"
          >
            {carreras.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Selector 2 */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold uppercase tracking-wider text-[#042354] flex items-center gap-1.5 font-['Montserrat',sans-serif]">
            <Scale className="w-3.5 h-3.5 text-[#0A7BC2]" />
            Segunda Especialidad
          </label>
          <select
            value={c2Id}
            onChange={(e) => setC2Id(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-300 text-[#042354] font-bold font-['Montserrat',sans-serif] text-sm focus:outline-none focus:border-[#042354] shadow-2xs"
          >
            {carreras.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Resumen comparativo sintético: ¿Qué comparten en Estudios Generales? */}
      <div className="p-4 sm:p-5 rounded-2xl bg-[#042354]/5 border border-[#042354]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 font-bold text-[#042354] font-['Montserrat',sans-serif]">
          <span className="w-2.5 h-2.5 rounded-full bg-[#16C78E]" />
          <span>Base Común en Estudios Generales (Ciclos 1 al 4):</span>
        </div>
        <div className="flex flex-wrap gap-2 text-slate-700 font-medium">
          <span className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">Cálculo 1, 2 y 3</span>
          <span className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">Física 1, 2 y 3</span>
          <span className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">Química</span>
          <span className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">Programación</span>
          <span className="bg-white px-2.5 py-1 rounded-lg border border-slate-200 shadow-2xs">Acreditación de Inglés</span>
        </div>
      </div>

      {/* Tarjetas Comparativas Sintetizadas Lado a Lado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Carrera 1 */}
        <Card className="p-6 sm:p-7 space-y-6 border-slate-200 bg-white shadow-sm flex flex-col justify-between">
          <div className="space-y-5">
            {/* Header Carrera */}
            <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-[#042354]/5 border border-[#042354]/15 flex items-center justify-center text-[#042354] shrink-0">
                <CareerIcon name={carrera1.icono} className="w-6 h-6" />
              </div>
              <div>
                <Badge variant="navy" size="sm">
                  {carrera1.badge}
                </Badge>
                <h3 className="text-xl sm:text-2xl font-bold text-[#042354] font-['Montserrat',sans-serif] mt-0.5">
                  {carrera1.nombre}
                </h3>
              </div>
            </div>

            {/* 1. Enfoque Central */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 font-['Montserrat',sans-serif]">
                <Target className="w-3.5 h-3.5 text-[#042354]" />
                Enfoque de la Carrera
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal bg-[#F5F6F8] p-3 rounded-xl border border-slate-200">
                {carrera1.descripcionCorta}
              </p>
            </div>

            {/* 2. Diferenciador en Facultad */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#042354] flex items-center gap-1.5 font-['Montserrat',sans-serif]">
                <Zap className="w-3.5 h-3.5 text-[#16C78E]" />
                Diferenciador en Facultad (Ciclos 5 al 10)
              </span>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium bg-emerald-50/40 p-3 rounded-xl border border-emerald-200">
                {getDiferenciador(carrera1.id)}
              </p>
            </div>

            {/* 3. Competencias Principales (Sintéticas) */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-['Montserrat',sans-serif]">
                Competencias Clave
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {carrera1.habilidadesClave.slice(0, 3).map((hab, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16C78E] shrink-0" />
                    <span>{hab}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Campo Laboral Sintetizado */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1 font-['Montserrat',sans-serif]">
                <Briefcase className="w-3.5 h-3.5 text-[#042354]" />
                Sectores Laborales
              </span>
              <div className="flex flex-wrap gap-1.5">
                {carrera1.campoLaboral.slice(0, 3).map((lab, i) => (
                  <span key={i} className="text-[11px] font-semibold text-slate-700 bg-[#F5F6F8] px-2.5 py-1 rounded-lg border border-slate-200">
                    {lab}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-slate-100 mt-2">
            <Link href={`/carreras/${carrera1.id}`} className="w-full">
              <Button variant="primary" size="sm" className="w-full text-xs font-bold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Ver Malla de {carrera1.nombre}
              </Button>
            </Link>
          </div>
        </Card>

        {/* Carrera 2 */}
        <Card className="p-6 sm:p-7 space-y-6 border-slate-200 bg-white shadow-sm flex flex-col justify-between">
          <div className="space-y-5">
            {/* Header Carrera */}
            <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100">
              <div className="w-12 h-12 rounded-2xl bg-[#042354]/5 border border-[#042354]/15 flex items-center justify-center text-[#042354] shrink-0">
                <CareerIcon name={carrera2.icono} className="w-6 h-6" />
              </div>
              <div>
                <Badge variant="navy" size="sm">
                  {carrera2.badge}
                </Badge>
                <h3 className="text-xl sm:text-2xl font-bold text-[#042354] font-['Montserrat',sans-serif] mt-0.5">
                  {carrera2.nombre}
                </h3>
              </div>
            </div>

            {/* 1. Enfoque Central */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5 font-['Montserrat',sans-serif]">
                <Target className="w-3.5 h-3.5 text-[#042354]" />
                Enfoque de la Carrera
              </span>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal bg-[#F5F6F8] p-3 rounded-xl border border-slate-200">
                {carrera2.descripcionCorta}
              </p>
            </div>

            {/* 2. Diferenciador en Facultad */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#042354] flex items-center gap-1.5 font-['Montserrat',sans-serif]">
                <Zap className="w-3.5 h-3.5 text-[#16C78E]" />
                Diferenciador en Facultad (Ciclos 5 al 10)
              </span>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium bg-emerald-50/40 p-3 rounded-xl border border-emerald-200">
                {getDiferenciador(carrera2.id)}
              </p>
            </div>

            {/* 3. Competencias Principales (Sintéticas) */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-['Montserrat',sans-serif]">
                Competencias Clave
              </span>
              <div className="grid grid-cols-1 gap-1.5">
                {carrera2.habilidadesClave.slice(0, 3).map((hab, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#16C78E] shrink-0" />
                    <span>{hab}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Campo Laboral Sintetizado */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1 font-['Montserrat',sans-serif]">
                <Briefcase className="w-3.5 h-3.5 text-[#042354]" />
                Sectores Laborales
              </span>
              <div className="flex flex-wrap gap-1.5">
                {carrera2.campoLaboral.slice(0, 3).map((lab, i) => (
                  <span key={i} className="text-[11px] font-semibold text-slate-700 bg-[#F5F6F8] px-2.5 py-1 rounded-lg border border-slate-200">
                    {lab}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-5 border-t border-slate-100 mt-2">
            <Link href={`/carreras/${carrera2.id}`} className="w-full">
              <Button variant="primary" size="sm" className="w-full text-xs font-bold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Ver Malla de {carrera2.nombre}
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};
