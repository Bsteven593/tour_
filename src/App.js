import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import Dashboard from './components/DashBoarAdmin'; // Corregido el nombre del componente

function App() {
  const menuItems = [
    { title: 'Transporte', link: '/transporte' },
    { title: 'Hospedaje', link: '/hospedaje' },
    { title: 'Alimentación', link: '/alimentacion' }
  ];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard menuItems={menuItems} />} />
      </Routes>
    </Router>
  );
}

export default App;
