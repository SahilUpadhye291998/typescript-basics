"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Geometry = void 0;
var Geometry;
(function (Geometry) {
    Geometry.PI = Math.PI;
    function calculateCircumference(radious) {
        return 2 * Geometry.PI * radious;
    }
    Geometry.calculateCircumference = calculateCircumference;
    function calculateArea(radious) {
        return Geometry.PI * radious * radious;
    }
    Geometry.calculateArea = calculateArea;
})(Geometry || (exports.Geometry = Geometry = {}));
