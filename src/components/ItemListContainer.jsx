import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts, getProductsByCategory } from '../mock/asyncMock';
import ItemList from './ItemList';

function ItemListContainer({ greeting }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);
    const asyncFunc = categoryId ? getProductsByCategory : getProducts;

    asyncFunc(categoryId)
      .then((response) => {
        setProducts(response);
      })
      .catch((error) => {
        console.error('Error al cargar productos:', error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [categoryId]);

  return (
    <section className="item-list-container">
      <h1>{categoryId ? `Categoría: ${categoryId.toUpperCase()}` : greeting}</h1>
      {loading ? (
        <p className="loading-text">Cargando destinos y experiencias...</p>
      ) : (
        <ItemList products={products} />
      )}
    </section>
  );
}

export default ItemListContainer;