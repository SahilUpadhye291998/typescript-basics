"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LogClass(target) {
    console.log("==================================");
    console.log(`Class ${target.name} is decorated`);
    console.log(target);
    console.log("==================================");
}
let ExampleClass = class ExampleClass {
    // class logic here
    constructor(input) {
        this.input = input;
    }
};
ExampleClass = __decorate([
    LogClass
], ExampleClass);
console.log('======================================');
function logMethod(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`Method ${key} is called with arguments: ${args}`);
        const result = originalMethod.apply(this, args);
        console.log(`Method ${key} execution result: ${result}`);
        return result;
    };
    return descriptor;
}
class MethodDecoratorClass {
    greet(name) {
        return `Hello, ${name}!`;
    }
}
__decorate([
    logMethod
], MethodDecoratorClass.prototype, "greet", null);
const exampleInstance = new MethodDecoratorClass();
exampleInstance.greet("John");
console.log("-----------------------------------");
// Property decorator
function logProperty(target, key) {
    let value = target[key];
    const getter = function () {
        console.log(`Getting value of property ${key}: ${value}`);
        return value;
    };
    const setter = function (newValue) {
        console.log(`Setting value of property ${key} to: ${newValue}`);
        value = newValue;
    };
    Object.defineProperty(target, key, {
        get: getter,
        set: setter,
        enumerable: true,
        configurable: true,
    });
}
class PropertyLoggerClass {
    constructor() {
        this.message = "Hello, TypeScript!";
    }
}
__decorate([
    logProperty
], PropertyLoggerClass.prototype, "message", void 0);
const propertyInstance = new PropertyLoggerClass();
console.log(propertyInstance.message); // Logs the getter
propertyInstance.message = "Updated Message"; // Logs the setter
