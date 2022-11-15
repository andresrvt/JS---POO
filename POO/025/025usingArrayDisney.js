/* 025usingArrayDisney.js/.html: Ejecuta sobre el siguiente array las operaciones pedidas:
 let disney = [
    { nombre: "Hércules", pelicula: "Hércules" },
    { nombre: "Megana", pelicula: "Hércules" },
    { nombre: "Hades", pelicula: "Hércules" },
    { nombre: "Campanilla", pelicula: "Peter Pan" },
    { nombre: "Wendy", pelicula: "Peter Pan" }
];*/
//Meter a Peter Pan al final del array disney.
//Pintar el array
//Meter a El capitán Garfio al principio del array, no olvides la película
//Meter al cocodrilo detrás del capitán, no olvides la película
//Obtener los personajes de la película de "Peter Pan"; y mostrarlos uno a uno.
//Encontrar el índice de Campanilla.
//Buscar al cocodrilo.
//Escribe la función shuffle(array) que baraje (reordene de forma aleatoria) los elementos del array.
 

"use strict"

let disney = [
    { nombre: "Hércules", pelicula: "Hércules" },
    { nombre: "Megana", pelicula: "Hércules" },
    { nombre: "Hades", pelicula: "Hércules" },
    { nombre: "Campanilla", pelicula: "Peter Pan" },
    { nombre: "Wendy", pelicula: "Peter Pan" }
];



disney.push({nombre: "Peter Pan", pelicula: "Peter Pan"});


for (let key of disney) {
    document.write(key.nombre + "<br>");
}

document.write("<br><hr><br>")

disney.unshift({nombre: "Capitán Garfio", pelicula: "Peter Pan"});

for (let key of disney) {
    document.write(key.nombre + "<br>");
}

document.write("<br><hr><br>")

let personajesPeterPan = disney.filter(disney => disney.pelicula == "Peter Pan");

document.write(personajesPeterPan.map(item=>item.nombre + " - "+ item['pelicula'] + "<br>"));

document.write("<br><hr><br>")

let posicionCampanilla = disney.findIndex(disney => disney.nombre == "Campanilla");

document.write("La posición de Campanilla es " + posicionCampanilla + "<br>");

document.write("<br><hr><br>")

let cocodrilo = disney.find(disney => disney.nombre == "Cocodrilo");

document.write(cocodrilo + "<br>") // Muestra undefined porque no encuentra nada.

function shuffle(disney) {
    let disneyOrdenado = disney.sort(()=> Math.random() - 0.5);
    return disneyOrdenado;
}

document.write("<br><hr><br>")

for (let key of shuffle(disney)) {
    document.write(key.nombre + "<br>");
}