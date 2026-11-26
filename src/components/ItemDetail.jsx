import { useState } from 'react';
import ItemCount from './ItemCount';

function ItemDetail({ id, name, price, category, img, stock, description }) {
  const [addedQuantity, setAddedQuantity] = useState(0);

  const handleOnAdd = (quantity) => {
    setAddedQuantity(quantity);
    console.log(`Agregaste ${quantity} unidad(es) de "${name}" (ID: ${id})`);
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
        <ItemCount stock={stock} initial={1} onAdd={handleOnAdd} />
        {addedQuantity > 0 && (
          <p className="detail-added">
            Agregaste {addedQuantity} {addedQuantity === 1 ? 'lugar' : 'lugares'} al carrito.
          </p>
        )}
      </div>
    </article>
  );
}

export default ItemDetail;