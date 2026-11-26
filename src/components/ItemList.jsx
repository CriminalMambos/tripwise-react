import Item from './Item';

function ItemList({ products }) {
  return (
    <div className="item-list">
      {products.map((product) => (
        <Item
          key={product.id}
          id={product.id}
          name={product.name}
          price={product.price}
          img={product.img}
          stock={product.stock}
        />
      ))}
    </div>
  );
}

export default ItemList;