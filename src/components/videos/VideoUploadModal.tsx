"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { UploadCloud, CheckCircle2 } from "lucide-react";

interface VideoUploadModalProps {
  carreraId: string;
  nombreCarrera: string;
  isOpen: boolean;
  onClose: () => void;
}

export const VideoUploadModal: React.FC<VideoUploadModalProps> = ({
  carreraId,
  nombreCarrera,
  isOpen,
  onClose,
}) => {
  const [enviado, setEnviado] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    nombre: "",
    ciclo: "7mo Ciclo",
    correo: "",
    enlace: "",
    titulo: "",
    consejo: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setEnviado(true);
    }, 800);
  };

  const handleReset = () => {
    setEnviado(false);
    setFormData({
      nombre: "",
      ciclo: "7mo Ciclo",
      correo: "",
      enlace: "",
      titulo: "",
      consejo: "",
    });
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      maxWidth="lg"
      title={
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-[#042354] text-white flex items-center justify-center">
            <UploadCloud className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-[#042354] font-['Montserrat',sans-serif]">
              Comparte tu Testimonio
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Para cachimbos de {nombreCarrera}
            </p>
          </div>
        </div>
      }
    >
      {enviado ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-16 h-16 rounded-full bg-[#16C78E]/15 text-[#0b7956] flex items-center justify-center mx-auto border border-[#16C78E]/30 animate-bounce">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-bold text-[#042354] font-['Montserrat',sans-serif]">
              ¡Muchas gracias por construir para el que viene!
            </h4>
            <p className="text-sm text-slate-600 max-w-sm mx-auto">
              Tu video y consejo serán revisados e integrados para orientar a los nuevos ingresantes.
            </p>
          </div>
          <Button onClick={handleReset} className="mt-4">
            Listo, volver
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 font-['Montserrat',sans-serif]">
                Nombre y Apellido
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Mateo Ramos"
                value={formData.nombre}
                onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-[#1A1A1A] placeholder-slate-400 focus:outline-none focus:border-[#042354]"
              />
            </div>
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 font-['Montserrat',sans-serif]">
                Ciclo Actual
              </label>
              <select
                value={formData.ciclo}
                onChange={(e) => setFormData({ ...formData, ciclo: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-[#1A1A1A] font-semibold focus:outline-none focus:border-[#042354]"
              >
                <option value="5to Ciclo">5to Ciclo</option>
                <option value="6to Ciclo">6to Ciclo</option>
                <option value="7mo Ciclo">7mo Ciclo</option>
                <option value="8vo Ciclo">8vo Ciclo</option>
                <option value="9no Ciclo">9no Ciclo</option>
                <option value="10mo Ciclo">10mo Ciclo</option>
                <option value="Egresado(a)">Egresado(a)</option>
              </select>
            </div>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 font-['Montserrat',sans-serif]">
              Título del video o tema principal
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Qué esperar de los laboratorios y primeros proyectos"
              value={formData.titulo}
              onChange={(e) => setFormData({ ...formData, titulo: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-[#1A1A1A] placeholder-slate-400 focus:outline-none focus:border-[#042354]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 font-['Montserrat',sans-serif]">
              Enlace de YouTube del video
            </label>
            <input
              type="url"
              required
              placeholder="https://youtu.be/... o https://www.youtube.com/watch?v=..."
              value={formData.enlace}
              onChange={(e) => setFormData({ ...formData, enlace: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-[#1A1A1A] placeholder-slate-400 focus:outline-none focus:border-[#042354]"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 font-['Montserrat',sans-serif]">
              Un consejo clave para los cachimbos (Opcional)
            </label>
            <textarea
              rows={3}
              placeholder="¿Qué te hubiera gustado saber cuando recién entraste a la carrera?"
              value={formData.consejo}
              onChange={(e) => setFormData({ ...formData, consejo: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-slate-300 text-[#1A1A1A] placeholder-slate-400 focus:outline-none focus:border-[#042354] resize-none"
            />
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <Button variant="ghost" type="button" onClick={handleReset}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit" isLoading={loading}>
              Enviar testimonio
            </Button>
          </div>
        </form>
      )}
    </Modal>
  );
};
