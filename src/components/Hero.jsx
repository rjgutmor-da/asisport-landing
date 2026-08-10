import React from 'react';
import { Calendar, DollarSign, Smartphone, Users } from 'lucide-react';
import { trackLead } from '../services/pixelService';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-20 pb-16 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#FF6B35]/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#0A84FF]/10 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-tight animate-fade-in">
          ¿Sabes con certeza cuánto dinero <br className="hidden md:block" />
          <span className="text-[#FF6B35]">te deben hoy</span> tus alumnos?
        </h1>
        
        <p className="mt-6 text-xl md:text-2xl text-[var(--color-text-sec)] max-w-3xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Evita discusiones por asistencias y conoce exactamente quién pagó, quién debe y cuánto deberías cobrar y pagar este mes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#00D26A]/20 flex items-center justify-center mb-4 text-[#00D26A]">
              <Calendar size={24} />
            </div>
            <p className="font-semibold text-white">Registro de asistencia en menos de 1 minuto</p>
          </div>
          
          <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#FFB020]/20 flex items-center justify-center mb-4 text-[#FFB020]">
              <DollarSign size={24} />
            </div>
            <p className="font-semibold text-white">Control de mensualidades y cuentas por cobrar</p>
          </div>
          
          <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#0A84FF]/20 flex items-center justify-center mb-4 text-[#0A84FF]">
              <Smartphone size={24} />
            </div>
            <p className="font-semibold text-white">Reportes simples desde el celular</p>
          </div>
          
          <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-full bg-[#9D4EDD]/20 flex items-center justify-center mb-4 text-[#9D4EDD]">
              <Users size={24} />
            </div>
            <p className="font-semibold text-white">Implementación acompañada</p>
          </div>
        </div>

        <div className="flex flex-col items-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <a 
            href="https://wa.me/59174631123?text=Hola,%20necesito%20agendar%20una%20reunion%20para%20conocer%20mas%20de%20SaaSport," 
            target="_blank" 
            rel="noreferrer"
            onClick={() => trackLead({ content_name: 'Demostración WhatsApp - Hero' })}
            className="btn-primary mb-3"
          >
            Agendar demostración de 15 min
          </a>
          <p className="text-sm text-[var(--color-text-ter)]">
            Incluye un mes de prueba totalmente gratis.
          </p>
        </div>
      </div>
    </section>
  );
}
