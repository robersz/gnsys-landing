import Image from "next/image";

const partners = [
  { name: "IBM", slug: "ibm" },
  { name: "Lenovo", slug: "lenovo" },
  { name: "VMware", slug: "vmware" },
  { name: "Red Hat", slug: "redhat" },
  { name: "AWS", slug: "aws" },
  { name: "Microsoft", slug: "microsoft" },
  { name: "Nutanix", slug: "nutanix" },
  { name: "Dell", slug: "dell" },
  { name: "Lexmark", slug: "lexmark" },
  { name: "Huawei", slug: "huawei" },
  { name: "Apple", slug: "apple" },
  { name: "Veeam", slug: "veeam" },
];

export default function AlianzasPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-10">
        <p className="text-sm font-semibold text-sky-500 uppercase tracking-wide">
          Alianzas estratégicas
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-3">
          Ecosistema de tecnología empresarial.
        </h1>
        <p className="text-slate-600 max-w-3xl">
          Colaboramos con los principales fabricantes de infraestructura,
          virtualización y nube para diseñar arquitecturas robustas,
          seguras y alineadas a los objetivos de negocio de nuestros clientes.
        </p>
      </header>

      <section>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.slug}
              className="rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center p-4 h-32"
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={`/${partner.slug}.png`}
                  alt={partner.name}
                  width={200}
                  height={200}
                  className="object-contain max-h-14 lg:max-h-16"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
