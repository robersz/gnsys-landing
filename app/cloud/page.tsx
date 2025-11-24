"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Cloud, Server, ShieldCheck, Layers } from "lucide-react";
import Link from "next/link";

export default function CloudPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <Badge className="bg-white/20 text-white mb-4">Servicios Cloud</Badge>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            Cloud híbrida diseñada para tu negocio
          </h1>

          <p className="text-white/90 max-w-2xl text-lg">
            Alineamos arquitectura, seguridad y costos en IBM Cloud, AWS
            (Querétaro) y on-prem para que tu infraestructura acompañe la
            estrategia, no la frene.
          </p>

          <div className="mt-8 flex gap-3">
            <Link
              href="mailto:contacto@gnsys.com.mx?subject=Consulta%20sobre%20servicios%20Cloud"
            >
              <Button
                size="lg"
                className="bg-white text-blue-900 hover:bg-blue-100 rounded-sm"
              >
                Contactar a un consultor
              </Button>
            </Link>

            <Link href="/">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/20 rounded-sm"
              >
                Volver al inicio <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* PROBLEMAS QUE RESOLVEMOS */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold mb-6">
            ¿Qué problema resolvemos?
          </h2>

          <p className="text-lg text-neutral-700 max-w-3xl mb-6">
            Muchas empresas en México están en un punto intermedio: tienen
            infraestructura on-prem valiosa, pero ya usan servicios en la nube
            de forma aislada — backups, aplicaciones puntuales, datos dispersos.
          </p>

          <p className="text-lg text-neutral-700 max-w-3xl mb-10">
            El resultado:
            <br />
            • Costos difíciles de justificar  
            • Seguridad fragmentada  
            • Latencias y cuellos de botella  
            • Equipos de TI ocupados apagando fuegos  
          </p>

          <Card className="border-blue-900/20 shadow-sm rounded-sm">
            <CardContent className="text-neutral-800 p-6 leading-relaxed">
              En Gnsys ayudamos a convertir ese escenario en una{" "}
              <strong>arquitectura cloud híbrida clara, segura y administrable.</strong>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* SERVICIOS CLOUD */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold mb-10">Qué hacemos en Cloud</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* TCO/ROI */}
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <Layers className="h-5 w-5 text-blue-900" />
                  Assessment y TCO/ROI
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700">
                Revisamos cargas actuales y definimos qué mover, qué mantener y
                cómo se ve el costo real del plan de nube.
              </CardContent>
            </Card>

            {/* ARQUITECTURA HÍBRIDA */}
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <Cloud className="h-5 w-5 text-blue-900" />
                  Arquitectura híbrida
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700">
                Combinamos IBM Cloud, AWS (Querétaro) y on-prem para lograr
                alta disponibilidad, resiliencia y control.
              </CardContent>
            </Card>

            {/* MIGRACIÓN */}
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <Server className="h-5 w-5 text-blue-900" />
                  Migración de cargas críticas
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700">
                Migraciones controladas de servidores, aplicaciones y bases de
                datos con riesgo acotado y rollback definido.
              </CardContent>
            </Card>

            {/* DR */}
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <ShieldCheck className="h-5 w-5 text-blue-900" />
                  Backups y recuperación ante desastres
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700">
                Diseñamos esquemas de respaldo y DR orquestado entre nube y
                on-prem, con pruebas reales de recuperación.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CÓMO TRABAJAMOS */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold mb-6">Cómo trabajamos</h2>

          <ul className="space-y-4 text-neutral-800 text-lg">
            <li>1. Diagnóstico de infraestructura y riesgos.</li>
            <li>2. Mapa de cargas y prioridades.</li>
            <li>3. Arquitectura objetivo (híbrida o cloud-first).</li>
            <li>4. Implementación por etapas con pruebas y rollback.</li>
            <li>5. Operación, monitoreo y mejora continua.</li>
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-blue-900 text-white text-center px-6">
        <h3 className="text-3xl font-semibold mb-4">
          ¿Listo para una arquitectura cloud más clara y eficiente?
        </h3>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Conversemos sobre tu entorno actual y diseñemos un plan aterrizado a
          tu negocio.
        </p>

        <Link
          href="mailto:contacto@gnsys.com.mx?subject=Consulta%20sobre%20servicios%20Cloud"
        >
          <Button className="bg-white text-blue-900 hover:bg-blue-100 rounded-sm">
            Hablar con un consultor
          </Button>
        </Link>
      </section>
    </div>
  );
}
