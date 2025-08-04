import React, { useEffect } from 'react';
import PokeballGif from '../assets/loading.gif';
import './LoadingScreen.css';

const LoadingScreen = () => {
  useEffect(() => {
    document.body.classList.add('no-scroll');
    return () => {
      document.body.classList.remove('no-scroll');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#d3dfd1]">
      <img src={PokeballGif} alt="Cargando..." className="w-32 h-32 mb-6 animate-bounce" />

      <div className="w-64 bg-gray-200 rounded-full h-4 overflow-hidden">
        <div
          className="bg-red-500 h-4 rounded-full animate-pulse"
          style={{ width: '80%' }}
        ></div>
      </div>

      <p className="mt-4 text-lg font-medium text-gray-700">Cargando Pokémons...</p>
    </div>
  );
};

export default LoadingScreen;
