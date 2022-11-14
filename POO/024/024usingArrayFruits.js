/* 024usingArrayFruits.js/.html: Ejecuta sobre el siguiente array las operaciones pedidas:
var fruits = ["Banana", "Manzana", "Fresa"]; */
//Añadimos cereza al principio
//Añadimos melocotón al final
//Mostrar el array elemento a elemento con for clásico
//Eliminamos el primer elemento.
//Eliminamos el último elemento.
//Mostrar cada elemento con for of o for in, lo que considere más adecuado. 

"use strict"

let fruits = ["Banana", "Manzana", "Fresa"];

fruits.unshift("Cereza");
fruits.push("Melocotón");

for (let i = 0; i < fruits.length; i++) {
    alert(fruits[i]);
}

fruits.shift();
fruits.pop();


//Usamos el for of debido a que el for in solo lo usaremos con objetos.
for (let key of fruits) {
    alert(key)
}