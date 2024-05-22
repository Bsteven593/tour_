import React, { useState } from 'react';
import NavbarComponent from './Navbar';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('v-pills-home');

  const handleSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  // Función para manejar la salida de la sesión
  const handleLogout = () => {
    // Aquí puedes agregar la lógica para cerrar la sesión del usuario
    // Por ejemplo, borrar la sesión, redirigir a la página de inicio de sesión, etc.
    console.log('Cerrar sesión');
  };

  return (
    <div>
      <div>
        <NavbarComponent />
      </div>
      <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className={`nav-link ${activeTab === 'v-pills-home' && 'active'}`} id="v-pills-home-tab" onClick={() => handleSelect('v-pills-home')}>
            Home
          </button>
          <button className={`nav-link ${activeTab === 'v-pills-profile' && 'active'}`} id="v-pills-profile-tab" onClick={() => handleSelect('v-pills-profile')}>
            Holetes
          </button>
          <button className={`nav-link ${activeTab === 'v-pills-messages' && 'active'}`} id="v-pills-messages-tab" onClick={() => handleSelect('v-pills-messages')}>
            Transporte
          </button>
          <button className={`nav-link ${activeTab === 'v-pills-settings' && 'active'}`} id="v-pills-settings-tab" onClick={() => handleSelect('v-pills-settings')}>
            Restaurantes
          </button>
          <button className={`nav-link ${activeTab === 'v-pills-package' && 'active'}`} id="v-pills-package-tab" onClick={() => handleSelect('v-pills-package')}>
            Paquetes
          </button>
          {/* Botón para salir de la sesión */}
          <button className="nav-link" onClick={handleLogout}>
            Salir
          </button>
        </div>

        <div className="tab-content" id="v-pills-tabContent">
          <div className={`tab-pane fade ${activeTab === 'v-pills-home' && 'show active'}`} id="v-pills-home" role="tabpanel">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
          </div>

          <div className={`tab-pane fade ${activeTab === 'v-pills-profile' && 'show active'}`} id="v-pills-profile"
            role="tabpanel">

            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                <input type="email" className="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Direccion</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Telefono</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Correo</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
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
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>Azul</td>
                  <td>Pichincha - Quito</td>
                  <td>02315548</td>
                  <td>azul@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Maracana</td>
                  <td>Pichincha - Quito</td>
                  <td>02315548</td>
                  <td>azul@gmail.com</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                  <td>Moran</td>
                  <td>Pichincha - Quito</td>
                  <td>02315548</td>
                  <td>azul@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`tab-pane fade ${activeTab === 'v-pills-messages' && 'show active'}`} id="v-pills-messages"
            role="tabpanel">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                <input type="email" className="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Precio</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Capacidad</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
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
                </tr>
              </thead>
              <tbody className="table-group-divider">
                <tr>
                  <th scope="row">1</th>
                  <td>Bus</td>
                  <td>$ 1500</td>
                  <td>46</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Buseta</td>
                  <td>$ 900</td>
                  <td>45</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                  <td>Bus</td>
                  <td>$ 5500</td>
                  <td>35</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`tab-pane fade ${activeTab === 'v-pills-settings' && 'show active'}`} id="v-pills-settings"
            role="tabpanel">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                <input type="email" className="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Precio</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
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
                <tr>
                  <th scope="row">1</th>
                  <td>Cielo Azul</td>
                  <td>$ 15</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Roliston</td>
                  <td>$ 45</td>
                </tr>
                <tr>
                <th scope="row">3</th>
                  <td>Moran Rodeo</td>
                  <td>$ 18</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className={`tab-pane fade ${activeTab === 'v-pills-package' && 'show active'}`} id="v-pills-package"
            role="tabpanel">
            <form>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                <input type="email" className="form-control" id="exampleInputEmail1"
                  aria-describedby="emailHelp" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Descripcion</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Precio</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Dias de duraciòn</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Sector / Lugar</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Dia que Empieza</label>
                <input type="password" className="form-control" id="exampleInputPassword1" />
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
                <tr>
                  <th scope="row">1</th>
                  <td>Tour Basico</td>
                  <td>El paquete incluye bebida y desayuno</td>
                  <td>$ 55</td>
                  <td>1</td>
                  <td>Centro Historico</td>
                  <td>Lunes</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Tour Mediano</td>
                  <td>El pquete contiene desayuno y almuero</td>
                  <td>$ 70</td>
                  <td>2</td>
                  <td>Centro historico y Norte</td>
                  <td>Miercoles y Jueves</td>
                </tr>
                <tr>
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
