import React from 'react';
import { Coins, TrendingDown, Wallet } from 'lucide-react';

/**
 * Componente con las 3 preguntas clave sin micro-textos ni elementos redundantes,
 * priorizando tipografía grande, legible y alto impacto visual.
 */
export default function PreguntasClave() {
  const preguntas = [
    {
      id: 1,
      numero: '1️⃣',
      categoria: 'Cuentas por cobrar',
      pregunta: '«¿Cuánto de deudas tengo para cobrar?»',
      descripcion: 'Conoce al segundo qué alumnos deben mensualidades o matrículas sin perder horas revisando planillas ni mensajes de WhatsApp.',
      badgeColor: 'text-[#FF6B35] bg-[#FF6B35]/10 border-[#FF6B35]/30',
      accentColor: '#FF6B35',
      icon: <Coins size={18} className="text-[#FF6B35]" />,
      glowHover: 'hover:border-[#FF6B35]/60 hover:shadow-[0_10px_35px_-10px_rgba(255,107,53,0.35)]',
    },
    {
      id: 2,
      numero: '2️⃣',
      categoria: 'Cuentas por pagar',
      pregunta: '«¿A quién debo y cuánto?»',
      descripcion: 'Claridad total sobre sueldos de entrenadores, alquileres de canchas, compra de balones y compromisos con proveedores.',
      badgeColor: 'text-[#0A84FF] bg-[#0A84FF]/10 border-[#0A84FF]/30',
      accentColor: '#0A84FF',
      icon: <TrendingDown size={18} className="text-[#0A84FF]" />,
      glowHover: 'hover:border-[#0A84FF]/60 hover:shadow-[0_10px_35px_-10px_rgba(10,132,255,0.35)]',
    },
    {
      id: 3,
      numero: '3️⃣',
      categoria: 'Caja y bancos',
      pregunta: '«¿Mi saldo en banca y efectivo?»',
      descripcion: 'Saldo exacto disponible hoy mismo, separando el efectivo en mano de lo transferido por QR o cuenta de banco.',
      badgeColor: 'text-[#00D26A] bg-[#00D26A]/10 border-[#00D26A]/30',
      accentColor: '#00D26A',
      icon: <Wallet size={18} className="text-[#00D26A]" />,
      glowHover: 'hover:border-[#00D26A]/60 hover:shadow-[0_10px_35px_-10px_rgba(0,210,106,0.35)]',
    },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto my-8 animate-fade-in" style={{ animationDelay: '0.15s' }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
        {preguntas.map((item) => (
          <div
            key={item.id}
            className={`glass-panel p-7 sm:p-8 rounded-2xl flex flex-col justify-start transition-all duration-300 hover:-translate-y-1.5 relative group overflow-hidden ${item.glowHover}`}
          >
            {/* Brillo ambiental de esquina */}
            <div
              className="absolute -top-12 -right-12 w-28 h-28 rounded-full blur-2xl opacity-20 pointer-events-none transition-opacity group-hover:opacity-40"
              style={{ backgroundColor: item.accentColor }}
            />

            {/* Categoría destacada */}
            <div className="mb-4">
              <span className={`inline-flex items-center gap-2 text-sm sm:text-base font-semibold px-3.5 py-1.5 rounded-full border ${item.badgeColor}`}>
                {item.icon}
                <span>{item.categoria}</span>
              </span>
            </div>

            {/* Pregunta principal con número */}
            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-4 leading-snug">
              <span className="mr-2">{item.numero}</span>
              {item.pregunta}
            </h3>

            {/* Explicación en texto claro y cómodo */}
            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              {item.descripcion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
