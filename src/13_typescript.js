"use strict";
class Student {
    constructor(name) {
        this.name = name;
    }
    getStudentName() {
        return this.name;
    }
}
const student = new Student("Sid");
console.log(student.getStudentName()); // Output: Sid
// console.log(student.name); // Error: Property 'name' is private.
