/**
 * Servicio modular para la gestión de eventos de Facebook Pixel (Meta Pixel).
 * Identificador de Pixel: 1074074025187053
 */

/**
 * Registra una vista de página estándar (PageView).
 */
export const trackPageView = () => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'PageView');
  }
};

/**
 * Registra un evento de cliente potencial (Lead), por ejemplo al contactar por WhatsApp.
 * @param {Object} [parametros] - Parámetros adicionales opcionales para el evento.
 */
export const trackLead = (parametros = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'Lead', parametros);
  }
};

/**
 * Registra un evento de registro completado (CompleteRegistration), por ejemplo al hacer clic en el formulario de registro.
 * @param {Object} [parametros] - Parámetros adicionales opcionales para el evento.
 */
export const trackCompleteRegistration = (parametros = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', 'CompleteRegistration', parametros);
  }
};

/**
 * Registra un evento personalizado en Facebook Pixel.
 * @param {string} nombreEvento - Nombre del evento personalizado.
 * @param {Object} [parametros] - Parámetros adicionales opcionales.
 */
export const trackCustomEvent = (nombreEvento, parametros = {}) => {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('trackCustom', nombreEvento, parametros);
  }
};
