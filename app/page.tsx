"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Cpu,
  Cloud,
  ShieldCheck,
  Server,
  LineChart,
  Boxes,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function GnsysLanding() {
  const [email, setEmail] = useState("");

  const features = [
   
    {
      icon: <Cloud className="h-6 w-6 text-neutral-900" />,
      title: "Cloud",
      body:
        "Arquitecturas híbridas con IBM Cloud, AWS (Querétaro) y on-prem. Migraciones, seguridad y optimización de costos.",
    },
    {
      icon: <Boxes className="h-6 w-6 text-neutral-900" />,
      title: "Virtualización",
      body:
        "Consolidamos, protegemos y estandarizamos virtualización multimarca.",
    },
    {
      icon: <Cpu className="h-6 w-6 text-neutral-900" />,
      title: "AI",
      body:
        "Automatizamos procesos, copilotos y analítica aplicada al negocio con enfoque pragmático y ROI medible.",
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-neutral-900" />,
      title: "Protección de Datos",
      body:
        "Diseño y operación de respaldos con Veeam, políticas 3-2-1-1-0 y pruebas de recuperación.",
    },
    {
      icon: <Server className="h-6 w-6 text-neutral-900" />,
      title: "Infraestructura",
      body:
        "Servidores, almacenamiento y networking con Lenovo, IBM, HPE. Sizing, instalación y soporte.",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur bg-blue-900/90 text-white border-b border-blue-800">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Image
                src="/gnsys-logo.png" // nombre del archivo en /public
                alt="Gnsys"
                width={120}
                height={32}
                className="object-contain"
              />
            </div>

            <Badge className="ml-3 bg-blue-900 text-white">
              Consultores de Tecnología
            </Badge>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#servicios" className="hover:text-blue-300">
              Servicios
            </a>
            <a href="#metodo" className="hover:text-blue-300">
              Método
            </a>
            <a href="#partners" className="hover:text-blue-300">
              Alianzas
            </a>
            <a href="#casos" className="hover:text-blue-300">
              Casos
            </a>
            <a href="#contacto" className="hover:text-blue-300">
              Contacto
            </a>
          </nav>
          <Button className="bg-blue-800 hover:bg-blue-700 rounded-sm" size="sm">
            Hablemos
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
          {/* Left column: image and hero text */}
          <div>
            <Image
              src="/hero-gnsys.png" // tu archivo que ya está en /public
              alt="Gnsys - Infraestructura y Datos"
              width={1200}
              height={300}
              className="w-full h-40 md:h-56 object-cover"
              priority
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs mb-4 bg-gray-50 text-neutral-900">
              <Sparkles className="h-3.5 w-3.5" /> Nueva propuesta 2025
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-neutral-900">
              Infraestructura sólida. Datos confiables. Decisiones inteligentes.
            </h1>
            <p className="mt-4 text-neutral-900/80 max-w-xl">
              Diseñamos infraestructura robusta y alineamos la estrategia de datos
              para mejorar disponibilidad, seguridad y toma de decisiones basada en
              información.
            </p>
            <div className="mt-6 flex gap-3">
              <Button
                className="bg-blue-900 hover:bg-blue-800 rounded-sm"
                size="lg"
              >
                Agenda una llamada
              </Button>
              <Button
                variant="outline"
                className="rounded-sm border-gray-300 text-neutral-900 hover:bg-gray-50"
                size="lg"
              >
                Descargar Portafolio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          {/* Right column: features grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {features.map((f, i) => (
                <Card
                  key={i}
                  className="rounded-sm shadow-sm border-gray-100 bg-white"
                >
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2 text-neutral-900">
                      {f.icon} {f.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-neutral-700">
                    {f.body}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-10 grid md:grid-cols-2 gap-6 items-center">
          <div className="text-sm">
            © {new Date().getFullYear()} Gnsys. Todos los derechos reservados.
          </div>
          <div className="flex gap-4 justify-start md:justify-end text-sm">
            <a href="#" className="hover:underline">
              Aviso de privacidad
            </a>
            <a href="#" className="hover:underline">
              Términos
            </a>
            <a href="#contacto" className="hover:underline">
              Contacto
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
