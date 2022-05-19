// Principal

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

inicializarLugares();

cargarProductos(salidas, contenedor, false);

inicializarCarrito();