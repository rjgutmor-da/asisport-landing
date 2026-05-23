import React from 'react';

const SaasportPage = ({ onBack }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-main)] text-[var(--color-text-main)] animate-fade-in">
      <div className="fixed top-4 left-4 z-50">
        <button 
          onClick={onBack}
          className="btn-secondary flex items-center"
        >
          <span className="mr-2">←</span> Volver al Inicio
        </button>
      </div>

      <main className="flex-grow flex items-center justify-center flex-col p-8 text-center relative overflow-hidden">
        
        {/* Glow de fondo */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] rounded-full blur-[200px] opacity-10 pointer-events-none"></div>

        <div className="max-w-2xl bg-[var(--color-surface)] p-12 rounded-2xl border border-[var(--color-border)] shadow-2xl relative z-10">
          <div className="flex justify-center mb-6">
            <img src="/SaaSport.png" alt="SaaSport Logo" className="h-16 w-auto" />
          </div>
          <h2 className="text-3xl font-black text-white mb-8">
            Nunca Pierdas el Control
          </h2>
          
          <div className="mb-6 rounded-xl overflow-hidden border border-[var(--color-border)] shadow-[0_0_20px_-5px_rgba(255,107,53,0.3)]">
            <img 
              src="/ImagenTemporalSaasport.png" 
              alt="Vista previa de SaaSport" 
              className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <p className="text-2xl font-bold text-[var(--color-primary)]">
            Página en preparación
          </p>
        </div>
      </main>
    </div>
  );
};

export default SaasportPage;
