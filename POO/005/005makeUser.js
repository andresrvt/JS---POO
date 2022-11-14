/* 005makeUser.js/.html: Aquí la función makeUser devuelve un objeto. ¿Cuál es el 
resultado de acceder a su atributo ref? ¿Por qué?
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}
let user = makeUser();
alert( user.ref.name ); // ¿Cuál es el resultado? */

"use strict"

function makeUser() {
  return {
    name: "John",
    ref: this
    }
  };

let user = makeUser();

alert(user.ref);
alert(user.ref.name);

/* El resultado de mostrar ref sería undefined, debido a que estamos en modo estricto. 
En este modo, se mantiene el valor que está establecido al entrar en ejecución. 
Como ref no ha sido definido, devuelve undefined como resultado. 
En caso de no estar en modo estricto, daría de resultado un objeto window. */

/* En el segundo caso no da ningún resultado, debido a que está intentando entrar en la propiedad de una propiedad que no está definida. */