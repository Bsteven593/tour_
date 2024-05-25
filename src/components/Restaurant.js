// src/components/Restaurantes.js
import React from 'react';

function Restaurant() {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
          <input type="email" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Precio</label>
          <input type="password" className="form-control" id="exampleInputPassword3" />
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
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr key={1}>
            <th scope="row">1</th>
            <td>Cielo Azul</td>
            <td>$ 15</td>
          </tr>
          <tr key={2}>
            <th scope="row">2</th>
            <td>Roliston</td>
            <td>$ 45</td>
          </tr>
          <tr key={3}>
            <th scope="row">3</th>
            <td>Moran Rodeo</td>
            <td>$ 18</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Restaurant;
