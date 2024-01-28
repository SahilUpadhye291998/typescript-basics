"use strict";
class Car {
    drives() {
        return "Animal drivess";
    }
}
class BMW extends Car {
    drives() {
        return "BWM drivess";
    }
}
class Audi extends Car {
    drives() {
        return "Audi drivess";
    }
}
let bmw = new BMW();
console.log(bmw.drives());
let audi = new Audi();
console.log(audi.drives());
