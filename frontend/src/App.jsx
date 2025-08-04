import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login'
import Register from './components/Register';
import Home from './components/Home';
import { AuthProvider } from './context/AuthContext';
import Menu from './components/Menu';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/BattleHome" element={<Home />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App
