"use client";

import { useEffect, useState } from "react";

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(null);

  useEffect(() => {
    const fetchFechaObjetivo = async () => {
      const res = await fetch("/api/getCounter");
      const data = await res.json();

      // Calcular la diferencia de tiempo inicial
      const fechaObjetivo = new Date(data);
      updateCountdown(fechaObjetivo);

      // Actualizar el contador cada segundo
      const intervalId = setInterval(() => {
        updateCountdown(fechaObjetivo);
      }, 1000);

      // Limpiar el intervalo al desmontar el componente
      return () => clearInterval(intervalId);
    };

    fetchFechaObjetivo();
  }, []);

  const updateCountdown = (fechaObjetivo: any) => {
    const fechaActual = new Date();
    const diferencia = fechaObjetivo - fechaActual;

    const segundos = Math.floor((diferencia / 1000) % 60);
    const minutos = Math.floor((diferencia / 1000 / 60) % 60);
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);

    setTimeLeft({ horas, minutos, segundos });
  };

  if (!timeLeft) return <div>Cargando...</div>;

  return (
    <div className="max-w-min absolute z-50 ">
      <div className="flex pl-8 text-4xl tracking-[25px] lg:tracking-[16px] lg:pl-5 2xl:text-5xl 2xl:pl-8 2xl:tracking-[27px]">
        <p className="rounded-lg">{timeLeft.horas}</p>
        <p className="rounded-lg pl-[10px] lg:pl-2 2xl:pl-[12px]">
          {timeLeft.minutos}
        </p>
        <p className="rounded-lg pl-2 lg:pl-1">{timeLeft.segundos}</p>
      </div>
    </div>
  );
};

export default Countdown;
