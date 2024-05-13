import React, { useState } from 'react';
import NavbarComponent from './Navbar'; 
function Dashboard() {
  const [activeTab, setActiveTab] = useState('v-pills-home');

  const handleSelect = (selectedTab) => {
    setActiveTab(selectedTab);
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
          Profile
        </button>
       
        <button className={`nav-link ${activeTab === 'v-pills-messages' && 'active'}`} id="v-pills-messages-tab" onClick={() => handleSelect('v-pills-messages')}>
          Messages
        </button>
        <button className={`nav-link ${activeTab === 'v-pills-settings' && 'active'}`} id="v-pills-settings-tab" onClick={() => handleSelect('v-pills-settings')}>
          Settings
        </button>
      </div>
      <div className="tab-content" id="v-pills-tabContent">
        <div className={`tab-pane fade ${activeTab === 'v-pills-home' && 'show active'}`} id="v-pills-home" role="tabpanel">
          ..................................................................................................
        </div>
        <div className={`tab-pane fade ${activeTab === 'v-pills-profile' && 'show active'}`} id="v-pills-profile" role="tabpanel">
          ...
        </div>
        
        <div className={`tab-pane fade ${activeTab === 'v-pills-messages' && 'show active'}`} id="v-pills-messages" role="tabpanel">
          .................................................................          .................................................................
          .................................................................

        </div>
        <div className={`tab-pane fade ${activeTab === 'v-pills-settings' && 'show active'}`} id="v-pills-settings" role="tabpanel">
          ...
        </div>
      </div>
    </div>
    </div>
  );
}

export default Dashboard;
