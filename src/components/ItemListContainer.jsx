import { useState, useEffect } from 'react';
import { getProducts } from '../mock/asyncMock';
import ItemList from './ItemList';

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="item-list-container">
      <h1>{greeting}</h1>
      {loading ? (
        <p className="loading-text">Cargando destinos y experiencias...</p>
      ) : (
        <ItemList products={products} />
      )}
    </section>
  );
}

export default ItemListContainer;