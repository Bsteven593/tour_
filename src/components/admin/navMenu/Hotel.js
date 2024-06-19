import React, { useState, useEffect } from 'react';
import hotelService from '../../../service/hotelService';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/Home.css';
import Swal from 'sweetalert2';

export function Hotel() {
  const [hotels, setHotels] = useState([]);
  const [newHotel, setNewHotel] = useState({ name: '', address: '', phone: '', email: '' });
  const [editingHotel, setEditingHotel] = useState(null);

  useEffect(() => {
    hotelService.getAllHotels().then(data => {
      setHotels(data);
    }).catch(error => {
      console.error('Error al cargar hoteles:', error);
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
    if (!newHotel.name || !newHotel.address || !newHotel.phone || !newHotel.email) {
      Swal.fire('Error', 'Por favor, complete todos los campos.', 'error');
      return;
    }

    hotelService.createHotel(newHotel).then(data => {
      if (data.id) {
        setHotels([...hotels, data]);
        setNewHotel({ name: '', address: '', phone: '', email: '' });
        Swal.fire('Éxito', 'Hotel creado correctamente.', 'success').then(() => {
          window.location.reload();
        });
      } else {
        console.error('El hotel creado no tiene un ID:', data);
      }
    }).catch(error => {
      console.error('Error al crear el hotel:', error);
      Swal.fire('Error', 'Error al crear el hotel.', 'error');
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
    if (!editingHotel.name || !editingHotel.address || !editingHotel.phone || !editingHotel.email) {
      Swal.fire('Error', 'Por favor, complete todos los campos.', 'error');
      return;
    }

    hotelService.partialUpdateHotel(editingHotel.id, editingHotel).then(updatedHotel => {
      if (updatedHotel && updatedHotel.id) {
        setHotels(hotels.map(hotel => (hotel.id === updatedHotel.id ? updatedHotel : hotel)));
        setEditingHotel(null);
        Swal.fire('Éxito', 'Hotel actualizado correctamente.', 'success').then(() => {
          window.location.reload();
        });
      } else {
        console.error('El hotel actualizado no tiene un ID:', updatedHotel);
      }
    }).catch(error => {
      console.error('Error al actualizar el hotel:', error);
      Swal.fire('Error', 'Error al actualizar el hotel.', 'error');
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        hotelService.deleteHotelById(id).then(() => {
          setHotels(hotels.filter(hotel => hotel.id !== id));
          Swal.fire('Eliminado', 'Hotel eliminado correctamente.', 'success').then(() => {
            window.location.reload();
          });
        }).catch(error => {
          console.error('Error al eliminar el hotel:', error);
          Swal.fire('Error', 'Error al eliminar el hotel.', 'error');
        });
      }
    });
  };

  const handleEdit = (hotel) => {
    setEditingHotel(hotel);
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
              value={newHotel.name} 
              onChange={handleChange} 
              required 
              pattern="[a-zA-Z\s]+" 
              title="El nombre solo debe contener letras."
            />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="address" className="form-label">Dirección</label>
            <input 
              type="text" 
              className="form-control" 
              id="address" 
              name="address" 
              value={newHotel.address} 
              onChange={handleChange} 
              required 
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label htmlFor="phone" className="form-label">Teléfono</label>
            <input 
              type="text" 
              className="form-control" 
              id="phone" 
              name="phone" 
              value={newHotel.phone} 
              onChange={handleChange} 
              required 
              pattern="\d+" 
              title="El teléfono solo debe contener números."
            />
          </div>
          <div className="col-12 col-md-6">
            <label htmlFor="email" className="form-label">Correo</label>
            <input 
              type="email" 
              className="form-control" 
              id="email" 
              name="email" 
              value={newHotel.email} 
              onChange={handleChange} 
              required 
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
              title="Por favor, ingrese un correo electrónico válido."
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
              <th scope="col">Dirección</th>
              <th scope="col">Teléfono</th>
              <th scope="col">Correo</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody>
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
      </div>

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
                    <input 
                      type="text" 
                      className="form-control" 
                      id="name" 
                      name="name" 
                      value={editingHotel.name} 
                      onChange={handleUpdateChange} 
                      required 
                      pattern="[a-zA-Z\s]+" 
                      title="El nombre solo debe contener letras."
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">Dirección</label>
                    <input 
                      type="text" 
                      className="form-control" 
                      id="address" 
                      name="address" 
                      value={editingHotel.address} 
                      onChange={handleUpdateChange} 
                      required 
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Teléfono</label>
                    <input 
                      type="number" 
                      className="form-control" 
                      id="phone" 
                      name="phone" 
                      value={editingHotel.phone} 
                      onChange={handleUpdateChange} 
                      required 
                      pattern="\d+" 
                      title="El teléfono solo debe contener números."
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo</label>
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      name="email" 
                      value={editingHotel.email} 
                      onChange={handleUpdateChange} 
                      required 
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" 
                      title="Por favor, ingrese un correo electrónico válido."
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

export default Hotel;
