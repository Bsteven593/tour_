import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NavbarComponent from './Navbar';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Para íconos de Bootstrap

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Configuración de axios
    const axiosAuthInstance = axios.create({
      baseURL: 'http://localhost:8080/auth/register',
      timeout: 1000,
    });

    try {
      const response = await axiosAuthInstance.post('/login', { 
        username,
        password,
      });

      const token = response.data.token;

      // Guarda el token en localStorage
      localStorage.setItem('token', token);

      // Redirige a la página de perfil después del inicio de sesión
      navigate('/dashboard');
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
      // Manejo de errores (mostrar mensaje de error, etc.)
    }
  };

  return (
    <div>
      <NavbarComponent />
      <div className="container">
        <h2 className="text-center">Inicio de Sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="username" className="form-label">Usuario:</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña:</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
          </div>
        </form>
        <div className="mt-3 text-center">
          ¿No tienes una cuenta? <Link to="/register">Regístrate aquí</Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
