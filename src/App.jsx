import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Layout from './components/Layout';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import Cart from './components/Cart';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={<ItemListContainer greeting="¡Bienvenido a TripWise! Descubrí tu próximo destino." />}
            />
            <Route path="category/:categoryId" element={<ItemListContainer />} />
            <Route path="item/:itemId" element={<ItemDetailContainer />} />
            <Route path="cart" element={<Cart />} />
            <Route path="*" element={<h2 className="error-text">404 - Página no encontrada</h2>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;