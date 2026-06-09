import React, { useState } from 'react';

const PricingModal = ({ isOpen, onClose }) => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [includeSaasport, setIncludeSaasport] = useState({
    basico: false,
    crecimiento: false,
    profesional: false,
    completa: false,
  });

  if (!isOpen) return null;

  const handleSaasportToggle = (planKey) => {
    setIncludeSaasport((prev) => ({
      ...prev,
      [planKey]: !prev[planKey]
    }));
  };

  const calculatePrice = (asisportPrice, saasportPrice, planKey) => {
    let total = asisportPrice;
    if (includeSaasport[planKey]) {
      total += saasportPrice;
    }
    if (isAnnual) {
      total = total * 0.85; // 15% discount
    }
    return total.toFixed(2).replace(/\.00$/, '');
  };

  const plans = [
    {
      key: 'basico',
      name: 'Básico',
      icon: '🌱',
      users: '4',
      students: '90',
      branches: '1',
      asisportPrice: 15,
      saasportPrice: 10,
      fotos: 5,
      extraUser: 2,
      features: ['Control de asistencia', 'Comunicación básica'],
    },
    {
      key: 'crecimiento',
      name: 'Crecimiento',
      icon: '🚀',
      users: '12',
      students: '250',
      branches: '3',
      asisportPrice: 25,
      saasportPrice: 10,
      fotos: 5,
      extraUser: 2,
      features: ['Todo lo Básico', 'Gestión de grupos', 'Reportes básicos'],
      popular: true,
    },
    {
      key: 'profesional',
      name: 'Profesional',
      icon: '🏆',
      users: '20',
      students: '400',
      branches: '4',
      asisportPrice: 35,
      saasportPrice: 15,
      fotos: 7,
      extraUser: 2,
      features: ['Todo lo de Crecimiento', 'Mayor capacidad', 'Soporte prioritario'],
    },
    {
      key: 'completa',
      name: 'Completa',
      icon: '👑',
      users: '30',
      students: '600',
      branches: '6',
      asisportPrice: 50,
      saasportPrice: 15,
      fotos: 7,
      extraUser: 2,
      features: ['Todo lo Profesional', 'Gestión multi-sede', 'Personalización total'],
    },
  ];

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/60 backdrop-blur-sm animate-fadeIn">
      {/* Overlay to close */}
      <div className="absolute inset-0 cursor-pointer" onClick={onClose}></div>
      
      {/* Modal Container */}
      <div className="relative w-full max-w-7xl bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl overflow-hidden animate-slideUp">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center bg-gray-100/50 hover:bg-gray-200 text-gray-600 rounded-full transition-colors z-20"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>

        {/* Header */}
        <div className="text-center pt-10 pb-6 px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4" style={{ fontFamily: 'var(--font-heading)' }}>
            Nuestros Precios
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-8" style={{ fontFamily: 'var(--font-subtitle)' }}>
            Elige el plan que mejor se adapte al tamaño de tu academia. Puedes añadir el módulo <span className="font-semibold text-orange-500">SaaSport (Finanzas)</span> a cualquier plan de <span className="font-semibold text-green-600">AsiSport (Deportivo)</span>.
          </p>

          {/* Global Toggle: Mensual / Anual */}
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Mensual</span>
            <button 
              className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none ${isAnnual ? 'bg-green-500' : 'bg-gray-300'}`}
              onClick={() => setIsAnnual(!isAnnual)}
            >
              <span className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform duration-300 ${isAnnual ? 'translate-x-8' : 'translate-x-1'}`} />
            </button>
            <span className={`text-sm font-medium flex items-center ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
              Anual
              <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-800">
                -15% Descuento
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="px-4 pb-12 overflow-x-auto">
          <div className="flex flex-nowrap lg:grid lg:grid-cols-4 gap-6 min-w-max lg:min-w-0 p-4">
            {plans.map((plan) => (
              <div 
                key={plan.key} 
                className={`relative flex flex-col w-[300px] lg:w-auto p-6 rounded-3xl shadow-lg border transition-all duration-300 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-gray-50 to-white border-green-500 ring-2 ring-green-500/20 shadow-green-500/10 transform lg:-translate-y-2' 
                    : 'bg-white border-gray-100 hover:border-gray-300 hover:shadow-xl'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-green-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                      Más Elegido
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <div className="text-4xl mb-2">{plan.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                </div>

                {/* Price Display */}
                <div className="my-4">
                  <div className="flex items-baseline">
                    <span className="text-2xl font-semibold text-gray-500 mr-1">$us</span>
                    <span className="text-5xl font-black text-gray-900 tracking-tight">
                      {calculatePrice(plan.asisportPrice, plan.saasportPrice, plan.key)}
                    </span>
                    <span className="text-gray-500 ml-1">/mes</span>
                  </div>
                  {isAnnual && (
                    <div className="text-sm text-green-600 font-medium mt-1">
                      Facturado anualmente
                    </div>
                  )}
                </div>

                {/* Saasport Addon Toggle */}
                <div className={`mt-2 mb-6 p-3 rounded-xl border transition-colors ${includeSaasport[plan.key] ? 'bg-orange-50 border-orange-200' : 'bg-gray-50 border-gray-100'}`}>
                  <label className="flex items-center justify-between cursor-pointer">
                    <div className="flex flex-col">
                      <span className="text-sm font-bold text-gray-900">Incluir SaaSport</span>
                      <span className="text-xs text-gray-500">Módulo de finanzas</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-bold text-orange-600">+$us{plan.saasportPrice}</span>
                      <button 
                        type="button"
                        className={`relative inline-flex h-5 w-9 shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out focus:outline-none ${includeSaasport[plan.key] ? 'bg-orange-500' : 'bg-gray-300'}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleSaasportToggle(plan.key);
                        }}
                      >
                        <span className={`inline-block h-3.5 w-3.5 transform rounded-full bg-white transition duration-200 ease-in-out ${includeSaasport[plan.key] ? 'translate-x-4' : 'translate-x-1'}`} />
                      </button>
                    </div>
                  </label>
                </div>

                {/* Limits */}
                <ul className="space-y-3 mb-6 flex-1">
                  <li className="flex items-center text-gray-700 text-sm">
                    <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
                    <span>Hasta <strong className="text-gray-900">{plan.students}</strong> Alumnos</span>
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span><strong className="text-gray-900">{plan.users}</strong> Usuarios</span>
                  </li>
                  <li className="flex items-center text-gray-700 text-sm">
                    <svg className="w-5 h-5 text-green-500 mr-2 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
                    <span><strong className="text-gray-900">{plan.branches}</strong> {plan.branches === '1' ? 'Sucursal' : 'Sucursales'}</span>
                  </li>
                </ul>
                
                <div className="border-t border-gray-100 pt-4 mb-6">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Características</p>
                  <ul className="space-y-2">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600">
                        <svg className="w-4 h-4 text-green-500 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <a 
                    href={`https://wa.me/59174631123?text=Hola,%20me%20interesa%20el%20plan%20${plan.name}%20${includeSaasport[plan.key] ? 'con%20SaaSport' : ''}%20en%20pago%20${isAnnual ? 'anual' : 'mensual'}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full py-3 px-4 rounded-xl font-bold text-center transition-transform active:scale-95 ${
                      plan.popular 
                        ? 'bg-green-600 text-white hover:bg-green-700 shadow-md hover:shadow-lg' 
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    Elegir {plan.name}
                  </a>
                </div>

                {/* Additional services info (tiny) */}
                <div className="mt-4 pt-3 border-t border-dashed border-gray-200 text-center text-[10px] sm:text-xs text-gray-400">
                  <p>Fotos de registro: +$us{plan.fotos}/mes</p>
                  <p>Usuario adicional: +$us{plan.extraUser}/mes</p>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-slideUp { animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fadeIn { animation: fadeIn 0.3s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default PricingModal;
