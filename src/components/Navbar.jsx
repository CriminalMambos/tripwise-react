import CartWidget from './CartWidget';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-brand">
        <h2>TripWise</h2>
      </div>

      <nav className="navbar-links">
        <ul>
          <li><a href="#vuelos">Vuelos</a></li>
          <li><a href="#paquetes">Paquetes</a></li>
          <li><a href="#alojamientos">Alojamientos</a></li>
          <li><a href="#excursiones">Excursiones</a></li>
        </ul>
      </nav>

      <CartWidget />
    </header>
  );
}

export default Navbar;