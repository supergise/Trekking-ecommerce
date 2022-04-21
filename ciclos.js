// a continuación se desarrolla un sistema de ingreso a la plataforma para usuarios registrados y 
// nuevos usuarios con un algoritmo calculador de precio * horas de trekking 

let saludoBienvenida = prompt("¡Bienvenido a Patagonia Trekking!\n¿Ya te registraste en nuestra web? si/no");
let nombreRegistrado1 = "Enrique";
let nombreRegistrado2 = "Alberto";
let nombreRegistrado3 = "Gabriela";
let nombreNuevoUsuario = "";
let clave = "";


if(saludoBienvenida == "si" || saludoBienvenida == "Si") {
    console.log(prompt("Ingresá tu nombre de usuario"));
    alert(`Hola ${nombreRegistrado1}\n¡Esperamos que hoy tengas muchas ganas de caminar!`);

} else if(saludoBienvenida == "no" || saludoBienvenida == "No") {
    while(nombreNuevoUsuario == "") {
        nombreNuevoUsuario = prompt("Por favor ingresá un nombre de usuario");
        if(nombreNuevoUsuario == nombreRegistrado1 || nombreNuevoUsuario == nombreRegistrado2 || nombreNuevoUsuario == nombreRegistrado3) {
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
}
alert("A continuación te mostramos nuestra lista de precios");

let listaPrecios = ""; 
let opcion = "";

for (i = 1; i < 4; i++) {
    listaPrecios += `El trekking ${i} tiene una duración de ${i*120} minutos y un valor de USD ${i*120*1}\n`;
}

listaPrecios += "¡Eligí una opción!";
opcion = prompt(listaPrecios);  

if(opcion == 1) {
    alert("Tu trekking seleccionado es para Cerro Campanario");
} else if(opcion == 2) {
    alert("Tu trekking seleccionado es para Cerro Frey");
} else if(opcion == 3) {
    alert("Tu trekking seleccionado es para Cerro Lopez");
}