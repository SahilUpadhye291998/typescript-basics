class Car {
    drives(): string{
        return "Animal drivess"
    }
}

class BMW extends Car {
    drives(): string {
        return "BWM drivess"
    }
}

class Audi extends Car {
    drives(): string {
        return "Audi drivess"
    }
}

let bmw: BMW = new BMW();
console.log(bmw.drives())

let audi: Audi = new Audi();
console.log(audi.drives())
