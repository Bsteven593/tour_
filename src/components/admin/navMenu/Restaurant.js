import React, { useState, useEffect } from 'react';
import restaurantService from '../../../service/restaurantService';

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [newRestaurant, setNewRestaurant] = useState({ name: '', address: '' });
  const [editingRestaurant, setEditingRestaurant] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    restaurantService.getAllRestaurants().then(data => {
      setRestaurants(data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewRestaurant({
      ...newRestaurant,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    restaurantService.createRestaurant(newRestaurant).then(data => {
      setRestaurants([...restaurants, data]);
      setNewRestaurant({ name: '', address: '' });
    }).catch(error => {
      console.error('Error al crear el restaurante:', error);
    });
  };

  const handleDelete = (id) => {
    restaurantService.deleteRestaurantById(id).then(() => {
      setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
    }).catch(error => {
      console.error('Error al eliminar el restaurante:', error);
    });
  };

  const handleEdit = (restaurant) => {
    setEditingRestaurant(restaurant);
    setShowUpdateModal(true);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setEditingRestaurant({
      ...editingRestaurant,
      [name]: value
    });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    restaurantService.partialUpdateRestaurant(editingRestaurant.id, editingRestaurant).then(updatedRestaurant => {
      setRestaurants(restaurants.map(restaurant => (restaurant.id === updatedRestaurant.id ? updatedRestaurant : restaurant)));
      setEditingRestaurant(null);
      setShowUpdateModal(false);
    }).catch(error => {
      console.error('Error al actualizar el restaurante:', error);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" name="name" value={newRestaurant.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Dirección</label>
          <input type="text" className="form-control" id="address" name="address" value={newRestaurant.address} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
      <br />
      <br />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nombre</th>
            <th scope="col">Dirección</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {restaurants.map((restaurant, index) => (
            <tr key={restaurant.id}>
              <th scope="row">{index + 1}</th>
              <td>{restaurant.name}</td>
              <td>{restaurant.address}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => handleEdit(restaurant)}>Actualizar</button>
                <button className="btn btn-danger" onClick={() => handleDelete(restaurant.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showUpdateModal && editingRestaurant && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Actualizar Restaurante</h5>
                <button type="button" className="btn-close" onClick={() => setShowUpdateModal(false)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleUpdateSubmit}>
                  <div className="mb-3">
                    <label htmlFor="update-name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="update-name" name="name" value={editingRestaurant.name} onChange={handleUpdateChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="update-address" className="form-label">Dirección</label>
                    <input type="text" className="form-control" id="update-address" name="address" value={editingRestaurant.address} onChange={handleUpdateChange} required />
                  </div>
                  <button type="submit" className="btn btn-primary">Guardar cambios</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Restaurant;
