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
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Direccion</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Telefono</label>
                        <input type="password" className="form-control" id="exampleInputPassword2"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Correo</label>
                        <input type="password" className="form-control" id="exampleInputPassword3"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>

            </div>

            <div className={`tab-pane fade ${activeTab === 'v-pills-messages' && 'show active'}`} id="v-pills-messages"
                 role="tabpanel">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput2"
                           placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea2" rows="3"></textarea>
                </div>
            </div>

            <div className={`tab-pane fade ${activeTab === 'v-pills-settings' && 'show active'}`} id="v-pills-settings"
                 role="tabpanel">
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                        <input type="email" className="form-control" id="exampleInputEmail2"
                               aria-describedby="emailHelp"/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Precio</label>
                        <input type="password" className="form-control" id="exampleInputPassword4"/>
                    </div>
                    <button type="submit" className="btn btn-primary">Enviar</button>
                </form>
            </div>

            <div className={`tab-pane fade ${activeTab === 'v-pills-package' && 'show active'}`} id="v-pills-package"
                 role="tabpanel">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleFormControlInput4"
                           placeholder="name@example.com"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
