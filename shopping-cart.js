// Cards de reservas

const contenedor = document.getElementById("salidas");
const tablaCarrito = document.getElementById("tablaCarrito");
let carrito = [];

const getCard = (item) => {
    return (
        `<div class="card">
            <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
            <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text">$${item.precio}</p>
                <button onclick=agregarCarrito(${item.id}) class="btn ${item.stock ? 'btn-primary' : 'btn-secondary'}" ${!item.stock ? 'disabled' : '' } >Quiero este trekking</button>
            </div>
        </div>
    `);
};

const getRow = (item) => {
    return(
        `
        <tr>
            <th scope="row">${item.id}</th>
            <td>${item.nombre}</td>
            <td>${item.cantidad}</td>
            <td>$${item.precio * item.cantidad} ($${item.precio})</td>
            <td><img style="width:20px" src="${item.imagen}" alt="imagen"></td>
            <td><i class="fa-solid fa-trash" onclick="deleteCart(${item.id})"></i></th>
        </tr>
        `
    )
}

const deleteCart = (id) => {
    carrito = carrito.filter((el) => el.id != id );
    localStorage.setItem("carrito", JSON.stringify(carrito));
    cargarProductos(carrito, tablaCarrito, true);
}

const cargarProductos = (datos, nodo, esTabla) => {
    let acumulador = "";
    datos.forEach((el) => {
        acumulador += esTabla ? getRow(el) : getCard(el);
    })
    nodo.innerHTML = acumulador;
};

const agregarCarrito = (id) => {
    const seleccion = salidas.find(item => item.id === id);
    const busqueda = carrito.findIndex(el => el.id === id);
    
    if (busqueda === -1) {
        carrito.push({
            id: seleccion.id,
            nombre: seleccion.nombre,
            precio: seleccion.precio,
            cantidad: 1,
            imagen: seleccion.imagen,
        })
    } else {
        carrito[busqueda].cantidad = carrito[busqueda].cantidad + 1
    }

    localStorage.setItem("carrito", JSON.stringify(carrito));

    cargarProductos(carrito, tablaCarrito, true);
}

// Si es la primera vez que se  inicializa el carrito se carga un array vacio 
// caso contrario trae el carrito previamente armado

function inicializarCarrito (){
    carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    cargarProductos(carrito, tablaCarrito, true);
}