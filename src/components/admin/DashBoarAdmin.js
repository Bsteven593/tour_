
// src/components/Dashboard.js
import React, { useState } from 'react';
import NavbarComponent from '../Navbar';
import HomeDashboard from './navMenu/HomeDashboard';
import Hotel from './navMenu/Hotel';
import Restaurant from './navMenu/Restaurant';
import Transport from './navMenu/Transport';
import Tour from './navMenu/Tour';
import UserRol from './navMenu/UserRol';
import '../../styles/Dashboard.css';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('v-pills-home');

  const handleSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  const handleLogout = () => {
    console.log('Cerrar sesión');
  };

  return (
    <div>
      <div>
        <NavbarComponent />
      </div>
      <div className="container-fluid">
        <div className="row" style={{ backgroundColor: '#e0f7fa' }}>
          <div className="col-12 col-md-3 nav-pills-container">
            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
              <button
                className={`nav-link ${activeTab === 'v-pills-home' && 'active'}`}
                id="v-pills-home-tab"
                onClick={() => handleSelect('v-pills-home')}
                style={activeTab === 'v-pills-home' ? { backgroundColor: '#00bcd4', color: 'black' } : {}}
              >
                Vistas
              </button>
              <button
                className={`nav-link ${activeTab === 'v-pills-profile' && 'active'}`}
                id="v-pills-profile-tab"
                onClick={() => handleSelect('v-pills-profile')}
                style={activeTab === 'v-pills-profile' ? { backgroundColor: '#00bcd4', color: 'black' } : {}}
              >
                Hoteles
              </button>
              <button
                className={`nav-link ${activeTab === 'v-pills-messages' && 'active'}`}
                id="v-pills-messages-tab"
                onClick={() => handleSelect('v-pills-messages')}
                style={activeTab === 'v-pills-messages' ? { backgroundColor: '#00bcd4', color: 'black' } : {}}
              >
                Transporte
              </button>
              <button
                className={`nav-link ${activeTab === 'v-pills-settings' && 'active'}`}
                id="v-pills-settings-tab"
                onClick={() => handleSelect('v-pills-settings')}
                style={activeTab === 'v-pills-settings' ? { backgroundColor: '#00bcd4', color: 'black' } : {}}
              >
                Restaurantes
              </button>
              <button
                className={`nav-link ${activeTab === 'v-pills-package' && 'active'}`}
                id="v-pills-package-tab"
                onClick={() => handleSelect('v-pills-package')}
                style={activeTab === 'v-pills-package' ? { backgroundColor: '#00bcd4', color: 'black' } : {}}
              >
                Paquetes
              </button>
              <button
                className={`nav-link ${activeTab === 'v-pills-roles' && 'active'}`}
                id="v-pills-roles-tab"
                onClick={() => handleSelect('v-pills-roles')}
                style={activeTab === 'v-pills-roles' ? { backgroundColor: '#00bcd4', color: 'black' } : {}}
              >
                Roles
              </button>
              <button className="nav-link" onClick={handleLogout} style={{ backgroundColor: '#ff5252', color: 'black' }}>
                Salir
              </button>
            </div>
          </div>

          <div className="col-12 col-md-9 tab-content" id="v-pills-tabContent" style={{ flexGrow: 1 }}>
            <div className={`tab-pane fade ${activeTab === 'v-pills-home' && 'show active'}`} id="v-pills-home" role="tabpanel">
              <HomeDashboard />
            </div>

            <div className={`tab-pane fade ${activeTab === 'v-pills-profile' && 'show active'}`} id="v-pills-profile" role="tabpanel">
              <Hotel />
            </div>

            <div className={`tab-pane fade ${activeTab === 'v-pills-messages' && 'show active'}`} id="v-pills-messages" role="tabpanel">
              <Transport />
            </div>

            <div className={`tab-pane fade ${activeTab === 'v-pills-settings' && 'show active'}`} id="v-pills-settings" role="tabpanel">
              <Restaurant />
            </div>

            <div className={`tab-pane fade ${activeTab === 'v-pills-package' && 'show active'}`} id="v-pills-package" role="tabpanel">
              <Tour />
            </div>

            <div className={`tab-pane fade ${activeTab === 'v-pills-roles' && 'show active'}`} id="v-pills-roles" role="tabpanel">
              <UserRol />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

