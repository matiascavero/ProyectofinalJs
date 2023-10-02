const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("Nombre");
const inputPrecio = document.getElementById("Precio");
const inputGondola = document.getElementById("Gondola");

// Creamos el array donde metemos los productos
const productos = [];

// Creamos la clase de productos
class Producto {
  constructor(nombre, precio, gondola) {
    this.nombre = nombre;
    this.precio = precio;
    this.gondola = gondola;
  }
}

// Función para actualizar la lista en el DOM
function actualizarLista() {
  const listaProductos = document.getElementById("lista-productos");
  listaProductos.innerHTML = '';

  productos.forEach((prod, index) => {
    const listItem = document.createElement('li');

    listItem.innerHTML = `Producto: <br> ${prod.nombre} <br> $${prod.precio}<br> Góndola: ${prod.gondola} <br> `;

    if (index >= 3) { /* Mostrar el botón de eliminar solo para productos agregados 
            después de los tres iniciales para q no se pueda borrar los prod q siempre estan en stock*/
      // Botón para eliminar el producto
      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Eliminar';
      // Agregamos el evento del botón
      deleteButton.addEventListener('click', () => {
        // Eliminar el producto de la lista
        productos.splice(index, 1);
        // Eliminar el producto del Local Storage
        localStorage.setItem('productos', JSON.stringify(productos));
        // Actualizar el DOM
        actualizarLista(); // Llamamos a actualizarLista para reflejar los cambios
      });

      listItem.appendChild(deleteButton);
    }

    listaProductos.appendChild(listItem);
  });
}

// Al cargar la página, verifica si hay datos en el LocalStorage
window.addEventListener('load', () => {
  const storedData = localStorage.getItem('productos');

  if (storedData) {
    productos.push(...JSON.parse(storedData));
    // Actualiza el DOM con los productos almacenados
    actualizarLista();
  } else {
    // Si no hay datos en el LocalStorage, carga los productos desde el JSON solo una vez
    cargarProductosDesdeJSON();
  }
});

// Función para cargar productos desde el JSON y evitar duplicaciones
function cargarProductosDesdeJSON() {
  fetch("productos.json")
    .then(response => response.json())
    .then(data => {
      console.log("Datos cargados desde JSON:", data);
      data.forEach((producto) => {
        const nuevoProducto = new Producto(producto.title, parseFloat(producto.price), producto.gondola);
        productos.push(nuevoProducto);
      });
      // Guarda la lista actualizada en el LocalStorage
      localStorage.setItem('productos', JSON.stringify(productos));
      // Actualiza el DOM con los productos cargados desde el archivo JSON local
      actualizarLista();
    })
    .catch(error => {
      console.error("Error al cargar los productos desde el archivo JSON:", error);
    });
}

// Una vez que se presiona el botón de enviar del formulario se van a corroborar los datos y guardar
formulario.addEventListener('submit', e => {
  e.preventDefault();
  // Cree variables para los valores de los input y parseé el precio
  const nombre = inputNombre.value;
  const precio = parseFloat(inputPrecio.value);
  const gondola = inputGondola.value;

  // Validación de datos
  if (!isNaN(precio) && isNaN(nombre) && nombre !== '' && gondola !== '') {
    const nuevoProducto = new Producto(nombre, precio, gondola);
    productos.push(nuevoProducto);

    // Limpia el formulario una vez que ya se ingresó el producto
    formulario.reset();

    // Guarda la lista actualizada en el LocalStorage
    localStorage.setItem('productos', JSON.stringify(productos));

    // Actualiza el DOM con la lista de productos
    actualizarLista();
  } else {
    // Error de la librería sweetAlert
    Swal.fire({
      icon: 'error',
      title: 'ERROR',
      text: 'Uno de los valores es incorrecto o se encuentra vacío. Por favor, ingrese datos nuevamente.',
    });
    // Formulario reset para que los valores del formulario se borren si están incorrectos
    formulario.reset();
  }
});