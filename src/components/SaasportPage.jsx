import React from 'react';

const SaasportPage = ({ onBack }) => {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-main)] text-[var(--color-text-main)] font-sans overflow-x-hidden animate-fade-in">
      
      {/* Navbar / Botón Volver */}
      <nav className="fixed top-0 w-full z-50 p-4 bg-[var(--color-bg-main)]/80 backdrop-blur-md border-b border-[var(--color-border)]">
        <button 
          onClick={onBack}
          className="btn-secondary flex items-center px-4 py-2 text-sm"
        >
          <span className="mr-2">←</span> Volver al Inicio
        </button>
      </nav>

      <main className="flex-grow pt-24 pb-16">
        
        {/* Hero Section */}
        <section className="relative px-6 py-20 flex flex-col items-center text-center lg:flex-row lg:text-left max-w-7xl mx-auto">
          {/* Glow de fondo */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-primary)] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

          <div className="lg:w-1/2 z-10 flex flex-col items-center lg:items-start mb-12 lg:mb-0">
            <div className="flex items-center mb-6">
              <img src="/SaaSport-a.png" alt="SaaSport Logo" className="h-14 w-auto" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-black mb-6 leading-tight">
              Gestión Integral para <span className="text-[var(--color-primary)]">Administradores</span>
            </h1>
            <p className="text-lg lg:text-xl text-[var(--color-text-sec)] mb-10 max-w-lg">
              Toma el control absoluto de tus ligas y clubes. Automatiza procesos, mejora la comunicación y lleva tu administración deportiva al siguiente nivel con SaaSport.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary" onClick={() => console.log('Solicitar Demo clicked')}>
                Solicitar Demo
              </button>
              <button className="btn-secondary" onClick={() => {
                document.getElementById('features').scrollIntoView({ behavior: 'smooth' });
              }}>
                Ver Funciones
              </button>
            </div>
          </div>

          <div className="lg:w-1/2 z-10 relative">
            <div className="rounded-2xl overflow-hidden border border-[var(--color-border)] shadow-2xl glow-primary">
              <img 
                src="/SaaSport-Pagina 1.png" 
                alt="Panel de Control SaaSport" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </section>

        {/* Separador */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent my-12" id="features"></div>

        {/* Feature 1 (Izquierda Texto, Derecha Imagen) */}
        <section className="relative px-6 py-16 flex flex-col items-center lg:flex-row max-w-7xl mx-auto gap-12">
          <div className="lg:w-1/2 z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Control Total de Finanzas
            </h2>
            <p className="text-lg text-[var(--color-text-sec)] mb-6">
              Visualiza en tiempo real los ingresos y gastos. Genera reportes automáticos y mantén una contabilidad transparente y sin esfuerzo para todas tus sedes deportivas.
            </p>
            <ul className="text-[var(--color-text-sec)] space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-[var(--color-primary)] font-bold text-xl">✓</span> Reportes automáticos
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--color-primary)] font-bold text-xl">✓</span> Control de ingresos y egresos
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 z-10">
            <div className="rounded-2xl overflow-hidden glass-panel p-2">
              <img 
                src="/SaaSport-Pagina2.png" 
                alt="Gestión Financiera" 
                className="w-full h-auto rounded-xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* Feature 2 (Izquierda Imagen, Derecha Texto) */}
        <section className="relative px-6 py-16 flex flex-col-reverse items-center lg:flex-row max-w-7xl mx-auto gap-12">
          <div className="lg:w-1/2 z-10">
            <div className="rounded-2xl overflow-hidden glass-panel p-2">
              <img 
                src="/SaaSport-Pagina3.png" 
                alt="Administración de Ligas" 
                className="w-full h-auto rounded-xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
          <div className="lg:w-1/2 z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Gestión Ágil de Participantes
            </h2>
            <p className="text-lg text-[var(--color-text-sec)] mb-6">
              Administra fácilmente a los jugadores, entrenadores y equipos. Desde inscripciones hasta la gestión de documentos, todo centralizado en un solo lugar.
            </p>
            <ul className="text-[var(--color-text-sec)] space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-[var(--color-primary)] font-bold text-xl">✓</span> Base de datos centralizada
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--color-primary)] font-bold text-xl">✓</span> Inscripciones en línea
              </li>
            </ul>
          </div>
        </section>

        {/* Feature 3 (Izquierda Texto, Derecha Imagen) */}
        <section className="relative px-6 py-16 flex flex-col items-center lg:flex-row max-w-7xl mx-auto gap-12">
          <div className="lg:w-1/2 z-10">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Logística y Programación
            </h2>
            <p className="text-lg text-[var(--color-text-sec)] mb-6">
              Crea calendarios de partidos, asigna grupos y árbitros sin conflictos. Nuestro sistema inteligente optimiza el uso de tus recursos para maximizar la eficiencia.
            </p>
            <ul className="text-[var(--color-text-sec)] space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <span className="text-[var(--color-primary)] font-bold text-xl">✓</span> Generador de calendarios
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[var(--color-primary)] font-bold text-xl">✓</span> Asignación de recursos
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 z-10">
            <div className="rounded-2xl overflow-hidden glass-panel p-2">
              <img 
                src="/SaaSport-Pagina4.png" 
                alt="Logística" 
                className="w-full h-auto rounded-xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative px-6 py-24 mt-12 max-w-5xl mx-auto text-center glass-panel rounded-3xl overflow-hidden">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] rounded-full blur-[200px] opacity-20 pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="text-4xl lg:text-5xl font-black mb-6">
              ¿Listo para modernizar tu organización?
            </h2>
            <p className="text-xl text-[var(--color-text-sec)] mb-10 max-w-2xl mx-auto">
              Únete a los clubes y ligas que ya están ahorrando tiempo y aumentando sus ingresos con SaaSport.
            </p>
            <button className="btn-primary text-xl px-12 py-5" onClick={() => console.log('Solicitar Demo CTA Final')}>
              Comienza tu Prueba Gratuita
            </button>
          </div>
        </section>

      </main>

      {/* Footer Minimalista */}
      <footer className="w-full py-8 text-center border-t border-[var(--color-border)] text-[var(--color-text-ter)]">
        <p>© {new Date().getFullYear()} Ecosistema SaaSport. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default SaasportPage;
