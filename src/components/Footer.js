import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css'; 


function Footer() {
  return (
    <footer className="bg-dark text-white py-4"> {/* Pie de página con fondo oscuro y texto blanco */}
      <div className="container"> {/* Contenedor Bootstrap */}
        <div className="row"> {/* Dividimos el pie de página en secciones */}
          <div className="col-md-4"> {/* Sección para información general */}
            <h5>Acerca de Nosotros</h5>
            <p>
              Somos una empresa de turismo comprometida con brindar experiencias
              inolvidables. Con años de experiencia, ofrecemos servicios de
              calidad para viajeros de todo el mundo.
            </p>
          </div>

          <div className="col-md-4"> {/* Sección para enlaces rápidos */}
            <h5>Enlaces Rápidos</h5>
            <ul className="list-unstyled"> {/* Lista sin estilo de punto */}
              <li><a href="#tours" className="text-white">Tours</a></li> {/* Enlaces rápidos */}
              <li><a href="#contact" className="text-white">Contacto</a></li>
              <li><a href="#about" className="text-white">Acerca de</a></li>
            </ul>
          </div>

          <div className="col-md-4"> {/* Sección para íconos sociales */}
            <h5>Síguenos</h5>
            <ul className="list-unstyled"> {/* Lista para íconos sociales */}
              <li>
                <a href="https://facebook.com" className="text-white">
                  <i className="bi bi-facebook"></i> {/* Ícono de Facebook */}
                </a>
              </li>
              <li>
                <a href="https://twitter.com" className="text-white">
                  <i className="bi bi-twitter"></i> {/* Ícono de Twitter */}
                </a>
              </li>
              <li>
                <a href="https://instagram.com" className="text-white">
                  <i className="bi bi-instagram"></i> {/* Ícono de Instagram */}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4"> {/* Texto centrado para el copyright */}
          © 2024 Turismo Co. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
}

export default Footer;