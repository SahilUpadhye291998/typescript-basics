function addValues(a: string | number, b: string | number): string | number {
    // Type guard to check if both values are numbers
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b; // Addition is safe for numbers
    } else {
        return `${a}${b}`; // Concatenate as strings for other cases
    }
}

const result = addValues(5, 10);
console.log(result); // Output: 15

const concatenatedResult = addValues("Hello, ", "World!");
console.log(concatenatedResult); // Output: Hello, World!  


type sampleObject = {
    name: string,
    id: number
}

function displayValues(input: sampleObject) : void {
    console.log(`This id for the user is ${input.id} and name is ${input.name}`)
}

let sample : sampleObject = {
    id: 1,
    name: "Sahil"
}

displayValues(sample);