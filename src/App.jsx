import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<ItemListContainer greeting="¡Bienvenido a TripWise! Descubrí tu próximo destino." />}
          />
          <Route path="category/:categoryId" element={<ItemListContainer />} />
          <Route path="item/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h2 className="error-text">404 - Página no encontrada</h2>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;