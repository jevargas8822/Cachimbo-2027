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

  return (
    <div className="space-y-10">
      {/* Selectores de Carreras */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#F5F6F8] p-6 sm:p-7 rounded-3xl border border-slate-200 shadow-sm">
        {/* Selector 1 */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#042354] flex items-center gap-1.5 font-['Montserrat',sans-serif]">
            <Scale className="w-3.5 h-3.5 text-[#042354]" />
            Primera Especialidad
          </label>
          <select
            value={c1Id}
            onChange={(e) => setC1Id(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-300 text-[#042354] font-bold font-['Montserrat',sans-serif] focus:outline-none focus:border-[#042354] shadow-2xs"
          >
            {carreras.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nombre}
              </option>
            ))}
          </select>
        </div>

        {/* Selector 2 */}
        <div className="space-y-2">
          <label className="text-xs font-bold uppercase tracking-wider text-[#042354] flex items-center gap-1.5 font-['Montserrat',sans-serif]">
            <Scale className="w-3.5 h-3.5 text-[#0A7BC2]" />
            Segunda Especialidad
          </label>
          <select
            value={c2Id}
            onChange={(e) => setC2Id(e.target.value)}
            className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-300 text-[#042354] font-bold font-['Montserrat',sans-serif] focus:outline-none focus:border-[#042354] shadow-2xs"
          >
            {carreras.map((c) => (
              <option key={c.id} value={c.id}>
                {c.nombre}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Tarjetas de Comparación Lado a Lado */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Columna Carrera 1 */}
        <Card
          className="p-6 sm:p-8 space-y-6 border-slate-200 bg-white flex flex-col justify-between shadow-sm"
        >
          <div className="space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#042354]/5 border border-[#042354]/15 flex items-center justify-center text-[#042354]">
                <CareerIcon name={carrera1.icono} className="w-6 h-6" />
              </div>
              <div>
                <Badge variant="navy" size="sm">
                  {carrera1.badge}
                </Badge>
                <h3 className="text-2xl font-bold text-[#042354] font-['Montserrat',sans-serif] mt-0.5">
                  {carrera1.nombre}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {carrera1.descripcionCorta}
            </p>

            {/* Enfoque y Competencias */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-['Montserrat',sans-serif]">
                Competencias Principales
              </h4>
              <div className="space-y-2">
                {carrera1.habilidadesClave.map((hab, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#16C78E] shrink-0" />
                    <span>{hab}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Campo Laboral */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-['Montserrat',sans-serif]">
                Campo Laboral Destacado
              </h4>
              <div className="space-y-1.5">
                {carrera1.campoLaboral.map((lab, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#042354] mt-1.5 shrink-0" />
                    <span>{lab}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <Link href={`/carreras/${carrera1.id}`} className="w-full">
              <Button variant="primary" className="w-full text-xs font-bold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Ver Malla de {carrera1.nombre}
              </Button>
            </Link>
          </div>
        </Card>

        {/* Columna Carrera 2 */}
        <Card
          className="p-6 sm:p-8 space-y-6 border-slate-200 bg-white flex flex-col justify-between shadow-sm"
        >
          <div className="space-y-5">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-[#042354]/5 border border-[#042354]/15 flex items-center justify-center text-[#042354]">
                <CareerIcon name={carrera2.icono} className="w-6 h-6" />
              </div>
              <div>
                <Badge variant="navy" size="sm">
                  {carrera2.badge}
                </Badge>
                <h3 className="text-2xl font-bold text-[#042354] font-['Montserrat',sans-serif] mt-0.5">
                  {carrera2.nombre}
                </h3>
              </div>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed">
              {carrera2.descripcionCorta}
            </p>

            {/* Enfoque y Competencias */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-['Montserrat',sans-serif]">
                Competencias Principales
              </h4>
              <div className="space-y-2">
                {carrera2.habilidadesClave.map((hab, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#16C78E] shrink-0" />
                    <span>{hab}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Campo Laboral */}
            <div className="space-y-2.5 pt-4 border-t border-slate-100">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-['Montserrat',sans-serif]">
                Campo Laboral Destacado
              </h4>
              <div className="space-y-1.5">
                {carrera2.campoLaboral.map((lab, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#042354] mt-1.5 shrink-0" />
                    <span>{lab}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100">
            <Link href={`/carreras/${carrera2.id}`} className="w-full">
              <Button variant="primary" className="w-full text-xs font-bold" rightIcon={<ArrowRight className="w-4 h-4" />}>
                Ver Malla de {carrera2.nombre}
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
};
