/* 018createRandomInteger.js/.html: Crea una función randomInteger(min, max) que 
genere un número entero aleatorio entre min y max incluyendo ambos, min y max, 
como valores posibles. Todo número del intervalo min..max debe aparecer con la 
misma probabilidad. Ejemplos de funcionamiento:
alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5 */

"use strict"

function randomInteger(min,max) {
  let numero = min + Math.random() * (max + 1 - min)
  // Con Math.floor() redondeamos a la baja y así le quitamos los decimales.
  return Math.floor(numero);
}