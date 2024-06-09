import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de tener Bootstrap importado

const HomeDashboard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-12 col-md-6 col-lg-4 mb-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Nombre del Tour</h5>
              <hr />
              <p className="card-text"><strong>Descripción:</strong> Una descripción detallada del tour.</p>
              <p className="card-text"><strong>Precio:</strong> $100</p>
              <p className="card-text"><strong>Días de duración:</strong> 3 días</p>
              <p className="card-text"><strong>Conductores:</strong> Juan Pérez, María López</p>
              <p className="card-text"><strong>Guías Turísticos:</strong> Ana Gómez, Carlos Díaz</p>
              <p className="card-text"><strong>Sector:</strong> Sector A</p>
              <p className="card-text"><strong>Día que Empieza:</strong> 2024-06-01</p>
              <p className="card-text"><strong>Estado:</strong> {isOpen ? 'Abierto' : 'Cerrado'}</p>
              <div className="d-flex justify-content-between">
                <button onClick={toggleOpen} className={`btn ${isOpen ? 'btn-danger' : 'btn-success'}`}>
                  {isOpen ? 'Cerrar' : 'Abrir'}
                </button>
                <a href="#" className="btn btn-primary">Ver más detalles</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDashboard;