import React from 'react';

const Pricing = () => {
  const plans = [
    {
      name: 'Plan 1',
      price: '10',
      users: '3',
      students: '100',
      branches: '2',
      popular: false,
    },
    {
      name: 'Plan 2',
      price: '20',
      users: '7',
      students: '250',
      branches: '3',
      popular: true,
    },
    {
      name: 'Plan 3',
      price: '30',
      users: '11',
      students: '400',
      branches: '4',
      popular: false,
    },
    {
      name: 'Plan 4',
      price: '40',
      users: '15',
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
              className={`relative flex flex-col p-8 rounded-3xl shadow-xl transition-transform duration-300 hover:-translate-y-2 ${
                plan.popular 
                  ? 'bg-primary text-white ring-4 ring-primary/30 scale-105 z-10' 
                  : 'bg-white text-gray-900 border border-gray-100'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full shadow-md">
                    Más Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline text-5xl font-extrabold">
                  <span className="text-3xl mr-1">$us</span>
                  {plan.price}
                  <span className={`text-lg font-medium ml-2 ${plan.popular ? 'text-blue-100' : 'text-gray-500'}`}>
                    /mes
                  </span>
                </div>
              </div>

              <ul className={`flex-1 space-y-4 mb-8 font-medium ${plan.popular ? 'text-blue-50' : 'text-gray-600'}`}>
                <li className="flex items-center">
                  <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-blue-200' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Hasta <strong>{plan.users}</strong> Usuarios</span>
                </li>
                <li className="flex items-center">
                  <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-blue-200' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Hasta <strong>{plan.students}</strong> Alumnos</span>
                </li>
                <li className="flex items-center">
                  <svg className={`w-5 h-5 mr-3 flex-shrink-0 ${plan.popular ? 'text-blue-200' : 'text-primary'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Hasta <strong>{plan.branches}</strong> Sucursales</span>
                </li>
              </ul>

              <a 
                href={`https://wa.me/59174631123?text=Hola,%20me%20interesa%20el%20${plan.name}%20de%20$us${plan.price}/mes`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-6 rounded-xl font-bold text-center transition-colors ${
                  plan.popular 
                    ? 'bg-white text-primary hover:bg-gray-50 shadow-lg' 
                    : 'bg-primary/10 text-primary hover:bg-primary hover:text-white'
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
