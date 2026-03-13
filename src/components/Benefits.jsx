import React from 'react';

const Benefits = () => {
  const benefits = [
    {
      title: 'Ahorra tiempo',
      desc: 'Evita listas manuales y reduce tareas administrativas repetitivas cada día.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'Mejora la comunicación',
      desc: 'Los padres están siempre informados, conectados y contentos con la academia.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    },
    {
      title: 'Organiza mejor tu escuela',
      desc: 'Toda la información histórica y actual de los alumnos en un solo lugar.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    },
    {
      title: 'Fideliza alumnos',
      desc: 'Pequeños detalles como recordarte su cumpleaños fortalecen la relación con las familias.',
      icon: (
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="beneficios" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Diseñado para potenciar tu academia
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((bene, idx) => (
            <div key={idx} className="flex bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow border border-gray-100">
              <div className="flex-shrink-0 mr-6">
                <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-primary text-white shadow-md">
                  {bene.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{bene.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed">
                  {bene.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
