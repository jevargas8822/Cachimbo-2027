"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger" | "emerald";
  size?: "sm" | "md" | "lg";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  variant = "primary",
  size = "md",
  leftIcon,
  rightIcon,
  isLoading,
  disabled,
  ...props
}) => {
  const baseStyles =
    "inline-flex items-center justify-center font-bold transition-all duration-200 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none font-['Montserrat',sans-serif]";

  const variantStyles = {
    primary:
      "bg-[#042354] hover:bg-[#0a3375] text-white shadow-sm hover:shadow-md active:scale-[0.98]",
    secondary:
      "bg-[#41B9E4] hover:bg-[#32a8d1] text-[#042354] font-bold shadow-sm active:scale-[0.98]",
    emerald:
      "bg-[#16C78E] hover:bg-[#12b37e] text-[#042354] font-bold shadow-sm active:scale-[0.98]",
    outline:
      "bg-white hover:bg-slate-50 text-[#042354] border-2 border-[#042354] shadow-sm active:scale-[0.98]",
    ghost:
      "bg-transparent hover:bg-slate-100 text-[#042354] active:scale-[0.98]",
    danger:
      "bg-rose-600 hover:bg-rose-700 text-white shadow-sm active:scale-[0.98]",
  };

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3.5 gap-2.5",
  };

  return (
    <button
      className={cn(baseStyles, variantStyles[variant], sizeStyles[size], className)}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : (
        leftIcon && <span className="shrink-0">{leftIcon}</span>
      )}
      {children}
      {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
    </button>
  );
};
