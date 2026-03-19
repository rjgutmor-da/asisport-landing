import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: '⚽ Escuela Inicial',
      price: '15',
      users: '3',
      students: '90',
      branches: '1',
      subtitle: 'Ideal para escuelas pequeñas que están empezando',
      features: [
        'Control de asistencia en 1 minuto',
        'Gestión básica de alumnos',
        'Comunicación por WhatsApp'
      ],
      popular: false,
    },
    {
      name: '🟢 Escuela en Crecimiento ⭐',
      price: '25',
      users: '10',
      students: '250',
      branches: '3',
      subtitle: 'Para escuelas que ya tienen varios grupos y entrenadores',
      features: [
        'Todo lo anterior +',
        'Mejor organización por grupos',
        'Mayor control de asistencia',
        'Comunicación más fluida con padres'
      ],
      popular: true,
      badge: 'Más elegido',
      extraBadge: 'Más elegido por escuelas en Santa Cruz'
    },
    {
      name: '🔵 Escuela Competitiva',
      price: '35',
      users: '14',
      students: '400',
      branches: '4',
      subtitle: 'Para academias con alto volumen de alumnos',
      features: [
        'Todo lo anterior +',
        'Mayor capacidad operativa',
        'Mejor control administrativo'
      ],
      popular: false,
    },
    {
      name: '🟡 Academia Pro',
      price: '50',
      users: '20',
      students: '600',
      branches: '6',
      subtitle: 'Para academias grandes o con múltiples sedes',
      features: [
        'Todo lo anterior +',
        'Gestión completa de la academia',
        'Escalabilidad total'
      ],
      popular: false,
    },
  ];

  return (
    <section id="precios" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <p className="inline-block bg-primary/10 text-primary font-bold px-4 py-2 rounded-full text-sm uppercase tracking-wider">
            Planes pensados para escuelas de fútbol en crecimiento
          </p>
          <div className="mx-auto flex justify-center w-full my-4">
             <div className="inline-block bg-green-100/80 border border-green-300 text-green-800 font-bold px-6 py-2 rounded-full text-sm shadow-sm transition hover:bg-green-100 cursor-default">
              🎁 20% de descuento en planes anuales
            </div>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 tracking-tight">
            Planes Mensuales
          </h2>
          <p className="text-lg text-gray-500 font-medium max-w-2xl mx-auto">
            Elige el plan que mejor se adapte al tamaño de tu academia o escuela deportiva. 
            Sin contratos forzosos, cancela cuando quieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 lg:items-center xl:gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-6 xl:p-8 rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-green-600 via-green-500 to-green-700 text-white ring-8 ring-green-600/20 scale-105 md:scale-110 z-10 my-4 md:my-0' 
                  : 'bg-white text-gray-900 border border-gray-100 hover:shadow-2xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 z-20 whitespace-nowrap">
                  <span className="bg-gradient-to-r from-orange-500 to-red-600 text-white text-xs sm:text-sm font-black uppercase tracking-widest py-2 px-6 rounded-full shadow-lg border-2 border-white/20">
                    🔥 {plan.badge}
                  </span>
                </div>
              )}
              
              <div className="mb-6 relative mt-2">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900 opacity-90'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-4 min-h-[40px] leading-relaxed ${plan.popular ? 'text-green-50' : 'text-gray-500'}`}>
                  {plan.subtitle}
                </p>
                <div className="flex items-baseline text-5xl font-black">
                  <span className="text-3xl font-light mr-1">$us</span>
                  {plan.price}
                  <span className={`text-lg font-medium ml-2 ${plan.popular ? 'text-green-100' : 'text-gray-400'}`}>
                    /mes
                  </span>
                </div>
                {plan.popular && plan.extraBadge && (
                  <p className="text-xs font-bold mt-3 text-green-100 italic bg-white/10 p-2 rounded-lg text-center shadow-inner">
                    👉 {plan.extraBadge}
                  </p>
                )}
              </div>

              <div className={`h-px w-full mb-6 ${plan.popular ? 'bg-white/20' : 'bg-gray-100'}`}></div>

              <ul className={`flex-1 space-y-4 mb-8 font-medium ${plan.popular ? 'text-green-50' : 'text-gray-600'}`}>
                {/* Límite de Alumnos */}
                <li className="flex items-center group pb-2 border-b border-dashed border-gray-200/50">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 transition-colors ${plan.popular ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                  </div>
                  <span>Hasta <strong className={plan.popular ? 'text-white' : 'text-gray-900'}>{plan.students}</strong> Alumnos</span>
                </li>
                {/* Límite de Usuarios */}
                <li className="flex items-center group pb-2 border-b border-dashed border-gray-200/50">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 transition-colors ${plan.popular ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                  </div>
                  <span><strong className={plan.popular ? 'text-white' : 'text-gray-900'}>{plan.users}</strong> Usuarios</span>
                </li>
                {/* Límite de Sucursales */}
                <li className="flex items-center group pb-4 border-b border-dashed border-gray-200/50">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 transition-colors ${plan.popular ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                  </div>
                  <span><strong className={plan.popular ? 'text-white' : 'text-gray-900'}>{plan.branches}</strong> {plan.branches === '1' ? 'Sucursal' : 'Sucursales'}</span>
                </li>
                
                {/* Beneficios */}
                {plan.features.map((feature, i) => (
                  <li key={`feat-${i}`} className="flex items-start group mt-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 mt-0.5 ${plan.popular ? 'bg-white/20 text-white' : 'text-green-500'}`}>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    <span className={`text-sm ${feature.includes('Todo lo anterior') ? (plan.popular ? 'font-bold text-white' : 'font-bold text-gray-800') : ''}`}>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <a 
                  href={`https://wa.me/59174631123?text=Hola,%20me%20interesa%20la%20${encodeURIComponent(plan.name.replace(/[⚽🟢⭐🔵🟡]/g, '').trim())}%20de%20$us${plan.price}/mes`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-4 px-6 rounded-2xl font-black text-center transition-all duration-300 transform active:scale-95 ${
                    plan.popular 
                      ? 'bg-white text-green-700 hover:bg-gray-50 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_25px_rgba(255,255,255,0.5)]' 
                      : 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl'
                  }`}
                >
                  Elegir {plan.name.replace(/[⚽🟢⭐🔵🟡]/g, '').trim()}
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <div className="inline-block bg-white text-gray-800 font-bold px-6 sm:px-10 py-5 rounded-3xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] border border-gray-100 text-base sm:text-lg lg:text-xl transition-transform hover:-translate-y-1">
            <span className="text-2xl mr-2">🤝</span> 
            Incluye acompañamiento para configurar tu escuela en <span className="text-primary font-black ml-1 relative"><span className="relative z-10">menos de 24 horas</span><span className="absolute bottom-0 left-0 w-full h-3 bg-primary/20 -z-0 rounded-full"></span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
