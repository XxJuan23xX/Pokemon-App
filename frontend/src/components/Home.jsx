import React, { useState, useEffect } from 'react';
import LoadingScreen from './LoadingScreen';
import charizardGif from '../assets/pokemon-gifs/charizard.gif';
import venusaurGif from '../assets/pokemon-gifs/venusaurx.gif';
import blastoiseGif from '../assets/pokemon-gifs/blastoise.gif';
import pikachuGif from '../assets/pokemon-gifs/pikachu.gif';
import gengarGif from '../assets/pokemon-gifs/gengar.gif';
import snorlaxGif from '../assets/pokemon-gifs/metagross.gif';
import dragoniteGif from '../assets/pokemon-gifs/dragonite.gif';
import lugiaGif from '../assets/pokemon-gifs/lugiax.gif';
import hoOhGif from '../assets/pokemon-gifs/ho-oh.gif';
import mewtwoGif from '../assets/pokemon-gifs/mewtwox.gif';
import waitGif from '../assets/pokemon-gifs/pikachu-running.gif';
import Pikachu from '../assets/Pikachu.png';
import Pokeball from '../assets/pokemon-gifs/pokeball.gif';
import SpeedDial from './SpeedDial';

const Home = () => {
  // Lista de los 10 Pokémon específicos con sus IDs
  const pokemonIds = {
    charizard: 6,
    venusaur: 3,
    blastoise: 9,
    pikachu: 25,
    gengar: 94,
    snorlax: 143,
    dragonite: 149,
    lugia: 249,
    hooh: 250,
    mewtwo: 150
  };

  const pokemonGifs = {
    charizard: charizardGif,
    venusaur: venusaurGif,
    blastoise: blastoiseGif,
    pikachu: pikachuGif,
    gengar: gengarGif,
    snorlax: snorlaxGif,
    dragonite: dragoniteGif,
    lugia: lugiaGif,
    'ho-oh': hoOhGif,
    mewtwo: mewtwoGif
  };

  const [selectedPokemon, setSelectedPokemon] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pokemonData, setPokemonData] = useState([]); // Cambiado a array
  const [currentGif, setCurrentGif] = useState(null);
  

  // Función para cargar los datos de los Pokémon
  const fetchPokemonData = async () => {
    const data = await Promise.all(
      Object.entries(pokemonIds).map(async ([name, id]) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        return await res.json();
      })
    );
    
    setPokemonData(data);
    setIsLoading(false);
  };

  // Cargar los datos al montar el componente
  useEffect(() => {
    fetchPokemonData();
  }, []);

  const selectPokemon = (pokemon) => {
    if (selectedPokemon.length < 3 && !selectedPokemon.some(p => p.id === pokemon.id)) {
      setSelectedPokemon([...selectedPokemon, pokemon]);
      setCurrentGif(pokemonGifs[pokemon.name]);
    }
  };

  const removePokemon = (index) => {
    const newSelection = [...selectedPokemon];
    newSelection.splice(index, 1);
    setSelectedPokemon(newSelection);

    if (newSelection.length > 0) {
      setCurrentGif(pokemonGifs[newSelection[newSelection.length - 1].name]);
    } else {
      setCurrentGif(null);
    }
  };

  if (isLoading) return <LoadingScreen />;

  return (
    <div className="bg-white min-h-screen flex flex-col">
      {/* Speed Dial para regresar al menú */}
     <SpeedDial></SpeedDial>
     {/*RESTO DE LA PÁGINA*/}
     <h1 className="text-3xl font-mono text-center p-4 flex items-center justify-center gap-2">
  Selecciona tu personaje 
  <img 
    src={Pokeball} 
    alt="Pokeball" 
    className="h-12 w-12 object-contain" 
  />
</h1>
      {/* Parte superior dividida en 2 secciones */}
      <div className="flex flex-col md:flex-row pl-6">
        {/* Sección izquierda con contador y seleccionados */}
        <div className="w-full md:w-1/2 pr-0 md:pr-6">
          <div className="mb-4">
            <p className="text-xl font-mono text-gray-700">
              {selectedPokemon.length}/3 Seleccionados
            </p>
          </div>
          
          {/* Tarjetas horizontales de Pokémon seleccionados */}
          <div className="space-y-3">
            {selectedPokemon.map((pokemon, idx) => (
              <div 
                key={pokemon.id} 
                className="bg-white p-3 rounded-lg shadow-md flex items-center border-2 border-black"
              >
                <img 
                  src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
                  alt={pokemon.name} 
                  className="w-16 h-16 object-contain" 
                />
                <p className="capitalize ml-4 font-medium text-lg">{pokemon.name}</p>
                <button 
                  onClick={() => removePokemon(idx)}
                  className="ml-auto text-red-500 hover:text-red-700 text-2xl font-bold"
                >
                  ×
                </button>
              </div>
            ))}
            
            {/* Mostrar espacios vacíos si hay menos de 3 seleccionados */}
            {Array.from({ length: 3 - selectedPokemon.length }).map((_, idx) => (
              <div 
                key={`empty-${idx}`} 
                className="bg-gray-100 p-3 rounded-lg shadow-inner flex items-center h-[82px] border-2 border-black"
              >
                <div className="w-16 h-16 bg-gray-200 rounded"></div>
                <p className="capitalize ml-4 text-gray-400">Vacío</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Sección derecha con el GIF del Pokémon */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 flex items-center justify-center">
  {currentGif ? (
    <div className="bg-transparent p-1 w-full h-[300px] flex items-center justify-center"> {/* Aumenté la altura */}
      <img 
        src={currentGif} 
        alt="Pokémon animado" 
        className="max-h-[380px] max-w-full object-contain" /* Aumenté el tamaño máximo */
      />
    </div>
  ) : (
    <div className="bg-transparent p-1 w-full h-[300px] flex items-center justify-center">
      <img 
        src={waitGif} 
        alt="Pikachu running" 
        className="max-h-[380px] max-w-full object-contain"
      />
    </div>
  )}
</div>
      </div>

    {/* Grid de Pokémon en la parte inferior */}
      <div className="mt-auto p-6 bg-transparent">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-[80%] mx-auto">
          {pokemonData.map((pokemon) => (
            <div
              key={pokemon.id}
              className={`p-3 rounded-lg shadow cursor-pointer transition border-2 border-black ${
                selectedPokemon.some(p => p.id === pokemon.id)
                  ? 'bg-amber-200 ring-2 ring-amber-400'
                  : 'bg-gray-50 hover:bg-gray-100 hover:shadow-md'
              }`}
              onClick={() => selectPokemon(pokemon)}
            >
              {pokemon.name === 'pikachu' ? (
                <img 
                  src={Pikachu}  // Cambiado de pikachuImage a Pikachu
                  alt={pokemon.name} 
                  className="w-full h-24 object-contain mx-auto" 
                />
              ) : (
                <img 
                  src={pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default} 
                  alt={pokemon.name} 
                  className="w-full h-24 object-contain mx-auto" 
                />
              )}
              
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;