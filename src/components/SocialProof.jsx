import React, { useState, useEffect } from 'react';
import { obtenerEstadisticasLanding } from '../services/statsService';

const SocialProof = () => {
  const [estadisticas, setEstadisticas] = useState({
    escuelas: '5',
    alumnos: '950',
    sucursales: '13',
    entrenadores: '36',
    administradores: '11'
  });

  useEffect(() => {
    let activo = true;

    const cargarDatos = async () => {
      const datos = await obtenerEstadisticasLanding();
      if (datos && activo) {
        setEstadisticas({
          escuelas: datos.escuelas.toString(),
          alumnos: datos.alumnos.toString(),
          sucursales: datos.sucursales.toString(),
          entrenadores: datos.entrenadores.toString(),
          administradores: datos.administradores.toString()
        });
      }
    };

    cargarDatos();

    return () => {
      activo = false;
    };
  }, []);

  const metricas = [
    { metric: estadisticas.escuelas, label: 'escuelas deportivas' },
    { metric: estadisticas.alumnos, label: 'alumnos gestionados' },
    { metric: estadisticas.sucursales, label: 'sucursales activas' },
    { metric: estadisticas.entrenadores, label: 'entrenadores usando la app' },
    { metric: estadisticas.administradores, label: 'Administradores' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-2">Usado por escuelas deportivas en crecimiento</p>
          <h2 className="text-2xl font-bold text-gray-900">
            En Santa Cruz - Bolivia 🇧🇴
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {metricas.map((stat, i) => (
            <div key={i} className="flex flex-col items-center p-6 bg-secondary/30 rounded-2xl hover:bg-secondary/60 transition-colors border border-gray-100">
              <dt className="order-2 mt-2 text-lg font-medium leading-6 text-gray-500 text-center">
                {stat.label}
              </dt>
              <dd className="order-1 text-5xl font-extrabold text-primary">
                {stat.metric}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

