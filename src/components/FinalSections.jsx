import React from 'react';

// === Testimonial Component ===
export const Testimonial = () => {
  return (
    <section id="testimonios" className="py-24 bg-gradient-to-tr from-primary/5 to-white relative overflow-hidden">
      {/* Elementos decorativos abstractos */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-green-100 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <svg className="h-16 w-16 text-primary/30 mx-auto mb-6" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        
        <blockquote className="text-2xl sm:text-3xl font-medium text-gray-900 leading-snug mb-10">
          "En Planeta FC tenemos cerca de 250 alumnos, hemos implementado AsiSport en 3 de nuestras 4 sucursales y nos ha ayudado a ordenar las asistencias y mejorar la comunicación con los padres. Los entrenadores la aprendieron a utilizar muy rápido"
        </blockquote>
        
        <div className="flex items-center justify-center space-x-4">
          <img src="/Ramon.jpg" alt="Ramón Quiroga" className="h-14 w-14 rounded-full object-cover shadow-md border-2 border-white" />
          <div className="text-left">
            <p className="text-lg font-bold text-gray-900">Ramón Quiroga</p>
            <p className="text-sm font-medium text-gray-500">Director – Planeta FC</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// === Final CTA Component ===
export const FinalCTA = () => {
  return (
    <section className="py-24 bg-primary text-white text-center rounded-t-[3rem] shadow-2xl relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-white/10 rounded-full blur-2xl"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
          Descubre cómo AsiSport puede ayudar a tu escuela
        </h2>
        <p className="text-xl text-blue-100 font-medium mb-12 max-w-2xl mx-auto">
          Agenda una demostración gratuita y te mostraremos cómo funciona en tu academia.
        </p>
        
        <div className="flex flex-col items-center">
          <a 
            href="https://wa.me/59174631123?text=Hola,%20quiero%20ver%20cómo%20funciona%20AsiSport"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-5 text-xl font-bold text-primary transition-all duration-300 bg-white rounded-2xl hover:bg-gray-50 hover:shadow-2xl hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-white/50 mb-4"
          >
             Solicitar demostración
             <svg className="ml-3 w-6 h-6 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
             </svg>
          </a>
          <p className="text-sm text-blue-200 mt-2 font-medium">Sin compromiso.</p>
        </div>
      </div>
    </section>
  );
};

// === Footer Component ===
export const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex justify-center mb-6 md:mb-0">
            <img src="/LogoBlancopng.png" alt="AsiSport Logo" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400 font-medium mb-2">
              <a 
                href="https://wa.me/59174631123?text=Hola,%20quiero%20hacer%20una%20consulta%20sobre%20AsiSport" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-white transition-colors flex items-center justify-center md:justify-end gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12c0 2.17.7 4.19 1.94 5.86L3 22l4.24-.94A9.953 9.953 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm1.41 15.63a7.462 7.462 0 01-3.61-.95l-.26-.15-2.69.59.61-2.62-.17-.26a7.45 7.45 0 01-1.15-3.95C6.14 6.81 8.95 4 12.41 4c1.7 0 3.3.66 4.5 1.86a6.38 6.38 0 011.87 4.5c0 3.48-2.83 6.31-6.29 6.31h-.08zm3.28-4.48c-.18-.09-1.06-.52-1.23-.58-.17-.06-.29-.09-.41.09-.12.18-.46.58-.57.7-.11.12-.22.13-.4.04-.18-.09-.76-.28-1.44-.89-.53-.47-.89-1.06-1-1.24-.11-.18-.01-.28.08-.37.08-.08.18-.21.27-.32.09-.11.12-.18.18-.31.06-.12.03-.23-.01-.32-.05-.09-.41-1-.56-1.37-.15-.36-.3-.31-.41-.32h-.35c-.12 0-.31.04-.47.23-.16.18-.61.6-.61 1.46 0 .86.63 1.69.71 1.81.09.12 1.23 1.88 2.98 2.64.42.18.74.29.99.37.42.13.8.11 1.1.07.34-.04 1.06-.43 1.21-.85.15-.42.15-.78.11-.85-.04-.07-.15-.11-.33-.2z" clipRule="evenodd" />
                </svg>
                WhatsApp: +591 74631123
              </a>
            </p>
            <p className="text-sm text-gray-500 font-medium">
              Copyright © {new Date().getFullYear()} AsiSport by Saas Factory
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
