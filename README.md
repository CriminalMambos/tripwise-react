# TripWise

E-commerce de paquetes turísticos, vuelos y experiencias de viaje desarrollado con React.

## Estructura y componentes
- **Layout**: Componente contenedor de rutas anidadas (`Outlet`) que mantiene visible el `Navbar` en toda la navegación.
- **Navbar**: Barra de navegación principal con enlaces (`Link` y `NavLink`) al inicio y a las categorías (Vuelos, Paquetes, Alojamientos, Excursiones), además del carrito.
- **CartWidget**: Componente hijo dentro de la barra de navegación que muestra el ícono del carrito y un contador de productos.
- **ItemListContainer**: Contenedor que captura `categoryId` mediante `useParams` para mostrar todo el catálogo o filtrarlo por categoría.
- **ItemList**: Componente encargado de mapear el listado de productos pasando la `key` correspondiente.
- **Item**: Tarjeta individual que renderiza imagen, nombre, precio, stock disponible y enlace hacia `/item/:itemId`.
- **ItemDetailContainer**: Contenedor que captura `itemId` mediante `useParams` y obtiene el producto correspondiente con `getProductById`.
- **ItemDetail**: Vista detallada del producto con imagen, nombre, categoría, descripción completa, precio, stock y selector de cantidad.
- **ItemCount**: Contador reutilizable que controla la cantidad seleccionada respetando los límites de `0` y el `stock` disponible.
- **asyncMock.js**: Simulación de datos local con `getProducts`, `getProductsByCategory` y `getProductById` mediante promesas con retardo.

## Tecnologías utilizadas
- React
- React Router DOM
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