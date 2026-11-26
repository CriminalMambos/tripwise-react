import { useState, useEffect } from 'react';
import { getProductById } from '../mock/asyncMock';
import ItemDetail from './ItemDetail';

function ItemDetailContainer({ productId = '2' }) {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);

    getProductById(productId)
      .then((response) => {
        setProduct(response);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [productId]);

  return (
    <section className="item-detail-container">
      {loading && <p className="loading-text">Cargando detalle del viaje...</p>}
      {error && <p className="error-text">{error}</p>}
      {!loading && !error && product && <ItemDetail {...product} />}
    </section>
  );
}

export default ItemDetailContainer;