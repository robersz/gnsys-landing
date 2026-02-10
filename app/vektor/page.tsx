"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Download, Calendar } from "lucide-react";
import Link from "next/link";

export default function VektorPage() {
  // Newsletter issues data
  const newsletters = [
    {
      id: "2601",
      title: "Enero 2026",
      date: "Enero 2026",
      description: "Primera edición de nuestro boletín mensual con las últimas tendencias en tecnología, actualizaciones de productos y casos de éxito.",
      pdfUrl: "/vektor/2601-Vektor.pdf",
      coverImage: "/vektor/2601-Vektor.png",
    },
    // Add more newsletters as they are published
  ];

  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur bg-gray-900/90 text-white border-b border-grey-800">
        <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <Link href="/">
                <Image
                  src="/gnsys-logo.png"
                  alt="Gnsys"
                  width={120}
                  height={32}
                  className="object-contain cursor-pointer"
                />
              </Link>
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
            <Link href="/vektor" className="text-blue-300 font-semibold">
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
              className="rounded-full border border-blue-400 bg-blue-500/20 px-3 py-1 text-blue-300 whitespace-nowrap"
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

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-100">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-12">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-neutral-900">
              Vektor
            </h1>
            <p className="text-lg text-neutral-600 mb-6">
              Nuestro boletín mensual con insights tecnológicos, tendencias de la industria y actualizaciones de Gnsys
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-neutral-500">
              <Calendar className="h-4 w-4" />
              <span>Publicación mensual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletters Grid */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsletters.map((newsletter) => (
              <Card key={newsletter.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-br from-blue-50 to-gray-50">
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-900 text-white">
                      Edición {newsletter.id}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-neutral-600">
                      <Calendar className="h-4 w-4" />
                      <span>{newsletter.date}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl text-neutral-900">
                    {newsletter.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {/* PDF Preview Thumbnail */}
                  <div className="mb-4 aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg overflow-hidden border border-gray-300">
                    {newsletter.coverImage ? (
                      <Image
                        src={newsletter.coverImage}
                        alt={`Vektor ${newsletter.title}`}
                        width={400}
                        height={533}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <FileText className="h-20 w-20 text-gray-400" />
                      </div>
                    )}
                  </div>
                  
                  <p className="text-sm text-neutral-600 mb-6">
                    {newsletter.description}
                  </p>
                  
                  <div className="flex gap-3">
                    <a
                      href={newsletter.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="w-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center gap-2">
                        <Download className="h-4 w-4" />
                        Descargar PDF
                      </Button>
                    </a>
                    <a
                      href={newsletter.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="border-blue-800 text-blue-800 hover:bg-blue-50">
                        Ver
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {newsletters.length === 0 && (
            <div className="text-center py-16">
              <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-700 mb-2">
                Próximamente
              </h3>
              <p className="text-neutral-600">
                Estamos preparando nuestro primer boletín Vektor
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-950">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            ¿Quieres recibir Vektor cada mes?
          </h2>
          <p className="text-lg text-blue-100 mb-8">
            Suscríbete para recibir las últimas actualizaciones directamente en tu correo
          </p>
          <Link href="/contacto">
            <Button className="bg-white text-blue-900 hover:bg-gray-100 text-lg px-8 py-6">
              Suscribirse al boletín
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
