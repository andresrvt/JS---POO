/* 019firstToUpper.js/.html: Escribe una función ucFirst(str) que devuelva el string str con 
el primer carácter en mayúscula, por ejemplo:
ucFirst("john") == "John"; */

"use strict"

function ucFirst(str) {

  return str.charAt(0).toUpperCase() + str.slice(1);
}

alert(ucFirst("pitumba"));