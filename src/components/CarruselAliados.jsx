import React, { useEffect, useState } from 'react';
import { supabase } from '../services/supabaseClient';

const LOGOS_FALLBACK = [
  { src: '/logos/logo-planetafc.png', alt: 'Planeta FC' },
  { src: '/logos/logo_canito.png', alt: 'El Cañito' },
  { src: '/logos/logo-interstars.png', alt: 'Inter Stars Santa Cruz' },
  { src: '/logos/logo-detaquito.png', alt: 'De Taquito' },
  { src: '/logos/logo_guaracachi.png', alt: 'Guaracachi' },
  { src: '/logos/logo_halcones1.png', alt: 'Proyecto Halcones C.A.S.S.' },
  { src: '/logos/logo_olimpo.png', alt: 'Olimpo Soccer' },
  { src: '/logos/logo-JhonCarinao.png', alt: 'Escuela de fútbol JHON CARINAO' },
  { src: '/logos/logo_golden.png', alt: '@ Golden club' },
  { src: '/logos/logo_2abril.png', alt: '2 de Abril' },
  { src: '/logos/logo-realfcool.png', alt: 'Real FC' },
];

export default function CarruselAliados() {
  const [logos, setLogos] = useState(LOGOS_FALLBACK);

  useEffect(() => {
    async function cargarLogos() {
      if (!supabase) return;
      try {
        const { data, error } = await supabase
          .from('escuelas')
          .select('nombre, logo_url')
          .eq('activa', true)
          .not('logo_url', 'is', null);

        if (error) {
          console.error('Error cargando logos de Supabase:', error.message);
          return;
        }

        if (data && data.length > 0) {
          const logosMapeados = data.map(escuela => ({
            src: escuela.logo_url,
            alt: escuela.nombre
          }));
          setLogos(logosMapeados);
        }
      } catch (err) {
        console.error('Error al consultar escuelas en Supabase:', err);
      }
    }

    cargarLogos();
  }, []);

  // Duplicamos para efecto de loop infinito suave
  const duplicatedLogos = [...logos, ...logos, ...logos];

  const handleImageError = (e, altName) => {
    const fallback = LOGOS_FALLBACK.find(l => 
      l.alt.toLowerCase().includes(altName.toLowerCase()) || 
      altName.toLowerCase().includes(l.alt.toLowerCase())
    );
    if (fallback && e.target.src !== window.location.origin + fallback.src) {
      e.target.src = fallback.src;
    }
  };

  return (
    <section className="py-16 bg-[var(--color-surface)] border-y border-[var(--color-border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Escuelas que <span className="font-highlight text-[var(--color-primary)]">confían en nosotros</span>
        </h2>
      </div>

      <div className="relative w-full flex items-center overflow-hidden">
        {/* Gradients para desvanecer los bordes */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-[var(--color-surface)] to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-[var(--color-surface)] to-transparent z-10" />

        <div className="flex w-fit animate-scroll items-center gap-16 md:gap-24 px-10">
          {duplicatedLogos.map((logo, idx) => (
            <img 
              key={idx}
              src={logo.src}
              alt={logo.alt}
              onError={(e) => handleImageError(e, logo.alt)}
              className="h-20 md:h-28 w-auto object-contain opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-300 cursor-pointer drop-shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
