import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mi Carrera PUCP | Construye para el que viene",
  description: "Plataforma oficial interactiva para postulantes y estudiantes PUCP: mallas curriculares, test vocacional integral, testimonios de alumnos mayores y comparador de carreras.",
  keywords: ["PUCP", "Mi Carrera PUCP", "Malla Curricular PUCP", "Test Vocacional PUCP", "Carreras PUCP"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${roboto.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-[#1A1A1A] selection:bg-[#042354] selection:text-white font-['Roboto',sans-serif]">
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
