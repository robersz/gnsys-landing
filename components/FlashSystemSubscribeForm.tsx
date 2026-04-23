'use client';

import { useRef, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { CheckCircle2 } from 'lucide-react';

export function FlashSystemSubscribeForm() {
  const searchParams = useSearchParams();
  const suscrito = searchParams.get('suscrito') === '1';
  const loadTime = useRef<number>(0);

  useEffect(() => {
    loadTime.current = Date.now();
  }, []);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    if (Date.now() - loadTime.current < 3000) {
      e.preventDefault();
    }
  }

  if (suscrito) {
    return (
      <div className="flex items-start gap-4 rounded-2xl border border-cyan-400/30 bg-cyan-400/10 p-5">
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" />
        <div>
          <p className="font-semibold text-white">¡Listo, quedaste registrado!</p>
          <p className="mt-1 text-sm text-slate-300">
            Te enviaremos recursos y herramientas exclusivas directo a tu correo.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form
      action="https://formspree.io/f/xkokkbwr"
      method="POST"
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:items-end sm:flex-wrap"
    >
      <input type="hidden" name="_next" value="https://gnsys.com.mx/flashsystem?suscrito=1" />

      {/* Honeypot nativo de Formspree */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="flex-1 min-w-[160px]">
        <label htmlFor="sub_first_name" className="mb-1.5 block text-xs font-medium text-slate-400">
          Nombre <span className="text-cyan-400">*</span>
        </label>
        <Input
          id="sub_first_name"
          name="First Name"
          type="text"
          required
          maxLength={40}
          placeholder="Tu nombre"
          autoComplete="given-name"
          className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-cyan-400/50"
        />
      </div>

      <div className="flex-1 min-w-[160px]">
        <label htmlFor="sub_last_name" className="mb-1.5 block text-xs font-medium text-slate-400">
          Apellido <span className="text-cyan-400">*</span>
        </label>
        <Input
          id="sub_last_name"
          name="Last Name"
          type="text"
          required
          maxLength={80}
          placeholder="Tu apellido"
          autoComplete="family-name"
          className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-cyan-400/50"
        />
      </div>

      <div className="flex-1 min-w-[200px]">
        <label htmlFor="sub_email" className="mb-1.5 block text-xs font-medium text-slate-400">
          Correo electrónico <span className="text-cyan-400">*</span>
        </label>
        <Input
          id="sub_email"
          name="Email"
          type="email"
          required
          maxLength={100}
          placeholder="correo@empresa.com"
          autoComplete="email"
          className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-cyan-400/50"
        />
      </div>

      <div className="sm:pb-0">
        <button
          type="submit"
          className="w-full sm:w-auto rounded-xl bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#06101e]"
        >
          Suscribirme
        </button>
      </div>
    </form>
  );
}
