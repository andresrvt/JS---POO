/* 027transformSnakeToCamel.js/.html: Escribe la función camelize(str) que convierta 
palabras separadas por _como “mi_cadena_corta” en palabras con mayúscula 
“miCadenaCorta”. Esto sería: quitar todos los _ y que cada palabra después de _ 
comience con mayúscula. Ejemplos:
camelize("background_color") == 'backgroundColor';
camelize("list_style_image") == 'listStyleImage';
camelize("_webkit_transition") == 'WebkitTransition';
P.D. Pista: usa split para dividir el string en un array, transfórmalo y vuelve a unirlo 
(join). */

"use strict";

function camelize(str){
    // Con split cortamos la palabra por el "_", luego con map hacemos la conversión para cada elemento en el que hemos divido la palabra, para al final juntarlo todo con join.
    return str.split('_').map(function(palabraCamel){
      return palabraCamel.charAt(0).toUpperCase() + palabraCamel.slice(1).toLowerCase();
    }).join("");
  }

  alert(camelize("background_color"));
  alert(camelize("list_style_image"));
  alert(camelize("_webkit_transition"));