import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0A0A0A]">
      {/* Glow Effect */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[800px] h-[400px] bg-[var(--color-primary)]/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
          Empezá a controlar tu escuela <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[#FF8555]">
            como siempre quisiste
          </span>
        </h2>
        
        <p className="text-xl md:text-2xl text-[var(--color-text-sec)] mb-12 max-w-2xl mx-auto">
          Agenda una demostración de 15 minutos y descubre cómo controlar asistencias, mensualidades y cobros desde un solo lugar.
        </p>

        <div className="flex flex-col items-center gap-6">
          <a 
            href="https://wa.me/59174631123?text=Hola,%20necesito%20agendar%20una%20reunion%20para%20conocer%20mas%20de%20SaaSport,"
            target="_blank" 
            rel="noreferrer"
            className="btn-primary w-full md:w-auto text-xl px-12 py-5 animate-pulse-slow"
          >
            Agendar demostración de 15 min
          </a>
          
          <div className="flex items-center gap-2 justify-center text-sm md:text-base text-[var(--color-text-ter)] bg-white/5 py-3 px-6 rounded-full border border-white/10 backdrop-blur-sm">
            <ShieldCheck className="text-[var(--color-success)]" size={20} />
            <span>
              Probá SaaSport <strong className="text-white">30 días gratis</strong>. Si no es para vos, cancelás y listo.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
