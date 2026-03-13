import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
       number: '01',
       title: 'Registra tus alumnos',
       desc: 'Guarda foto, colegio, dirección y contacto de padres.'
    },
    {
       number: '02',
       title: 'Toma asistencia en segundos',
       desc: 'Con un par de clics registras quién asistió al entrenamiento.'
    },
    {
       number: '03',
       title: 'Comunícate con padres al instante',
       desc: 'Si un niño falta o hay un aviso importante, puedes escribir por WhatsApp directamente.'
    }
  ];

  return (
    <section id="como-funciona" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Cómo Funciona en 3 Pasos
          </h2>
        </div>

        <div className="relative">
           {/* Connecting Line */}
           <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-gray-200" aria-hidden="true"></div>
           
           <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
              {steps.map((step, idx) => (
                 <div key={idx} className="relative flex flex-col items-center text-center">
                    <div className="w-24 h-24 mb-6 rounded-full bg-white border-4 border-blue-100 flex items-center justify-center shadow-lg text-primary text-3xl font-black">
                       {step.number}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600 font-medium leading-relaxed max-w-sm">
                       {step.desc}
                    </p>
                 </div>
              ))}
           </div>
        </div>

        {/* Cta Video Demo Demo */}
        <div className="mt-20 text-center">
           <a 
             href="/VideoDemo.mp4"
             target="_blank"
             rel="noopener noreferrer"
             className="btn-secondary group"
           >
             Ver cómo funciona 
             <svg className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
             </svg>
           </a>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
