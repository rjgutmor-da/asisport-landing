import React from 'react';

const Navbar = ({ onBack }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Back Button y Logo */}
          <div className="flex-shrink-0 flex items-center gap-4">
            {onBack && (
              <button 
                onClick={onBack}
                className="text-gray-600 hover:text-[#FF6B35] transition-colors flex items-center justify-center p-2 rounded-full hover:bg-gray-100 group"
                aria-label="Volver a la Landing Page"
              >
                <svg className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
              </button>
            )}
            <img 
              className="h-12 w-auto" 
              src="/LogoHorizontal.png" 
              alt="AsiSport Logo" 
            />
          </div>
          
          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-8 items-center">
             <a href="#solucion" className="text-gray-600 hover:text-primary font-medium transition-colors">La Solución</a>
             <a href="#como-funciona" className="text-gray-600 hover:text-primary font-medium transition-colors">Cómo Funciona</a>
             <a href="#beneficios" className="text-gray-600 hover:text-primary font-medium transition-colors">Beneficios</a>
             <a href="#testimonios" className="text-gray-600 hover:text-primary font-medium transition-colors">Testimonios</a>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <a 
              href="https://wa.me/59174631123?text=Me%20gustaria%20agendar%20una%20cita%20de%2015%20minutos%20para%20conocer%20mas%20AsiSport"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 bg-primary rounded-xl hover:bg-primary-dark hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-primary/50"
            >
              Agendar Demo
            </a>
            
            {/* Mobile menu button */}
            <div className="md:hidden ml-4">
              <button className="text-gray-500 hover:text-gray-900 focus:outline-none p-2">
                 <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                 </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
