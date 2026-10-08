import React from 'react';
import { trackLead } from '../services/pixelService';
import PreguntasClave from './PreguntasClave';
import VideoDemo from './VideoDemo';

/**
 * Sección Hero principal con tipografía clara y limpia,
 * enfocada en la propuesta de valor sin textos pequeños innecesarios.
 */
export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Efectos de fondo y resplandor */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#0A84FF]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        {/* Título principal H1 de alto impacto */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-8 leading-tight animate-fade-in">
          ¿Podés responder estas <span className="text-[#FF6B35]">3 preguntas</span> <br className="hidden md:block" />
          sobre tu escuela de fútbol en <span className="text-[#FF6B35]">menos de un minuto</span>?
        </h1>

        {/* Las 3 Preguntas Clave como tarjetas destacadas y legibles */}
        <PreguntasClave />

        {/* Puente persuasivo de dolor a solución */}
        <div className="max-w-3xl mx-auto mt-8 mb-10 text-center animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg md:text-xl text-[var(--color-text-sec)] leading-relaxed">
            Si tardás más de un minuto en saberlo o vivís revisando cuadernos y chats de WhatsApp, <span className="text-white font-semibold">estás administrando a ciegas</span>. SaaSport te da el control financiero y de asistencias en tiempo real desde tu celular.
          </p>
        </div>

        {/* Llamado a la acción (CTA) principal */}
        <div className="flex flex-col items-center mb-12 animate-fade-in" style={{ animationDelay: '0.25s' }}>
          <a 
            href="https://wa.me/59174631123?text=Hola,%20necesito%20agendar%20una%20reunion%20para%20conocer%20mas%20de%20SaaSport," 
            target="_blank" 
            rel="noreferrer"
            onClick={() => trackLead({ content_name: 'Demostración WhatsApp - Hero' })}
            className="btn-primary mb-3 text-lg md:text-xl px-10 py-4 font-bold shadow-xl shadow-[#FF6B35]/25"
          >
            Agendar demostración de 15 min
          </a>
          <p className="text-base text-neutral-300 font-medium">
            Incluye un mes de prueba totalmente gratis • Sin compromiso.
          </p>
        </div>

        {/* Demostración interactiva en Video */}
        <VideoDemo />
      </div>
    </section>
  );
}
