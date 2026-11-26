# TripWise

E-commerce de paquetes turísticos, vuelos y experiencias de viaje desarrollado con React.

## Estructura y componentes
- **Navbar**: Barra de navegación principal con el logo de la tienda, categorías de productos (Vuelos, Paquetes, Alojamientos, Excursiones) y el acceso al carrito.
- **CartWidget**: Componente hijo dentro de la barra de navegación que muestra el ícono del carrito y un contador de productos.
- **ItemListContainer**: Componente contenedor que gestiona el estado con `useState` y obtiene los productos de forma asíncrona con `useEffect`.
- **ItemList**: Componente encargado de mapear el listado de productos pasando la `key` correspondiente.
- **Item**: Tarjeta individual que renderiza imagen, nombre, precio y stock disponible de cada producto.
- **asyncMock.js**: Simulación de datos local mediante una `Promise` con retardo de 2 segundos.

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