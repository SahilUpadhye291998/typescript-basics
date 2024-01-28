const function1 = () => {
    console.log("logging function")
}

const function2 = (num1: number, num2: number) : number => {
    return num1 + num2;
}

const function3 = (num1: number, num2?: number) : void=> {
    console.log(`Number: ${num1} | optional: ${num2}`)
}

function1();
console.log(function2(12, 12));
function3(12);