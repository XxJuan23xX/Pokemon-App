import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({
    token: localStorage.getItem('token'),
    username: localStorage.getItem('username'),
  });

  const login = (token, username) => {
    localStorage.setItem('token', token);
    localStorage.setItem('username', username);
    setAuth({ token, username });
  };

  const logout = () => {
    localStorage.clear();
    setAuth({ token: null, username: null });
  };

  useEffect(() => {
    // Cargar datos si refresca
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    setAuth({ token, username });
  }, []);

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
