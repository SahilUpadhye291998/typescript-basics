"use strict";
class Parent {
    constructor(name, mobileNumber) {
        this.name = name;
        this.mobileNumber = mobileNumber;
    }
    contact() {
        return `Name is ${this.name} | contact is ${this.mobileNumber}`;
    }
    getName() {
        return this.name;
    }
    getMobileNumber() {
        return this.mobileNumber;
    }
}
class Child extends Parent {
    constructor(name, mobile, cName, marks) {
        super(name, mobile);
        this.cName = cName;
        this.marks = marks;
    }
    getCName() {
        return this.cName;
    }
    getMarks() {
        return this.marks;
    }
}
let child = new Child("Parent", "124567890", "Child", 12);
console.log(child.contact());
console.log(child.getCName());
console.log(child.getMarks());
