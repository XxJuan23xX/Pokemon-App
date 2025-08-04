import React, { useState } from 'react';
import PokeballImg from '../assets/pokebola.png';

const SpeedDial = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed end-6 bottom-6 group">
      <div className="flex flex-col items-center mb-4 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* Botón de Regresar */}
        <button 
          type="button" 
          className="flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border-2 border-black shadow-md hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 focus:outline-none"
          onClick={() => window.location.href = '/Menu'}
        >
          <svg 
            className="w-5 h-5" 
            aria-hidden="true" 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 14 10"
          >
            <path 
              stroke="currentColor" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              d="M13 5H1m0 0l4 4M1 5l4-4"
            />
          </svg>
        </button>
      </div>
      
      <button 
  type="button" 
  className="flex items-center justify-center bg-transparent rounded-full w-20 h-20 focus:outline-none hover:animate-spin"
  onClick={() => setIsOpen(!isOpen)}
>
  <img 
    src={PokeballImg} 
    alt="Menú Pokeball" 
    className={`w-20 h-20 transition-transform ${isOpen ? 'rotate-45' : ''}`}
  />
          <path 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            d="M9 1v16M1 9h16"
          />
        <span className="sr-only">Abrir menú</span>
      </button>
    </div>
  );
};

export default SpeedDial;