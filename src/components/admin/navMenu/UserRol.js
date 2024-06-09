
import React, { useState, useEffect } from 'react';
import userService from '../../../service/userService';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserRol = ({ handleAssignRole }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const allUsers = await userService.getAllUsers();
      setUsers(allUsers);
    } catch (error) {
      console.error('Error al cargar usuarios:', error);
    }
  };

  return (
    <div className="container">
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Cédula</th>
              <th>Correo</th>
              <th>Télefono</th>
              <th>Enfermedad</th>
              <th>Discapacidad</th>
              <th>Asignar Rol</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.fullNames}</td>
                <td>{user.lastNames}</td>
                <td>{user.dni}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.disease}</td>
                <td>{user.disability}</td>
                <td>
                  <button onClick={() => handleAssignRole(user.id, 'driver')} className="btn btn-primary btn-sm me-2">Asignar Conductor</button>
                  <button onClick={() => handleAssignRole(user.id, 'tour_guide')} className="btn btn-success btn-sm">Asignar Guía Turístico</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserRol;
