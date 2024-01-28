"use strict";
function simpleFunction() {
    console.log("Sample logging message");
}
function sampleParameterMessage(num1, num2) {
    return num1 + num2;
}
function sampleOptionalParameter(num1, num2) {
    console.log(`Number: ${num1} | optionalNumber : ${num2}`);
}
simpleFunction();
console.log(sampleParameterMessage(1, 2));
sampleOptionalParameter(1);
