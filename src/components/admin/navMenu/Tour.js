
// src/components/Tour.js
import React, { useState, useEffect } from 'react';
import tourService from '../../../service/tourService';
import 'bootstrap/dist/css/bootstrap.min.css';

function Tour() {
  const [tours, setTours] = useState([]);
  const [newTour, setNewTour] = useState({
    name: '', description: '', price: '', days_duration: '1', sector: '', start_date: ''
  });
  const [editingTour, setEditingTour] = useState(null);

  useEffect(() => {
    tourService.getAllTours().then(data => {
      setTours(data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTour({
      ...newTour,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    tourService.createTour(newTour).then(data => {
      setTours([...tours, data]);
      setNewTour({
        name: '', description: '', price: '', days_duration: '1', sector: '', start_date: ''
      });
    }).catch(error => {
      console.error('Error al crear el tour:', error);
    });
  };

  const handleDelete = (id) => {
    tourService.deleteTourById(id).then(() => {
      setTours(tours.filter(tour => tour.id !== id));
    }).catch(error => {
      console.error('Error al eliminar el tour:', error);
    });
  };

  const handleEdit = (tour) => {
    setEditingTour(tour);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setEditingTour({
      ...editingTour,
      [name]: value
    });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    tourService.partialUpdateTour(editingTour.id, editingTour).then(updatedTour => {
      setTours(tours.map(tour => (tour.id === updatedTour.id ? updatedTour : tour)));
      setEditingTour(null);
    }).catch(error => {
      console.error('Error al actualizar el tour:', error);
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="name" name="name" value={newTour.name} onChange={handleChange} required />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="description" className="form-label">Descripción</label>
            <input type="text" className="form-control" id="description" name="description" value={newTour.description} onChange={handleChange} required />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="price" className="form-label">Precio</label>
            <input type="text" className="form-control" id="price" name="price" value={newTour.price} onChange={handleChange} required />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="days_duration" className="form-label">Días de duración</label>
            <select className="form-select" id="days_duration" name="days_duration" value={newTour.days_duration} onChange={handleChange} required>
              <option value="1">1 día</option>
              <option value="3">3 días</option>
              <option value="7">7 días</option>
              <option value="10">10 días</option>
              <option value="15">15 días</option>
              <option value="20">20 días</option>
              <option value="25">25 días</option>
              <option value="30">30 días</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="conductors" className="form-label">Conductores</label>
            <select className="form-select" id="conductors" name="conductors" required>
              <option value="1">1 día</option>
              <option value="3">3 días</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="guides" className="form-label">Guías Turísticos</label>
            <select className="form-select" id="guides" name="guides" required>
              <option value="1">1 día</option>
              <option value="3">3 días</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="transport" className="form-label">Transportes</label>
            <select className="form-select" id="transport" name="transport" required>
              <option value="1">FS4</option>
              <option value="3">HV5</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="restaurant" className="form-label">Restaurantes</label>
            <select className="form-select" id="restaurant" name="restaurant" required>
              <option value="1">FS4</option>
              <option value="3">HV5</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="hotel" className="form-label">Hoteles</label>
            <select className="form-select" id="hotel" name="hotel" required>
              <option value="1">FS4</option>
              <option value="3">HV5</option>
            </select>
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="sector" className="form-label">Sector / Lugar</label>
            <input type="text" className="form-control" id="sector" name="sector" value={newTour.sector} onChange={handleChange} required />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="start_date" className="form-label">Día que Empieza</label>
            <input type="date" className="form-control" id="start_date" name="start_date" value={newTour.start_date} onChange={handleChange} required />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
      </form>
      <br />
      <br />
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripción</th>
              <th scope="col">Precio</th>
              <th scope="col">Días de duración</th>
              <th scope="col">Sector / Lugar</th>
              <th scope="col">Día que Empieza</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {tours.map((tour, index) => (
              <tr key={tour.id}>
                <th scope="row">{index + 1}</th>
                <td>{tour.name}</td>
                <td>{tour.description}</td>
                <td>{tour.price}</td>
                <td>{tour.days_duration}</td>
                <td>{tour.sector}</td>
                <td>{tour.start_date}</td>
                <td>
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(tour)}>Actualizar</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(tour.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {editingTour && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Actualizar Tour</h5>
                <button type="button" className="btn-close" onClick={() => setEditingTour(null)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleUpdateSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" name="name" value={editingTour.name} onChange={handleUpdateChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">Descripción</label>
                    <input type="text" className="form-control" id="description" name="description" value={editingTour.description} onChange={handleUpdateChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">Precio</label>
                    <input type="text" className="form-control" id="price" name="price" value={editingTour.price} onChange={handleUpdateChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="days_duration" className="form-label">Días de duración</label>
                    <select className="form-select" id="days_duration" name="days_duration" value={editingTour.days_duration} onChange={handleUpdateChange} required>
                      <option value="1">1 día</option>
                      <option value="3">3 días</option>
                      <option value="7">7 días</option>
                      <option value="10">10 días</option>
                      <option value="15">15 días</option>
                      <option value="20">20 días</option>
                      <option value="25">25 días</option>
                      <option value="30">30 días</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="conductors" className="form-label">Conductores</label>
                    <select className="form-select" id="conductors" name="conductors" required>
                      <option value="1">1 día</option>
                      <option value="3">3 días</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="guides" className="form-label">Guías Turístico</label>
                    <select className="form-select" id="guides" name="guides" required>
                      <option value="1">1 día</option>
                      <option value="3">3 días</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="transport" className="form-label">Transporte</label>
                    <select className="form-select" id="transport" name="transport" required>
                      <option value="1">FS4</option>
                      <option value="3">HV5</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="sector" className="form-label">Sector / Lugar</label>
                    <input type="text" className="form-control" id="sector" name="sector" value={editingTour.sector} onChange={handleUpdateChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="start_date" className="form-label">Día que Empieza</label>
                    <input type="date" className="form-control" id="start_date" name="start_date" value={editingTour.start_date} onChange={handleUpdateChange} required />
                  </div>
                  <button type="submit" className="btn btn-primary">Actualizar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tour;
