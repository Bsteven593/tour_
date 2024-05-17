import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarComponent from './Navbar';
import userService from '../service/user';

function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    names: '',
    fullNames: '',
    dni: '',
    phone:'',
    email: '',
    password: '',
    address: '',
    gender: '',
    bloodType:'',
    birthday: '',
    maritalState:'',
    emergencyContact:'',
    emergencyPhone: '',
    disease: '',
    disability: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newUser = await userService.createUser(formData);
      console.log('Nuevo usuario creado:', newUser);
      // Redirigir a la página de inicio de sesión o a otra página
      navigate('/');
    } catch (error) {
      console.error('Error al crear nuevo usuario:', error);
      // Manejar el error apropiadamente, mostrar un mensaje de error, etc.
    }
  };

  return (
    <div>
      <NavbarComponent />
      <div className="container p-10">
        <form className="formulario__register" onSubmit={handleSubmit}>
          <h2 className="text-center">Regístrate</h2>
          <div className="row">
            <div className="col-md-6">
              {/* Primera columna */}
              <div className="mb-3">
                <label htmlFor="names" className="form-label">Nombre:</label>
                <input type="text" className="form-control" id="names" value={formData.names} onChange={handleChange} placeholder="Nombre completo" />
              </div>
              <div className="mb-3">
                <label htmlFor="fullNames" className="form-label">Apellido:</label>
                <input type="text" className="form-control" id="fullNames" value={formData.fullNames} onChange={handleChange} placeholder="Nombre completo" />
              </div>
              <div className="mb-3">
                <label htmlFor="dni" className="form-label">Cédula:</label>
                <input type="number" className="form-control" id="dni" value={formData.dni} onChange={handleChange} placeholder="Nombre completo" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Celular:</label>
                <input type="number" className="form-control" id="phone" value={formData.phone} onChange={handleChange} placeholder="Nombre completo" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Correo Electrónico:</label>
                <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} placeholder="Correo Electrónico" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">Contraseña:</label>
                <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} placeholder="Contraseña" />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">Dirección:</label>
                <input type="text" className="form-control" id="address" value={formData.address} onChange={handleChange} placeholder="Dirección" />
              </div>
              <div className="mb-3">
                <label htmlFor="gender" className="form-label">Género:</label>
                <select className="form-select" id="gender" value={formData.gender} onChange={handleChange}>
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
                <input type="date" className="form-control" id="birthday" value={formData.birthday} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="bloodType" className="form-label">Tipo de Sangre:</label>
                <select className="form-select" id="bloodType" value={formData.bloodType} onChange={handleChange}>
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
                <label htmlFor="maritalState" className="form-label">Estado Civil:</label>
                <select className="form-select" id="maritalState" value={formData.maritalState} onChange={handleChange}>
                  <option value="">Seleccionar estado civil</option>
                  <option value="soltero">Soltero/a</option>
                  <option value="casado">Casado/a</option>
                  <option value="divorciado">Divorciado/a</option>
                  <option value="viudo">Viudo/a</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="emergencyContact" className="form-label">Contacto de Emergencia:</label>
                <input type="text" className="form-control" id="emergencyContact" value={formData.emergencyContact} onChange={handleChange} placeholder="Contacto de Emergencia" />
              </div>
              <div className="mb-3">
                <label htmlFor="emergencyPhone" className="form-label">Teléfono de Emergencia:</label>
                <input type="number" className="form-control" id="emergencyPhone" value={formData.emergencyPhone} onChange={handleChange} placeholder="Teléfono de Emergencia" />
              </div>
              <div className="mb-3">
                <label htmlFor="disease" className="form-label">Enfermedad:</label>
                <input type="text" className="form-control" id="disease" value={formData.disease} onChange={handleChange} placeholder="Enfermedad" />
              </div>
              <div className="mb-3">
                <label htmlFor="disability" className="form-label">Discapacidad:</label>
                <input type="text" className="form-control" id="disability" value={formData.disability} onChange={handleChange} placeholder="Discapacidad" />
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