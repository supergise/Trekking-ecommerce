// Selector de Lugares mediante imágenes

function inicializarLugares() {
    let titulo = document.createElement("h3");
    titulo.innerText = "Estas son nuestras próximas salidas de Trekkings";
    document.getElementById("lugares").appendChild(titulo);

    let select = document.createElement("select");
    select.className = "lugaresTrekking";

    select.onchange = (i) => {
        document.getElementById("imagenElegida").replaceChildren();
        if (i.target.value.includes("jpg")) {
            let imagen = document.createElement("img");
            imagen.src = i.target.value;
            document.getElementById("imagenElegida").appendChild(imagen);
        }
    } 

    select.innerHTML += `<option>Seleccione una opcion</option>`;

    for (let index = 0; index < salidas.length; index++) {
        select.innerHTML += `<option value="${salidas[index].imagen}">${salidas[index].nombre}</option>`;
    }

    document.getElementById("lugares").appendChild(select);
}