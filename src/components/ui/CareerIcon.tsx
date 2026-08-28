"use client";

import React from "react";
import {
  Building2,
  Laptop,
  Cpu,
  Factory,
  HeartPulse,
  Zap,
  Wrench,
  Pickaxe,
  Leaf,
  Landmark,
  Compass,
  Palette,
  Scale,
  TrendingUp,
  LineChart,
  Brain,
  Film,
  Megaphone,
  Utensils,
  BookOpen,
} from "lucide-react";

interface CareerIconProps {
  name: string;
  className?: string;
}

export const CareerIcon: React.FC<CareerIconProps> = ({ name, className = "w-6 h-6" }) => {
  switch (name) {
    case "Building2":
      return <Building2 className={className} />;
    case "Laptop":
      return <Laptop className={className} />;
    case "Cpu":
      return <Cpu className={className} />;
    case "Factory":
      return <Factory className={className} />;
    case "HeartPulse":
      return <HeartPulse className={className} />;
    case "Zap":
      return <Zap className={className} />;
    case "Wrench":
      return <Wrench className={className} />;
    case "Pickaxe":
      return <Pickaxe className={className} />;
    case "Leaf":
      return <Leaf className={className} />;
    case "Landmark":
      return <Landmark className={className} />;
    case "Compass":
      return <Compass className={className} />;
    case "Palette":
      return <Palette className={className} />;
    case "Scale":
      return <Scale className={className} />;
    case "TrendingUp":
      return <TrendingUp className={className} />;
    case "LineChart":
      return <LineChart className={className} />;
    case "Brain":
      return <Brain className={className} />;
    case "Film":
      return <Film className={className} />;
    case "Megaphone":
      return <Megaphone className={className} />;
    case "Utensils":
      return <Utensils className={className} />;
    default:
      return <BookOpen className={className} />;
  }
};
