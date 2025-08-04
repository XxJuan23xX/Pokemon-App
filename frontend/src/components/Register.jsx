import React, { useState } from 'react';
import RegisterImg from '../assets/register.jpg';
import './Login.css';
import Navbar from './Navbar';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [mensaje, setMensaje] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.id]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:4000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error al registrar');

      setMensaje('✅ Usuario registrado exitosamente');
    } catch (err) {
      setMensaje(`❌ ${err.message}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#849fa6" }}>
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-4 pt-24">
        <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 overflow-hidden" style={{ backgroundColor: "#4f6d78" }}>
          
          {/* Formulario */}
          <div className="p-6 flex flex-col justify-center w-full animate-fade-in">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <h5 className="text-xl font-medium text-gray-900 dark:text-white">REGISTRATE</h5>

              <div>
                <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Nombre de usuario
                </label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="AshKetchum23"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="ash@poke.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  required
                />
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                  Contraseña
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
                Registrarse
              </button>

              {mensaje && <p className="text-sm mt-2 text-white">{mensaje}</p>}

              <p className="text-sm font-medium text-gray-300">
                Ya tienes cuenta pibe?{' '}
                <a href="/" className="text-blue-400 hover:underline">
                  Logeate
                </a>
              </p>
            </form>
          </div>

          {/* Imagen */}
          <img
            src={RegisterImg}
            alt="Imagen de Pokémon"
            className="object-cover w-full h-64 md:h-auto md:w-64 dark:bg-gray-700 animate-slide-in"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
