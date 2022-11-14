/* 014fixNumbers.js/.html: ¿Por qué 6.35.toFixed(1) == 6.3? Según la documentación 
Math.round y toFixed redondean al número más cercano: 0..4 hacia abajo mientras 
5..9 hacia arriba. Por ejemplo:  alert( 1.35.toFixed(1) ); // 1.4
En el ejemplo similar que sigue, ¿por qué 6.35 es redondeado a 6.3, y no a 6.4?
alert( 6.35.toFixed(1) ); // 6.3
¿Cómo redondear 6.35 de manera correcta? */

"use strict"

/* Hay que diferenciar entre la forma de redondear que tiene toFixed al Math.round:
    -toFixed() --> Devuelve el número con la cantidad de números decimales que queramos. No se redondea el número, solo se desplaza la coma.
    -Math.round()--> Deuvelve el número realizando un redondeo al número más cercano.

   Por tanto, 6.35.toFixed(1) == 6.3 es correcto, ya que hemos desplazado la coma una posición.
   En el caso de Math.round(6.35), hay  que tener en cuenta que 6.35 es un número binario sin fin, por lo que JS lo ve realmente como 6.3499999999999. Teniendo en cuenta esto, 6.349 no llega a ser 6.35 y Math.round lo redondea a la baja.
   Con el ejemplo de 1.35 pasa lo mismo que en el anterior.
*/

// La forma correcta de redondear 6.35 sería multiplicando primero por 10 para que ya JS no lo tomara como número binario sin fin, y luego dividir entre 10 para desplazar la coma.
alert(Math.round(6.35*10)/10)