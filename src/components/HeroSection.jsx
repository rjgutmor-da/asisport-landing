import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -ml-[39rem] w-[81.25rem] max-w-none opacity-20 pointer-events-none">
         <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-primary to-blue-200 opacity-20 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Text Content */}
          <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-primary font-semibold text-sm mb-6 shadow-sm border border-blue-200">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse"></span>
              La plataforma #1 para Escuelas Deportivas
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-8 leading-[1.1]">
              Toma asistencia en <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">1 minuto</span> <br className="hidden lg:block" />y comunícate con los padres en 1 clic
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              AsiSport es la plataforma que permite a escuelas de fútbol y academias deportivas registrar asistencia en segundos, comunicarse con los padres y organizar sus alumnos desde un solo lugar.
            </p>

            {/* Micro benefits list */}
            <ul className="space-y-4 mb-10 text-left w-max mx-auto lg:mx-0">
              {['Asistencia en menos de 1 minuto', 'WhatsApp directo con padres', 'Control de alumnos y convocatorias'].map((benefit, index) => (
                <li key={index} className="flex items-center text-gray-700 font-medium bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                  <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {benefit}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="https://wa.me/56974631123?text=Hola,%20quiero%20ver%20cómo%20funciona%20AsiSport"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Quiero ver AsiSport
              </a>
            </div>
            
            <p className="mt-4 text-sm text-gray-500 font-medium italic">
               Sin compromiso. Te mostramos cómo funciona en tu escuela.
            </p>
          </div>

          {/* Image Content */}
          <div className="lg:col-span-6 relative z-10">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white bg-white group rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none"></div>
              <img 
                src="/AsistenciaMano.png" 
                alt="Entrenador tomando asistencia con la app de AsiSport en su celular" 
                className="w-full h-auto object-cover object-top scale-105 group-hover:scale-100 transition-transform duration-700"
              />
              
              {/* Floating badges */}
              <div className="absolute top-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center space-x-3 animate-bounce z-20 border border-gray-100 hidden sm:flex">
                 <div className="bg-green-100 p-2 rounded-full">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                 </div>
                 <div>
                    <p className="text-xs text-gray-500 font-medium">Asistencia</p>
                    <p className="text-sm font-bold text-gray-900">Guardada con éxito</p>
                 </div>
              </div>
            </div>
            
            {/* Background elements for image */}
            <div className="absolute -bottom-6 -right-6 w-3/4 h-3/4 bg-primary/10 rounded-3xl -z-10 blur-xl"></div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
