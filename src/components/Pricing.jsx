import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Plan 1',
      price: '10',
      users: '3',
      students: '100',
      branches: '1',
      popular: false,
    },
    {
      name: 'Plan 2',
      price: '20',
      users: '9',
      students: '250',
      branches: '3',
      popular: true,
    },
    {
      name: 'Plan 3',
      price: '30',
      users: '13',
      students: '400',
      branches: '4',
      popular: false,
    },
    {
      name: 'Plan 4',
      price: '40',
      users: '18',
      students: '600',
      branches: '6',
      popular: false,
    },
  ];

  return (
    <section id="precios" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-100 rounded-full blur-3xl opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Planes Mensuales
          </h2>
          <p className="text-lg text-gray-500 font-medium">
            Elige el plan que mejor se adapte al tamaño de tu academia o escuela deportiva. 
            Sin contratos forzosos, cancela cuando quieras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-3xl shadow-xl transition-all duration-500 hover:-translate-y-3 ${
                plan.popular 
                  ? 'bg-gradient-to-br from-primary-dark via-primary to-primary-dark text-white ring-8 ring-primary/10 scale-105 z-10' 
                  : 'bg-white text-gray-900 border border-gray-100 hover:shadow-2xl'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                  <span className="bg-gradient-to-r from-orange-400 to-red-600 text-white text-xs font-black uppercase tracking-widest py-1.5 px-4 rounded-full shadow-lg border-2 border-white/20">
                    Súper Recomendado
                  </span>
                </div>
              )}
              
              <div className="mb-6 relative">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900 opacity-80'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline text-5xl font-black">
                  <span className="text-3xl font-light mr-1">$us</span>
                  {plan.price}
                  <span className={`text-lg font-medium ml-2 ${plan.popular ? 'text-green-100' : 'text-gray-500'}`}>
                    /mes
                  </span>
                </div>
              </div>

              <div className={`h-px w-full mb-8 ${plan.popular ? 'bg-white/20' : 'bg-gray-100'}`}></div>

              <ul className={`flex-1 space-y-4 mb-10 font-medium ${plan.popular ? 'text-green-50' : 'text-gray-600'}`}>
                <li className="flex items-center group">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 transition-colors ${plan.popular ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span><strong className={plan.popular ? 'text-white' : 'text-gray-900'}>{plan.users}</strong> Usuarios</span>
                </li>
                <li className="flex items-center group">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 transition-colors ${plan.popular ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span><strong className={plan.popular ? 'text-white' : 'text-gray-900'}>{plan.students}</strong> Alumnos</span>
                </li>
                <li className="flex items-center group">
                  <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mr-3 transition-colors ${plan.popular ? 'bg-white/20 text-white' : 'bg-primary/10 text-primary'}`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span><strong className={plan.popular ? 'text-white' : 'text-gray-900'}>{plan.branches}</strong> {plan.branches === '1' ? 'Sucursal' : 'Sucursales'}</span>
                </li>
              </ul>

              <a 
                href={`https://wa.me/59174631123?text=Hola,%20me%20interesa%20el%20${plan.name}%20de%20$us${plan.price}/mes`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 px-6 rounded-2xl font-black text-center transition-all duration-300 transform active:scale-95 ${
                  plan.popular 
                    ? 'bg-white text-primary hover:bg-gray-50 shadow-xl hover:shadow-2xl' 
                    : 'bg-primary text-white hover:bg-primary-dark shadow-lg hover:shadow-xl'
                }`}
              >
                Elegir {plan.name}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
