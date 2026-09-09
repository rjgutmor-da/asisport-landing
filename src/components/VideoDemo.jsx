import React from 'react';

/**
 * Componente VideoDemo
 * Muestra el video de demostración de YouTube integrado con la estética oscura de la landing.
 */
export default function VideoDemo() {
  return (
    <div className="w-full max-w-3xl mx-auto mt-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <div className="glass-panel rounded-2xl overflow-hidden p-2 sm:p-3 border border-white/10 shadow-[0_0_40px_rgba(255,107,53,0.15)] transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,107,53,0.25)]">
        <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-black/40">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/pip-z8zDvis"
            title="Demostración de SaaSport"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
