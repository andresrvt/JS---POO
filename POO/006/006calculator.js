/* 006calculator.js/.html: Crea un objeto calculator con tres métodos:
read() pide dos valores y los almacena como propiedades de objeto con nombres a y b.
sum() devuelve la suma de los valores almacenados.
mul() multiplica los valores almacenados y devuelve el resultado.
let calculator = {
 ... tu código ...
};
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() ); */

"use strict"

let calculator = {
  a : undefined,
  b : undefined,
  read(){
    this.a = + prompt("Introdzca valor de a");
    this.b = + prompt("Introdzca valor de b");
  
    return this.a + "," + this.b;
  },
  sum(){
    let resultado = 0;
    resultado = this.a + this.b;
    return resultado;
  },
  mul(){
    let solucion = 0;
    solucion = this.a * this.b;
    return solucion;
  }

};

alert(calculator.read());
alert(calculator.sum());
alert(calculator.mul());