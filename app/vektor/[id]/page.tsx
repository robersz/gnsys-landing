"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, ArrowLeft, Share2, Calendar } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Newsletter data - should match the main vektor page
const newslettersData: Record<string, {
  id: string;
  title: string;
  date: string;
  description: string;
  pdfUrl: string;
  coverImage: string;
}> = {
  "2601": {
    id: "2601",
    title: "Enero 2026",
    date: "Enero 2026",
    description: "Primera edición de nuestro boletín mensual con las últimas tendencias en tecnología, actualizaciones de productos y casos de éxito.",
    pdfUrl: "/vektor/2601-Vektor.pdf",
    coverImage: "/vektor/2601-Vektor.png",
  },
  // Add more newsletters as they are published
};

export default function NewsletterDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const newsletter = newslettersData[id];

  if (!newsletter) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-neutral-900 mb-4">
            Boletín no encontrado
          </h1>
          <Link href="/vektor">
            <Button className="bg-blue-800 hover:bg-blue-700">
              Volver a Vektor
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const handleShare = async () => {
    const shareUrl = window.location.href;
    const shareText = `Vektor ${newsletter.title} - ${newsletter.description}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Vektor ${newsletter.title}`,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.log("Error sharing:", err);
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(shareUrl);
      alert("Enlace copiado al portapapeles");
    }
  };

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
            <Link href="/vektor" className="text-blue-400 font-semibold hover:text-blue-300">
              Vektor
            </Link>
            <Link href="/contacto" className="hover:text-blue-300">
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

      {/* Back Button */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-3">
          <Link href="/vektor" className="inline-flex items-center gap-2 text-blue-800 hover:text-blue-600">
            <ArrowLeft className="h-4 w-4" />
            Volver a todos los boletines
          </Link>
        </div>
      </div>

      {/* Newsletter Detail */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Preview Image */}
            <div className="sticky top-24">
              <div className="overflow-hidden rounded-lg shadow-lg">
                <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200">
                    <Image
                      src={newsletter.coverImage}
                      alt={`Vektor ${newsletter.title}`}
                      width={600}
                      height={800}
                      className="w-full h-full object-cover"
                    />
                </div>
              </div>
            </div>

            {/* Right Column - Details */}
            <div>
              <div className="mb-6">
                <Badge className="bg-blue-900 text-white mb-4">
                  Edición {newsletter.id}
                </Badge>
                <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                  Vektor {newsletter.title}
                </h1>
                <div className="flex items-center gap-2 text-neutral-600 mb-6">
                  <Calendar className="h-5 w-5" />
                  <span>{newsletter.date}</span>
                </div>
                <p className="text-lg text-neutral-700 leading-relaxed">
                  {newsletter.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={newsletter.pdfUrl}
                    download
                    className="flex-1"
                  >
                    <Button className="w-full bg-blue-800 hover:bg-blue-700 flex items-center justify-center gap-2">
                      <Download className="h-5 w-5" />
                      Descargar PDF
                    </Button>
                  </a>
                  <a
                    href={newsletter.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button variant="outline" className="w-full border-blue-800 text-blue-800 hover:bg-blue-50 flex items-center justify-center gap-2">
                      Ver en navegador
                    </Button>
                  </a>
                </div>
                <Button
                  onClick={handleShare}
                  variant="outline"
                  className="w-full border-neutral-300 hover:bg-neutral-50 flex items-center justify-center gap-2"
                >
                  <Share2 className="h-5 w-5" />
                  Compartir
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
