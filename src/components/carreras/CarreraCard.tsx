import React from "react";
import Link from "next/link";
import { Carrera } from "@/types/carrera";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Layers } from "lucide-react";
import { CareerIcon } from "@/components/ui/CareerIcon";

interface CarreraCardProps {
  carrera: Carrera;
}

export const CarreraCard: React.FC<CarreraCardProps> = ({ carrera }) => {
  return (
    <Card
      hoverEffect
      className="p-6 sm:p-7 flex flex-col justify-between space-y-6 border-slate-200 bg-white group shadow-sm hover:shadow-md"
    >
      <div className="space-y-4">
        {/* Header con Icono y Badge */}
        <div className="flex items-start justify-between gap-3">
          <div className="w-12 h-12 rounded-2xl bg-[#042354]/5 border border-[#042354]/15 flex items-center justify-center text-[#042354] group-hover:scale-105 transition-transform shadow-2xs">
            <CareerIcon name={carrera.icono} className="w-6 h-6" />
          </div>
          <div className="flex flex-col items-end gap-1">
            <Badge variant="navy" size="sm">
              {carrera.badge}
            </Badge>
            {carrera.tieneMallaDetallada && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-[#0b7956] bg-[#16C78E]/15 px-2.5 py-0.5 rounded-full border border-[#16C78E]/30 font-['Montserrat',sans-serif]">
                <Layers className="w-2.5 h-2.5" /> 10 Ciclos + Tips
              </span>
            )}
          </div>
        </div>

        {/* Título & Facultad */}
        <div className="space-y-1">
          <h3 className="text-xl sm:text-2xl font-bold text-[#042354] group-hover:text-[#0A7BC2] transition-colors font-['Montserrat',sans-serif]">
            {carrera.nombre}
          </h3>
          <p className="text-xs text-slate-500 font-semibold font-['Montserrat',sans-serif]">
            {carrera.facultad}
          </p>
        </div>

        {/* Descripción corta */}
        <p className="text-sm text-slate-700 leading-relaxed line-clamp-3">
          {carrera.descripcionCorta}
        </p>

        {/* Tags de habilidades */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {carrera.habilidadesClave.slice(0, 3).map((hab, idx) => (
            <span
              key={idx}
              className="text-[11px] px-2.5 py-1 rounded-lg bg-[#F5F6F8] text-slate-700 border border-slate-200 font-medium"
            >
              {hab}
            </span>
          ))}
        </div>
      </div>

      {/* Botones de acción */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
        <Link href={`/carreras/${carrera.id}`} className="w-full">
          <Button
            variant="primary"
            className="w-full text-xs sm:text-sm font-bold"
            rightIcon={<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
          >
            Explorar Malla y Videos
          </Button>
        </Link>
      </div>
    </Card>
  );
};
