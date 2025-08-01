import React, { useState } from 'react';
import './Login.css';
import LoginImg from '../assets/login.jpg';

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

    try {
      const res = await fetch('http://localhost:4000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: formData.username,
          password: formData.password
        })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error al iniciar sesión');

      // ✅ Guardar en localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);

      // ✅ Redirigir con recarga completa para actualizar Navbar
      window.location.href = '/BattleHome';
    } catch (err) {
      setMensaje(`❌ ${err.message}`);
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-start pt-24 overflow-hidden" style={{ backgroundColor: '#849fa6' }}>
      <div className="flex flex-col md:flex-row w-[50%] max-w-4xl bg-white border border-gray-200 rounded-lg shadow-md dark:border-gray-700 overflow-hidden" style={{ backgroundColor: '#4f6d78' }}>

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
  );
};

export default Login;
