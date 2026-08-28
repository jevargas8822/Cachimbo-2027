import React from "react";
import { cn } from "@/lib/utils";

export interface ProgressBarProps {
  current: number;
  total: number;
  showText?: boolean;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  current,
  total,
  showText = true,
  className,
}) => {
  const percentage = Math.min(Math.round((current / total) * 100), 100);

  return (
    <div className={cn("w-full space-y-2.5", className)}>
      {showText && (
        <div className="flex justify-between items-center text-xs sm:text-sm font-bold font-['Montserrat',sans-serif]">
          <span className="text-[#042354] flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#16C78E]" />
            Pregunta {current} de {total}
          </span>
          <span className="text-[#042354] bg-[#F5F6F8] px-2.5 py-0.5 rounded-full border border-slate-200 font-mono">
            {percentage}% completado
          </span>
        </div>
      )}
      <div className="w-full h-3.5 bg-slate-200 rounded-full overflow-hidden p-0.5 border border-slate-300 relative shadow-inner">
        <div
          className="h-full bg-gradient-to-r from-[#042354] via-[#0A7BC2] to-[#16C78E] rounded-full transition-all duration-300 ease-out relative"
          style={{ width: `${percentage}%` }}
        >
          {/* Subtle indicator point at tip */}
          <div className="absolute right-0.5 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-xs" />
        </div>
      </div>
    </div>
  );
};
