/* 008twoFunctionsOneObject.js/.html: ¿Es posible crear las funciones A y B para que se 
cumpla new A() == new B()?
function A() { ... }
function B() { ... }
let a = new A();
let b = new B();
alert( a == b ); // true
Si es posible, entonces proporcione un ejemplo de código. */

"use strict"

function A() {  
}

function B() { 
}

let a = structuredClone(A());
let b = structuredClone(B());
alert( a == b ); // true