/* 023modifyThor.js/.html: Contesta los siguientes comentarios con respecto a la cadena 
que contiene la variable thor: 
let thor = "Thor es el hijo de Odín";*/
// Largo de la cadena
//Encontrar la letra o
//Encontrar el carácter que ocupa la posición 3
//¿Qué carácter ocupa la posición 1?
//Trocea la cadena usando los espacios en blanco
//Reemplaza Thor por Loki
//Recorta la cadena para que devuelva la palabra Odín
//¿Puedes encontrar la letra a? Demuéstralo
//Pon la mitad de la cadena en minúsculas (Sin usar las posiciones de 0 a 11) 

"use strict"

let thor = "Thor es el hijo de Odín";

alert(thor.length);

alert("La posición donde se encuentra la o es: " + parseInt(thor.indexOf("o")+1));

alert("El carácter en la posición 3 es: " + thor.charAt(3) + " y en la posición 1 es: " + thor.charAt(1));

alert(thor.split(" "))

alert(thor.replace("Thor","Loki"));

alert(thor.substring(19,23));

alert(thor.indexOf("a" || "A")) // Da -1 porque no hay nignuna "a" en el texto y por tanto, no puede dar la posición.

alert(thor.slice(0,thor.length/2).toLowerCase() + thor.slice(thor.length/2).toUpperCase());