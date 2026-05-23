import React, { useState } from 'react';

const SplitLanding = ({ onNavigate }) => {
  const [hoveredSide, setHoveredSide] = useState(null);

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
      <div className="absolute top-10 md:top-16 left-0 w-full z-50 pointer-events-none flex flex-col items-center justify-center px-4">
        <h1 
          className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-white font-bold text-center tracking-[-0.02em] uppercase max-w-[1000px] mb-4 leading-tight drop-shadow-xl"
          style={{ fontFamily: 'var(--font-heading)' }}
        >
          LAS VICTORIAS SE CONSTRUYEN DENTRO Y FUERA DE LA CANCHA
        </h1>
        <p 
          className="text-base md:text-xl text-[#D1D5DB] text-center max-w-3xl drop-shadow-lg font-medium"
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
             backgroundImage: "url('/cancha_cenital.png')",
             transform: hoveredSide === 'left' ? 'scale(1.05)' : 'scale(1)'
          }}
        ></div>
        {/* Overlay oscuro para legibilidad */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 to-transparent"></div>
        
        <div className="relative z-20 w-1/2 pl-12 md:pl-24 pr-8 text-white flex flex-col justify-center h-full">
          <div className={`transition-all duration-700 transform ${hoveredSide === 'left' ? 'scale-110 translate-x-4' : 'scale-100'}`}>
            <img src="/AsiSport.png" alt="AsiSport Logo" className="h-16 md:h-24 mb-6 object-contain" />
            <p className="text-xl md:text-2xl text-[#A0A0A0] font-medium mb-8 max-w-lg">
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
        
        <div className="relative z-30 w-1/2 pr-12 md:pr-24 pl-8 text-white flex flex-col justify-center h-full items-end text-right">
          <div className={`transition-all duration-700 transform ${hoveredSide === 'right' ? 'scale-110 -translate-x-4' : 'scale-100'}`}>
            <img src="/SaaSport.png" alt="SaaSport Logo" className="h-16 md:h-24 mb-6 object-contain ml-auto" />
            <p className="text-xl md:text-2xl text-[#A0A0A0] font-medium mb-8 max-w-lg ml-auto">
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

    </div>
  );
};

export default SplitLanding;
