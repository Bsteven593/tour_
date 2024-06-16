// src/components/TourModal.js
import React from 'react';

const TourModal = ({ tour, drivers, guides, transports, hotels, restaurants, onUpdateChange, onUpdateSubmit, onClose }) => {
  return (
    <div className="modal show" style={{ display: 'block' }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Actualizar Tour</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <form onSubmit={onUpdateSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" name="name" value={tour.name} onChange={onUpdateChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label">Descripción</label>
                <input type="text" className="form-control" id="description" name="description" value={tour.description} onChange={onUpdateChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="price" className="form-label">Precio</label>
                <input type="number" className="form-control" id="price" name="price" value={tour.price} onChange={onUpdateChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="days_duration" className="form-label">Días de duración</label>
                <select className="form-select" id="days_duration" name="days_duration" value={tour.days_duration} onChange={onUpdateChange} required>
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
                <select className="form-select" id="conductors" name="conductors" value={tour.conductors} onChange={onUpdateChange} required>
                  {drivers.map(user => (
                    <option key={user.id} value={user.id}>{user.fullnames}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="guides" className="form-label">Guías Turísticos</label>
                <select className="form-select" id="guides" name="guides" value={tour.guides} onChange={onUpdateChange} required>
                  {guides.map(user => (
                    <option key={user.id} value={user.id}>{user.fullnames}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="transport" className="form-label">Transporte</label>
                <select className="form-select" id="transport" name="transport" value={tour.transport} onChange={onUpdateChange} required>
                  {transports.map(transport => (
                    <option key={transport.id} value={transport.id}>{transport.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="hotel" className="form-label">Hoteles</label>
                <select className="form-select" id="hotel" name="hotel" value={tour.hotel} onChange={onUpdateChange} required>
                  {hotels.map(hotel => (
                    <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="restaurant" className="form-label">Restaurantes</label>
                <select className="form-select" id="restaurant" name="restaurant" value={tour.restaurant} onChange={onUpdateChange} required>
                  {restaurants.map(restaurant => (
                    <option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
                  ))}
                </select>
              </div>
              <div className="mb-3">
                <label htmlFor="sector" className="form-label">Sector / Lugar</label>
                <input type="text" className="form-control" id="sector" name="sector" value={tour.sector} onChange={onUpdateChange} required />
              </div>
              <div className="mb-3">
                <label htmlFor="start_date" className="form-label">Día que Empieza</label>
                <input type="date" className="form-control" id="start_date" name="start_date" value={tour.start_date} onChange={onUpdateChange} required />
              </div>
              <button type="submit" className="btn btn-primary">Actualizar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourModal;
