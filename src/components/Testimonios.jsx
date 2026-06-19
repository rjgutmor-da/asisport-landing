import React, { useEffect, useState } from 'react';
import { getTestimonialMetrics } from '../services/metricsService';
import { Quote } from 'lucide-react';

export default function Testimonios() {
  const [metrics, setMetrics] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMetrics() {
      const data = await getTestimonialMetrics();
      setMetrics(data);
      setLoading(false);
    }
    fetchMetrics();
  }, []);

  const testimonials = [
    {
      name: "Ramón Quiroga Anaquin",
      school: "Planeta FC",
      logo: "/logos/logo-planetafc.png",
      photo: "https://ui-avatars.com/api/?name=Ramon+Quiroga&background=FF6B35&color=fff&size=400&rounded=false", // Placeholder 3:4 aspect ratio visually
      text: "Ahora tengo control total de las asistencias de los deportistas, por mes y por semana, lo que facilita las convocatorias a campeonatos; además de tener a mano las deudas de mensualidades que puedo cobrar y mis saldos en caja.",
      metricsKey: "Planeta FC"
    },
    {
      name: "Andrés Álvarez",
      school: "El Cañito",
      logo: "/logos/logo_canito.png",
      photo: "https://ui-avatars.com/api/?name=Andres+Alvarez&background=0A84FF&color=fff&size=400&rounded=false", // Placeholder
      text: "Todo el desorden de listas y deudas quedó atrás. Con SaaSport tengo la escuela organizada de punta a punta: pagos, saldos, asistencias y hasta el detalle de los cumpleaños. Es la herramienta que siempre busqué y no encontraba.",
      metricsKey: "El Cañito"
    },
    {
      name: "Gabriel Vargas",
      school: "Inter Stars Santa Cruz",
      logo: "/logos/logo-interstars.png",
      photo: "https://ui-avatars.com/api/?name=Gabriel+Vargas&background=00D26A&color=fff&size=400&rounded=false", // Placeholder
      text: "Probamos otros softwares, pero ninguno se adaptaba a cómo trabajamos. Las asistencias y los cobros estaban en distintos lados, y perdíamos tiempo buscando información. Con SaaSport, todo está en un solo lugar y se ajusta perfecto a nuestra escuela. Es la primera vez que un sistema realmente entiende lo que necesitamos.",
      metricsKey: "Inter Stars Santa Cruz"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Decors */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FF6B35]/5 rounded-full blur-[150px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Otros directores de escuelas <span className="font-highlight text-[var(--color-primary)]">ya lo usan.</span>
          </h2>
          <p className="text-xl text-[var(--color-text-sec)] max-w-3xl mx-auto">
            Más alumnos, más entrenadores y más pagos por controlar. SaaSport ya ayuda a escuelas deportivas en Santa Cruz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonio, idx) => {
            const schoolMetrics = metrics?.[testimonio.metricsKey] || { alumnos: 0, usuarios: 0, cobros: 0 };
            
            return (
              <div key={idx} className="glass-panel rounded-3xl overflow-hidden flex flex-col transition-transform hover:-translate-y-2 duration-300">
                {/* Photo and Header */}
                <div className="relative aspect-[3/4] w-full bg-[#121212] shrink-0 overflow-hidden group">
                  <img 
                    src={testimonio.photo} 
                    alt={testimonio.name} 
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <img 
                      src={testimonio.logo} 
                      alt={testimonio.school} 
                      className="h-16 w-auto object-contain mb-4 filter drop-shadow-lg bg-white/10 backdrop-blur-sm rounded-lg p-2 border border-white/20"
                    />
                    <h3 className="text-2xl font-bold text-white">{testimonio.name}</h3>
                    <p className="text-[var(--color-primary)] font-medium">{testimonio.school}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex flex-col grow bg-[var(--color-surface)]">
                  <Quote className="text-[#333333] mb-4" size={40} />
                  <p className="text-[var(--color-text-sec)] text-lg leading-relaxed italic grow mb-8">
                    "{testimonio.text}"
                  </p>
                  
                  {/* Metrics */}
                  <div className="pt-6 border-t border-[var(--color-border)]">
                    {loading ? (
                      <div className="animate-pulse flex flex-wrap gap-2">
                        <div className="h-6 w-24 bg-white/10 rounded"></div>
                        <div className="h-6 w-24 bg-white/10 rounded"></div>
                        <div className="h-6 w-32 bg-white/10 rounded"></div>
                      </div>
                    ) : (
                      <div className="flex flex-wrap gap-y-2 gap-x-4 text-sm font-semibold">
                        <span className="text-[#00D26A] bg-[#00D26A]/10 px-3 py-1 rounded-full border border-[#00D26A]/20">
                          {schoolMetrics.alumnos} alumnos
                        </span>
                        <span className="text-[#0A84FF] bg-[#0A84FF]/10 px-3 py-1 rounded-full border border-[#0A84FF]/20">
                          {schoolMetrics.usuarios} usuarios
                        </span>
                        <span className="text-[#FF6B35] bg-[#FF6B35]/10 px-3 py-1 rounded-full border border-[#FF6B35]/20 mt-2 xl:mt-0">
                          {schoolMetrics.cobros} cobros gestionados
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
