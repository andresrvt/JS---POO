/* 012testCuriosity.js/.html: Prueba ejecutando esto:
alert( 9999999999999999 );
¿Qué está pasando?¿Por qué?
 */
"use strict"

alert( 9999999999999999 );

/* El resultado es 1000000000, esto se debe a que todos los números en JavaScript se almacenan en formato de 64 bits IEEE-754, también conocido como "doble precisión", por lo que hay exactamente 64 bits para almacenar un número: 
52 de ellos se utilizan para almacenar los dígitos, 
11 de ellos almacenan la posición del punto decimal (son cero para números enteros),
y 1 bit es para el signo.

En el caso del número de arriba, hay 64 bits para el número, 52 de ellos pueden usarse para almacenar dígitos, pero eso no es suficiente. A este tipo de números se les llama números binarios sin fin.
Entonces los dígitos menos significativos desaparecen, por lo que JS "redondea" de 99999999999 a 1000000000000.
*/