/**
 *     
    Interface Definition (Callback):
        The Callback interface is defined to describe a function type that takes a single parameter of type string and returns void. This is a common pattern for callback functions in TypeScript.

    Function Using the Callback (process):
        The process function is defined to take a parameter named callback with the type specified by the Callback interface.
        Inside the function, some processing is performed, and the callback function is invoked with a result ("Processed data").

    Callback Implementation:
        The process function is then used with an inline callback function.
        The inline callback function takes a parameter named data of type string and logs a message using that data.

    Usage:
        When calling the process function, you provide the inline callback function directly as an argument.
        TypeScript ensures that the provided callback function adheres to the structure defined by the Callback interface.

    Type Safety:
        By using the Callback interface, you add a level of type safety. If the structure of the callback function doesn't match what the interface expects, TypeScript will raise an error.
 */


interface Callback {
    (message: string): void;
}

function process(callback: Callback) : void {
    const result = "Processing data";

    callback(result);
}

process((data) => {
    console.log(`We will start with the implimentation for the data : ${data}`);
});