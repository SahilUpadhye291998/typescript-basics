interface Animal {
    id: number;
    name: string;
    age?: number;

    speak(): void;
}

class Dog implements Animal {

    id: number;
    name: string;
    age?: number | undefined;

    constructor(id: number, name: string, age?: number){
       this.id = id;
       this.name = name;
       this.age = age; 
    }

    speak(): void {
        console.log(`ID is : ${this.id} | name is : ${this.name} | age is ${this.age}`);
    }

}

const dog1: Animal = new Dog(1, "dog 1");
const dog2: Animal = new Dog(2, "dog 2", 12);
dog1.speak();
dog2.speak();