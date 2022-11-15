/* 033showEruropeanWeekDay.js/.html: En los países europeos se cuentan los días de la 
semana a partir del lunes (número 1), seguido del martes (número 2), hasta el 
domingo (número 7). Escribe una función getLocalDay(date) que devuelva el día de la 
semana “europeo” para la variable date. let date = new Date(2012, 0, 3);  // 3 Jan 2012
alert( getLocalDay(date) ); // tuesday, should show 2
Una vez lo obtengas, tradúcelo a español. */

"use strict";

function getLocalDay(date) {
    let day = date.getDay();

    if(day == 0){
        day = 7;
    }

    return day;
}

let date = new Date(2012, 0, 3); // Debería mostrar 2

alert("Para la fecha 03-01-2012 (martes), el día de la semana en versión europea es: " + getLocalDay(date));