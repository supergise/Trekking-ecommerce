/*
// a continuación se desarrolla un sistema de ingreso a la plataforma para usuarios registrados y 
// nuevos usuarios con un algoritmo calculador de precio * horas de trekking 

let saludoBienvenida = prompt("¡Bienvenido a Patagonia Trekking!\n¿Ya te registraste en nuestra web? si/no");
let nombreRegistrado1 = "Enrique";
let nombreRegistrado2 = "Alberto";
let nombreUsuarioRegistrado = "";
let nombreNuevoUsuario = "";
let clave = "";

function existeUsuario (usuario) {
    if (usuario === nombreRegistrado1 || usuario === nombreRegistrado2) {
        return true;
    }
    else {
        return false;
    }
}

if(saludoBienvenida == "si" || saludoBienvenida == "Si") {
    while( !existeUsuario(nombreUsuarioRegistrado) ) {
        nombreUsuarioRegistrado = prompt("Ingresá tu nombre de usuario");
    }
    
    alert(`Hola ${nombreUsuarioRegistrado}\n¡Esperamos que hoy tengas muchas ganas de caminar!` );
    
}  else if(saludoBienvenida == "no" || saludoBienvenida == "No") {
    
    while(nombreNuevoUsuario == "") {
        nombreNuevoUsuario = prompt("Por favor ingresá un nombre de usuario");
        if(existeUsuario (nombreNuevoUsuario) ) {
            alert("El nombre de usuario ingresado ya está en uso. Por favor elija uno nuevo");
            nombreNuevoUsuario = "";
        }
    }
    
    while(clave == "") {
        clave = prompt("Por favor ingresa una contraseña de 8 dígitos como mínimo");
        if(clave.length < 8) {
            alert("Tu contraseña no tiene 8 dígitos. Por favor intentá de nuevo");
            clave = "";
        } else {
            alert(`Hola ${nombreNuevoUsuario} ¡Ya fuiste dado de alta en el sistema!`);
        }   
    }
} else {
    window.location.reload ();
}

alert("A continuación te mostramos nuestra lista de precios");

function preciosTrekking (precioHora) {
    let listaPrecios = ""; 
    for (i = 0; i < 3; i++) {
        listaPrecios += `El trekking ${i+1} tiene una duración de ${(i+1)*120} minutos y un valor de USD ${(i+1)*2*precioHora}\n`;
    }
    listaPrecios += "¡Eligí una opción!";
    return listaPrecios;
}

let precioHora = 50; //en usd

let opcion = parseInt(prompt(preciosTrekking (precioHora)));  


switch (opcion) {
    case 1:
        alert("Tu trekking seleccionado es para Cerro Campanario");
        break;
    case 2:
        alert("Tu trekking seleccionado es para Cerro Frey");
        break;
    case 3:
        alert("Tu trekking seleccionado es para Cerro Lopez");
        break;
} 
*/ 

// Array para sumar el seguro Assist Card de acuerdo a las variantes de lugar y precio respectivo

class Trekking {
    constructor(lugar, precio) {
        this.lugar     = lugar.toUpperCase ();
        this.precio    = parseFloat (precio);
    }
    
    sumaAssistCard (seguro) {
        this.precio = this.precio + 2500;
    }
}
    
const trekkings = [];

trekkings.push(new Trekking ("Refugio Frey", "7000"));
trekkings.push(new Trekking ("Refugio Laguna Negra", "12000"));
trekkings.push(new Trekking ("Refugio Otto Meiling", "10000"));

for (const trekking of trekkings) {
    trekking.sumaAssistCard();
}

console.log(trekkings);

// Array de ingreso de integrantes para un trekking por cupo

const integrantes = [];
let cantidadIntegrantes = 5;

do {
    let ingresoIntegrante = prompt("Ingresá nombre y apellido");
    integrantes.push(ingresoIntegrante.toUpperCase());
    console.log(`Quedan ${cantidadIntegrantes - integrantes.length} cupos disponibles`);

}while(integrantes.length != cantidadIntegrantes)

alert(`Los integrantes del trekking son:\n${integrantes.join("\n")}\nYa no tenemos más cupo para este trekking`);