// Manipulación de DOM y Eventos

const salidas = [
    {
        id: 1,
        nombre: "Refugio Frey",
        precio: 15000,
        stock: 5,
        imagen: "./pictures/refugiofrey.jpg"
    },
    {
        id: 2,
        nombre: "Refugio Laguna Negra",
        precio: 18000,
        stock: 3,
        imagen: "./pictures/refugiolaguna.jpg"
    },
    {
        id: 3,
        nombre: "Refugio Lopez",
        precio: 10000,
        stock: 1,
        imagen: "./pictures/refugiolopez.jpg"
    },
    {
        id: 4,
        nombre: "Refugio Otto Meiling",
        precio: 19000,
        stock: 1,
        imagen: "./pictures/refugiootto.jpg"
    }
];

let titulo = document.createElement("h3");
titulo.innerText = "Estos son nuestros próximos Trekkings";
document.getElementById("lugares").appendChild(titulo);

let select = document.createElement("select");
select.className = "lugaresTrekking";
select.onchange = (i) => {
    document.getElementById("imagenElegida").replaceChildren();
    let imagen = document.createElement("img");
    imagen.src = i.target.value;
    document.getElementById("imagenElegida").append(imagen);
} 
select.innerHTML += `<option>Seleccione una opcion</option>`;
for (let index = 0; index < salidas.length; index++) {
    select.innerHTML += `<option value="${salidas[index].imagen}">${salidas[index].nombre}</option>`;
}
document.getElementById("lugares").appendChild(select);

const contenedor = document.getElementById("salidas");
const tablaCarrito = document.getElementById("tablaCarrito");
const carrito = [];

const getCard = (item) => {
    return (
        `
        <div class="card" style="width: 20rem;">
            <img src="${item.imagen}" class="card-img-top" alt="${item.nombre}">
            <div class="card-body">
                <h5 class="card-title">${item.nombre}</h5>
                <p class="card-text">$${item.precio}</p>
                <p class="card-text">Cupos disponibles: ${item.stock}</p>
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
    </tr>
        `
    )
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
    
    cargarProductos(carrito, tablaCarrito, true);
}

cargarProductos(salidas, contenedor, false);