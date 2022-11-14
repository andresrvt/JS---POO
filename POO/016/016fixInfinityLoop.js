/* 016fixInfinityLoop.js/.html: Este bucle es infinito. Nunca termina, ¿por qué?
let i = 0;
while (i != 10) {
  i += 0.2;
} */


"use strict"

/* Se debe a que hacer un sumatorio con 0.2 va a dar problemas de precisión. 
Como expliqué anteriormente, en este caso vuelve a pasar que tenemos un número binario sin fin.
Si hicieramos la comprobación justo cuando debería dar 10 y salir del resultado, veríamos que realmente el resultado es 9.999999996, por lo que nunca llegaría a ser 10.
*/