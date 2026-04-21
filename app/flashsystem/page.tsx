import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  Factory,
  QrCode,
  ServerCog,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "IBM FlashSystem | Recursos Exclusivos GNSYS",
  description:
    "Explore el valor de IBM FlashSystem para su organización: calcule su ROI potencial y descubra casos de uso reales por industria.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "https://gnsys.com.mx/flashsystem",
  },
};

const tools = [
  {
    href: "/flashsystem/roi",
    icon: Calculator,
    eyebrow: "Herramienta 01",
    title: "Calculadora de ROI",
    description:
      "Explora el impacto financiero de modernizar almacenamiento con IBM FlashSystem y estima beneficios potenciales en tu operación.",
    bullets: [
      "Compare escenarios de inversión y eficiencia.",
      "Visualice ahorros y retorno estimado.",
      "Lleve números concretos a sus decisiones de infraestructura.",
    ],
    accent: "from-blue-500/30 via-cyan-400/15 to-transparent",
  },
  {
    href: "/flashsystem/casos-uso",
    icon: Factory,
    eyebrow: "Herramienta 02",
    title: "Casos de Uso por Industria",
    description:
      "Revisa escenarios de aplicación para sectores clave y detecta rápidamente dónde FlashSystem puede acelerar resultados.",
    bullets: [
      "Ejemplos orientados a retos reales de su sector.",
      "Enfoque por industria y tipo de operación.",
      "Identifique rápidamente dónde puede ganar más con FlashSystem.",
    ],
    accent: "from-teal-400/25 via-blue-500/10 to-transparent",
  },
];

export default function FlashSystemLandingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#06101e] text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(15,98,254,0.20),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,176,255,0.16),transparent_35%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(120,169,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(120,169,255,0.06)_1px,transparent_1px)] bg-[size:46px_46px] opacity-40" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-10 sm:px-10 lg:px-12">
        <div className="mb-10 flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-200">
            <QrCode className="h-4 w-4" />
            Recursos Exclusivos
          </div>
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 sm:inline-flex">
            <Sparkles className="h-4 w-4 text-cyan-300" />
            IBM FlashSystem | Monterrey | 23 Abril 2026
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.28em] text-cyan-300/90">
              IBM FlashSystem · GNSYS
            </p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
              Descubra el impacto real de IBM FlashSystem en su organización.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Preparamos dos herramientas para que pueda evaluar, desde su propio
              contexto, el valor concreto que FlashSystem puede aportar a su
              operación: eficiencia financiera, resiliencia y velocidad de adopción.
            </p>
          </div>

          <div className="rounded-[28px] border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
            <div className="flex items-start gap-4">
              <div className="rounded-2xl border border-blue-400/25 bg-blue-500/10 p-3 text-cyan-200">
                <ServerCog className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
                  ¿Qué puede explorar aquí?
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-300">
                  <li>Estime el retorno financiero de modernizar su almacenamiento.</li>
                  <li>Explore escenarios aplicados a su industria y tipo de operación.</li>
                  <li>Acceda a ambas herramientas de forma directa, en cualquier momento.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <Link
                key={tool.href}
                href={tool.href}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-[#0b1628]/90 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-[#0d1b31]"
              >
                <div
                  className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tool.accent} opacity-70 transition duration-300 group-hover:opacity-100`}
                />
                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-cyan-200">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition group-hover:translate-x-1">
                      Abrir herramienta
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300/80">
                    {tool.eyebrow}
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-white">
                    {tool.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-slate-300">
                    {tool.description}
                  </p>

                  <ul className="mt-6 space-y-3 border-t border-white/10 pt-6 text-sm text-slate-200/85">
                    {tool.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-300" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            );
          })}
        </div>

      </section>
    </main>
  );
}
