'use client';

import { useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export function ContactForm() {
  const searchParams = useSearchParams();
  const enviado = searchParams.get('enviado') === '1';
  const loadTime = useRef<number>(0);

  useEffect(() => {
    loadTime.current = Date.now();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    const elapsed = Date.now() - loadTime.current;
    if (elapsed < 3000) {
      e.preventDefault();
    }
  }

  if (enviado) {
    return (
      <div className="flex items-start gap-4 rounded-xl border border-green-200 bg-green-50 p-6">
        <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-600" />
        <div>
          <p className="font-semibold text-green-800">¡Mensaje enviado!</p>
          <p className="mt-1 text-sm text-green-700">
            Recibimos tu solicitud. Nuestro equipo comercial te contactará a la brevedad.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      action="https://crm.zoho.com/crm/WebToLeadForm"
      method="POST"
      acceptCharset="UTF-8"
      onSubmit={handleSubmit}
      className="space-y-5"
    >
      {/* Tokens de seguridad Zoho — no modificar */}
      <input type="hidden" name="xnQsjsdp" value="91d0d978fc0d18965dd85a0e642cbba8ec4dddba86c3770f3533ce2ac7082044" />
      <input type="hidden" name="zc_gad" id="zc_gad" value="" />
      <input type="hidden" name="xmIwtLD" value="d643b366830df7ed2a53d353f530c74f3eb393878b7b4663e37653a3da48aecfacd04d7d296f86ed1c688bc740ff9d42" />
      <input type="hidden" name="actionType" value="TGVhZHM=" />
      <input type="hidden" name="returnURL" value="https://gnsys.com.mx/contacto?enviado=1" />

      {/* Honeypot — posicionado fuera de pantalla para engañar bots */}
      <div style={{ position: 'absolute', left: '-9999px', top: '-9999px' }} aria-hidden="true">
        <input
          type="text"
          name="aG9uZXlwb3Q"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </div>

      {/* Empresa */}
      <div className="space-y-1.5">
        <label htmlFor="Company" className="text-sm font-medium text-slate-700">
          Empresa <span className="text-red-500">*</span>
        </label>
        <Input
          id="Company"
          name="Company"
          type="text"
          required
          maxLength={200}
          placeholder="Nombre de tu empresa"
          autoComplete="organization"
        />
      </div>

      {/* Nombre y Apellido */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="First_Name" className="text-sm font-medium text-slate-700">
            Nombre <span className="text-red-500">*</span>
          </label>
          <Input
            id="First_Name"
            name="First Name"
            type="text"
            required
            maxLength={40}
            placeholder="Tu nombre"
            autoComplete="given-name"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="Last_Name" className="text-sm font-medium text-slate-700">
            Apellido <span className="text-red-500">*</span>
          </label>
          <Input
            id="Last_Name"
            name="Last Name"
            type="text"
            required
            maxLength={80}
            placeholder="Tu apellido"
            autoComplete="family-name"
          />
        </div>
      </div>

      {/* Correo */}
      <div className="space-y-1.5">
        <label htmlFor="Email" className="text-sm font-medium text-slate-700">
          Correo electrónico <span className="text-red-500">*</span>
        </label>
        <Input
          id="Email"
          name="Email"
          type="email"
          required
          maxLength={100}
          placeholder="correo@empresa.com"
          autoComplete="email"
        />
      </div>

      {/* Móvil y Ciudad */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <label htmlFor="Mobile" className="text-sm font-medium text-slate-700">
            Teléfono / Móvil
          </label>
          <Input
            id="Mobile"
            name="Mobile"
            type="tel"
            maxLength={30}
            placeholder="81 xxxx xxxx"
            autoComplete="tel"
          />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="City" className="text-sm font-medium text-slate-700">
            Ciudad <span className="text-red-500">*</span>
          </label>
          <Input
            id="City"
            name="City"
            type="text"
            required
            maxLength={100}
            placeholder="Monterrey"
            autoComplete="address-level2"
          />
        </div>
      </div>

      {/* Descripción */}
      <div className="space-y-1.5">
        <label htmlFor="Description" className="text-sm font-medium text-slate-700">
          ¿En qué podemos ayudarte? <span className="text-red-500">*</span>
        </label>
        <Textarea
          id="Description"
          name="Description"
          required
          rows={4}
          placeholder="Cuéntanos sobre tu proyecto o necesidad..."
        />
      </div>

      <Button
        type="submit"
        size="lg"
        className="w-full bg-sky-600 hover:bg-sky-700 text-white sm:w-auto"
      >
        Enviar mensaje
      </Button>
    </form>
  );
}
