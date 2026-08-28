import React from "react";
import { Carrera } from "@/types/carrera";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CheckCircle2, Briefcase, UserCheck, Lightbulb } from "lucide-react";

interface CarreraOverviewProps {
  carrera: Carrera;
}

export const CarreraOverview: React.FC<CarreraOverviewProps> = ({ carrera }) => {
  return (
    <div className="space-y-8">
      {/* Sección: En qué consiste */}
      <Card className="p-6 sm:p-8 space-y-6 border-slate-200 bg-white shadow-sm">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#042354] uppercase tracking-wider font-['Montserrat',sans-serif]">
            <Lightbulb className="w-4 h-4 text-[#042354]" />
            Visión General de la Especialidad
          </div>
          <h3 className="text-2xl font-bold text-[#042354] font-['Montserrat',sans-serif]">
            ¿En qué consiste {carrera.nombre}?
          </h3>
        </div>

        <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
          {carrera.descripcionLarga.map((parrafo, idx) => (
            <p key={idx}>{parrafo}</p>
          ))}
        </div>

        {/* Habilidades Clave */}
        <div className="pt-4 border-t border-slate-100 space-y-3">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 font-['Montserrat',sans-serif]">
            Competencias y Habilidades Clave
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {carrera.habilidadesClave.map((habilidad, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3.5 rounded-xl bg-[#F5F6F8] border border-slate-200 text-xs sm:text-sm font-semibold text-slate-800"
              >
                <CheckCircle2 className="w-4 h-4 text-[#16C78E] shrink-0" />
                <span>{habilidad}</span>
              </div>
            ))}
          </div>
        </div>
      </Card>

      {/* Sección: Un día en la vida (si está disponible) */}
      {carrera.unDiaEnLaVida && (
        <Card className="p-6 sm:p-8 space-y-6 border-slate-200 bg-[#F5F6F8] shadow-sm">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#042354] uppercase tracking-wider font-['Montserrat',sans-serif]">
                <UserCheck className="w-4 h-4 text-[#042354]" />
                Testimonio de Alumno Mayor
              </div>
              <h3 className="text-2xl font-bold text-[#042354] font-['Montserrat',sans-serif]">
                {carrera.unDiaEnLaVida.titulo}
              </h3>
            </div>
            {carrera.unDiaEnLaVida.autor && (
              <span className="text-xs font-bold text-[#042354] bg-white px-3 py-1.5 rounded-full border border-slate-200 font-['Montserrat',sans-serif] shadow-2xs">
                {carrera.unDiaEnLaVida.autor} {carrera.unDiaEnLaVida.ciclo ? `• ${carrera.unDiaEnLaVida.ciclo}` : ""}
              </span>
            )}
          </div>

          <div className="space-y-3.5 text-slate-700 text-sm sm:text-base leading-relaxed pl-4 border-l-3 border-[#042354]">
            {carrera.unDiaEnLaVida.narrativa.map((parrafo, idx) => (
              <p key={idx} className="italic">
                &ldquo;{parrafo}&rdquo;
              </p>
            ))}
          </div>
        </Card>
      )}

      {/* Sección: Campo laboral */}
      <Card className="p-6 sm:p-8 space-y-4 border-slate-200 bg-white shadow-sm">
        <div className="space-y-1">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-[#042354] uppercase tracking-wider font-['Montserrat',sans-serif]">
            <Briefcase className="w-4 h-4 text-[#042354]" />
            Oportunidades y Campo Laboral
          </div>
          <h3 className="text-xl font-bold text-[#042354] font-['Montserrat',sans-serif]">
            ¿Dónde podrás trabajar al graduarte?
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
          {carrera.campoLaboral.map((campo, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F5F6F8] border border-slate-200 text-xs sm:text-sm text-slate-800 font-medium"
            >
              <div className="w-2 h-2 rounded-full bg-[#042354] mt-1.5 shrink-0" />
              <span>{campo}</span>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
