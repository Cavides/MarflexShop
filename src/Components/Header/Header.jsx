import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Navbar from "../Navbar/Navbar";

const logo = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626272/imagenes/icoMarflex_zibr1l.png";
const carrito = "https://res.cloudinary.com/ds9rxxr5l/image/upload/v1661626272/imagenes/carrito_okck8g.png";

function Header() {
  return (
    <div className="header">
      {/* logo */}

      <div className="header__containerLogo">
        <img src={logo} className="header__logo" alt="" />
      </div>

      {/* barra busqueda */}

      <div className="header__search-field" id="searchform">
        <input type="text" id="searchterm" placeholder="¿Qué estas buscando?" />
        <button type="button" id="search">
          Buscar!
        </button>
      </div>

      {/* ingreso-registro-cuentas */}

      <div className="header__cuenta">
        <ul className="header__cuenta-menu">
          <li className="cuenta__item">
            <b><Link className= 'navBar__navLink' to='/register'>Registrarse</Link> </b>
          </li>
          <li className="cuenta__item"> / </li>
          <li className="cuenta__item">
            <b><Link className= 'navBar__navLink' to='/login'>Ingresar</Link> </b>
          </li>
        </ul>
      </div>

      {/* carrito */}

      <div className="header__containerCarrito">
        <img src={carrito} className="header__carrito" />
      </div>
    </div>
  );
}

export default Header;
