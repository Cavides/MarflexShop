import React from 'react'
import "./header.css";
import Navbar from '../Navbar/Navbar';

const logo = "icoMarflex.png"
const carrito ="carrito.png";

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
        <button type="button" id="search">Buscar!</button>
        </div>
    
    {/* ingreso-registro-cuentas */}
    
    <div className ="header__cuenta">   
    <ul className="header__cuenta-menu">
        <li className="cuenta__item"><b>Registrarse </b></li>
        <li className="cuenta__item"> / </li>
        <li className="cuenta__item"><b>Ingresar</b></li>
        
    </ul>
    
    </div>
    

    {/* carrito */}
    
    <div className ="header__containerCarrito">
        <img src={carrito} className="header__carrito"/>
    </div>

    </div>

)
}

export default Header
