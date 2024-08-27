"use client";

import { useEffect, useState } from 'react';

const Countdown = () => {
  const initialTime = 24 * 60 * 60; // 24 horas en segundos
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    // Asegurarnos de que estamos en el cliente
    if (typeof window !== 'undefined') {
      const savedTime = localStorage.getItem('countdown');
      setTime(savedTime ? parseInt(savedTime, 10) : initialTime);

      const interval = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime > 0 ? prevTime - 1 : 0;
          localStorage.setItem('countdown', newTime.toString());
          return newTime;
        });
      }, 1000);

      return () => clearInterval(interval); // Limpia el intervalo cuando el componente se desmonta
    }
  }, [initialTime]);

  const formatTime = (time: number) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedHours = String(hours).padStart(2, '0');
    const formattedMinutes = String(minutes).padStart(2, '0');
    const formattedSeconds = String(seconds).padStart(2, '0');

    return [formattedHours, formattedMinutes, formattedSeconds];
  };

  return (
    <div className="max-w-min absolute z-50 ">
      <div className="flex pl-8 text-4xl tracking-[25px] lg:tracking-[16px] lg:pl-5 2xl:text-5xl 2xl:pl-8 2xl:tracking-[27px]">
        <p className={`rounded-lg `}>
          {formatTime(time)[0]}
        </p>
        <p className={`rounded-lg pl-[10px] lg:pl-2 2xl:pl-[12px]`}>
          {formatTime(time)[1]}
        </p>
        <p className={`rounded-lg pl-2 lg:pl-1`}>
          {formatTime(time)[2]}
        </p>
      </div>
    </div>
  );
};

export default Countdown;
