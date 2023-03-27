"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.point = void 0;
var point = /** @class */ (function () {
    function point(x, y) {
        this.x = x;
        this.y = y;
    }
    point.prototype.getx = function () {
        return this.x;
    };
    point.prototype.gety = function () {
        return this.y;
    };
    point.prototype.setx = function (x) {
        this.x = x;
    };
    point.prototype.sety = function (y) {
        this.y = y;
    };
    point.prototype.tostring = function () {
        var devolver = "".concat(this.x, ",").concat(this.y);
        return devolver;
    };
    point.prototype.distancetolorign = function () {
        var devolver = Math.sqrt(((Math.pow(this.x, 2)) + (Math.pow(this.y, 2))));
        return devolver;
    };
    point.prototype.calculatedistance = function (a) {
        var devolver = Math.sqrt((Math.pow(a.getx() - this.y, 2) + Math.pow(a.gety() - this.y, 2)));
        return devolver;
    };
    return point;
}());
exports.point = point;
