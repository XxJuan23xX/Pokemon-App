import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { auth, logout } = useContext(AuthContext);
  const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => setShowDropdown(prev => !prev);

  if (auth.token) {
    return (
      // ✅ NAVBAR CUANDO ESTÁ LOGUEADO
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://loodibee.com/wp-content/uploads/Pokemon-Symbol-logo.png" className="h-8" alt="PokeWar Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">PokeWar</span>
          </a>

          {/* Botón de usuario y dropdown */}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <img
                className="w-8 h-8 rounded-full"
                src="https://www.gravatar.com/avatar?d=identicon"
                alt="user avatar"
              />
            </button>

            {/* Dropdown */}
            {showDropdown && (
              <div className="absolute right-0 z-50 mt-2 w-48 bg-white rounded-lg shadow dark:bg-gray-700">
                <div className="px-4 py-3">
                  <span className="block text-sm text-gray-900 dark:text-white">{auth.username}</span>
                  <span className="block text-sm text-gray-500 truncate dark:text-gray-400">pokeplayer@poke.com</span>
                </div>
                <ul className="py-2">
                  <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Dashboard</a></li>
                  <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Settings</a></li>
                  <li><a href="#" className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-600">Earnings</a></li>
                  <li>
                    <a
                      href="#"
                      onClick={() => {
                        logout();
                        window.location.href = "/";
                      }}
                      className="block px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:text-red-400 dark:hover:bg-gray-600"
                    >
                      Sign out
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <div className="hidden md:flex items-center md:order-1">
            <ul className="flex flex-col md:flex-row md:space-x-8 font-medium p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent">
            <li><a href="/" className="block py-2 px-3 text-black md:text-black dark:text-green-700">Home</a></li>
            <li><a href="#" className="block py-2 px-3 text-black md:hover:text-black dark:text-black md:dark:text-green-700">Services</a></li>
            <li><a href="#" className="block py-2 px-3 text-black md:hover:text-black dark:text-black md:dark:text-green-700">Pricing</a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  // ✅ NAVBAR CUANDO NO ESTÁ LOGUEADO
  return (
    <nav className="border-gray-200 bg-white dark:border-gray-700">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="https://loodibee.com/wp-content/uploads/Pokemon-Symbol-logo.png" className="h-8" alt="PokeWar Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">PokeWar</span>
        </a>
        <div className="hidden md:block md:w-auto" id="navbar-solid-bg">
          <ul className="flex flex-col md:flex-row md:space-x-8 font-medium p-4 md:p-0 mt-4 rounded-lg bg-gray-50 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent">
            <li><a href="/" className="block py-2 px-3 text-black md:text-black dark:text-green-700">Home</a></li>
            <li><a href="#" className="block py-2 px-3 text-black md:hover:text-black dark:text-black md:dark:text-green-700">Services</a></li>
            <li><a href="#" className="block py-2 px-3 text-black md:hover:text-black dark:text-black md:dark:text-green-700">Pricing</a></li>
            <li><a href="#" className="block py-2 px-3 text-black md:hover:text-black dark:text-black md:dark:text-green-700">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
