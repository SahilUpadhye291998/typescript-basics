"use strict";
class Polymorphism {
    // Actual Implementation
    print(x) {
        if (typeof x === 'number') {
            return "The number you have entered is a number";
        }
        else if (typeof x === 'string') {
            return "The number you have entered is a string";
        }
        else {
            throw new Error('Invalid argument types for add method.');
        }
    }
}
// Usage
let poly = new Polymorphism();
console.log(poly.print(12));
console.log(poly.print("sahil"));
//   poly.print(true); // this will give you an error
