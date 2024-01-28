"use strict";
class Dog {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    speak() {
        console.log(`ID is : ${this.id} | name is : ${this.name} | age is ${this.age}`);
    }
}
const dog1 = new Dog(1, "dog 1");
const dog2 = new Dog(2, "dog 2", 12);
dog1.speak();
dog2.speak();
