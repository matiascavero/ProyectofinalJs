const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("Nombre")
const inputPrecio = document.getElementById("Precio")
const inputGondola = document.getElementById("Gondola")
// creamos el array donde metemos los productos
const productos = [];
//creamos la clase de productos
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

    // Botón para eliminar el producto
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Eliminar';
    //Agregamos el evento del boton
    deleteButton.addEventListener('click', () => {
      // Eliminar el producto de la lista
      productos.splice(index, 1);
      // Eliminar el producto del Local Storage
      localStorage.setItem('productos', JSON.stringify(productos));
      // Actualizar el DOM
      actualizarLista();
    });

    listItem.appendChild(deleteButton);
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
  }
});

//Una vez q apretamos el boton de enviar del formulario se van a corroborar los datos y guardar
formulario.addEventListener('submit', e => {
  e.preventDefault();
  //cree variables para los valores de los input y parsie el precio
  nombre = inputNombre.value
  precio = parseFloat(inputPrecio.value)
  gondola = inputGondola.value

  //Validacion de datos
  if (!isNaN(precio) && isNaN(nombre) && nombre !== '' && gondola !== '') {
    const nuevoProducto = new Producto(nombre, precio, gondola);
    productos.push(nuevoProducto);

    // lo use para limpiar la consola
    console.clear();

    // Imprime los productos en la consola
    productos.forEach((prod) => {
      console.log(`Producto: ${prod.nombre}, Precio: ${prod.precio}, Gondola: ${prod.gondola}`);
    });

    // Limpia el formulario una vez que ya se ingreso el producto
    formulario.reset();

    // Guarda la lista actualizada en el LocalStorage
    localStorage.setItem('productos', JSON.stringify(productos));

    // Actualiza el DOM con la lista de productos
    actualizarLista();
  }
  else {
    //Error de la libreria sweetAlert
    Swal.fire({
      icon: 'error',
      title: 'ERROR',
      text: 'Uno de los valores es incorrecto o se encuentra vacio, Por favor ingresar datos nuevamente',
    })
    //formulario reset para que los valores del formulario se borren si estan incorrectos
    formulario.reset();
  }
})

