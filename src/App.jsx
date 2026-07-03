import React from 'react';
import Hero from './components/Hero';
import Beneficios from './components/Beneficios';
import Testimonios from './components/Testimonios';
import CTA from './components/CTA';
import CarruselAliados from './components/CarruselAliados';
import Galeria from './components/Galeria';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen bg-[var(--color-bg-main)]">
      {/* Navbar Simple */}
      <nav className="absolute top-0 w-full z-50 px-6 py-6 border-b border-white/5 bg-[#0A0A0A]/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#" className="flex items-center">
            <img src="/SaaSport-a.png" alt="SaaSport Logo" className="h-8 md:h-10 w-auto" />
          </a>
          <a href="#" className="flex items-center justify-center transition-transform hover:scale-105" title="Ingresar">
            <img src="/icon-512.png" alt="Ingresar" className="h-10 md:h-12 w-auto rounded-xl" />
          </a>
        </div>
      </nav>

      {/* Secciones */}
      <Hero />
      <Beneficios />
      <Testimonios />
      <CTA />
      <CarruselAliados />
      <Galeria />
      
      {/* CTA Final para Formulario */}
      <section className="py-20 px-6 bg-gradient-to-b from-[#0A0A0A] to-[#111] border-t border-[var(--color-border)] relative overflow-hidden">
        {/* Decoración */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent opacity-50"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[200px] bg-[var(--color-primary)] blur-[150px] opacity-10 rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">
            ¿Listo para <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-blue-300">profesionalizar</span> tu academia?
          </h2>
          <p className="text-xl text-[var(--color-text-sec)] mb-10 max-w-2xl mx-auto">
            Únete a la nueva generación de escuelas deportivas que están simplificando su gestión financiera y operativa con SaaSport.
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSfxRizmy_gdfFHa72SkMLA6Bb0bFIbh5StSEZy85dMdvYLjyg/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[var(--color-primary)] hover:bg-blue-600 text-white text-lg font-bold py-4 px-10 rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(37,99,235,0.4)]"
          >
            Formulario de Registro
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default App;
