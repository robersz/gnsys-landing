"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Cpu,
  Cloud,
  ShieldCheck,
  Server,
  Boxes,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

export default function GnsysLanding() {
  const features = [
    {
      icon: <Server className="h-5 w-5 text-neutral-800" />,
      title: "Infraestructura",
      body:
        "Servidores, almacenamiento y networking con Lenovo, IBM, HPE. Sizing, instalación y soporte.",
      image: "/infrastructure.png",
    },
    {
      icon: <Cloud className="h-5 w-5 text-neutral-800" />,
      title: "Cloud",
      body:
        "Arquitecturas híbridas y on-prem. Migraciones, seguridad y optimización de costos.",
      image: "/cloud.png",
    },
    {
      icon: <Boxes className="h-5 w-5 text-neutral-800" />,
      title: "Virtualización",
      body: "Consolidamos, protegemos y estandarizamos virtualización multimarca.",
      image: "/virt.png",
    },
    {
      icon: <Cpu className="h-5 w-5 text-neutral-800" />,
      title: "Inteligencia Artificial",
      body:
        "Automatizamos procesos, copilotos y analítica aplicada al negocio con enfoque pragmático y ROI medible.",
      image: "/AI.png",
    },
    {
      icon: <ShieldCheck className="h-5 w-5 text-neutral-800" />,
      title: "Protección de Datos",
      body:
        "Diseño y operación de respaldos con Veeam, políticas 3-2-1-1-0 y pruebas de recuperación.",
      image: "/protect.png",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur bg-gray-900/90 text-white border-b border-grey-800">
        <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Image
                src="/gnsys-logo.png"
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
            <Link href="/servicios" className="hover:text-blue-300">
              Servicios
            </Link>
            <Link href="/alianzas" className="hover:text-blue-300">
              Alianzas
            </Link>
            <Link href="/clientes" className="hover:text-blue-300">
              Clientes
            </Link>
            <Link href="/nosotros" className="hover:text-blue-300">
              Nosotros
            </Link>
            <Link href="/vektor" className="text-blue-400 font-semibold hover:text-blue-300">
              Vektor
            </Link>
            <Link href="/contacto" className="hover:text-blue-300">
              Contacto
            </Link>
          </nav>
          <nav className="flex md:hidden items-center gap-3 text-sm overflow-x-auto px-1 py-1">
            <Link
              href="/servicios"
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 hover:text-blue-300 whitespace-nowrap"
            >
              Servicios
            </Link>
            <Link
              href="/alianzas"
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 hover:text-blue-300 whitespace-nowrap"
            >
              Alianzas
            </Link>
            <Link
              href="/clientes"
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 hover:text-blue-300 whitespace-nowrap"
            >
              Clientes
            </Link>
            <Link
              href="/nosotros"
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 hover:text-blue-300 whitespace-nowrap"
            >
              Nosotros
            </Link>
            <Link
              href="/vektor"
              className="rounded-full border border-blue-400 bg-blue-500/20 px-3 py-1 text-blue-400 font-semibold hover:text-blue-300 whitespace-nowrap"
            >
              Vektor
            </Link>
            <Link
              href="/contacto"
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1 hover:text-blue-300 whitespace-nowrap"
            >
              Contacto
            </Link>
          </nav>
          <a
            href="https://wa.me/528119086025?text=Hola%2C%20me%20gustar%C3%ADa%20hablar%20con%20el%20equipo%20de%20Gnsys."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 rounded-sm w-full sm:w-auto" size="sm">
              <Image src="/whatsapp32.png" alt="WhatsApp" width={20} height={20} className="inline-block" />
              Hablemos
            </Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100">
        <div className="mx-auto max-w-7xl px-4 pt-8 pb-12 md:pt-10 md:pb-16 grid md:grid-cols-2 gap-8 items-start">
          {/* Left column: image and hero text */}
          <div>
            <Image
              src="/hero-gnsys.png"
              alt="Gnsys - Infraestructura y Datos"
              width={1200}
              height={300}
              className="w-full h-40 md:h-56 object-cover"
              priority
            />
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1 text-xs mb-4 bg-gray-50 text-neutral-900">
              <Sparkles className="h-3.5 w-3.5" /> Nueva propuesta 2026
            </div>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight text-neutral-900">
              Infraestructura sólida. Datos confiables. Decisiones inteligentes.
            </h1>
            <p className="mt-4 text-neutral-900/80 max-w-xl">
              Diseñamos infraestructura robusta y alineamos la estrategia de datos
              para mejorar disponibilidad, seguridad y toma de decisiones basada en
              información.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="mailto:ventas@gnsys.com.mx?subject=Solicitud%20de%20llamada%20-%20Gnsys&body=Hola%2C%0D%0AMe%20gustar%C3%ADa%20agendar%20una%20llamada%20para%20conocer%20m%C3%A1s%20sobre%20sus%20servicios.%0D%0A%0D%0ANombre%3A%20%0DEmpresa%3A%20%0DCorreo%3A%20%0DTel%C3%A9fono%3A%20%0D%0AHorario%20preferido%3A%20%0D%0A%0D%0AGracias."
              >
                <Button
                  className="bg-blue-900 hover:bg-blue-800 rounded-sm w-full sm:w-auto"
                  size="lg"
                >
                  Agenda una llamada
                </Button>
              </a>
              <a
                href="/gnsys-portafolio-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  className="rounded-sm border-gray-300 text-neutral-900 hover:bg-gray-50 w-full sm:w-auto"
                  size="lg"
                >
                  Descargar Portafolio
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right column: features grid */}
          <div className="relative">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((f) => {
                const isProteccion = f.title === "Protección de Datos";
                const isCloud = f.title === "Cloud";
                const isInfraestructura = f.title === "Infraestructura";
                const isAI = f.title === "Inteligencia Artificial";
                const isVirtualizacion = f.title === "Virtualización"; // <-- agregado

                const cardContent = (
                  <Card
                    className="
                      fade-in-card
                      rounded-sm shadow-sm border border-gray-200 bg-white overflow-hidden 
                      transition-all duration-200 
                      hover:border-blue-900 hover:shadow-md hover:-translate-y-1
                    "
                  >
                    {f.image && (
                      <Image
                        src={f.image}
                        alt={f.title}
                        width={600}
                        height={350}
                        className="w-full h-44 sm:h-36 object-cover"
                      />
                    )}
                    <CardHeader>
                      <CardTitle className="text-base flex items-center gap-2 text-neutral-900">
                        {f.icon} {f.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-sm text-neutral-700">
                      {f.body}
                    </CardContent>
                  </Card>
                );

                if (isProteccion) {
                  return (
                    <a
                      key={f.title}
                      href="https://wcs-clouddata-genesysinformaticasadecv.swcontentsyndication.com/sw/swchannel/registration/internet/registration.cfm?RegPageID=6680461&traffictype=Direct"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Registro Protección de Datos - Gnsys"
                      className="block"
                    >
                      {cardContent}
                    </a>
                  );
                }

                if (isCloud) {
                  return (
                    <Link
                      key={f.title}
                      href="/cloud"
                      aria-label="Servicios Cloud - Gnsys"
                      className="block"
                    >
                      {cardContent}
                    </Link>
                  );
                }

                if (isAI) {
                  return (
                    <Link
                      key={f.title}
                      href="/ai"
                      aria-label="Inteligencia Artificial - Gnsys"
                      className="block"
                    >
                      {cardContent}
                    </Link>
                  );
                }

                if (isVirtualizacion) {
                  return (
                    <Link
                      key={f.title}
                      href="/virtualizacion"
                      aria-label="Virtualización - Gnsys"
                      className="block"
                    >
                      {cardContent}
                    </Link>
                  );
                }

                if (isInfraestructura) {
                  return (
                    <Link
                      key={f.title}
                      href="/infraestructura"
                      aria-label="Infraestructura - Gnsys"
                      className="block"
                    >
                      {cardContent}
                    </Link>
                  );
                }

                return (
                  <div key={f.title}>
                    {cardContent}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-gray-900/90 text-white border-gray-800">
        <div className="mx-auto max-w-7xl px-4 pr-8 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between text-center sm:text-left">
          <div className="text-sm">© {new Date().getFullYear()} Gnsys. Todos los derechos reservados.</div>

          <div className="flex items-center justify-center gap-4 sm:justify-end">
            <a
              href="https://www.facebook.com/GNSYSINF"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gnsys en Facebook"
            >
              <Image
                src="/facebook48.png"
                alt="Facebook"
                width={32}
                height={32}
                className="inline-block opacity-90 hover:opacity-100"
              />
            </a>

            <a
              href="https://www.instagram.com/gnsys_inf?igsh=Ym9mMTNoY2J0dWNv"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gnsys en Instagram"
            >
              <Image
                src="/instagram48.png"
                alt="Instagram"
                width={32}
                height={32}
                className="inline-block opacity-90 hover:opacity-100"
              />
            </a>

            <a
              href="https://www.linkedin.com/company/gnsys-informatica-sa-de-cv/?originalSubdomain=mx"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gnsys en LinkedIn"
            >
              <Image
                src="/linkedin48.png"
                alt="LinkedIn"
                width={32}
                height={32}
                className="inline-block opacity-90 hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
