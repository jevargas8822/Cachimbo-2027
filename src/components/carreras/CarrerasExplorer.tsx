"use client";

import React, { useState } from "react";
import { Carrera } from "@/types/carrera";
import { CarreraCard } from "@/components/carreras/CarreraCard";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarrerasExplorerProps {
  carreras: Carrera[];
}

export const CarrerasExplorer: React.FC<CarrerasExplorerProps> = ({ carreras }) => {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("todas");

  const categories = [
    { id: "todas", label: "Todas las Carreras" },
    { id: "ingenieria", label: "Ingeniería & Ciencias" },
    { id: "artes", label: "Artes & Diseño" },
    { id: "gestion", label: "Gestión & Negocios" },
    { id: "derecho", label: "Derecho & Sociales" },
  ];

  const filteredCarreras = carreras.filter((c) => {
    const matchesSearch =
      c.nombre.toLowerCase().includes(search.toLowerCase()) ||
      c.facultad.toLowerCase().includes(search.toLowerCase()) ||
      c.badge.toLowerCase().includes(search.toLowerCase()) ||
      c.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));

    const matchesCategory =
      selectedCategory === "todas"
        ? true
        : selectedCategory === "ingenieria"
        ? c.categoria === "ingenieria" || c.categoria === "ciencias"
        : selectedCategory === "artes"
        ? c.categoria === "artes"
        : selectedCategory === "gestion"
        ? c.categoria === "gestion"
        : selectedCategory === "derecho"
        ? c.categoria === "derecho" || c.categoria === "sociales"
        : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      {/* Controles de Búsqueda y Filtros */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 p-4 rounded-2xl bg-[#F5F6F8] border border-slate-200 shadow-xs">
        {/* Barra de Búsqueda */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Buscar por carrera, especialidad o palabra clave..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-[#1A1A1A] placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#042354] transition-colors font-medium"
          />
        </div>

        {/* Categorías / Filtros */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={cn(
                "px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all border font-['Montserrat',sans-serif] cursor-pointer",
                selectedCategory === cat.id
                  ? "bg-[#042354] text-white border-[#042354] shadow-xs"
                  : "bg-white text-slate-600 hover:text-[#042354] hover:bg-slate-50 border-slate-200"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Conteo de resultados */}
      <div className="flex items-center justify-between text-xs text-slate-500 px-1 font-medium">
        <span>Mostrando {filteredCarreras.length} carreras de la PUCP</span>
        {search && (
          <button
            onClick={() => setSearch("")}
            className="text-[#042354] hover:underline cursor-pointer font-bold"
          >
            Limpiar búsqueda
          </button>
        )}
      </div>

      {/* Grid de Carreras */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredCarreras.map((carrera) => (
          <CarreraCard key={carrera.id} carrera={carrera} />
        ))}
      </div>
    </div>
  );
};
