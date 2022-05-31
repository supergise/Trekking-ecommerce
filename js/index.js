// Principal

let salidas = [];

const traerTrekkings = async () => {

    let response = await fetch("./api.json");

    salidas = await response.json();

    inicializarLugares();
    
    cargarProductos(salidas, contenedor, false);
    
    inicializarCarrito();
}

traerTrekkings();