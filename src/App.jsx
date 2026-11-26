import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a TripWise! Descubrí tu próximo destino." />
      <ItemDetailContainer productId="2" />
    </>
  );
}

export default App;