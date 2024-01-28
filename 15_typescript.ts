abstract class Bike {
    abstract changeGear(): void;

    getClass(): string {
        return "Bike"
    }

}

class Duke extends Bike {
    changeGear(): void {
        console.log(`Duke is change gear`)
    }
}

class Splender extends Bike {
    changeGear(): void {
        console.log(`Splender is change gear`)
    }
}

let duke: Bike = new Duke(); 
let splender: Bike = new Splender(); 

duke.changeGear();
splender.changeGear();
