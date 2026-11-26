# TripWise

E-commerce de paquetes turísticos, vuelos y experiencias de viaje desarrollado con React.

## Estructura y componentes
- **CartContext (`src/context/CartContext.jsx`)**: Contexto global que administra el estado del carrito de compras (`cart`) mediante funciones inmutables (`addItem`, `removeItem`, `clear`, `isInCart`) y calcula el total de unidades y el importe total.
- **Layout**: Componente contenedor de rutas anidadas (`Outlet`) que mantiene visible el `Navbar` en toda la navegación.
- **Navbar**: Barra de navegación principal con enlaces (`Link` y `NavLink`) al inicio y a las categorías (Vuelos, Paquetes, Alojamientos, Excursiones), además del carrito.
- **CartWidget**: Componente hijo dentro de la barra de navegación que muestra el ícono del carrito enlazado a `/cart` y la cantidad total acumulada cuando hay ítems cargados.
- **ItemListContainer**: Contenedor que captura `categoryId` mediante `useParams` para mostrar todo el catálogo o filtrarlo por categoría.
- **ItemList**: Componente encargado de mapear el listado de productos pasando la `key` correspondiente.
- **Item**: Tarjeta individual que renderiza imagen, nombre, precio, stock disponible y enlace hacia `/item/:itemId`.
- **ItemDetailContainer**: Contenedor que captura `itemId` mediante `useParams` y obtiene el producto correspondiente con `getProductById`.
- **ItemDetail**: Vista detallada del producto conectada a `CartContext` que permite agregar unidades al carrito y pasar a `/cart` mediante el botón "Terminar mi compra".
- **ItemCount**: Contador reutilizable que controla la cantidad seleccionada respetando los límites de `0` y el `stock` disponible.
- **Cart**: Vista del carrito en `/cart` que muestra el listado de ítems con subtotales, eliminación individual, vaciado total, confirmación de compra y enlace al catálogo cuando está vacío.
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