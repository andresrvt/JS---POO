/* 036formatToRelative.js/.html: Cambia el formato a fecha relativa. Escribe una función 
formatDate(date) que muestre la fecha en el siguiente formato:
Si a partir de la fecha date pasó menos de 1 segundo, debe devolver "ahora mismo".
De no ser así, si a partir de la fecha date pasó menos de 1 minuto, debe retornar "hace 
n seg,".
De no ser así, si pasó menos de una hora, debe devolver "hace n min.".
De no ser así, debe retornar la fecha completa en el formato "DD.MM.AA HH:mm". Es 
decir: "día.mes.año horas:minutos", cada uno de ellos en formato de 2 dígitos, por ej. 
31.12.16 10:00. */

"use strict";

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return "Ahora mismo";
    } else if (diffMin < 1) {
      return "Hace " + diffSec + "seg"
    } else if (diffHour < 1) {
      return "Hace " + diffMin + "min"
    } else {
      return dayOfMonth + "." + month + "." + year + " " + hour + ":" + minutes
    }
  }
  alert( formatDate(new Date(new Date - 1)) ); 

  alert( formatDate(new Date(new Date - 30 * 1000)) ); 
  
  alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); 

  alert( formatDate(new Date(new Date - 86400 * 1000)) );