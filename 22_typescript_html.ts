function handleSubmit(): void {
    let nameInput: HTMLInputElement = document.getElementById("name") as HTMLInputElement;
    let outputElement: HTMLOutputElement = document.getElementById("output") as HTMLOutputElement;

    console.log("click for the application")

    if(nameInput && outputElement){
        const userName: string = nameInput.value.trim();

        if(userName){
            const greeting: string = `Hello ${userName}`;
            outputElement.textContent = greeting;
        }else{
            outputElement.textContent = `Please enter the user name`;
        }   
    }
    
}

const submitValue = document.getElementById("submit");
if(submitValue){
    submitValue.addEventListener("click", handleSubmit)
}