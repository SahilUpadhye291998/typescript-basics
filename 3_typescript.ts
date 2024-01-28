function simpleFunction() : void {
    console.log("Sample logging message")
}

function sampleParameterMessage(num1: number, num2: number){
    return num1 + num2;
}

function sampleOptionalParameter(num1: number, num2?: number){
    console.log(`Number: ${num1} | optionalNumber : ${num2}`)
}

simpleFunction();
console.log(sampleParameterMessage(1,2));
sampleOptionalParameter(1);