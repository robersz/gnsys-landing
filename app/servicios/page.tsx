export default function ServiciosPage() {
  const lifecycle = [
    {
      title: "Consultoría",
      description:
        "Entendemos tu entorno actual, cargas de trabajo y objetivos de negocio para definir la ruta tecnológica adecuada.",
    },
    {
      title: "Arquitectura y diseño",
      description:
        "Diseñamos arquitecturas on-prem, nube o híbridas que priorizan rendimiento, seguridad y escalabilidad.",
    },
    {
      title: "Implementación",
      description:
        "Ejecutamos proyectos llave en mano: instalación, configuración y puesta a punto de la solución.",
    },
    {
      title: "Soporte técnico",
      description:
        "Acompañamiento especializado para resolver incidencias, optimizar plataformas y mantener la operación estable.",
    },
    {
      title: "Servicios administrados",
      description:
        "Tomamos la administración diaria de tu infraestructura, respaldos y servicios críticos para que tu equipo se enfoque en el negocio.",
    },
  ];

  const solutions = [
    {
      title: "Infraestructura y Data Center",
      description:
        "Diseñamos e implementamos infraestructura de centro de datos on-premise o en la nube, basada en tecnologías líderes del mercado.",
      bullets: [
        "Servidores IBM Power, LinuxONE y x86 (Intel / AMD).",
        "Almacenamiento flash y cinta, redes y soluciones de impresión.",
        "Esquemas IaaS, PaaS, SaaS, BaaS y DRaaS según tus necesidades.",
      ],
    },
    {
      title: "Cloud, Virtualización e Hyperconvergencia",
      description:
        "Maximizamos el uso de tu hardware y la flexibilidad de tus cargas de trabajo con plataformas de virtualización y nube híbrida.",
      bullets: [
        "Consolidación y virtualización de servidores y aplicaciones.",
        "Plataformas hyperconvergentes y alta disponibilidad.",
        "Máquinas virtuales y contenedores (Kubernetes, OpenShift, Tanzu).",
      ],
    },
    {
      title: "Cómputo End Point y Virtual Desktop (VDI)",
      description:
        "Equipamos a tus usuarios con estaciones de trabajo físicas o virtuales, administradas de forma centralizada.",
      bullets: [
        "Laptops, desktops, tablets y workstations empresariales.",
        "Ambientes de escritorio virtual (VDI) seguros y gestionados.",
        "Centro de servicio autorizado y administración de end points.",
      ],
    },
    {
      title: "Seguridad, Redes y Acceso",
      description:
        "Protegemos tu información, aplicaciones y usuarios con un enfoque integral de seguridad y conectividad.",
      bullets: [
        "Firewalls físicos y virtuales, IPS, antivirus y microsegmentación.",
        "Control de acceso a aplicaciones, identidades y privilegios.",
        "Diseño de redes seguras para oficinas, data centers y nube.",
      ],
    },
    {
      title: "Respaldos, Continuidad y Disaster Recovery",
      description:
        "Aseguramos la disponibilidad de tus aplicaciones críticas y la recuperación de la información ante fallos o desastres.",
      bullets: [
        "Soluciones de respaldo on-prem y en nube (BaaS, DRaaS).",
        "Planes de continuidad y DRP, replicación de datos y site alterno.",
        "Diseño e implementación de estrategias de recuperación integral.",
      ],
    },
    {
      title: "Transformación Digital y Colaboración",
      description:
        "Mejoramos la experiencia de colaboración con soluciones integradas de audio, video y trabajo remoto.",
      bullets: [
        "Salas de colaboración all-in-one para equipos y clientes.",
        "Video conferencias, pizarras digitales y señalización.",
        "Integración con tus plataformas de colaboración existentes.",
      ],
    },
    {
      title: "Gestión, Automatización y Orquestación",
      description:
        "Simplificamos la operación de tu infraestructura con herramientas que automatizan tareas y orquestan servicios.",
      bullets: [
        "Automatización de tareas repetitivas de TI y despliegue de servicios.",
        "Orquestación de aplicaciones en contenedores y entornos híbridos.",
        "Monitoreo y gestión centralizada de recursos.",
      ],
    },
    {
      title: "Inteligencia Artificial y Datos",
      description:
        "Convertimos tus datos en decisiones accionables mediante analítica avanzada e inteligencia artificial.",
      bullets: [
        "Modelos analíticos sobre datos históricos operativos y de negocio.",
        "Casos de uso de IA para predicción, optimización y detección de riesgos.",
        "Uso de herramientas líderes de Big Data e IA empresarial.",
      ],
    },
    {
      title: "Servicios Administrados de Impresión",
      description:
        "Optimizamos la gestión de impresión para reducir costos y asegurar la continuidad operativa.",
      bullets: [
        "Renta de equipos y modelos de costo por página.",
        "Gestión de insumos y mantenimiento preventivo/correctivo.",
        "Monitoreo centralizado del parque de impresión.",
      ],
    },
  ];

  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero */}
      <header className="mb-10">
        <p className="text-sm font-semibold text-sky-500 uppercase tracking-wide">
          Servicios
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-3">
          Servicios y soluciones para una TI que impulsa tu negocio.
        </h1>
        <p className="text-slate-600 max-w-3xl">
          Combinamos consultoría, arquitectura e implementación con servicios
          administrados y soporte especializado para construir plataformas de
          infraestructura, nube, seguridad y datos que acompañen el crecimiento
          de tu empresa.
        </p>
      </header>

      {/* Ciclo de servicios */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold text-slate-900 mb-4">
          Cómo te acompañamos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lifecycle.map((item) => (
            <div
              key={item.title}
              className="rounded-xl bg-white shadow-sm border border-slate-100 p-5"
            >
              <h3 className="text-base font-semibold text-slate-900 mb-1">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Soluciones */}
      <section className="space-y-8">
        <h2 className="text-xl font-semibold text-slate-900">
          Soluciones tecnológicas
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <article
              key={solution.title}
              className="rounded-xl bg-white shadow-sm border border-slate-100 p-6 flex flex-col gap-3"
            >
              <h3 className="text-lg font-semibold text-slate-900">
                {solution.title}
              </h3>
              <p className="text-sm text-slate-600">
                {solution.description}
              </p>
              <ul className="mt-1 space-y-1 text-sm text-slate-600 list-disc list-inside">
                {solution.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
