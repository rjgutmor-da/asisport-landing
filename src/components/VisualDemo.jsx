import React from 'react';

const VisualDemo = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título Principal */}
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Tomar asistencia ahora toma segundos
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 font-medium">
            Selecciona al alumno, marca asistencia y listo. La información queda registrada automáticamente.
          </p>
        </div>

        {/* 5. Visual Demo - Mockups Flex */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-8 relative z-10 w-full overflow-hidden px-2">
          {/* Mockup Celular 1 */}
          <div className="relative transform hover:-translate-y-4 transition-transform duration-500 flex-shrink-0">
             <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-gray-200 to-transparent h-1/4 -z-10 rounded-b-3xl"></div>
             <img 
               src="/DashboardMockup.png" 
               alt="Dashboard de Asistencia" 
               className="rounded-[2.5rem] shadow-2xl border-[6px] border-white w-64 md:w-56 lg:w-72 h-auto object-cover"
             />
          </div>
          
          {/* Flecha Conectora 1 */}
          <div className="hidden lg:flex text-primary/50 flex-shrink-0">
             <svg className="w-12 h-12 transform rotate-0 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
          </div>

          {/* Mockup Celular 2 */}
          <div className="relative transform hover:-translate-y-4 transition-transform duration-500 lg:-translate-y-6 flex-shrink-0">
             <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/20 to-transparent h-1/4 -z-10 rounded-b-3xl"></div>
             <img 
               src="/AsistenciaMockup.png" 
               alt="Toma de Asistencia en la App" 
               className="rounded-[2.5rem] shadow-2xl border-[6px] border-white w-64 md:w-56 lg:w-72 h-auto object-cover"
             />
          </div>

          {/* Flecha Conectora 2 */}
          <div className="hidden lg:flex text-primary/50 flex-shrink-0">
             <svg className="w-12 h-12 transform rotate-0 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
          </div>

          {/* Mockup Celular 3 */}
          <div className="relative transform hover:-translate-y-4 transition-transform duration-500 lg:translate-y-6 flex-shrink-0">
             <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-green-300/30 to-transparent h-1/4 -z-10 rounded-b-3xl"></div>
             <img 
               src="/AlumnosMockup.png" 
               alt="Vista de Alumnos en la App" 
               className="rounded-[2.5rem] shadow-2xl border-[6px] border-white w-64 md:w-56 lg:w-72 h-auto object-cover"
             />
          </div>
        </div>

      </div>
      
      {/* Elemento de Fondo Decorativo */}
      <div className="h-64 mt-[-10rem] bg-gradient-to-b from-transparent to-blue-50/50 w-full pointer-events-none"></div>
    </section>
  );
};

export default VisualDemo;
