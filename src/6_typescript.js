"use strict";
class User {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        User.addCount();
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    static addCount() {
        this.count++;
        console.log(this.count);
    }
}
User.count = 0;
const user = new User(1, "Sahil");
const user1 = new User(2, "Sid");
console.log(`User id:   ${user.getId()}`);
console.log(`User Name: ${user.getName()}`);
User.addCount();
