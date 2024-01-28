"use strict";
function identity(arg) {
    return typeof arg;
}
const result1 = identity(5);
const result2 = identity("sahil");
console.log(`type for the result1 is : ${result1}`);
console.log(`type for the result2 is : ${result2}`);
console.log("====================================");
class Box {
    constructor(value) {
        this.value = value;
    }
    getType() {
        return this.value;
    }
    getDataType() {
        return typeof this.value;
    }
}
const box1 = new Box(42);
const box2 = new Box("sahil");
console.log(`Box1: ${box1.getType()}       |   Box1: ${box1.getDataType()}`);
console.log(`Box2: ${box2.getType()}    |   Box2: ${box2.getDataType()}`);
console.log("====================================");
const numberStringPair = { id: 1, name: "sahil" };
const numberBooleanPair = { id: 2, name: false };
console.log(numberStringPair);
console.log(numberBooleanPair);
