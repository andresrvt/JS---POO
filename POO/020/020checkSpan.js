/* 020checkSpan.js/.html: Escribe una función checkSpam(str) que devuelva true si str 
contiene ‘viagra’ o ‘XXX’, de lo contrario false. La función debe ser insensible a 
mayúsculas y minúsculas:
checkSpam('compra ViAgRA ahora') == true
checkSpam('xxxxx gratis') == true
checkSpam("coneja inocente") == false */

"use strict"

function checkSpam(str) {

  // Para que sea insensible, lo pasamos todos a minúsculas y comprobamos si se encuentran las palabras.
  let minusculas = str.toLowerCase();

  if (minusculas.includes("viagra") || minusculas.includes("xxx")) {
    return true;
  }else{
    return false;
  }
}

alert(checkSpam("compra ViAgRA ahora"))
alert(checkSpam("xxxxx gratis"))
alert(checkSpam("coneja inocente"))