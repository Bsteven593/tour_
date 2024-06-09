import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap CSS
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importar JavaScript de Bootstrap para funcionalidad
import '../styles/Home.css'; // Importar estilos personalizados
import NavbarComponent from './Navbar'; 
import Footer from './Footer'

function Home() {
  return (
    <div>
      <div>
      <NavbarComponent />
      </div>
    
      
      <div id="myCarousel" className="carousel slide" data-bs-interval="5000" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#myCarousel"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>

  <div className="carousel-inner">
    <div className="carousel-item active">
      <img
        src={require("../images/midad_mundo.jpg")}
        className="d-block w-100 "
        alt="Mitad del Mundo"
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>First Slide</h5>
        <p>Description for the first slide.</p>
      </div>
    </div>

    <div className="carousel-item "> {/* Cambia el efecto de transición */}
      <img
        src={require("../images/midad_mundo.jpg")}
        className="d-block w-100"
        alt="Second slide"
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>San Francisco</h5>
        <p>Iglesia</p>
      </div>
    </div>

    <div className="carousel-item">
      <img
        src={require("../images/midad_mundo.jpg")}
        className="d-block w-100"
        alt="Third slide"
      />
      <div className="carousel-caption d-none d-md-block">
        <h5>Panecillo</h5>
        <p>Virgen</p>
      </div>
    </div>
  </div>

  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#myCarousel"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>

  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#myCarousel"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>


    <div className="container my-4"> {/* Contenedor Bootstrap con margen superior e inferior */}
      <div className="row"> {/* Fila para dividir el contenido en columnas */}
        <div className="col-md-6"> {/* Columna que ocupa 6 de 12 partes en pantallas medianas o mayores */}
          <h2>Explora el Mundo</h2>
          <p>
            Descubre destinos emocionantes, culturas vibrantes y paisajes
            impresionantes. Desde las montañas hasta las playas, el mundo está
            lleno de maravillas para explorar.
          </p>
          <p>
            Planifica tu próximo viaje y sumérgete en nuevas experiencias y
            aventuras inolvidables.
          </p>
        </div>

        <div className="col-md-6"> {/* Columna para una imagen */}
          <img
            src="https://via.placeholder.com/700x300"
            alt="Paisaje de turismo"
            className="img-fluid" /* Imagen adaptable a diferentes tamaños */
          />
        </div>
      </div>
    </div>
    <div className="container my-4"> {/* Contenedor Bootstrap con margen superior e inferior */}
      <div className="row"> {/* Fila para dividir el contenido en columnas */}
        <div className="col-md-6"> {/* Columna que ocupa 6 de 12 partes en pantallas medianas o mayores */}
          <h2>Explora el Mundo 2</h2>
          <p>
            Descubre destinos emocionantes, culturas vibrantes y paisajes
            impresionantes. Desde las montañas hasta las playas, el mundo está
            lleno de maravillas para explorar.
          </p>
          <p>
            Planifica tu próximo viaje y sumérgete en nuevas experiencias y
            aventuras inolvidables.
          </p>
        </div>

        <div className="col-md-6"> {/* Columna para una imagen */}
          <img
            src="https://via.placeholder.com/700x300"
            alt="Paisaje de turismo"
            className="img-fluid" /* Imagen adaptable a diferentes tamaños */
          />
        </div>
      </div>
    </div>
    <div className="container my-4"> {/* Contenedor Bootstrap con margen superior e inferior */}
      <div className="row"> {/* Fila para dividir el contenido en columnas */}
        <div className="col-md-6"> {/* Columna que ocupa 6 de 12 partes en pantallas medianas o mayores */}
          <h2>Explora el Mundo</h2>
          <p>
            Descubre destinos emocionantes, culturas vibrantes y paisajes
            impresionantes. Desde las montañas hasta las playas, el mundo está
            lleno de maravillas para explorar.
          </p>
          <p>
            Planifica tu próximo viaje y sumérgete en nuevas experiencias y
            aventuras inolvidables.
          </p>
        </div>

        <div className="col-md-6"> {/* Columna para una imagen */}
          <img
            src="https://via.placeholder.com/700x300"
            alt="Paisaje de turismo"
            className="img-fluid" /* Imagen adaptable a diferentes tamaños */
          />
        </div>
      </div>
    </div>
    <div>
    <Footer />
    </div>
  </div>
 
  );
}
export default Home;
