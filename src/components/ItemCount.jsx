import { useState } from 'react';

function ItemCount({ stock, initial = 1, onAdd }) {
  const [quantity, setQuantity] = useState(stock > 0 ? initial : 0);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-count">
      <div className="count-controls">
        <button onClick={decrement} disabled={quantity <= 0}>-</button>
        <span>{quantity}</span>
        <button onClick={increment} disabled={quantity >= stock}>+</button>
      </div>
      <button
        className="item-btn"
        onClick={() => onAdd && onAdd(quantity)}
        disabled={stock === 0 || quantity === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

export default ItemCount;