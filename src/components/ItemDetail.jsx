import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import ItemCount from './ItemCount';

function ItemDetail({ id, name, price, category, img, stock, description }) {
  const [addedQuantity, setAddedQuantity] = useState(0);
  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setAddedQuantity(quantity);
    const item = { id, name, price, img };
    addItem(item, quantity);
  };

  return (
    <article className="item-detail">
      <img src={img} alt={name} className="detail-img" />
      <div className="detail-info">
        <span className="detail-category">{category}</span>
        <h2>{name}</h2>
        <p className="detail-description">{description}</p>
        <p className="detail-price">USD {price}</p>
        <p className="detail-stock">Stock disponible: {stock} lugares</p>

        {addedQuantity > 0 ? (
          <div className="detail-actions">
            <p className="detail-added">
              Agregaste {addedQuantity} {addedQuantity === 1 ? 'lugar' : 'lugares'} al carrito.
            </p>
            <Link to="/cart" className="item-btn">
              Terminar mi compra
            </Link>
          </div>
        ) : (
          <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
        )}
      </div>
    </article>
  );
}

export default ItemDetail;