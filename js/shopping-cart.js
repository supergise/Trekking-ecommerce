// Cards de reservas

const contenedor = document.getElementById("salidas");
const tablaCarrito = document.getElementById("tablaCarrito");
let carrito = [];

const getCard = ({id, nombre, precio, imagen}) => {
    
    return (
        `<div class="card"> 
            <img src="${imagen}" class="card-img-top" alt="${nombre}">
            <div class="card-body">
                <h5 class="card-title">${nombre}</h5>
                <p class="card-text">$${precio}</p>
                <button onclick=agregarCarrito(${id}) class="btn  btn-primary }" } >Quiero este trekking</button>
            </div>
        </div>
    `);
};

const getRow = ({id, nombre, cantidad, precio, imagen}) => {
    return(
        `
        <tr>
            <th scope="row">${id}</th>
            <td>${nombre}</td>
            <td>${cantidad}</td>
            <td>$${precio * cantidad} ($${precio})</td>
            <td><img style="width:20px" src="${imagen}" alt="imagen"></td>
            <td><i class="fa-solid fa-trash" onclick="deleteCart(${id})"></i></th>
        </tr>
        `
    );
}

const deleteCart = (id) => {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
        title: "¿Está seguro de quitar este Trekking?",
        text: "Podés volver a agregarlo cuando quieras",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: "Quitar Trekking",
        cancelButtonText: "Dejar Trekking",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            carrito = carrito.filter((el) => el.id != id );
            localStorage.setItem("carrito", JSON.stringify(carrito));
            cargarProductos(carrito, tablaCarrito, true);
        } 
    })
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
        });
    } else {
        carrito[busqueda].cantidad = carrito[busqueda].cantidad + 1;
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