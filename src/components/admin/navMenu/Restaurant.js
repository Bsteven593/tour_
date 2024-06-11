import React, { useState, useEffect } from 'react';
import restaurantService from '../../../service/restaurantService';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/Home.css'; // Asegúrate de crear y vincular este archivo CSS

function Restaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [newRestaurant, setNewRestaurant] = useState({ name: '', price: '' });
  const [editingRestaurant, setEditingRestaurant] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    restaurantService.getAllRestaurants().then(data => {
      setRestaurants(data);
    });
  }, []);

  const handleNameChange = (e) => {
    const { value } = e.target;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setNewRestaurant({
        ...newRestaurant,
        name: value
      });
    }
  };

  const handlePriceChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setNewRestaurant({
        ...newRestaurant,
        price: value
      });
    }
  };

  const handleUpdateNameChange = (e) => {
    const { value } = e.target;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setEditingRestaurant({
        ...editingRestaurant,
        name: value
      });
    }
  };

  const handleUpdatePriceChange = (e) => {
    const { value } = e.target;
    if (/^\d*$/.test(value)) {
      setEditingRestaurant({
        ...editingRestaurant,
        price: value
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    restaurantService.createRestaurant(newRestaurant).then(data => {
      setRestaurants([...restaurants, data]);
      setNewRestaurant({ name: '', price: '' });
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
    <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input 
              type="text" 
              className="form-control" 
              id="name" 
              name="name" 
              value={newRestaurant.name} 
              onChange={handleNameChange} 
              required 
            />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="price" className="form-label">Precio</label>
            <input 
              type="text" 
              className="form-control" 
              id="price" 
              name="price" 
              value={newRestaurant.price} 
              onChange={handlePriceChange} 
              required 
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
      <br />
      <br />
      <div className="table-responsive">
        <table className="table table-striped table-hover table-bordered">
          <thead>
            <tr className="table-primary">
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Precio</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {restaurants.map((restaurant, index) => (
              <tr key={restaurant.id}>
                <th scope="row">{index + 1}</th>
                <td>{restaurant.name}</td>
                <td>{restaurant.price}</td>
                <td>
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(restaurant)}>Actualizar</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(restaurant.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

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
                    <input 
                      type="text" 
                      className="form-control" 
                      id="update-name" 
                      name="name" 
                      value={editingRestaurant.name} 
                      onChange={handleUpdateNameChange} 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="update-price" className="form-label">Precio</label>
                    <input 
                      type="number" 
                      className="form-control" 
                      id="update-price" 
                      name="price" 
                      value={editingRestaurant.price} 
                      onChange={handleUpdatePriceChange} 
                      required 
                    />
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
