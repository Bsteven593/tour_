<<<<<<< HEAD
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importar JavaScript de Bootstrap para funcionalidad
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginForm from './components/user/Login';
import RegisterForm from './components/user/Register';
import Dashboard from './components/admin/DashBoarAdmin'; // Corregido el nombre del componente


function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        
        <Route path="/dashboard" element={<Dashboard  />} />
     
      </Routes>
    </Router>
  );
}

export default App;
=======
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importar JavaScript de Bootstrap para funcionalidad
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginForm from './components/user/Login';
import RegisterForm from './components/user/Register';
import Dashboard from './components/admin/DashBoarAdmin'; // Corregido el nombre del componente


function App() {
 
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        
        <Route path="/dashboard" element={<Dashboard  />} />
     
      </Routes>
    </Router>
  );
}

export default App;
>>>>>>> robert
