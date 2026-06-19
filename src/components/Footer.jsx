import React from 'react';
import { Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] pt-16 pb-8 border-t border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          <div>
            <h3 className="text-2xl font-black text-white mb-4">
              Saa<span className="text-[var(--color-primary)]">Sport</span>
            </h3>
            <p className="text-[var(--color-text-sec)] max-w-sm">
              El software de gestión operativa y financiera creado específicamente para escuelas de fútbol infanto-juveniles en Latinoamérica.
            </p>
          </div>

          <div className="flex flex-col md:items-end">
            <h4 className="text-lg font-semibold text-white mb-4">Contacto</h4>
            <div className="flex flex-col gap-3">
              <a href="https://wa.me/59174631123" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-[var(--color-text-sec)] hover:text-[var(--color-primary)] transition-colors">
                <Phone size={20} />
                <span>+591 74631123</span>
              </a>
              <a href="mailto:saasfactorygutmor@gmail.com" className="flex items-center gap-3 text-[var(--color-text-sec)] hover:text-[var(--color-primary)] transition-colors">
                <Mail size={20} />
                <span>saasfactorygutmor@gmail.com</span>
              </a>
              <a href="#" className="flex items-center gap-3 text-[var(--color-text-sec)] hover:text-[var(--color-primary)] transition-colors">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
                <span>Facebook Oficial</span>
              </a>
            </div>
          </div>
          
        </div>

        <div className="border-t border-[var(--color-border)] pt-8 flex flex-col md:flex-row items-center justify-between text-[var(--color-text-ter)] text-sm">
          <p>© 2026 SaaSport - Todos los derechos reservados</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
