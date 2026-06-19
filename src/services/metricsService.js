import { supabase } from './supabaseClient';

const CACHE_KEY = 'saasport_metrics_cache_v4';
const CACHE_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 días en milisegundos

export async function getTestimonialMetrics() {
  try {
    // 1. Revisar si hay caché válido
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
      const { data, timestamp } = JSON.parse(cachedData);
      if (Date.now() - timestamp < CACHE_EXPIRY_MS) {
        return data; // Devolver caché si aún es válido
      }
    }

    // 2. Si no hay caché o expiró, consultar a la vista pública de Supabase
    if (!supabase) {
      throw new Error('El cliente de Supabase no está configurado.');
    }

    const { data: metricas, error } = await supabase
      .from('metricas_landing')
      .select('*');

    if (error) throw error;

    const metricsData = {};

    // Transformar los datos para el frontend
    if (metricas) {
      for (const m of metricas) {
        // Mapear nombres exactos de la BD a los nombres de la UI
        let frontendName = m.escuela_nombre;
        if (frontendName === 'PLANETA FC') frontendName = 'Planeta FC';
        if (frontendName === 'Fundación Inter Stars') frontendName = 'Inter Stars Santa Cruz';

        metricsData[frontendName] = {
          alumnos: m.alumnos_count || 0,
          usuarios: m.usuarios_count || 0,
          cobros: m.cobros_count || 0
        };
      }
    }

    // 3. Guardar en caché
    localStorage.setItem(CACHE_KEY, JSON.stringify({
      data: metricsData,
      timestamp: Date.now()
    }));

    return metricsData;
  } catch (error) {
    console.error('Error fetching metrics from Supabase:', error);
    // Devolver datos por defecto reales obtenidos de la BD
    return {
      'Planeta FC': { alumnos: 309, usuarios: 9, cobros: 675 },
      'El Cañito': { alumnos: 164, usuarios: 11, cobros: 59 },
      'Inter Stars Santa Cruz': { alumnos: 464, usuarios: 15, cobros: 0 }
    };
  }
}
