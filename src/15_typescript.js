"use strict";
class Bike {
    getClass() {
        return "Bike";
    }
}
class Duke extends Bike {
    changeGear() {
        console.log(`Duke is change gear`);
    }
}
class Splender extends Bike {
    changeGear() {
        console.log(`Splender is change gear`);
    }
}
let duke = new Duke();
let splender = new Splender();
duke.changeGear();
splender.changeGear();
