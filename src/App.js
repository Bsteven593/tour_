import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginForm from './components/Login';
import RegisterForm from './components/Register';
import Dashboard from './components/DashBoarAdmin'; // Corregido el nombre del componente
import CardRegister from './components/cardRegister';

function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<Dashboard  />} />
        <Route path="/cardRegister" element={<CardRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
