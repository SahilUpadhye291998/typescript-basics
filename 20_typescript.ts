function identity<T>(arg: T): string {
    return typeof arg;
}

const result1: string = identity(5);
const result2: string = identity("sahil");

console.log(`type for the result1 is : ${result1}`);
console.log(`type for the result2 is : ${result2}`);

console.log("====================================");

class Box<T>{
    private value: T;

    constructor(value: T){
        this.value = value;
    }

    getType(): T {
        return this.value;
    }

    getDataType(): string {
        return typeof this.value;
    }
}

const box1: Box<number> = new Box<number>(42);
const box2: Box<string> = new Box<string>("sahil");

console.log(`Box1: ${box1.getType()}       |   Box1: ${box1.getDataType()}`)
console.log(`Box2: ${box2.getType()}    |   Box2: ${box2.getDataType()}`)

console.log("====================================");

interface Pair<T, U> {
    id: T,
    name: U
}

const numberStringPair: Pair<number, string> = {id: 1, name: "sahil"}
const numberBooleanPair: Pair<number, boolean> = {id: 2, name: false}

console.log(numberStringPair)
console.log(numberBooleanPair)