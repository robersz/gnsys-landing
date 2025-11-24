"use client";

import { useState } from "react";
import PrivacyModal from "./PrivacyModal";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <footer className="text-center py-6 text-sm text-gray-400">
        © 2025 GNSYS · 
        <button 
          onClick={() => setOpen(true)}
          className="ml-1 text-blue-500 hover:text-blue-600 underline"
        >
          Aviso de privacidad
        </button>
      </footer>

      <PrivacyModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
