function sampleFunction() : Promise<string> {
    console.log("===============================")
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Data fetched successfully!");
        }, 2000);
    });
}

sampleFunction().then(data => console.log(`Data from the fetch function : ${data}`)).catch(error => console.log(error.message))

async function fetchDataAsync() : Promise<string> {
    console.log("*********************************");
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetced successfully!!!!!");
        }, 2000)
    })
}

async function caller(): Promise<void> {
    try{
        const data = await fetchDataAsync();
        console.log("===================================")
        console.log(data);
    }catch(error){
        console.log(error)
    }
}

caller();