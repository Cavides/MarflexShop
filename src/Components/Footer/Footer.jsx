import React from "react";
import { Link } from "react-router-dom";

import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer">
        <div className="contain">
          <div className="col">
            <h1>Categorias</h1>
            <ul>
              <li>Comedores</li>
              <li>Salas</li>
            </ul>
          </div>
          <div className="col">
            <h1>Links de Interes</h1>
            <ul>
              <li><Link className= 'navBar__navLink' to='/about'>¿Quienes somos?</Link></li>
              <li><Link className= 'navBar__navLink' to='/politicadedatos'>Politica de datos</Link></li>
              <li><Link className= 'navBar__navLink' to='/terminosycondiciones'>Terminos y condiciones</Link></li>
              <li><Link className= 'navBar__navLink' to='/politicadedevolucion'>Politica de devolucion y garantia</Link></li>
              <li><Link className= 'navBar__navLink' to='/coberturaenvios'>Cobertura de envios</Link></li>
              <li><Link className= 'navBar__navLink' to='/faq'>PreguntasFrecuentes</Link></li>
            </ul>
          </div>
          <div className="col">
            <h1>Marflex</h1>
            <ul>
              <li>Horarios: desde las 8:00 a.m. hasta las 5:00 p.m</li>
              <li>contacto@Marflex.com</li>
              <li><a href="https://www.facebook.com/EmpresaMarflex" target="_blank">Facebook</a></li>
              <li>Bogotá D.C. Colombia</li>
              <li>Marflex S.A.S.</li>
            </ul>
          </div>
          <div className="clearfix"></div>
          <footer className="foot">
            <p>
              {" "}
              Copyright © 2022 - All rights Reserved - Designed by Mercury{" "}
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Footer;
