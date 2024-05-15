import React from 'react';
import { Link } from 'react-router-dom';
import NavbarComponent from './Navbar';

function RegisterForm() {
  return (
    <div>
      <NavbarComponent />
      <div className="container p-10">
        <form className="formulario__register">
          <h2 className="text-center">Regístrate</h2>
          <div className="row">
            <div className="col-md-6">
              {/* Primera columna */}
              <div className="mb-3">
                <label htmlFor="Name" className="form-label">Nombre:</label>
                <input type="text" className="form-control" id="Name" placeholder="Nombre completo" />
              </div>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">Apellido:</label>
                <input type="text" className="form-control" id="fullName" placeholder="Nombre completo" />
              </div>
              <div className="mb-3">
                <label htmlFor="Dni" className="form-label">Cédula:</label>
                <input type="number" className="form-control" id="Dni" placeholder="Nombre completo" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Celular:</label>
                <input type="number" className="form-control" id="phone" placeholder="Nombre completo" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                <input type="email" className="form-control" id="email" placeholder="Correo Electrónico" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña:</label>
                <input type="password" className="form-control" id="password" placeholder="Contraseña" />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Dirección:</label>
                <input type="text" className="form-control" id="address" placeholder="Dirección" />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">Género:</label>
                <select className="form-select" id="gender">
                  <option value="hombre">Hombre</option>
                  <option value="mujer">Mujer</option>
                  <option value="otros">Otros</option>
                </select>
              </div>
            </div>
            <div className="col-md-6">
              {/* Segunda columna */}
              <div className="mb-3">
                <label htmlFor="birthday" className="form-label">Fecha de Nacimiento:</label>
                <input type="date" className="form-control" id="birthday" />
              </div>
              <div className="mb-3">
                <label htmlFor="bloodType" className="form-label">Tipo de Sangre:</label>
                <select className="form-select" id="bloodType">
                  <option value="">Seleccionar tipo de sangre</option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="maritalStatus" className="form-label">Estado Civil:</label>
                <select className="form-select" id="maritalStatus">
                  <option value="">Seleccionar estado civil</option>
                  <option value="soltero">Soltero/a</option>
                  <option value="casado">Casado/a</option>
                  <option value="divorciado">Divorciado/a</option>
                  <option value="viudo">Viudo/a</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="emergencyContact" className="form-label">Contacto de Emergencia:</label>
                <input type="text" className="form-control" id="emergencyContact" placeholder="Contacto de Emergencia" />
              </div>
              <div className="mb-3">
                <label htmlFor="emergencyPhone" className="form-label">Teléfono de Emergencia:</label>
                <input type="number" className="form-control" id="emergencyPhone" placeholder="Teléfono de Emergencia" />
              </div>
              <div className="mb-3">
                <label htmlFor="disease" className="form-label">Enfermedad:</label>
                <input type="text" className="form-control" id="disease" placeholder="Enfermedad" />
              </div>
              <div className="mb-3">
                <label htmlFor="disability" className="form-label">Discapacidad:</label>
                <input type="text" className="form-control" id="disability" placeholder="Discapacidad" />
              </div>
            </div>
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