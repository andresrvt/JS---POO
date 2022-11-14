/* 011addPropertyToString.js/.html: ¿Puedo agregar una propiedad a un string?: 
Considera el siguiente código:
let str = "Peter";
str.test = 5;
alert(str.test);
Qué piensas: ¿funcionará? ¿Qué mostrará? ¿Por qué?
*/

"use strict"

let str = "Peter";
str.test = 5;
alert(str.test);

/* No aparece nada, debido a que los String solo tienen como propiedad la de Length. 
Por tanto, al intentar añadir una propiedad, no la recoge*/