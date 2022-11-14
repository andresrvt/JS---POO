/* 013sumVisitorNumbers.js/.html: Crea un script que pida al visitante que ingrese dos 
números y muestre su suma. P.D. Hay una trampa con los tipos de valores. */

"use strict"

let a = prompt("Introduzca un número");
let b = prompt("Introduzca un número");  

let resultado = a + b;

alert(resultado);

/* El resultado de la suma sería 54, ya que prompt devuelve un string. 
Como el símbolo "+" sirve para concatenar cadenas, toma a 5 y a 4 como texto y lo junta.*/

let c = +prompt("Introduzca un número");
let d = +prompt("Introduzca un número");  

let solucion = c + d;

alert(solucion);

/* En este caso, como prompt tiene delante el símbolo "+", lo que devuelve es de tipo numérico, por lo que puede realizar la suma sin problemas. */