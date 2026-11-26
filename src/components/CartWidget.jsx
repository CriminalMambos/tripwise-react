import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

function CartWidget() {
  const { totalQuantity } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget">
      <span>🛒</span>
      {totalQuantity > 0 && <span className="cart-badge">{totalQuantity}</span>}
    </Link>
  );
}

export default CartWidget;
