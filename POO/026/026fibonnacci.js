/* 026fibonnacci.js/.html: Crear un array que contenga los 20 primeros números de 
Fibonacci. */

"use strict";

function fibonnacci(numero) {
    if (numero <= 1) {
        return numero;
    }else{
        return fibonnacci(numero-2) + fibonnacci(numero-1);
    }
}

alert(fibonnacci(20))