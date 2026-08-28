import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverEffect?: boolean;
  borderAccent?: "navy" | "emerald" | "purple" | "celeste" | "orange" | "none";
  bgTone?: "white" | "gray";
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  hoverEffect = false,
  borderAccent = "none",
  bgTone = "white",
  ...props
}) => {
  const accentBorders = {
    none: "border-slate-200",
    navy: "border-[#042354]",
    emerald: "border-[#16C78E]",
    purple: "border-[#7F32C8]",
    celeste: "border-[#41B9E4]",
    orange: "border-[#FF9929]",
  };

  const bgStyles = {
    white: "bg-white",
    gray: "bg-[#F5F6F8]",
  };

  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-200",
        bgStyles[bgTone],
        accentBorders[borderAccent],
        hoverEffect
          ? "hover:shadow-md hover:border-slate-300 hover:-translate-y-0.5"
          : "shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
