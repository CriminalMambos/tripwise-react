import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting="¡Bienvenido a TripWise! Descubrí tu próximo destino." />
    </>
  );
}

export default App;