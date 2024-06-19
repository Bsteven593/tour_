import React, { useState, useEffect } from 'react';
import tourService from '../../../service/tourService';
import transportService from '../../../service/transportService';
import hotelService from '../../../service/hotelService';
import restaurantService from '../../../service/restaurantService';
import userService from '../../../service/userService';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../styles/Home.css';
import TourModal from './TourModal';
import Swal from 'sweetalert2';

const Tour = () => {
  const [users, setUsers] = useState([]);
  const [tours, setTours] = useState([]);
  const [transports, setTransports] = useState([]);
  const [hotels, setHotels] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [newTour, setNewTour] = useState({ name: '', description: '', price: '', days_duration: '1', sector: '', start_date: '', conductors: '', guides: '', transport: '', hotel: '', restaurant: '' });
  const [editingTour, setEditingTour] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  useEffect(() => {
    Promise.all([
      tourService.getAllTours(),
      transportService.getAllTransports(),
      hotelService.getAllHotels(),
      restaurantService.getAllRestaurants(),
      userService.getAllUsers()
    ]).then(([tours, transports, hotels, restaurants, users]) => {
      setTours(tours);
      setTransports(transports);
      setHotels(hotels);
      setRestaurants(restaurants);
      setUsers(users);
    }).catch(error => {
      console.error('Error al cargar datos:', error);
      Swal.fire('Error', 'Error al cargar los datos. Inténtalo más tarde.', 'error');
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTour(prevTour => ({ ...prevTour, [name]: value }));
  };

  const handleSelectChange = (e) => {
    const { name, value } = e.target;
    setNewTour(prevTour => ({ ...prevTour, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const tourData = {
      ...newTour,
      conductors: newTour.conductors ? [{ id: parseInt(newTour.conductors) }] : [],
      guides: newTour.guides ? [{ id: parseInt(newTour.guides) }] : [],
      transport: { id: parseInt(newTour.transport) },
      hotel: { id: parseInt(newTour.hotel) },
      restaurant: { id: parseInt(newTour.restaurant) }
    };

    tourService.createTour(tourData).then(data => {
      setTours(prevTours => [...prevTours, data]);
      setNewTour({ name: '', description: '', price: '', days_duration: '1', sector: '', start_date: '', conductors: '', guides: '', transport: '', hotel: '', restaurant: '' });
      Swal.fire('Éxito', 'Tour creado correctamente.', 'success');
      window.location.reload();
    }).catch(error => {
      console.error('Error al crear el tour:', error);
      Swal.fire('Error', 'Error al crear el tour. Inténtalo más tarde.', 'error');
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'No podrás revertir esto.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(result => {
      if (result.isConfirmed) {
        tourService.deleteTourById(id).then(() => {
          setTours(prevTours => prevTours.filter(tour => tour.id !== id));
          Swal.fire('Eliminado', 'Tour eliminado correctamente.', 'success');
        }).catch(error => {
          console.error('Error al eliminar el tour:', error);
          Swal.fire('Error', 'Error al eliminar el tour. Inténtalo más tarde.', 'error');
        });
      }
    });
  };

  const handleEdit = (tour) => {
    setEditingTour(tour);
    setShowUpdateModal(true);
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setEditingTour(prevTour => ({ ...prevTour, [name]: value }));
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const updatedTourData = {
      ...editingTour,
      conductors: editingTour.conductors ? [{ id: parseInt(editingTour.conductors) }] : [],
      guides: editingTour.guides ? [{ id: parseInt(editingTour.guides) }] : [],
      transport: { id: parseInt(editingTour.transport) },
      hotel: { id: parseInt(editingTour.hotel) },
      restaurant: { id: parseInt(editingTour.restaurant) }
    };

    tourService.partialUpdateTour(editingTour.id, updatedTourData).then(updatedTour => {
      setTours(prevTours => prevTours.map(tour => tour.id === updatedTour.id ? updatedTour : tour));
      setEditingTour(null);
      setShowUpdateModal(false);
      Swal.fire('Éxito', 'Tour actualizado correctamente.', 'success');
    }).catch(error => {
      console.error('Error al actualizar el tour:', error);
      Swal.fire('Error', 'Error al actualizar el tour. Inténtalo más tarde.', 'error');
    });
  };

  const drivers = users.filter(user => user.role === 'DRIVER');
  const guides = users.filter(user => user.role === 'GUIDE');


  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          {['name', 'description', 'price', 'sector'].map(field => (
            <div key={field} className="col-12 col-md-6">
              <label htmlFor={field} className="form-label">{field === 'price' ? 'Precio' : field.charAt(0).toUpperCase() + field.slice(1)}</label>
              <input type={field === 'price' ? 'number' : 'text'} className="form-control" id={field} name={field} value={newTour[field]} onChange={handleChange} required />
            </div>
          ))}
          <div className="col-12 col-md-6">
            <label htmlFor="days_duration" className="form-label">Días de duración</label>
            <select className="form-select" id="days_duration" name="days_duration" value={newTour.days_duration} onChange={handleChange} required>
              {[1, 3, 7, 10, 15, 20, 25, 30].map(day => (
                <option key={day} value={day}>{day} día{day > 1 && 's'}</option>
              ))}
            </select>
          </div>
          {['conductors', 'guides', 'transport', 'hotel', 'restaurant'].map(field => (
            <div key={field} className="col-12 col-md-6">
              <label htmlFor={field} className="form-label">{field === 'conductors' ? 'Conductores' : field === 'guides' ? 'Guías' : field === 'transport' ? 'Transporte' : field === 'hotel' ? 'Hotel' : 'Restaurante'}</label>
              <select className="form-select" id={field} name={field} value={newTour[field] || ''} onChange={handleSelectChange} required>
                <option value="">{`Seleccionar ${field === 'conductors' ? 'conductor' : field === 'guides' ? 'guía' : field === 'transport' ? 'transporte' : field === 'hotel' ? 'hotel' : 'restaurante'}`}</option>
                {field === 'conductors' && drivers.map(user => (
                  <option key={user.id} value={user.id}>{user.fullnames}</option>
                ))}
                {field === 'guides' && guides.map(user => (
                  <option key={user.id} value={user.id}>{user.fullnames}</option>
                ))}
                {field === 'transport' && transports.map(transport => (
                  <option key={transport.id} value={transport.id}>{transport.name}</option>
                ))}
                {field === 'hotel' && hotels.map(hotel => (
                  <option key={hotel.id} value={hotel.id}>{hotel.name}</option>
                ))}
                {field === 'restaurant' && restaurants.map(restaurant => (
                  <option key={restaurant.id} value={restaurant.id}>{restaurant.name}</option>
                ))}
              </select>
            </div>
          ))}
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
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              {['#', 'Nombre', 'Descripción', 'Precio', 'Días de duración', 'Sector / Lugar', 'Día que Empieza', 'Acciones'].map(header => (
                <th key={header} scope="col">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tours.map((tour, index) => (
              <tr key={tour.id}>
                <th scope="row">{index + 1}</th>
                {['name', 'description', 'price', 'days_duration', 'sector', 'start_date'].map(field => (
                  <td key={field}>{tour[field]}</td>
                ))}
                <td>
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(tour)}>Actualizar</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(tour.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showUpdateModal && editingTour && (
        <TourModal
          tour={editingTour}
          drivers={drivers}
          guides={guides}
          transports={transports}
          hotels={hotels}
          restaurants={restaurants}
          onUpdateChange={handleUpdateChange}
          onUpdateSubmit={handleUpdateSubmit}
          onClose={() => setShowUpdateModal(false)}
        />
      )}
    </div>
  );
};

export default Tour;
