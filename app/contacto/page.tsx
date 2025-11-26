import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactoPage() {
  return (
    <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-10">
        <p className="text-sm font-semibold text-sky-500 uppercase tracking-wide">
          Contacto
        </p>
        <h1 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-3">
          Hablemos de tu próximo proyecto.
        </h1>
        <p className="text-slate-600 max-w-3xl">
          Estamos listos para apoyarte en infraestructura, virtualización, nube híbrida y servicios
          de tecnología empresarial. Escríbenos o visítanos en nuestras oficinas en Monterrey.
        </p>
      </header>

      {/* Información de contacto */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <MapPin className="h-6 w-6 text-sky-600" />
            <p className="text-slate-700">
              Ángel Martínez Villarreal No. 433<br />
              Chepevera, 64030 Monterrey, N.L.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="h-6 w-6 text-sky-600" />
            <a href="tel:+528183477640" className="text-sky-600 hover:underline">
              81 8347 7640
            </a>
          </div>

          <div className="flex items-center gap-4">
            <Mail className="h-6 w-6 text-sky-600" />
            <a href="mailto:ventas@gnsys.com.mx" className="text-sky-600 hover:underline">
              ventas@gnsys.com.mx
            </a>
          </div>
        </div>

        {/* Google Maps iframe */}
        <div className="w-full h-80 rounded-xl overflow-hidden shadow border border-slate-200">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.3414369113676!2d-100.34163598488563!3d25.678184883669664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86629595a2805e3d%3A0x4a717a8ba4a8988!2sGnsys!5e0!3m2!1ses!2smx!4v1700000000000!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

      </div>

      <section className="mt-16 border border-slate-200 rounded-xl shadow-sm p-8 bg-white">
        <h2 className="text-2xl font-semibold text-slate-900 mb-3">
          Envíanos un mensaje
        </h2>
        <p className="text-slate-600 mb-8">
          Completa el siguiente formulario y nuestro equipo comercial se pondrá en contacto contigo a la brevedad.
        </p>

        <form
          action="https://formsubmit.co/ventas@gnsys.com.mx"
          method="POST"
          className="grid grid-cols-1 gap-6 sm:grid-cols-2"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="nombre" className="text-sm font-medium text-slate-700">
              Nombre completo
            </label>
            <input
              id="nombre"
              name="name"
              type="text"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="Tu nombre"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="nombre@empresa.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="telefono" className="text-sm font-medium text-slate-700">
              Teléfono
            </label>
            <input
              id="telefono"
              name="phone"
              type="tel"
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="(81) 0000 0000"
            />
          </div>

          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="mensaje" className="text-sm font-medium text-slate-700">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="message"
              rows={5}
              required
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500"
              placeholder="Cuéntanos sobre tu proyecto o necesidades tecnológicas"
            ></textarea>
          </div>

          <div className="sm:col-span-2">
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg bg-sky-600 px-6 py-3 text-white font-semibold shadow hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Enviar mensaje
            </button>
          </div>
        </form>
      </section>
    </main>
  );
}
