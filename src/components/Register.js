import React from 'react';
import { Link } from 'react-router-dom';
import NavbarComponent from './Navbar'; 
function RegisterForm() {
  return (
    <div>
    <div>
    <NavbarComponent />
    </div>
    <div className="container p-10">
      <form className="formulario__register">
        <h2 className="text-center">Regístrate</h2>
        <div className="mb-3">
          <label htmlFor="fullName" className="form-label">Nombre completo:</label>
          <input type="text" className="form-control" id="fullName" placeholder="Nombre completo" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico:</label>
          <input type="email" className="form-control" id="email" placeholder="Correo Electrónico" />
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Usuario:</label>
          <input type="text" className="form-control" id="username" placeholder="Usuario" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Contraseña:</label>
          <input type="password" className="form-control" id="password" placeholder="Contraseña" />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">Regístrate</button>
        </div>
      </form>
      <div className="mt-3 text-center">
          ¿Ya tienes una cuenta? <Link to="/">Iniciar Sesión</Link>
        </div>
    </div>
    </div>
  );
}

export default RegisterForm;