"use client";

import { useEffect, useState } from "react";

interface Props {
  horas: string;
  minutos: string;
  segundos: string;
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<Props>();

  useEffect(() => {
    const fetchFechaObjetivo = async () => {
      const res = await fetch("/api/getCounter");
      const data = await res.json();

      const fechaObjetivo = new Date(data);
      updateCountdown(fechaObjetivo);

      const intervalId = setInterval(() => {
        updateCountdown(fechaObjetivo, intervalId);
      }, 1000);

      return () => clearInterval(intervalId);
    };

    fetchFechaObjetivo();
  }, []);

  const updateCountdown = (fechaObjetivo: Date, intervalId?: NodeJS.Timeout) => {
    const fechaActual = new Date();
    const diferencia = fechaObjetivo.getTime() - fechaActual.getTime();

    if (diferencia <= 0) {
      // Si el tiempo ha llegado a cero o es negativo, detener el contador y establecer a "00:00:00"
      clearInterval(intervalId);
      setTimeLeft({ horas: "00", minutos: "00", segundos: "00" });
      return;
    }

    const segundos = Math.floor((diferencia / 1000) % 60)
      .toString()
      .padStart(2, "0");
    const minutos = Math.floor((diferencia / 1000 / 60) % 60)
      .toString()
      .padStart(2, "0");
    const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24)
      .toString()
      .padStart(2, "0");

    setTimeLeft({ horas, minutos, segundos });
  };

  if (!timeLeft) return <div>Cargando...</div>;

  return (
    <div className="max-w-min absolute z-50">
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
