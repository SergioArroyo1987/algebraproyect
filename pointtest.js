"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var point_1 = require("./point");
var nuevo = new point_1.point(2, 2);
console.log(nuevo.getx());
console.log(nuevo.gety());
nuevo.setx(3);
nuevo.sety(3);
console.log(nuevo.tostring());
var nuevo1 = new point_1.point(4, 4);
console.log(nuevo.distancetolorign());
console.log(nuevo1.calculatedistance(nuevo));