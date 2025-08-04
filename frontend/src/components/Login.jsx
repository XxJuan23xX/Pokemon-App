import React, { useState } from 'react';
import './Login.css';
import LoginImg from '../assets/login.jpg';
import Navbar from './Navbar';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ... (tu código de handleSubmit permanece igual)
  };

  return (
    <div className="flex flex-col min-h-screen" style={{ backgroundColor: '#849fa6' }}>
      {/* Navbar en la parte superior */}
      <Navbar />
      
      {/* Contenido principal centrado */}
      <div className="flex-grow flex justify-center items-center p-4">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 overflow-hidden" style={{ backgroundColor: '#4f6d78' }}>

          {/* Imagen */}
          <img
            src={LoginImg}
            alt="Imagen de Pokémon"
            className="object-cover w-full h-64 md:h-auto md:w-64 dark:bg-gray-700 animate-slide-in-right"
          />

          {/* Formulario */}
          <div className="p-6 flex flex-col justify-center w-full animate-fade-in">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>

              {/* ... (resto de tu formulario permanece igual) */}
              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  placeholder="AshKetchum23"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
              >
                Login to your account
              </button>

              {mensaje && <p className="text-sm mt-2 text-white">{mensaje}</p>}

              <p className="text-sm font-medium text-gray-300">
                Not registered?{' '}
                <a href="/Register" className="text-blue-400 hover:underline">Create account</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;