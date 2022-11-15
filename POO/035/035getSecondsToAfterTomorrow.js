/* 035getSecondsToAfterTomorrow():  ¿Cuantos segundos faltan para el día de después 
de mañana? Crea una función getSecondsToAfterTomorrow() que devuelva la cantidad 
de segundos que faltan para el día después de mañana.
Por ejemplo, si ahora son las 23:00, entonces:
getSecondsToAfterTomorrow() == 3600 + todos los segundo de un día
P.D.: La función debe poder funcionar para cualquier día, sin valores fijos en el código”. */

"use strict";

function getSecondsToAfterTomorrow() {

        let now = new Date();
        // Obtenemos la hora minutos y segundos que hay ahora.
        let hour = now.getHours();
        let minutes = now.getMinutes();
        let seconds = now.getSeconds();
        // Calculamos los segundos totales que llevamos hasta ahora.
        let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
        let totalSecondsInADay = 86400;
        // Le restamos los segundos totales que tiene un día con los que ya llevamos, y nos dará lo que falta para acabar el día.
        return totalSecondsInADay - totalSecondsToday;
    }

alert(getSecondsToAfterTomorrow());