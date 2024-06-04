import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarComponent from '../Navbar';
import AlertRegister from '../AlertRegister';
import userService from '../../service/userService';
import '../../styles/AlertRegister.css'; 

function RegisterForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullNames: '',
    lastNames: '',
    dni: '',
    phone: '',
    email: '',
    password: '',
    address: '',
    gender: 'hombre',
    bloodType: '',
    birthday: '',
    maritalState: '',
    emergencyContact: '',
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

  const validateForm = () => {
    let isValid = true;

    if (!formData.fullNames) {
      AlertRegister.showError('Atento', "El campo 'Nombre' es obligatorio.");
      isValid = false;
    }
    if (!formData.lastNames) {
      AlertRegister.showError('Atento', "El campo 'Apellido' es obligatorio.");
      isValid = false;
    }
    if (!formData.dni) {
      AlertRegister.showError('Atento', "El campo 'Cédula' es obligatorio.");
      isValid = false;
    }
    if (!formData.phone) {
      AlertRegister.showError('Atento', "El campo 'Celular' es obligatorio.");
      isValid = false;
    }
    if (!formData.email) {
      AlertRegister.showError('Atento', "El campo 'Correo Electrónico' es obligatorio.");
      isValid = false;
    }
    if (!formData.password) {
      AlertRegister.showError('Atento', "El campo 'Contraseña' es obligatorio.");
      isValid = false;
    }
    if (!formData.address) {
      AlertRegister.showError('Atento', "El campo 'Dirección' es obligatorio.");
      isValid = false;
    }
    if (!formData.gender) {
      AlertRegister.showError('Atento', "El campo 'Género' es obligatorio.");
      isValid = false;
    }
    if (!formData.birthday) {
      AlertRegister.showError('Error', "El campo 'Fecha de Nacimiento' es obligatorio.");
      isValid = false;
    }
    if (!formData.bloodType) {
      AlertRegister.showError('Atento', "El campo 'Tipo de Sangre' es obligatorio.");
      isValid = false;
    }
    if (!formData.maritalState) {
      AlertRegister.showError('Atento', "El campo 'Estado Civil' es obligatorio.");
      isValid = false;
    }
    if (!formData.emergencyContact) {
      AlertRegister.showError('Atento', "El campo 'Contacto de Emergencia' es obligatorio.");
      isValid = false;
    }
    if (!formData.emergencyPhone) {
      AlertRegister.showError('Atento', "El campo 'Teléfono de Emergencia' es obligatorio.");
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const newUser = await userService.createUser(formData);
        console.log('Nuevo usuario creado:', newUser);
        navigate('/');
      } catch (error) {
        console.error('Error al crear nuevo usuario:', error);
      }
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
                <label htmlFor="fullNames" className="form-label"><b>*</b>Nombre:</label>
                <input type="text" className="form-control" id="fullNames" value={formData.fullNames} onChange={handleChange} placeholder="Nombre completo" />
              </div>
              <div className="mb-3">
                <label htmlFor="lastNames" className="form-label"><b>*</b>Apellido:</label>
                <input type="text" className="form-control" id="lastNames" value={formData.lastNames} onChange={handleChange} placeholder="Apellidos completos" />
              </div>
              <div className="mb-3">
                <label htmlFor="dni" className="form-label"><b>*</b>Cédula:</label>
                <input type="number" className="form-control" id="dni" value={formData.dni} onChange={handleChange} placeholder="1700000000" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label"><b>*</b>Celular:</label>
                <input type="number" className="form-control" id="phone" value={formData.phone} onChange={handleChange} placeholder="0999999999" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label"><b>*</b>Correo Electrónico:</label>
                <input type="email" className="form-control" id="email" value={formData.email} onChange={handleChange} placeholder="Correo Electrónico" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label"><b>*</b>Contraseña:</label>
                <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} placeholder="Contraseña" />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label"><b>*</b>Dirección:</label>
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
                <label htmlFor="birthday" className="form-label"><b>*</b>Fecha de Nacimiento:</label>
                <input type="date" className="form-control" id="birthday" value={formData.birthday} onChange={handleChange} />
              </div>
              <div className="mb-3">
                <label htmlFor="bloodType" className="form-label"><b>*</b>Tipo de Sangre:</label>
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
                <label htmlFor="maritalState" className="form-label"><b>*</b>Estado Civil:</label>
                <select className="form-select" id="maritalState" value={formData.maritalState} onChange={handleChange}>
                  <option value="">Seleccionar estado civil</option>
                  <option value="soltero">Soltero/a</option>
                  <option value="casado">Casado/a</option>
                  <option value="divorciado">Divorciado/a</option>
                  <option value="viudo">Viudo/a</option>
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="emergencyContact" className="form-label"><b>*</b>Contacto de Emergencia:</label>
                <input type="text" className="form-control" id="emergencyContact" value={formData.emergencyContact} onChange={handleChange} placeholder="Contacto de Emergencia" />
              </div>
              <div className="mb-3">
                <label htmlFor="emergencyPhone" className="form-label"><b>*</b>Teléfono de Emergencia:</label>
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
