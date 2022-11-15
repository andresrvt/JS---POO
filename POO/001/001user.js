/* 001user.js/.html:  Escribe el código, una línea para cada acción:
Crea un objeto user vacío.
Agrega la propiedad name con el valor John Snow.
Agrega la propiedad surname con el valor Sam Sagaz.
Cambia el valor de name a Peter Pan.
Quita la propiedad name del objeto. */

"use strict";

let user = {
    name : "John Snow",
    surname : "Sam Sagaz"
}

alert(user.name);

// Se establece un nuevo valor a la propiedad.
user.name = "Peter Pan";
alert(user.name);

// Delete para eliminar propiedades.
delete user.name;
alert(user.name);