import React from 'react';

const ProblemSolution = () => {
  return (
    <section id="solucion" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-20 items-center">
          
          {/* 3. The Problem */}
          <div className="mb-16 lg:mb-0">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-8">
              Dirigir una escuela deportiva no debería ser un caos
            </h2>
            
            <ul className="space-y-6">
              {[
                '¿Cansado de que se mojen las listas de asistencias de papel?',
                '¿Preocupado de no recordar cuál es el niño cuando te preguntan por él?',
                '¿No encuentras el teléfono del deportista cuando más necesitas hablar con sus padres?',
                '¿Se te complica hacer la lista de convocados para el próximo campeonato?',
                '¿Se te olvidó felicitar a tu crack en su cumpleaños?'
              ].map((problem, idx) => (
                <li key={idx} className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-8 w-8 rounded-full bg-red-100 text-red-600">
                      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </div>
                  </div>
                  <p className="ml-4 text-lg text-gray-700 leading-relaxed font-medium">
                    {problem}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Transición a Solución */}
          <div className="relative">
             {/* Card Premium de Solución */}
             <div className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 relative z-10 border border-gray-100">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl z-0"></div>
                <h3 className="text-2xl font-bold text-primary mb-6 relative z-10">
                   Por eso creamos AsiSport
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed relative z-10">
                   Una plataforma diseñada específicamente para <strong>escuelas deportivas</strong>, donde los entrenadores registran asistencia y esa información se convierte en herramientas útiles para la academia.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 relative z-10">
                   {[
                      'Seguimiento de alumnos',
                      'Convocatorias',
                      'Comunicación con padres',
                      'Control de asistencia'
                   ].map((feature, idx) => (
                      <div key={idx} className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 flex items-center">
                         <svg className="w-5 h-5 text-primary mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                         <span className="font-semibold text-gray-800">{feature}</span>
                      </div>
                   ))}
                </div>
             </div>
             
             {/* Abstract background */}
             <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-gray-100 to-transparent -z-10 rounded-l-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
