function Item({ id, name, price, img, stock }) {
  return (
    <article className="item-card">
      <img src={img} alt={name} className="item-img" />
      <div className="item-info">
        <h3>{name}</h3>
        <p className="item-price">USD {price}</p>
        <p className="item-stock">Disponibles: {stock}</p>
        <button className="item-btn">Ver detalle</button>
      </div>
    </article>
  );
}

export default Item;