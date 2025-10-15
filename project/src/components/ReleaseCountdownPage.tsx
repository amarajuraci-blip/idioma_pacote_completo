import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, Gift } from 'lucide-react';

const ReleaseCountdownPage: React.FC = () => {
  const navigate = useNavigate();
  const unlockDate = new Date('2025-10-16T06:00:00');

  const calculateTimeLeft = () => {
    const difference = +unlockDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);

      if (Object.keys(newTimeLeft).length === 0) {
        navigate('/initial-route', { replace: true });
      }
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-white">
          {String(timeLeft[interval as keyof typeof timeLeft]).padStart(2, '0')}
        </div>
        <div className="text-sm md:text-base text-gray-400 uppercase">{interval}</div>
      </div>
    );
  });

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-xl w-full bg-gray-900 border border-purple-500 rounded-xl shadow-2xl p-8 md:p-12 animate-fade-in">
        <Gift className="w-16 h-16 text-purple-400 mx-auto mb-6" />
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Seu Acesso Está Sendo Preparado!</h1>
        <p className="text-gray-300 text-lg mb-8">
          Estamos finalizando os últimos detalhes para garantir a melhor experiência para você. Seu acesso exclusivo será liberado em breve!
        </p>

        <div className="flex justify-center gap-4 md:gap-8 my-8">
          {timerComponents.length ? timerComponents : <span className="text-2xl text-white">Liberando seu acesso...</span>}
        </div>

        <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-gray-400">Acesso será liberado em:</p>
          <p className="text-white font-semibold text-lg">16 de Outubro de 2025, às 06:00</p>
        </div>
      </div>
    </div>
  );
};

export default ReleaseCountdownPage;