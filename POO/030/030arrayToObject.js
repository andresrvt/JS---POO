/* 030arrayToObjetct.js/.html: Crea un objeto a partir de un array Supongamos que 
recibimos un array de personajes con la forma {id:..., nombre:..., pelicula:... }.
Crea una función groupById(arr) que cree un objeto, con id como clave (key) y los 
elementos del array como valores. Dicha función es realmente útil cuando trabajamos 
con información del servidor.
Para esta actividad asumimos que cada id es único. No existen dos elementos del array 
con el mismo id.
Usa el método de array .reduce en la solución. */

"use strict";

let disney = [
  { id: '1', nombre: "Hércules", pelicula: "Hércules" },
  { id: '2', nombre: "Megana", pelicula: "Hércules" },
  { id: '3', nombre: "Hades", pelicula: "Hércules" },
  { id: '4', nombre: "Campanilla", pelicula: "Peter Pan" },
  { id: '5', nombre: "Wendy", pelicula: "Peter Pan" }
];

function groupById(disney) {
  return disney.reduce((obj, key) => {
    obj[key.id + " " + key.nombre + " " + key.pelicula] = key;
    return obj;
  },{})
}

let byID = groupById(disney); 

for (let key in byID) {
  document.write(key + "<br>");
}

