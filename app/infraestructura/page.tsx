"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Server,
  HardDrive,
  Network,
  Monitor,
  Printer,
  ShieldCheck,
  Settings2,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function InfraestructuraPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <Badge className="bg-white/20 text-white mb-4">
            Servicios de Infraestructura
          </Badge>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Infraestructura robusta para tu centro de datos y tus usuarios
          </h1>

          <p className="text-white/90 max-w-2xl text-lg">
            Diseñamos y operamos soluciones de servidores, almacenamiento,
            redes, cómputo de usuario final e impresión para que tu TI sea
            estable, escalable y preparada para la nube.
          </p>

          <div className="mt-8 flex gap-3 flex-wrap">
            <Link href="mailto:ventas@gnsys.com.mx?subject=Consulta%20sobre%20Infraestructura%20Gnsys">
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-100 rounded-sm"
              >
                Hablar con un consultor
              </Button>
            </Link>

            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-blue-900 hover:bg-blue-100 rounded-sm"
              >
                Volver al inicio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ROL DE LA INFRAESTRUCTURA */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold mb-6">
            El rol de la infraestructura en tu negocio
          </h2>
          <p className="text-lg text-neutral-700 max-w-3xl mb-4">
            La infraestructura es la base silenciosa de tu operación: centros
            de datos, redes, almacenamiento, cómputo de usuario final e
            impresión. Si cualquiera de estas capas falla, los procesos de
            negocio se detienen.
          </p>
          <p className="text-lg text-neutral-700 max-w-3xl">
            En Gnsys integramos hardware on-premise y servicios en la nube
            (IBM, AWS, otros) para que tu plataforma sea confiable, sencilla de
            administrar y preparada para los siguientes proyectos de
            transformación digital.
          </p>
        </div>
      </section>

      {/* QUÉ HACEMOS EN INFRAESTRUCTURA */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold mb-10">
            Qué hacemos en Infraestructura
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Infraestructura Data Center - HW */}
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <Server className="h-5 w-5 text-blue-900" />
                  Infraestructura Data Center – HW
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700 space-y-2">
                <p>
                  Diseño y suministro de infraestructura on-premise o en la
                  nube: servidores, almacenamiento y redes empresariales.
                </p>
                <ul className="list-disc ml-5 text-sm">
                  <li>Servidores IBM Power, LinuxONE y x86 (Intel / AMD).</li>
                  <li>Almacenamiento Flash y Tape para distintos niveles de SLA.</li>
                  <li>Redes y seguridad perimetral integradas al data center.</li>
                  <li>Soluciones de impresión asociadas a tu entorno de TI.</li>
                </ul>
              </CardContent>
            </Card>

            {/* SW Defined Datacenter */}
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <Settings2 className="h-5 w-5 text-blue-900" />
                  SW Defined Datacenter & Virtualización
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700 space-y-2">
                <p>
                  Modernización hacia un centro de datos definido por software:
                  consolidación, hyperconvergencia y automatización.
                </p>
                <ul className="list-disc ml-5 text-sm">
                  <li>
                    Soluciones de consolidación, virtualización e
                    hiperconvergencia.
                  </li>
                  <li>
                    Máquinas virtuales y contenedores (por ejemplo Red Hat OpenShift,
                    Kubernetes, Tanzu).
                  </li>
                  <li>
                    Gestión, orquestación y automatización de cargas de trabajo.
                  </li>
                  <li>Soluciones de alta disponibilidad para infraestructura.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Cómputo End Point / VDI */}
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <Monitor className="h-5 w-5 text-blue-900" />
                  Cómputo End Point / Virtual Desktop
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700 space-y-2">
                <p>
                  Equipos para usuario final y ambientes virtuales para trabajo
                  remoto o centralizado.
                </p>
                <ul className="list-disc ml-5 text-sm">
                  <li>
                    Laptops, desktops, tablets y workstations para distintos
                    perfiles.
                  </li>
                  <li>Ambientes de Virtual Desktop Infrastructure (VDI).</li>
                  <li>
                    Centro de servicio autorizado y gestión de garantías para
                    equipos Lenovo.
                  </li>
                  <li>Administración de end points y políticas de uso.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Impresión y servicios gestionados */}
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <Printer className="h-5 w-5 text-blue-900" />
                  Soluciones de impresión y MPS
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700 space-y-2">
                <p>
                  Servicios gestionados de impresión alineados a tu operación y
                  a tus políticas de costos.
                </p>
                <ul className="list-disc ml-5 text-sm">
                  <li>Manejo integral de parques de impresión.</li>
                  <li>Esquemas de renta mensual y costo por clic.</li>
                  <li>Gestión de consumibles y mantenimiento preventivo.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CÓMO LO HACEMOS */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold mb-6">Cómo trabajamos</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <Users className="h-5 w-5 text-blue-900" />
                  Alineados a tu operación
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700">
                Analizamos procesos, aplicaciones críticas y niveles de servicio
                que necesitas para definir una plataforma a la medida, no un
                catálogo genérico de hardware.
              </CardContent>
            </Card>

            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <ShieldCheck className="h-5 w-5 text-blue-900" />
                  Seguridad y continuidad
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700">
                Integramos esquemas de respaldo, DR, seguridad perimetral y de
                end points para que la infraestructura soporte tus políticas de
                riesgo y cumplimiento.
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-lg text-neutral-700">
            El resultado es una plataforma consistente para aplicaciones
            tradicionales, proyectos de nube y cargas modernas basadas en
            contenedores o servicios administrados.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-blue-900 text-white text-center px-6">
        <h3 className="text-3xl font-semibold mb-4">
          ¿Tu infraestructura necesita una actualización ordenada?
        </h3>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Podemos ayudarte a aterrizar un plan que combine lo que ya tienes con
          nuevas capacidades de centro de datos, nube y cómputo de usuario
          final.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="mailto:ventas@gnsys.com.mx?subject=Consulta%20sobre%20Infraestructura%20Gnsys">
            <Button className="bg-white text-blue-900 hover:bg-blue-100 rounded-sm">
              Contactar a un consultor
            </Button>
          </Link>

          <Link
            href="https://wa.me/528119086025?text=Hola%2C%20me%20gustaria%20hablar%20con%20el%20equipo%20de%20Gnsys%20sobre%20Infraestructura."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant="outline"
              className="bg-white text-blue-900 hover:bg-green-100 rounded-sm"
            >
              Contactar por WhatsApp
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
