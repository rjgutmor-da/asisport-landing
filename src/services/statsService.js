/**
 * Servicio para consultar estadísticas agregadas desde Supabase para la landing page.
 */

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

/**
 * Obtiene las estadísticas de la landing page llamando a la función RPC de Supabase.
 * Devuelve un objeto con { escuelas, alumnos, sucursales, entrenadores, administradores } o null si falla.
 */
export async function obtenerEstadisticasLanding() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
    console.warn("Faltan las variables de entorno de Supabase. Usando valores por defecto.");
    return null;
  }

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/rpc/obtener_estadisticas_landing`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization': `Bearer ${SUPABASE_ANON_KEY}`
      }
    });

    if (!response.ok) {
      throw new Error(`Error en la petición HTTP: ${response.status} ${response.statusText}`);
    }

    const datos = await response.json();
    return datos;
  } catch (error) {
    console.error("Error al obtener estadísticas de Supabase:", error);
    return null;
  }
}
