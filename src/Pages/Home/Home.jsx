import React from 'react'
import "./home.css";

import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";

const img1="camion.png";
const img2="dinero.png";
const img3="IconCasa.png";

const mueble1="mueble1.jpg";
const mueble2="mueble2.jpg";
const mueble3="mueble3.jpg";
const mueble4="mueble4.jpg";

function Home() {
  return (
    <div>
    {/* adjuntar link */}
    <div className="aviso"><p>Envios a más de 400 municipios en Colombia</p></div>

    <Header />
   <Navbar />

<div className="Hero">

    <div className="Hero__Content">

      {/* Carrusel de img */}
      <div className="slider-container">
      <ul>
      <li><img src={mueble1}/> </li>
      <li><img src={mueble3} /> </li>
      <li> <img src={mueble2} /></li>
      <li><img src={mueble4} /> </li>
      </ul>
</div>


      {/* Imagenes relacionadas */}
        <div className="Hero__Image">

          <div className='Hero__image-uno'>
          <p>Envios a casi 400 municipios en todo el terriotrio Colombiano</p>
          <img src={img1}/>
          </div>

          <div className='Hero__image-uno'>
          <p>Ahorra comprando los mejores productos para el hogar</p>
          <img src={img2}/>
          </div>

          <div className='Hero__image-uno'>
          <p>Todo lo que necesitas para la comodidad en tu casa</p>
          <img src={img3}/>
          </div>




          </div>
      {/* productos aleatorios */}
      

      {/* Imagen de Credito */}


    </div>


</div>

<Footer />

</div>

  )
}

export default Home
