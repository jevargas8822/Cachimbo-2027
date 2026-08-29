"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X, BookOpen, Layers, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Inicio", icon: Sparkles },
    { href: "/carreras", label: "Carreras", icon: BookOpen },
    { href: "/test", label: "Test Vocacional", icon: HelpCircle },
    { href: "/carreras/comparar", label: "Comparador", icon: Layers },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#03183b] bg-[#042354] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 sm:h-24">
          {/* Brand: Emblema Oficial Circular PUCP (Más Grande) + Mi Carrera PUCP + Subtítulo */}
          <Link href="/" className="flex items-center gap-3.5 sm:gap-4 group shrink-0 py-2">
            <Image
              src="/images/pucp-emblem-clean.png"
              alt="Emblema Oficial PUCP"
              width={64}
              height={64}
              className="w-13 h-13 sm:w-16 sm:h-16 rounded-full object-contain shrink-0 group-hover:scale-105 transition-transform shadow-md"
              priority
            />
            <div className="flex flex-col justify-center">
              <div className="font-extrabold text-xl sm:text-2xl tracking-tight text-white flex items-center gap-1.5 font-['Montserrat',sans-serif] leading-tight">
                <span>Mi Carrera</span>
                <span className="text-[#41B9E4]">PUCP</span>
              </div>
              <span className="text-[11px] sm:text-xs uppercase tracking-wider font-semibold text-slate-300 mt-0.5 leading-tight">
                Construye para el que viene
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 bg-[#03183b] p-1.5 rounded-full border border-white/10">
            {navLinks.map((link) => {
              const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all duration-150",
                    isActive
                      ? "bg-[#41B9E4] text-[#042354] shadow-sm font-bold"
                      : "text-slate-200 hover:text-white hover:bg-white/10"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/test"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-[#042354] bg-[#FAD634] hover:bg-[#ebd726] shadow-sm transition-all font-['Montserrat',sans-serif]"
            >
              <Sparkles className="w-4 h-4 text-[#042354]" />
              <span>Test Vocacional</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-white hover:bg-white/10 focus:outline-none cursor-pointer"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#03183b] px-4 pt-3 pb-6 space-y-2 animate-in slide-in-from-top-2 duration-150">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all",
                  isActive
                    ? "bg-[#41B9E4] text-[#042354] font-bold"
                    : "text-slate-200 hover:bg-white/10"
                )}
              >
                <Icon className="w-5 h-5" />
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
};
