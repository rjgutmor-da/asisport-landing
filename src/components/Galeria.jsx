import React from 'react';

const itemsGaleria = [
  {
    id: 1,
    imagen: '/AsistenciaMano1.png',
    subtitulo: 'Toma asistencia en 1 minuto.',
  },
  {
    id: 2,
    imagen: '/DashboardMockup.png',
    subtitulo: 'Toda la información necesaria está aquí.',
  },
  {
    id: 3,
    imagen: '/AlumnosMockup.png',
    subtitulo: 'Comunicación directa vía WhatsApp.',
  },
  {
    id: 4,
    imagen: '/SaaSport-Pagina 1.png',
    subtitulo: 'Las finanzas que entienden el fútbol.',
  },
];

export default function Galeria() {
  return (
    <section id="galeria" className="py-20 bg-[var(--color-bg-main)]">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
          Conoce <span className="text-[var(--color-primary)]">SaaSport</span> por dentro
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Explora cómo nuestra plataforma simplifica tu día a día en la escuela deportiva.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Contenedor estilo Pinterest (Masonry) mediante CSS Columns */}
        <div className="columns-1 md:columns-2 gap-6 space-y-6">
          {itemsGaleria.map((item) => (
            <div 
              key={item.id} 
              className="break-inside-avoid relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 group shadow-lg"
            >
              <img
                src={item.imagen}
                alt={item.subtitulo}
                className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end">
                <h3 className="text-lg md:text-xl font-medium text-white drop-shadow-md">
                  {item.subtitulo}
                </h3>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enlace al manual interactivo */}
        <div className="mt-16 flex justify-center">
          <a 
            href="/infograf_a_interactiva.html" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#1A1A1A] border border-white/10 hover:border-[var(--color-primary)] rounded-full text-white font-semibold text-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,107,53,0.3)] hover:scale-105"
          >
            <span className="text-[var(--color-primary)] group-hover:animate-pulse">▶</span>
            Ver ejemplo toma asistencia
          </a>
        </div>
      </div>
    </section>
  );
}
