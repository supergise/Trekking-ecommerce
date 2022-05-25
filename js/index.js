// Principal

const salidas = [
    {
        id: 1,
        nombre: "Refugio Frey",
        precio: 15000,
        stock: 5,
        imagen: "./pictures/refugiofrey.jpg",
        info: "Altura: 1700mt. Dificultad: fácil. Trekking de 4hs",
        imageAlt: "Foto del Refugio Frey"
    },
    {
        id: 2,
        nombre: "Refugio Laguna Negra",
        precio: 18000,
        stock: 3,
        imagen: "./pictures/refugiolaguna.jpg",
        info: "Altura: 1600mt. Dificultad: media/alta. Trekking de 4 a 6hs",
        imageAlt: "Foto del Refugio Laguna Negra"
    },
    {
        id: 3,
        nombre: "Refugio Lopez",
        precio: 10000,
        stock: 1,
        imagen: "./pictures/refugiolopez.jpg",
        info: "Altura: 1620mt. Dificultad: baja/media. Trekking de 3hs",
        imageAlt: "Foto del Refugio Lopez"
    },
    {
        id: 4,
        nombre: "Refugio Otto Meiling",
        precio: 19000,
        stock: 1,
        imagen: "./pictures/refugiootto.jpg",
        info: "Altura: 2000mt. Dificultad: media/alta. Trekking de 5hs",
        imageAlt: "Foto del Refugio Otto Meiling"
    }
];

inicializarLugares();

cargarProductos(salidas, contenedor, false);

inicializarCarrito();