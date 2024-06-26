import React, { useState, useEffect } from 'react';
import hotelService from '../service/hotelService';

function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [newHotel, setNewHotel] = useState({ name: '', address: '', phone: '', email: '' });
  const [editingHotel, setEditingHotel] = useState(null);

  useEffect(() => {
    hotelService.getAllHotels().then(data => {
      setHotels(data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewHotel({
      ...newHotel,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    hotelService.createHotel(newHotel).then(data => {
      setHotels([...hotels, data]);
      setNewHotel({ name: '', address: '', phone: '', email: '' });
    }).catch(error => {
      console.error('Error al crear el hotel:', error);
    });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setEditingHotel({
      ...editingHotel,
      [name]: value
    });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    hotelService.partialUpdateHotel(editingHotel.id, editingHotel).then(updatedHotel => {
      setHotels(hotels.map(hotel => (hotel.id === updatedHotel.id ? updatedHotel : hotel)));
      setEditingHotel(null);
    }).catch(error => {
      console.error('Error al actualizar el hotel:', error);
    });
  };

  const handleDelete = (id) => {
    hotelService.deleteHotelById(id).then(() => {
      setHotels(hotels.filter(hotel => hotel.id !== id));
    }).catch(error => {
      console.error('Error al eliminar el hotel:', error);
    });
  };

  const handleEdit = (hotel) => {
    setEditingHotel(hotel);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" name="name" value={newHotel.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="address" className="form-label">Direccion</label>
          <input type="text" className="form-control" id="address" name="address" value={newHotel.address} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Telefono</label>
          <input type="text" className="form-control" id="phone" name="phone" value={newHotel.phone} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo</label>
          <input type="email" className="form-control" id="email" name="email" value={newHotel.email} onChange={handleChange} required />
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
            <th scope="col">Direccion</th>
            <th scope="col">Telefono</th>
            <th scope="col">Correo</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {hotels.map((hotel, index) => (
            <tr key={hotel.id}>
              <th scope="row">{index + 1}</th>
              <td>{hotel.name}</td>
              <td>{hotel.address}</td>
              <td>{hotel.phone}</td>
              <td>{hotel.email}</td>
              <td>
                <button className="btn btn-warning me-2" onClick={() => handleEdit(hotel)}>Actualizar</button>
                <button className="btn btn-danger" onClick={() => handleDelete(hotel.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingHotel && (
        <div className="modal show" style={{ display: 'block' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Actualizar Hotel</h5>
                <button type="button" className="btn-close" onClick={() => setEditingHotel(null)}></button>
              </div>
              <div className="modal-body">
                <form onSubmit={handleUpdateSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">Nombre</label>
                    <input type="text" className="form-control" id="name" name="name" value={editingHotel.name} onChange={handleUpdateChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Direccion</label>
                    <input type="text" className="form-control" id="address" name="address" value={editingHotel.address} onChange={handleUpdateChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Telefono</label>
                    <input type="text" className="form-control" id="phone" name="phone" value={editingHotel.phone} onChange={handleUpdateChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo</label>
                    <input type="email" className="form-control" id="email" name="email" value={editingHotel.email} onChange={handleUpdateChange} required />
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

export default Hotel;
