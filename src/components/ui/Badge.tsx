import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "navy" | "emerald" | "purple" | "celeste" | "orange" | "yellow" | "gray";
  size?: "sm" | "md" | "lg";
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  className,
  variant = "navy",
  size = "md",
  ...props
}) => {
  const variantStyles = {
    navy: "bg-[#042354]/10 text-[#042354] border-[#042354]/20",
    emerald: "bg-[#16C78E]/15 text-[#0b7956] border-[#16C78E]/30 font-semibold",
    purple: "bg-[#7F32C8]/10 text-[#7F32C8] border-[#7F32C8]/25 font-semibold",
    celeste: "bg-[#41B9E4]/15 text-[#02688f] border-[#41B9E4]/30 font-semibold",
    orange: "bg-[#FF9929]/15 text-[#b35900] border-[#FF9929]/30 font-semibold",
    yellow: "bg-[#FAD634]/20 text-[#856404] border-[#FAD634]/40 font-semibold",
    gray: "bg-slate-100 text-slate-700 border-slate-200",
  };

  const sizeStyles = {
    sm: "text-[11px] px-2 py-0.5",
    md: "text-xs px-2.5 py-1",
    lg: "text-sm px-3.5 py-1.5",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 font-semibold rounded-full border leading-none font-['Montserrat',sans-serif]",
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
