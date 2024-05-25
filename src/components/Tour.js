// src/components/Paquetes.js
import React from 'react';

function Tour() {
  return (
    <div>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
          <input type="email" className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Descripcion</label>
          <input type="password" className="form-control" id="exampleInputPassword4" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Precio</label>
          <input type="password" className="form-control" id="exampleInputPassword5" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Dias de duraciòn</label>
          <input type="password" className="form-control" id="exampleInputPassword6" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Sector / Lugar</label>
          <input type="password" className="form-control" id="exampleInputPassword7" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Dia que Empieza</label>
          <input type="password" className="form-control" id="exampleInputPassword8" />
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
            <th scope="col">Descripcion</th>
            <th scope="col">Precio</th>
            <th scope="col">Dias de duraciòn</th>
            <th scope="col">Sector / Lugar</th>
            <th scope="col">Dia que Empieza</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr key={1}>
            <th scope="row">1</th>
            <td>Tour Basico</td>
            <td>El paquete incluye bebida y desayuno</td>
            <td>$ 55</td>
            <td>1</td>
            <td>Centro Historico</td>
            <td>Lunes</td>
          </tr>
          <tr key={2}>
            <th scope="row">2</th>
            <td>Tour Mediano</td>
            <td>El paquete contiene desayuno y almuero</td>
            <td>$ 70</td>
            <td>2</td>
            <td>Centro historico y Norte</td>
            <td>Miercoles y Jueves</td>
          </tr>
          <tr key={3}>
            <th scope="row">3</th>
            <td>Tour Premium</td>
            <td>Incluye 3 comidas para cada dia</td>
            <td>$ 150</td>
            <td>5</td>
            <td>Centro Historico, Sur, Norte y el Valle</td>
            <td>Viernes, Sabado, Domingo, Lunes</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Tour;
