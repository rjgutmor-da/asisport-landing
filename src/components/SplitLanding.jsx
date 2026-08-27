import React, { useState } from 'react';
import PricingModal from './PricingModal';
const SplitLanding = ({ onNavigate }) => {
  const [hoveredSide, setHoveredSide] = useState(null);
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  const leftNormal = "polygon(0 0, 55% 0, 45% 100%, 0 100%)";
  const rightNormal = "polygon(55% 0, 100% 0, 100% 100%, 45% 100%)";

  const leftExpanded = "polygon(0 0, 75% 0, 65% 100%, 0 100%)";
  const rightShrinked = "polygon(75% 0, 100% 0, 100% 100%, 65% 100%)";

  const leftShrinked = "polygon(0 0, 35% 0, 25% 100%, 0 100%)";
  const rightExpanded = "polygon(35% 0, 100% 0, 100% 100%, 25% 100%)";

  const getLeftClipPath = () => {
    if (hoveredSide === 'left') return leftExpanded;
    if (hoveredSide === 'right') return leftShrinked;
    return leftNormal;
  };

  const getRightClipPath = () => {
    if (hoveredSide === 'left') return rightShrinked;
    if (hoveredSide === 'right') return rightExpanded;
    return rightNormal;
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0A0A0A] font-sans">
      
      {/* ENCABEZADO SUPERIOR */}
      <div className="absolute top-6 md:top-16 left-0 w-full z-50 pointer-events-none flex flex-col items-center justify-center px-4">
        <div className="w-full flex justify-end max-w-[1200px] mb-4 pr-4 sm:pr-8 pointer-events-auto">
          <button 
            onClick={() => setIsPricingOpen(true)}
            className="group relative inline-flex items-center justify-center px-6 py-2.5 font-bold text-white transition-all duration-200 bg-gradient-to-r from-[#FF6B35] to-[#FF8E53] rounded-full hover:scale-105 hover:shadow-[0_0_20px_rgba(255,107,53,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B35] overflow-hidden"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span className="relative">Ver Precios</span>
          </button>
        </div>
        <h1 
          className="text-lg sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold text-center tracking-[-0.02em] uppercase max-w-[1000px] mb-2 md:mb-4 leading-tight drop-shadow-xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          LAS VICTORIAS SE CONSTRUYEN DENTRO Y FUERA DE LA GRUPO
        </h1>
        <p 
          className="text-xs sm:text-base md:text-xl text-[#D1D5DB] text-center max-w-3xl drop-shadow-lg font-medium"
          style={{ fontFamily: 'var(--font-subtitle)' }}
        >
          Lleva el control total de tu escuela y profesionaliza la comunicación con las familias para escalar tu club al siguiente nivel.
        </p>
      </div>
      
      {/* LADO IZQUIERDO: DEPORTE (AsiSport) */}
      <div 
        className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out cursor-pointer z-10 flex items-center bg-[#0A0A0A]"
        style={{ clipPath: getLeftClipPath() }}
        onMouseEnter={() => setHoveredSide('left')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => onNavigate('asisport')}
      >
        {/* Gráfico / Imagen de fondo */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-screen transition-transform duration-1000 bg-cover bg-center"
          style={{ 
             backgroundImage: "url('/grupo_cenital.png')",
             transform: hoveredSide === 'left' ? 'scale(1.05)' : 'scale(1)'
          }}
        ></div>
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 to-transparent"></div>
        
        <div className="relative z-20 w-1/2 pl-4 sm:pl-12 md:pl-24 pr-4 sm:pr-8 text-white flex flex-col justify-center h-full pt-16 md:pt-0">
          <div className={`transition-all duration-700 transform ${hoveredSide === 'left' ? 'scale-110 translate-x-4' : 'scale-100'}`}>
            <img src="/AsiSport.png" alt="AsiSport Logo" className="h-8 sm:h-12 md:h-20 mb-4 md:mb-6 object-contain" />
            <p className="text-xs sm:text-base md:text-2xl text-[#A0A0A0] font-medium mb-6 md:mb-8 max-w-lg">
              Toma asistencia en 1 minuto y comunícate con los padres en 1 clic
            </p>
            <button 
              className={`btn-primary ${hoveredSide === 'left' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('asisport');
              }}
            >
              Conocer Más
            </button>
          </div>
        </div>
      </div>

      {/* LADO DERECHO: FINANZAS (SaaSport) */}
      <div 
        className="absolute inset-0 w-full h-full transition-all duration-700 ease-in-out cursor-pointer z-20 flex items-center justify-end bg-[#0A0A0A]"
        style={{ clipPath: getRightClipPath() }}
        onMouseEnter={() => setHoveredSide('right')}
        onMouseLeave={() => setHoveredSide(null)}
        onClick={() => onNavigate('saasport')}
      >
        {/* Gráfico / Imagen de fondo para SaaSport */}
        <div 
          className="absolute inset-0 opacity-40 mix-blend-screen transition-transform duration-1000 bg-cover bg-center"
          style={{ 
             backgroundImage: "url('/Fondoderecha.jpg')",
             transform: hoveredSide === 'right' ? 'scale(1.05)' : 'scale(1)'
          }}
        ></div>
        {/* Overlay oscuro para legibilidad (de derecha a izquierda) */}
        <div className="absolute inset-0 bg-gradient-to-l from-[#0A0A0A]/80 to-transparent"></div>
        
        <div className="relative z-30 w-1/2 pr-4 sm:pr-12 md:pr-24 pl-4 sm:pl-8 text-white flex flex-col justify-center h-full items-end text-right pt-16 md:pt-0">
          <div className={`transition-all duration-700 transform ${hoveredSide === 'right' ? 'scale-110 -translate-x-4' : 'scale-100'}`}>
            <img src="/SaaSport-a.png" alt="SaaSport Logo" className="h-8 sm:h-12 md:h-20 mb-4 md:mb-6 object-contain ml-auto" />
            <p className="text-xs sm:text-base md:text-2xl text-[#A0A0A0] font-medium mb-6 md:mb-8 max-w-lg ml-auto">
              Potencia la rentabilidad de tu club, control de pagos y finanzas claras
            </p>
            <button 
              className={`btn-primary ${hoveredSide === 'right' ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              onClick={(e) => {
                e.stopPropagation();
                onNavigate('saasport');
              }}
            >
              Conocer Más
            </button>
          </div>
        </div>
      </div>
      
      {/* Elemento central de división */}
      <div 
        className="absolute z-30 pointer-events-none transition-all duration-1000 ease-in-out"
        style={{
          top: hoveredSide ? 'calc(50% - 220px)' : '50%',
          left: hoveredSide === 'left' ? '17rem' : hoveredSide === 'right' ? 'calc(100% - 17rem)' : '50%',
          transform: `translate(-50%, -50%) scale(${hoveredSide ? 1.8 : 1}) rotate(${hoveredSide === 'left' ? -360 : hoveredSide === 'right' ? 360 : 0}deg)`
        }}
      >
        <img 
          src="/icon-512.png" 
          alt="Centro Icon" 
          className="w-16 h-16 md:w-20 md:h-20 object-contain drop-shadow-[0_0_15px_rgba(255,107,53,0.6)]" 
        />
      </div>

      {/* FOOTER INFERIOR (SaasFactory) */}
      <div className="absolute bottom-6 left-0 w-full z-50 pointer-events-none flex flex-col items-center justify-center">
        <a 
          href="https://wa.link/tty30e" 
          target="_blank" 
          rel="noopener noreferrer"
          className="pointer-events-auto text-[#FF6B35] font-bold text-lg md:text-xl tracking-wide hover:text-[#FF8555] hover:scale-105 transition-all duration-300 drop-shadow-md"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          SaasFactory
        </a>
        <p 
          className="text-xs md:text-sm text-[#A0A0A0] mt-1 font-medium drop-shadow-sm"
          style={{ fontFamily: 'var(--font-subtitle)' }}
        >
          Creadores de soluciones de alto rendimiento
        </p>
      </div>

      {/* Pricing Modal */}
      <PricingModal isOpen={isPricingOpen} onClose={() => setIsPricingOpen(false)} />
    </div>
  );
};

export default SplitLanding;
