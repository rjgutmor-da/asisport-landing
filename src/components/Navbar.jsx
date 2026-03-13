import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
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
              href="https://wa.me/56974631123?text=Hola,%20quiero%20ver%20cómo%20funciona%20AsiSport"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 bg-primary rounded-xl hover:bg-primary-dark hover:shadow-md hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-primary/50"
            >
              Pedir Demo
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
