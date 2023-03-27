import { point } from "./point";
let nuevo=new point(2,2);
console.log(nuevo.getx());
console.log(nuevo.gety());
nuevo.setx(-2);
nuevo.sety(3);
console.log(nuevo.tostring());
let nuevo1=new point(7,4);
let nuevo2=new point(5,5);
console.log(nuevo.distancetolorign());
console.log(nuevo1.calculatedistance(nuevo));
console.log(nuevo.calcularcuadrant());
let array=[nuevo,nuevo1,nuevo2];
let solucion=nuevo.calculatenearest(array);
console.log(solucion.tostring());







