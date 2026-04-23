'use client';

import { useForm, ValidationError } from '@formspree/react';
import { Input } from '@/components/ui/input';
import { CheckCircle2, Loader2 } from 'lucide-react';

export function FlashSystemSubscribeForm() {
  const [state, handleSubmit] = useForm('xkokkbwr');

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 sm:flex-row sm:items-end sm:flex-wrap"
    >
      {/* Honeypot nativo de Formspree */}
      <input type="text" name="_gotcha" style={{ display: 'none' }} tabIndex={-1} autoComplete="off" />

      <div className="flex-1 min-w-[160px]">
        <label htmlFor="sub_first_name" className="mb-1.5 block text-xs font-medium text-slate-400">
          Nombre <span className="text-cyan-400">*</span>
        </label>
        <Input
          id="sub_first_name"
          name="first_name"
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
          name="last_name"
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
          name="email"
          type="email"
          required
          maxLength={100}
          placeholder="correo@empresa.com"
          autoComplete="email"
          className="border-white/10 bg-white/5 text-white placeholder:text-slate-500 focus:border-cyan-400/50"
        />
        <ValidationError field="email" errors={state.errors} className="mt-1 text-xs text-red-400" />
      </div>

      <div className="flex items-center gap-3 sm:pb-0">
        <button
          type="submit"
          disabled={state.submitting || state.succeeded}
          className="w-full sm:w-auto rounded-xl bg-cyan-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-[#06101e] disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {state.submitting ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin" />
              Enviando…
            </span>
          ) : 'Suscribirme'}
        </button>

        {state.succeeded && (
          <span className="flex items-center gap-1.5 text-sm font-medium text-cyan-300">
            <CheckCircle2 className="h-5 w-5" />
            ¡Listo!
          </span>
        )}
      </div>
    </form>
  );
}
