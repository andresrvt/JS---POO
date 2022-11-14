/* 009otherCalculator.js/.html: Crear una función constructora Calculator que crea 
objetos con 3 métodos:
read() pide dos valores usando prompt y los guarda en las propiedades del objeto con 
los nombres a y b.
sum() devuelve la suma de estas propiedades.
mul() devuelve el producto de la multiplicación de estas propiedades.
Por ejemplo:
let calculator = new Calculator();
calculator.read();
alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() ); */

"use strict"

function Calculator() {
    a : undefined;
    b : undefined;
    
    this.read = function(){
      this.a = + prompt("Introdzca valor de a");
      this.b = + prompt("Introdzca valor de b");
    
      return this.a + "," + this.b;
    },

    this.sum = function(){
      let resultado = 0;
      resultado = this.a + this.b;
      return resultado;
    },

    this.mul = function(){
      let solucion = 0;
      solucion = this.a * this.b;
      return solucion;
    }
  
  };

  let calculator = new Calculator;
  
  alert(calculator.read());
  alert(calculator.sum());
  alert(calculator.mul());