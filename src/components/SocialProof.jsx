import React from 'react';

const SocialProof = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Usado por escuelas deportivas en crecimiento</p>
          <h2 className="text-2xl font-bold text-gray-900">
            En Santa Cruz - Bolivia 🇧🇴
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { metric: '250+', label: 'alumnos gestionados' },
            { metric: '3', label: 'sucursales activas' },
            { metric: '7', label: 'entrenadores usando la app' },
            { metric: '3', label: 'Administradores' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-secondary/30 rounded-2xl hover:bg-secondary/60 transition-colors border border-gray-100">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 text-center">
                {stat.label}
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-primary">
                {stat.metric}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
