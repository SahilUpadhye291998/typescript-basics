"use strict";
const function1 = () => {
    console.log("logging function");
};
const function2 = (num1, num2) => {
    return num1 + num2;
};
const function3 = (num1, num2) => {
    console.log(`Number: ${num1} | optional: ${num2}`);
};
function1();
console.log(function2(12, 12));
function3(12);
