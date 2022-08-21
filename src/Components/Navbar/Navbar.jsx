
import "./navbar.css";

const NavBar = () => {
  return(
    <div className="nav">
      <ul className="nav__menu">
        <li className="nav__item">Home</li>
        <li className="nav__item">Productos</li>
        <li className="nav__item">FAQ</li>
        <li className="nav__item">Contacto</li>
        <li className="nav__item">About</li>
      </ul>
    </div>
  )
}

export default NavBar;
