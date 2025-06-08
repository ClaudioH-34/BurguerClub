import './Navbar.css';
import logo from '../../assets/BU.png';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      
      <ul className="nav-list">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#comprar">Comprar</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
