# TripWise

E-commerce de paquetes turísticos, vuelos y experiencias de viaje desarrollado con React.

## Estructura y componentes
- **Navbar**: Barra de navegación principal con el logo de la tienda, categorías de productos (Vuelos, Paquetes, Alojamientos, Excursiones) y el acceso al carrito.
- **CartWidget**: Componente hijo dentro de la barra de navegación que muestra el ícono del carrito y un contador de productos.
- **ItemListContainer**: Componente contenedor que gestiona el estado con `useState` y obtiene el listado de productos con `useEffect`.
- **ItemList**: Componente encargado de mapear el listado de productos pasando la `key` correspondiente.
- **Item**: Tarjeta individual que renderiza imagen, nombre, precio y stock disponible de cada producto.
- **ItemDetailContainer**: Componente contenedor encargado de obtener un producto específico por ID mediante una promesa dinámica (`getProductById`).
- **ItemDetail**: Vista detallada del producto con imagen, nombre, categoría, descripción completa, precio, stock y selector de cantidad.
- **ItemCount**: Contador reutilizable que controla la cantidad seleccionada respetando los límites de `0` y el `stock` disponible.
- **asyncMock.js**: Simulación de datos local con `getProducts` y `getProductById` mediante promesas con retardo.

## Tecnologías utilizadas
- React
- Vite
- JavaScript
- CSS3

## Instalación y ejecución local
1. Clonar el repositorio:
   `git clone https://github.com/CriminalMambos/tripwise-react.git`
2. Ingresar a la carpeta del proyecto:
   `cd tripwise-react`
3. Instalar las dependencias:
   `npm install`
4. Ejecutar el servidor de desarrollo:
   `npm run dev`