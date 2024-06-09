import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import NavbarComponent from '../Navbar';
import AlertRegister from '../AlertRegister';
import authService from '../../service/authService'; // Asegúrate de que la ruta es correcta
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
    genre: 'hombre',
    bloodType: '',
    birthday: '',
    maritalState: '',
    emergencyContact: '',
    emergencyPhone: '',
    disease: '',
    disability: '',
    username: ''  // Agregado el campo username
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const validateForm = () => {
    let isValid = true;

    // Validaciones
    const fields = [
      { id: 'fullNames', label: "Nombre" },
      { id: 'lastNames', label: "Apellido" },
      { id: 'dni', label: "Cédula" },
      { id: 'phone', label: "Celular" },
      { id: 'email', label: "Correo Electrónico" },
      { id: 'password', label: "Contraseña" },
      { id: 'address', label: "Dirección" },
      { id: 'genre', label: "Género" },
      { id: 'birthday', label: "Fecha de Nacimiento" },
      { id: 'bloodType', label: "Tipo de Sangre" },
      { id: 'maritalState', label: "Estado Civil" },
      { id: 'emergencyContact', label: "Contacto de Emergencia" },
      { id: 'emergencyPhone', label: "Teléfono de Emergencia" }
    ];

    fields.forEach(field => {
      if (!formData[field.id]) {
        AlertRegister.showError('Atento', `El campo '${field.label}' es obligatorio.`);
        isValid = false;
      }
    });

    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const newUser = await authService.register(formData);
        console.log('Nuevo usuario creado:', newUser);
        // Almacenar el token en localStorage
        const token = newUser.token;
        localStorage.setItem('token', token);
        navigate('/');
      } catch (error) {
        console.error('Error al crear nuevo usuario:', error);
        AlertRegister.showError('Error', 'No se pudo crear el usuario. Intenta nuevamente.');
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
                <label htmlFor="username" className="form-label"><b>*</b>Nombre de Usuario:</label>
                <input type="text" className="form-control" id="username" value={formData.username} onChange={handleChange} placeholder="Nombre de Usuario" />
              </div>
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
                <label htmlFor="genre" className="form-label">Género:</label>
                <select className="form-select" id="genre" value={formData.genre} onChange={handleChange}>
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

 