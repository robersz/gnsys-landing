"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Cpu,
  MessageCircle,
  LineChart,
  Settings2,
  ShieldCheck,
  Users,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function AIPage() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      {/* HERO */}
      <section className="bg-gradient-to-b from-blue-900 to-blue-800 text-white py-20 px-6">
        <div className="mx-auto max-w-5xl">
          <Badge className="bg-white/20 text-white mb-4">
            Inteligencia Artificial
          </Badge>

          <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-4">
            IA aplicada al negocio, no a la moda
          </h1>

          <p className="text-white/90 max-w-2xl text-lg">
            Diseñamos copilotos, chatbots y modelos analíticos que se conectan
            a tus datos y procesos reales, con foco en ROI, seguridad y
            gobernanza.
          </p>

          <div className="mt-8 flex gap-3 flex-wrap">
            <Link href="mailto:ventas@gnsys.com.mx?subject=Consulta%20sobre%20Inteligencia%20Artificial%20Gnsys">
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

      {/* POR QUÉ IA CON GNSYS */}
      <section className="py-16 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold mb-6">
            ¿Por qué trabajar IA con Gnsys?
          </h2>

          <p className="text-lg text-neutral-700 max-w-3xl mb-4">
            El mercado está lleno de demos espectaculares pero poco conectadas a
            la realidad operativa. Nuestra aproximación es distinta: partimos
            de tus procesos, datos y restricciones, y a partir de ahí proponemos
            casos de uso concretos.
          </p>

          <ul className="mt-4 space-y-2 text-neutral-800 text-lg">
            <li>• Enfoque negocio primero, tecnología después.</li>
            <li>• Uso responsable de modelos de IA y de tus datos.</li>
            <li>• Integración con tu nube, tu red y tu seguridad.</li>
            <li>• Proyectos pequeños, medibles y escalables.</li>
          </ul>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold mb-10">
            Casos de uso típicos de IA
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Copilotos internos */}
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <Cpu className="h-5 w-5 text-blue-900" />
                  Copilotos para equipos internos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700 space-y-2">
                <p>
                  Asistentes entrenados con tus propios documentos, políticas y
                  procesos para apoyar a finanzas, operaciones, ventas o RH.
                </p>
                <ul className="list-disc ml-5 text-sm">
                  <li>Búsqueda inteligente en contratos, manuales y expedientes.</li>
                  <li>
                    Resumen de reportes y generación de respuestas guiadas.
                  </li>
                  <li>
                    Integración con herramientas existentes (correo, intranet,
                    Teams, etc.).
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Chatbots / Atención */}
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <MessageCircle className="h-5 w-5 text-blue-900" />
                  Chatbots y atención al cliente
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700 space-y-2">
                <p>
                  Agentes conversacionales para soporte, ventas y seguimiento,
                  conectados a tus sistemas y bases de conocimiento.
                </p>
                <ul className="list-disc ml-5 text-sm">
                  <li>Implementación en web, WhatsApp u otros canales.</li>
                  <li>Escalamiento fluido a agentes humanos cuando se requiere.</li>
                  <li>
                    Métricas de desempeño, satisfacción y ahorro de tiempo.
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Analítica / Anomalías */}
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <LineChart className="h-5 w-5 text-blue-900" />
                  Analítica avanzada y detección de anomalías
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700 space-y-2">
                <p>
                  Modelos que identifican patrones inusuales en ventas, consumo,
                  transacciones o comportamiento de clientes.
                </p>
                <ul className="list-disc ml-5 text-sm">
                  <li>Alertas tempranas sobre desvíos o riesgos.</li>
                  <li>Predicción de demanda y proyección de escenarios.</li>
                  <li>Dashboards ejecutivos conectados a tus datos.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Automatización */}
            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <Settings2 className="h-5 w-5 text-blue-900" />
                  Automatización apoyada con IA
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700 space-y-2">
                <p>
                  Integración de IA con flujos operativos y RPA para reducir
                  tareas repetitivas y errores manuales.
                </p>
                <ul className="list-disc ml-5 text-sm">
                  <li>Lectura inteligente de documentos y formularios.</li>
                  <li>Clasificación automática de tickets y solicitudes.</li>
                  <li>
                    Orquestación de procesos entre diferentes sistemas
                    empresariales.
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
                  <Users className="h-5 w-5 text-blue-900" />
                  Taller con negocio y TI
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700">
                Identificamos procesos, dolores y oportunidades con las personas
                que viven el día a día. No empezamos por el modelo, empezamos
                por el problema.
              </CardContent>
            </Card>

            <Card className="rounded-sm shadow-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <ShieldCheck className="h-5 w-5 text-blue-900" />
                  Seguridad y gobierno de datos
                </CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-700">
                Definimos qué datos se usan, cómo se protegen y bajo qué
                políticas se consumen los modelos, alineados a tu marco de
                cumplimiento.
              </CardContent>
            </Card>
          </div>

          <p className="mt-8 text-lg text-neutral-700">
            A partir de ahí, construimos{" "}
            <strong>prototipos de bajo riesgo</strong> que se pueden medir
            rápidamente; si el valor es claro, escalamos a producción con las
            áreas involucradas.
          </p>
        </div>
      </section>

      {/* TECNOLOGÍAS (GENÉRICO) */}
      <section className="py-16 bg-gray-50 px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-3xl font-semibold mb-6">
            Tecnologías y plataformas
          </h2>
          <p className="text-lg text-neutral-700 mb-4">
            Trabajamos sobre los principales ecosistemas de nube y modelos de
            IA, integrándolos a tu arquitectura existente:
          </p>
          <ul className="list-disc ml-5 text-neutral-800 space-y-1">
            <li>
              Modelos de lenguaje y de visión de distintos proveedores,
              seleccionados según el caso de uso.
            </li>
            <li>
              Integración con nubes como IBM Cloud, AWS y entornos on-premise.
            </li>
            <li>
              Uso de vectores, RAG y otras técnicas para aprovechar tus
              documentos y bases de conocimiento.
            </li>
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-20 bg-blue-900 text-white text-center px-6">
        <h3 className="text-3xl font-semibold mb-4">
          ¿Quieres explorar IA de forma responsable y con impacto real?
        </h3>
        <p className="text-white/80 max-w-2xl mx-auto mb-8">
          Podemos ayudarte a identificar uno o dos casos de uso concretos,
          construir un piloto y medir resultados antes de escalar.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="mailto:ventas@gnsys.com.mx?subject=Consulta%20sobre%20Inteligencia%20Artificial%20Gnsys">
            <Button className="bg-white text-blue-900 hover:bg-blue-100 rounded-sm">
              Escribir a ventas@gnsys.com.mx
            </Button>
          </Link>

          <Link
            href="https://wa.me/528119086025?text=Hola%2C%20me%20gustaria%20hablar%20con%20el%20equipo%20de%20Gnsys%20sobre%20Inteligencia%20Artificial."
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
