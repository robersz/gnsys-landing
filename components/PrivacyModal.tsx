"use client";

import { useEffect } from "react";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function PrivacyModal({ open, onClose }: Props) {
  if (!open) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-lg font-semibold mb-2">Aviso de Privacidad</h2>
        <p className="text-gray-700 text-sm leading-relaxed">
          En GNSYS protegemos tus datos personales conforme a la Ley Federal de 
          Protección de Datos Personales en Posesión de los Particulares. La 
          información que nos proporciones será utilizada únicamente para 
          responder a tus solicitudes, brindarte servicios, elaborar propuestas 
          comerciales y mejorar tu experiencia. No compartimos tus datos con 
          terceros sin tu consentimiento. Para consultar el aviso completo o 
          ejercer tus derechos ARCO, contáctanos en 
          <span className="font-semibold"> ventas@gnsys.com.mx</span>.
        </p>

        <button 
          className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}
