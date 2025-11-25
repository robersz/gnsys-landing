import Image from "next/image";

const clients = [
  { name: "Lala", slug: "lala" },
  { name: "Cuprum", slug: "cuprum" },
  { name: "Cydsa", slug: "cydsa" },
  { name: "Grupo PROMAX", slug: "promax" },
  { name: "Farmacias del Ahorro", slug: "ahorro" },
  { name: "Grupo Imperial", slug: "imperial" },
  { name: "FEMSA", slug: "femsa" },
  { name: "Verzatec", slug: "verzatec" },
  { name: "Grainger", slug: "grainger" },
  { name: "Heineken", slug: "heineken" },
  { name: "Cerrey", slug: "cerrey" },
  { name: "Alen", slug: "alen" },
  { name: "Marcatel", slug: "marcatel" },
  { name: "Metalsa", slug: "metalsa" },
  { name: "Soriana", slug: "soriana" },
  { name: "Axtel", slug: "axtel" },
  { name: "Ternium", slug: "ternium" },
  { name: "Interfactura", slug: "interfactura" },
  { name: "Key Química", slug: "key" },
  { name: "Ahmsa", slug: "ahmsa" },
  { name: "Caterpillar", slug: "caterpillar" },
  { name: "Christus Muguerza", slug: "christus" },
  { name: "Home Depot", slug: "homedepot" },
  { name: "Tyson", slug: "tyson" },
];

export default function ClientesPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      
      <header className="mb-10">
        <p className="text-sm font-semibold text-sky-500 uppercase tracking-wide">
          Clientes
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-3">
          Confían en nosotros.
        </h1>
        <p className="text-slate-600 max-w-3xl">
          Organizaciones líderes de México que han confiado en nuestro equipo para ejecutar proyectos 
          de infraestructura, nube híbrida, virtualización, almacenamiento y protección de datos.
        </p>
      </header>

      <section>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {clients.map((client) => (
            <div
              key={client.slug}
              className="rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center p-4 h-32"
            >
              <Image
                src={`/${client.slug}.png`}
                alt={client.name}
                width={200}
                height={200}
                className="object-contain max-h-14 lg:max-h-16"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
