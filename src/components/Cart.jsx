import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function Cart() {
  const { cart, removeItem, clear, totalPrice } = useContext(CartContext);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  const handleCheckout = () => {
    setOrderConfirmed(true);
    clear();
  };

  if (orderConfirmed) {
    return (
      <section className="cart-container empty-cart">
        <h2>¡Reserva confirmada en TripWise!</h2>
        <p>Gracias por elegirnos. En breve recibirás los detalles de tu viaje por correo.</p>
        <Link to="/" className="item-btn">
          Volver al catálogo
        </Link>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="cart-container empty-cart">
        <h2>Tu carrito está vacío</h2>
        <p>Todavía no agregaste vuelos, paquetes ni excursiones.</p>
        <Link to="/" className="item-btn">
          Explorar destinos
        </Link>
      </section>
    );
  }

  return (
    <section className="cart-container">
      <h1>Tu carrito de viaje</h1>
      <div className="cart-list">
        {cart.map((item) => (
          <article key={item.id} className="cart-item">
            <img src={item.img} alt={item.name} className="cart-item-img" />
            <div className="cart-item-info">
              <h3>{item.name}</h3>
              <p>Cantidad: {item.quantity}</p>
              <p>Precio unitario: USD {item.price}</p>
              <p className="cart-item-subtotal">Subtotal: USD {item.price * item.quantity}</p>
            </div>
            <button
              className="remove-btn"
              onClick={() => removeItem(item.id)}
            >
              Eliminar
            </button>
          </article>
        ))}
      </div>

      <div className="cart-summary">
        <h2>Total: USD {totalPrice}</h2>
        <div className="cart-actions">
          <button className="clear-btn" onClick={clear}>
            Vaciar carrito
          </button>
          <button className="item-btn" onClick={handleCheckout}>
            Finalizar compra
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cart;