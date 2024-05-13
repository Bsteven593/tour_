import React, { useState } from 'react';
import RegisterForm from './Register'
import NavbarComponent from './Navbar'; 
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Para íconos de Bootstrap


function LoginForm() {
  // Definir los estados para el nombre de usuario y contraseña
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí podrías agregar la lógica para enviar los datos de inicio de sesión a tu servidor
    console.log('Username:', username);
    console.log('Password:', password);
    // Limpia los campos del formulario
    setUsername('');
    setPassword('');
  };

  return (
    <div>
    <div>
    <NavbarComponent />
    </div>
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