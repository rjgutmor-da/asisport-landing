import React from 'react';
import { CheckCircle2, DollarSign, Smartphone, UserPlus } from 'lucide-react';

export default function Beneficios() {
  const benefits = [
    {
      title: "Asistencia en 1 minuto",
      description: "Tomá asistencia con el celular en la raya de cal. Tené el respaldo cuando un padre consulte sobre las asistencias.",
      icon: <CheckCircle2 size={32} />,
      color: "text-[#00D26A]",
      bgColor: "bg-[#00D26A]/10",
      borderColor: "border-[#00D26A]/20"
    },
    {
      title: "Control total de cobros",
      description: "Sabé al instante quién pagó y quién arrastra deuda del mes pasado. Recuperá la plata que se te escapaba.",
      icon: <DollarSign size={32} />,
      color: "text-[#FF6B35]",
      bgColor: "bg-[#FF6B35]/10",
      borderColor: "border-[#FF6B35]/20"
    },
    {
      title: "Reportes simples desde el celu",
      description: "Olvídate de cuadernos, planillas y las fórmulas de Excel. Un resumen claro de lo que entra, sale y tus saldos en cajas.",
      icon: <Smartphone size={32} />,
      color: "text-[#0A84FF]",
      bgColor: "bg-[#0A84FF]/10",
      borderColor: "border-[#0A84FF]/20"
    },
    {
      title: "Implementación acompañada",
      description: "No te dejamos solo con el sistema. Te damos una mano para cargar a tus alumnos y arrancar sin vueltas.",
      icon: <UserPlus size={32} />,
      color: "text-[#9D4EDD]",
      bgColor: "bg-[#9D4EDD]/10",
      borderColor: "border-[#9D4EDD]/20"
    }
  ];

  return (
    <section className="py-20 bg-[var(--color-surface)] relative border-y border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Chau cuadernos y Excel. <span className="font-highlight text-[var(--color-primary)]">Hola control total.</span>
          </h2>
          <div className="w-24 h-1 bg-[var(--color-primary)] mx-auto rounded-full opacity-80" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="glass-panel p-8 rounded-3xl flex gap-6 items-start transition-all duration-300 hover:bg-[var(--color-surface-hover)] group"
            >
              <div className={`shrink-0 w-16 h-16 ${benefit.bgColor} ${benefit.color} border ${benefit.borderColor} rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-[var(--color-text-sec)] text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
