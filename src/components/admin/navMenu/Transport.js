import React, { useState, useEffect } from 'react';
import transportService from '../../../service/transportService';
import 'bootstrap/dist/css/bootstrap.min.css';

export function Transport() {
  const [transports, setTransports] = useState([]);
  const [newTransport, setNewTransport] = useState({ name: '', price: '', capacity: '' });
  const [editingTransport, setEditingTransport] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    transportService.getAllTransports().then(data => {
      setTransports(data);
    }).catch(error => {
      console.error('Error al cargar transportes:', error);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransport({
      ...newTransport,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newTransport.name || !newTransport.price || !newTransport.capacity) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const transportData = {
      ...newTransport,
      price: parseFloat(newTransport.price),
      capacity: parseInt(newTransport.capacity, 10)
    };

    try {
      const data = await transportService.createTransport(transportData);
      if (data.id) {
        setTransports([...transports, data]);
        setNewTransport({ name: '', price: '', capacity: '' });
      } else {
        console.error('El transporte creado no tiene un ID:', data);
      }
    } catch (error) {
      console.error('Error al crear el transporte:', error);
    }
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setEditingTransport({
      ...editingTransport,
      [name]: value
    });
  };

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    if (!editingTransport.name || !editingTransport.price || !editingTransport.capacity) {
      alert('Por favor, complete todos los campos.');
      return;
    }

    const transportData = {
      ...editingTransport,
      price: parseFloat(editingTransport.price),
      capacity: parseInt(editingTransport.capacity, 10)
    };

    try {
      const updatedTransport = await transportService.partialUpdateTransport(editingTransport.id, transportData);
      setTransports(transports.map(transport => (transport.id === updatedTransport.id ? updatedTransport : transport)));
      setEditingTransport(null);
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error al actualizar el transporte:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await transportService.deleteTransportById(id);
      setTransports(transports.filter(transport => transport.id !== id));
    } catch (error) {
      console.error('Error al eliminar el transporte:', error);
    }
  };

  const handleEdit = (transport) => {
    setEditingTransport(transport);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setEditingTransport(null);
    setIsModalOpen(false);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-4 mb-3">
            <label htmlFor="name" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={newTransport.name}
              onChange={handleChange}
              required
              pattern="[a-zA-Z\s]+" // Solo permite letras y espacios
              title="El nombre solo debe contener letras."
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="price" className="form-label">Precio</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={newTransport.price}
              onChange={handleChange}
              required
              min="0" // Valor mínimo de 0
              step="0.01" // Permite decimales
              title="El precio solo debe contener números positivos."
            />
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="capacity" className="form-label">Capacidad</label>
            <input
              type="number"
              className="form-control"
              id="capacity"
              name="capacity"
              value={newTransport.capacity}
              onChange={handleChange}
              required
              min="1" // Capacidad mínima de 1
              step="1" // Solo permite números enteros
              title="La capacidad solo debe contener números enteros positivos."
            />
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
              <th scope="col">Precio</th>
              <th scope="col">Capacidad</th>
              <th scope="col">Acciones</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            {transports.map((transport, index) => (
              <tr key={transport.id}>
                <th scope="row">{index + 1}</th>
                <td>{transport.name}</td>
                <td>{transport.price}</td>
                <td>{transport.capacity}</td>
                <td>
                  <button className="btn btn-warning me-2" onClick={() => handleEdit(transport)}>Actualizar</button>
                  <button className="btn btn-danger" onClick={() => handleDelete(transport.id)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {editingTransport && (
        <div className={`modal fade ${isModalOpen ? 'show' : ''}`} style={{ display: isModalOpen ? 'block' : 'none' }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Actualizar Transporte</h5>
                <button type="button" className="btn-close" onClick={closeModal}></button>
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
                      value={editingTransport.name}
                      onChange={handleUpdateChange}
                      required
                      pattern="[a-zA-Z\s]+" // Solo permite letras y espacios
                      title="El nombre solo debe contener letras."
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">Precio</label>
                    <input
                      type="number"
                      className="form-control"
                      id="price"
                      name="price"
                      value={editingTransport.price}
                      onChange={handleUpdateChange}
                      required
                      min="0" // Valor mínimo de 0
                      step="0.01" // Permite decimales
                      title="El precio solo debe contener números positivos."
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="capacity" className="form-label">Capacidad</label>
                    <input
                      type="number"
                      className="form-control"
                      id="capacity"
                      name="capacity"
                      value={editingTransport.capacity}
                      onChange={handleUpdateChange}
                      required
                      min="1" // Capacidad mínima de 1
                      step="1" // Solo permite números enteros
                      title="La capacidad solo debe contener números enteros positivos."
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

export default Transport;
