"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Boxes,
  Server,
  Cloud,
  Gauge,
  ShieldCheck,
  Settings2,
  ArrowRight,
  Network,
} from "lucide-react";
import Link from "next/link";

export default function VirtualizacionPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <Badge className="bg-white/20 text-white mb-4">
            Virtualización & SDDC
          </Badge>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Virtualización para consolidar, estandarizar y simplificar
          </h1>

          <p className="text-white/90 max-w-2xl text-lg">
            Diseñamos y operamos entornos virtualizados sobre VMware, Red Hat y
            soluciones de nube para que tus cargas se ejecuten con mayor
            disponibilidad, control y eficiencia de costos.
          </p>

          <div className="mt-8 flex gap-3 flex-wrap">
            <Link href="mailto:ventas@gnsys.com.mx?subject=Consulta%20sobre%20Virtualizacion%20Gnsys">
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

      {/* CONTEXTO */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold mb-6">
            De servidores dispersos a plataformas virtualizadas
          </h2>

          <p className="text-lg text-neutral-700 max-w-3xl mb-4">
            Muchas organizaciones todavía operan con{" "}
            <strong>servidores físicos aislados</strong>, baja utilización de
            recursos y administraciones diferentes por aplicación. Eso complica
            la operación diaria, el control de cambios y la recuperación ante
            fallas.
          </p>

          <p className="text-lg text-neutral-700 max-w-3xl">
            La virtualización y el datacenter definido por software permiten
            consolidar cargas, estandarizar configuraciones y ganar visibilidad
            sobre desempeño, capacidad y costos, tanto on-premise como en la
            nube.
          </p>
        </div>
      </section>

      {/* QUÉ HACEMOS EN VIRTUALIZACIÓN */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold mb-10">
            Qué hacemos en Virtualización
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Consolidación y diseño */}
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <Server className="h-5 w-5 text-blue-900" />
                  Consolidación y diseño de clusters
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700 space-y-2">
                <p>
                  Evaluamos tu inventario de servidores y aplicaciones para
                  definir un diseño de clústeres virtuales con los niveles de
                  disponibilidad que requiere tu negocio.
                </p>
                <ul className="list-disc ml-5 text-sm">
                  <li>Dimensionamiento de cómputo, memoria y storage.</li>
                  <li>
                    Agrupación por criticidad, ambiente (prod / QA / dev) y
                    dependencias.
                  </li>
                  <li>
                    Diseño de políticas de tolerancia a fallos y alta
                    disponibilidad.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Plataformas */}
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <Boxes className="h-5 w-5 text-blue-900" />
                  Plataformas de virtualización y SDDC
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700 space-y-2">
                <p>
                  Implementamos y operamos plataformas de virtualización y
                  datacenter definido por software sobre tecnologías líderes.
                </p>
                <ul className="list-disc ml-5 text-sm">
                  <li>Entornos VMware/vSphere y alternativas compatibles.</li>
                  <li>
                    Plataformas basadas en Red Hat y soluciones de
                    hiperconvergencia.
                  </li>
                  <li>
                    Integración con almacenamiento, redes y servicios de nube.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Operación y monitoreo */}
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <Gauge className="h-5 w-5 text-blue-900" />
                  Operación, monitoreo y performance
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700 space-y-2">
                <p>
                  Acompañamos la operación diaria de la plataforma con
                  herramientas de monitoreo, alertas y buenas prácticas de
                  capacity planning.
                </p>
                <ul className="list-disc ml-5 text-sm">
                  <li>
                    Visibilidad de uso de recursos por clúster, host y máquina
                    virtual.
                  </li>
                  <li>Recomendaciones de ajuste y consolidación continua.</li>
                  <li>
                    Documentación de estándares de configuración y cambios.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Nube & DR */}
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <Cloud className="h-5 w-5 text-blue-900" />
                  Integración con nube y recuperación ante desastres
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700 space-y-2">
                <p>
                  Extendemos tus clústeres virtualizados hacia la nube para
                  escenarios de contingencia, burst de capacidad o pruebas.
                </p>
                <ul className="list-disc ml-5 text-sm">
                  <li>
                    Replicación de máquinas virtuales hacia IBM Cloud, AWS u
                    otros destinos.
                  </li>
                  <li>Planes de DR con pruebas periódicas.</li>
                  <li>
                    Integración con soluciones de backup y protección de datos.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold mb-6">Cómo trabajamos</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <Network className="h-5 w-5 text-blue-900" />
                  Alineados a tu arquitectura actual
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700">
                Partimos de lo que ya tienes: hardware, contratos, licenciamiento
                y restricciones. A partir de ahí definimos un camino de
                modernización por etapas, no un reemplazo abrupto.
              </CardContent>
            </Card>

            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <ShieldCheck className="h-5 w-5 text-blue-900" />
                  Gobernanza y buenas prácticas
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700">
                Definimos estándares de creación de VMs, redes, roles y
                respaldos para evitar la proliferación descontrolada de
                máquinas, configuraciones inconsistentes y riesgos de seguridad.
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-lg text-neutral-700">
            El objetivo es que tu plataforma virtualizada sea{" "}
            <strong>predecible, auditable y fácil de operar</strong>, lista
            para convivir con estrategias de nube híbrida y contenedores.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-blue-900 text-white text-center px-6">
        <h3 className="text-3xl font-semibold mb-4">
          ¿Quieres ordenar y modernizar tu entorno de virtualización?
        </h3>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Te ayudamos a evaluar tu plataforma actual y a definir un roadmap
          realista de consolidación y mejora.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="mailto:ventas@gnsys.com.mx?subject=Consulta%20sobre%20Virtualizacion%20Gnsys">
            <Button className="bg-white text-blue-900 hover:bg-blue-100 rounded-sm">
              Escribir a ventas@gnsys.com.mx
            </Button>
          </Link>

          <Link
            href="https://wa.me/528119086025?text=Hola%2C%20me%20gustaria%20hablar%20con%20el%20equipo%20de%20Gnsys%20sobre%20Virtualizacion."
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
