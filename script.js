let iniciarSesionBtn = document.getElementById('iniciarSesionBtn');
let mensajeBienvenida = document.getElementById('mensajeBienvenida');

iniciarSesionBtn.addEventListener('click', () => {
  let usuario = prompt('Usuario:');
  let contraseña = prompt('Contraseña:');

  if ((usuario === 'Ivan' || usuario === 'Invitado') && contraseña === '123') {
    iniciarSesionBtn.style.display = 'none';
    mensajeBienvenida.style.display = 'block';
    mensajeBienvenida.textContent = `¡Bienvenido, ${usuario}!`;
  } else {
    alert('No es posible iniciar sesión. Verifica tus credenciales.');
  }
});


let catalogoProductos = [
  {
    nombre: "Producto 1",
    precio: 1000,
    stock: 5,
    imagen: "img/foto1.jpg"
  },
  {
    nombre: "Producto 2",
    precio: 2000,
    stock: 3,
    imagen: "img/foto2.jpg"
  },
  {
    nombre: "Producto 3",
    precio: 2000,
    stock: 3,
    imagen: "img/foto3.jpg"
  },
  {
    nombre: "Producto 4",
    precio: 2000,
    stock: 3,
    imagen: "img/foto4.jpg"
  },
  {
    nombre: "Producto 5",
    precio: 2000,
    stock: 3,
    imagen: "img/foto5.jpg"
  },
  {
    nombre: "Producto 6",
    precio: 2000,
    stock: 3,
    imagen: "img/foto6.jpg"
  },
  {
    nombre: "Producto 7",
    precio: 2000,
    stock: 3,
    imagen: "img/foto7.jpg"
  },
  {
    nombre: "Producto 8",
    precio: 2000,
    stock: 3,
    imagen: "img/foto8.jpg"
  },
  {
    nombre: "Producto 9",
    precio: 2000,
    stock: 3,
    imagen: "img/foto9.jpg"
  },
  
];

let carritoItems = [];

// Función para generar el catálogo de productos
function generarCatalogo() {
  let catalogoContainer = document.getElementById('catalogoProductos');
  catalogoContainer.innerHTML = '';

  catalogoProductos.forEach((producto, index) => {
    let productoDiv = document.createElement('div');
    productoDiv.classList.add('producto');

    let imagen = document.createElement('img');
    imagen.src = producto.imagen;
    imagen.alt = producto.nombre;

    let nombre = document.createElement('p');
    nombre.textContent = producto.nombre;

    let precio = document.createElement('p');
    precio.textContent = `Precio: $${producto.precio}`;

    let stock = document.createElement('p');
    stock.textContent = `Stock: ${producto.stock}`;

    let agregarBtn = document.createElement('button');
    agregarBtn.textContent = 'Agregar al carrito';
    agregarBtn.addEventListener('click', () => agregarAlCarrito(index));

    productoDiv.appendChild(imagen);
    productoDiv.appendChild(nombre);
    productoDiv.appendChild(precio);
    productoDiv.appendChild(stock);
    productoDiv.appendChild(agregarBtn);

    catalogoContainer.appendChild(productoDiv);
  });
}

// Función para agregar un producto al carrito
function agregarAlCarrito(index) {
  let producto = catalogoProductos[index];
  if (producto.stock > 0) {
    carritoItems.push(producto);
    producto.stock--;
    generarCatalogo();
    generarCarrito();
  }
}

// Función para generar el contenido del carrito
function generarCarrito() {
  let carritoContainer = document.getElementById('carritoItems');
  carritoContainer.innerHTML = '';

  let subtotal = 0;
  carritoItems.forEach((producto) => {
    let itemDiv = document.createElement('div');
    itemDiv.classList.add('item');

    let nombre = document.createElement('p');
    nombre.textContent = producto.nombre;

    let precio = document.createElement('p');
    precio.textContent = `Precio: $${producto.precio}`;

    let eliminarBtn = document.createElement('button');
    eliminarBtn.textContent = 'Eliminar';
    eliminarBtn.addEventListener('click', () => eliminarDelCarrito(producto));

    itemDiv.appendChild(nombre);
    itemDiv.appendChild(precio);
    itemDiv.appendChild(eliminarBtn);

    carritoContainer.appendChild(itemDiv);

    subtotal += producto.precio;
  });

  let subtotalElement = document.getElementById('subtotal');
  subtotalElement.textContent = `Subtotal: $${subtotal}`;
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(producto) {
  let index = carritoItems.indexOf(producto);
  if (index > -1) {
    carritoItems.splice(index, 1);
    producto.stock++;
    generarCatalogo();
    generarCarrito();
  }
}

// Función para realizar la compra
function comprar() {
  let total = carritoItems.reduce((suma, producto) => suma + producto.precio, 0);

  if (total > 5000) {
    let cuotas = parseInt(prompt("¿En cuántas cuotas desea pagar? (3 sin interés)"));

    if (!isNaN(cuotas) && cuotas >= 1) {
      let valorCuota = total / cuotas;
      alert(`¡Compra exitosa!\nTotal de la compra: $${total}\nValor de cada cuota: $${valorCuota.toFixed(2)}`);
      carritoItems = [];
      generarCatalogo();
      generarCarrito();
    } else {
      alert("Ingrese un número válido de cuotas.");
    }
  } else {
    alert(`¡Compra exitosa!\nMonto de la compra: $${total}`);
    carritoItems = [];
    generarCatalogo();
    generarCarrito();
  }
}

// Evento para el botón de comprar
let btnComprar = document.getElementById('btnComprar');
btnComprar.addEventListener('click', comprar);

// Generar el catálogo y el carrito al cargar la página
generarCatalogo();
generarCarrito();

//Evento boton "Light" y "Dark" mode
//dark light mode

let boton = document.getElementById('mode');
let contenedor = document.getElementById('main');
//...
localStorage.setItem('mode','light');

//evento del boton
boton.onclick =()=>{
    if(localStorage.getItem('mode')=='light'){
        contenedor.classList.replace('light','dark');
        document.body.className='dark';
        boton.innerText='Light Mode';
        localStorage.setItem('mode','dark');
    }else{
        contenedor.classList.replace('dark','light');
        document.body.className='light';
        boton.innerText='Dark Mode';
        localStorage.setItem('mode','light');
    }
}

