// src/components/Dashboard.js
import React, { useState } from 'react';
import NavbarComponent from './Navbar';
import HomeDashboard from '../components/HomeDashboard';
import Hotel from '../components/Hotel';
import Restaurant from '../components/Restaurant';
import Transport from '../components/Transport';
import Tour from '../components/Tour';

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
      <div className="d-flex align-items-start">
        <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <button className={`nav-link ${activeTab === 'v-pills-home' && 'active'}`} id="v-pills-home-tab" onClick={() => handleSelect('v-pills-home')}>
            Home
          </button>
          <button className={`nav-link ${activeTab === 'v-pills-profile' && 'active'}`} id="v-pills-profile-tab" onClick={() => handleSelect('v-pills-profile')}>
            Hoteles
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
          <button className="nav-link" onClick={handleLogout}>
            Salir
          </button>
        </div>

        <div className="tab-content" id="v-pills-tabContent">
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
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
