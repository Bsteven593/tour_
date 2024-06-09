
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importar JavaScript de Bootstrap para funcionalidad
import '../styles/Home.css'; // Importar estilos personalizados
import '../styles/Img.css'


function NavbarComponent() {
  return (
    <nav className="navbar navbar-expand-md navbar-blue">
      <div className="container">
        <a className="navbar-brand mx-auto" href="/">
          <img
            src={require("../images/logoTours-pro.png")}
            alt="Logo"
            className="img-logo img-fluid"
          />
        </a>
        
      </div>
    </nav>
  );
}


export default NavbarComponent;