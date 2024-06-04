import React, { useState, useEffect } from 'react';
import userService from '../../../service/userService';

const UserRol = ({ handleAssignRole }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Cargar los usuarios al montar el componente
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
    <table className="table">
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
              <button onClick={() => handleAssignRole(user.id, 'driver')} className="btn btn-primary me-2">Asignar Conductor</button>
              <button onClick={() => handleAssignRole(user.id, 'tour_guide')} className="btn btn-success">Asignar Guía Turístico</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserRol;
