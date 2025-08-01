import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Login from './components/Login'
import Register from './components/Register';
import Home from './components/Home';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/BattleHome" element={<Home />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
}

export default App
