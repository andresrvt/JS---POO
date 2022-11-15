/* 029practiceWithBands.js/.html: Ejecuta sobre el siguiente array las operaciones 
pedidas:
 var grupos = [
    {nombre: "ACDC", genero: "Rock"},
    {nombre: "Cold Play", genero: "Pop"},
    {nombre: "NCT Dream", genero: "K-Pop"},
    {nombre: "Metallica", genero: "Heavy Metal"}
];*/
//filtra los grupos por género obtenido aquellos que son de Heavy Metal.
//Busca en los grupos usando “find” el grupo con Nombre “Cold Play”.
//¿En qué posición del array se encuenta “Cold Play”? 

"use strict";

let grupos = [
  {nombre: "ACDC", genero: "Rock"},
  {nombre: "Cold Play", genero: "Pop"},
  {nombre: "NCT Dream", genero: "K-Pop"},
  {nombre: "Metallica", genero: "Heavy Metal"}
];

let heavyMetal = grupos.filter(grupos => grupos.genero == "Heavy Metal");
let coldPlay = grupos.find(grupos => grupos.nombre == "Cold Play");
let posicionColdPlay = grupos.findIndex(grupos => grupos.nombre == "Cold Play");

document.write(heavyMetal.map(item=>item.nombre + " - "+ item['genero']+ "<br>"));
console.log((coldPlay) ? coldPlay.nombre + "-" + coldPlay.genero: "Sin resultados"+ "<br>");
document.write("La posición de Cold Play es " + posicionColdPlay);