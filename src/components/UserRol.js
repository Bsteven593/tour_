import React from 'react';

const UserRol = ({ users, handleAssignRole }) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Assign Role</th>
        </tr>
      </thead>
      <tbody>
       
          <tr>
            <td>ll</td>
            <td>ll</td>
            <td>pp</td>
            <td>ppp</td>
            <td>
              <button  className="btn btn-primary me-2">Assign Driver</button>
              <button  className="btn btn-success">Assign Tour Guide</button>
            </td>
          </tr>
       
      </tbody>
    </table>
  );
};

export default UserRol;
