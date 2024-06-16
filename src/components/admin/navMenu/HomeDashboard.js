// src/components/HomeDashboard.js
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener Bootstrap importado
import tourService from '../../../service/tourService'; // Asegúrate de que la ruta sea correcta

const HomeDashboard = () => {
  const [tours, setTours] = useState([]);
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    tourService.getAllTours().then(data => {
      setTours(data);
    }).catch(console.error);
  }, []);

  const toggleOpen = (id) => {
    setTours(tours.map(tour => 
      tour.id === id ? { ...tour, isOpen: !tour.isOpen } : tour
    ));
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        {tours.map(tour => (
          <div key={tour.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{tour.name}</h5>
                <hr />
                <p className="card-text"><strong>Descripción:</strong> {tour.description}</p>
                <p className="card-text"><strong>Precio:</strong> ${tour.price}</p>
                <p className="card-text"><strong>Días de duración:</strong> {tour.days_duration} días</p>
                <p className="card-text"><strong>Sector:</strong> {tour.sector}</p>
                <p className="card-text"><strong>Día que Empieza:</strong> {tour.start_date}</p>
                <p className="card-text"><strong>Estado:</strong> {tour.isOpen ? 'Abierto' : 'Cerrado'}</p>
                <div className="d-flex justify-content-between">
                  <button onClick={() => toggleOpen(tour.id)} className={`btn ${tour.isOpen ? 'btn-danger' : 'btn-success'}`}>
                    {tour.isOpen ? 'Cerrar' : 'Abrir'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeDashboard;