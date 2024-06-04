import React, { useState, useEffect } from 'react';
import transportService from '../../../service/transportService';

function Transport() {
  const [transports, setTransports] = useState([]);
  const [newTransport, setNewTransport] = useState({ name: '', price: '', capacity: '' });
  const [editingTransport, setEditingTransport] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para controlar la visibilidad del modal

  useEffect(() => {
    transportService.getAllTransports().then(data => {
      setTransports(data);
    });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTransport({
      ...newTransport,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    transportService.createTransport(newTransport).then(data => {
      setTransports([...transports, data]);
      setNewTransport({ name: '', price: '', capacity: '' });
    }).catch(error => {
      console.error('Error al crear el transporte:', error);
    });
  };

  const handleUpdateChange = (e) => {
    const { name, value } = e.target;
    setEditingTransport({
      ...editingTransport,
      [name]: value
    });
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const id = editingTransport.id; // Obtenemos el ID del transporte a actualizar
    transportService.partialUpdateTransport(id, editingTransport).then(updatedTransport => {
      setTransports(transports.map(transport => (transport.id === updatedTransport.id ? updatedTransport : transport)));
      setEditingTransport(null);
      setIsModalOpen(false); // Cerramos el modal después de actualizar
    }).catch(error => {
      console.error('Error al actualizar el transporte:', error);
    });
  };

  const handleDelete = (id) => {
    transportService.deleteTransportById(id).then(() => {
      setTransports(transports.filter(transport => transport.id !== id));
    }).catch(error => {
      console.error('Error al eliminar el transporte:', error);
    });
  };

  const handleEdit = (transport) => {
    setEditingTransport(transport);
    setIsModalOpen(true); // Abrimos el modal al editar
  };

  const closeModal = () => {
    setEditingTransport(null);
    setIsModalOpen(false); // Cerramos el modal
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input type="text" className="form-control" id="name" name="name" value={newTransport.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">Precio</label>
          <input type="text" className="form-control" id="price" name="price" value={newTransport.price} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label htmlFor="capacity" className="form-label">Capacidad</label>
          <input type="text" className="form-control" id="capacity" name="capacity" value={newTransport.capacity} onChange={handleChange} required />
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
      {/* Modal para actualizar */}
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
                    <input type="text" className="form-control" id="name" name="name" value={editingTransport.name} onChange={handleUpdateChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">Precio</label>
                    <input type="text" className="form-control" id="price" name="price" value={editingTransport.price} onChange={handleUpdateChange} required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="capacity" className="form-label">Capacidad</label>
                    <input type="text" className="form-control" id="capacity" name="capacity" value={editingTransport.capacity} onChange={handleUpdateChange} required />
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
