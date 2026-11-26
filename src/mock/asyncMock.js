const products = [
  {
    id: '1',
    name: 'Vuelo Directo Montevideo - Río de Janeiro',
    price: 420,
    category: 'vuelos',
    img: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=600&q=80',
    stock: 12,
    description: 'Pasaje ida y vuelta con equipaje de mano incluido.'
  },
  {
    id: '2',
    name: 'Paquete All Inclusive Buzios 7 Noches',
    price: 1150,
    category: 'paquetes',
    img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    stock: 6,
    description: 'Vuelos, traslados y estadía frente al mar con pensión completa.'
  },
  {
    id: '3',
    name: 'Hotel Boutique Frente a Copacabana',
    price: 180,
    category: 'alojamientos',
    img: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80',
    stock: 8,
    description: 'Habitación doble superior con desayuno buffet y piscina.'
  },
  {
    id: '4',
    name: 'Excursión Pan de Azúcar y Cristo Redentor',
    price: 95,
    category: 'excursiones',
    img: 'https://images.unsplash.com/photo-1518639192441-8fce0a366e2e?auto=format&fit=crop&w=600&q=80',
    stock: 15,
    description: 'Tour guiado de día completo con entradas incluidas.'
  }
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 2000);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const product = products.find((prod) => prod.id === productId);
      if (product) {
        resolve(product);
      } else {
        reject('No se encontró el producto solicitado');
      }
    }, 2000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1500);
  });
};