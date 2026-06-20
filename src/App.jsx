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
      <Footer />
    </main>
  );
}

export default App;
