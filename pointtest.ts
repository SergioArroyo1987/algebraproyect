import { point } from "./point";
let nuevo=new point(2,2);
console.log(nuevo.getx());
console.log(nuevo.gety());
nuevo.setx(3);
nuevo.sety(3);
console.log(nuevo.tostring());
let nuevo1=new point(4,4);
console.log(nuevo.distancetolorign());
console.log(nuevo1.calculatedistance(nuevo));





