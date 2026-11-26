import { Link, NavLink } from 'react-router-dom';
import CartWidget from './CartWidget';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="brand-link">
          <h2>TripWise</h2>
        </Link>
      </div>
      <nav className="navbar-links">
        <ul>
          <li>
            <NavLink to="/category/vuelos" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Vuelos
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/paquetes" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Paquetes
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/alojamientos" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Alojamientos
            </NavLink>
          </li>
          <li>
            <NavLink to="/category/excursiones" className={({ isActive }) => (isActive ? 'active-link' : '')}>
              Excursiones
            </NavLink>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
}

export default Navbar;