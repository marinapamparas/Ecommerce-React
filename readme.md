# PRESENTACIÓN

Painti web es un e-commerce construido con React, que consume una API de Firestore. Permite a los usuarios ver una lista de productos, el detalle de los mismos, agregarlos a un carrito de compras y generar ordenes de compras (recopilando los productos junto con la información del usuario).

# INSTALACIÓN

- Clonar este repositorio.
- Instalar las dependencias con el comando "npm install".
- Crear un archivo .env en la raíz del proyecto y agregar las credenciales de Firestore.
- Para ejecutar la aplicación utilizar el comando "npm run dev".

# FUNCIONALIDADES

- Página de productos: muestra un listado de todos los productos disponibles. Cada uno cuenta con categoria, nombre, imagen y precio. El usuario puede hacer click en cada uno de ellos para ver los detalles (stock y descripción del mismo).
- Página de detalles: muestra mas información sobre el producto, incluyendo: imagen, nombre, precio, stock y descripción. Desde esta página el usuario puede agregar al carrito, finalizar la compra o continuar comprando (link hacia el listado de productos).
- Carrito: el carrito muestra un listado de todos los productos que el usuario ha agregado al carrito, junto con las cantidades seleccionadas de cada producto y el precio total de la compra. El usuario puede vaciarlo en su totalidad o eliminar individualmente cada producto. El siguiente paso es finalizar la compra, lo que lleva al usuario a la página del formulario.
- Formulario: cuenta con inputs para recopilar la información de contacto del usuario. Se piden los siguientes datos: nombre, telefono, mail y confirmación de mail. Una vez haya completado todos los datos selecciona "realizar compra".
- Orden de compra: Como finalización de la compra se redirige al usuario a la página de orden de compra, donde se muestra un Id de la compra realizada y el precio total de la misma.

# DEPENDENCIAS

- React: Se utiliza para desarrollar toda la app
- Firebase: Se utiliza para guardar en ella 2 colecciones, productos y ordenes de compra.
- React-bootstrap: Se utiliza para dar estilos a botones y cards.
- React-router-dom: Se utiliza para desarrollar la navegabilidad de la app.
