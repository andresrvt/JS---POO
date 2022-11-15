/* 015readNumber.js/.html: Crea una función readNumber que pida un número hasta 
que el visitante ingrese un valor numérico válido. El valor resultante debe ser devuelto 
como number. El visitante puede también detener el proceso ingresando una línea 
vacía o presionando “CANCEL”. En tal caso la función debe devolver null. */

"use strict"

function readNumber() {
    let numero = prompt("Introduzca un número")
    // Hacemos un bucle en el que mientras numero sea un Nan, siga pidiendo un número.
    while (isNaN(numero)) {
        numero = prompt("Introduzca un número");
        if (numero == null) {
            return null;
        }
    }
    return numero;
}

alert(readNumber());