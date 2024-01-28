"use strict";
function handleSubmit() {
    let nameInput = document.getElementById("name");
    let outputElement = document.getElementById("output");
    console.log("click for the application");
    if (nameInput && outputElement) {
        const userName = nameInput.value.trim();
        if (userName) {
            const greeting = `Hello ${userName}`;
            outputElement.textContent = greeting;
        }
        else {
            outputElement.textContent = `Please enter the user name`;
        }
    }
}
const submitValue = document.getElementById("submit");
if (submitValue) {
    submitValue.addEventListener("click", handleSubmit);
}
