import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Sparkles } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-[#03183b] bg-[#042354] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand & Manifesto */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/pucp-emblem-clean.png"
                alt="Emblema Oficial PUCP"
                width={44}
                height={44}
                className="w-10 h-10 rounded-full object-contain shrink-0"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-white font-['Montserrat',sans-serif]">
                  Mi Carrera <span className="text-[#41B9E4]">PUCP</span>
                </span>
              </div>
            </div>
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              Plataforma interactiva diseñada para que los postulantes e ingresantes conozcan las mallas curriculares oficiales, electivos y testimonios de estudiantes mayores.
            </p>
            <div className="inline-flex items-center gap-2 text-xs text-emerald-300 bg-white/10 px-3 py-1.5 rounded-full border border-white/10">
              <Sparkles className="w-3.5 h-3.5 text-[#16C78E]" />
              Iniciativa para estudiantes y postulantes PUCP
            </div>
          </div>

          {/* Exploración rápida */}
          <div>
            <h4 className="text-white font-bold text-xs mb-4 tracking-wider uppercase font-['Montserrat',sans-serif]">
              Exploración
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/carreras" className="text-slate-300 hover:text-[#41B9E4] transition-colors">
                  Mallas Curriculares (10 Ciclos)
                </Link>
              </li>
              <li>
                <Link href="/test" className="text-slate-300 hover:text-[#41B9E4] transition-colors">
                  Test Vocacional Integral
                </Link>
              </li>
              <li>
                <Link href="/carreras/comparar" className="text-slate-300 hover:text-[#41B9E4] transition-colors">
                  Comparador de Carreras
                </Link>
              </li>
            </ul>
          </div>

          {/* Enlaces Oficiales PUCP */}
          <div>
            <h4 className="text-white font-bold text-xs mb-4 tracking-wider uppercase font-['Montserrat',sans-serif]">
              Enlaces Oficiales
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://admision.pucp.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#41B9E4] transition-colors inline-flex items-center gap-1"
                >
                  Admisión PUCP
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.pucp.edu.pe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-[#41B9E4] transition-colors inline-flex items-center gap-1"
                >
                  Portal PUCP
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2027 Mi Carrera PUCP. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            Diseñado para la comunidad universitaria PUCP.
          </p>
        </div>
      </div>
    </footer>
  );
};
