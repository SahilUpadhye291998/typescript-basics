class SamplePromiseApplication {
    counter: number;

    constructor() {
        this.counter = 0;
        console.log(this.counter);
    }

    async somePromiseFunction(): Promise<string> {
        return new Promise((resolve, reject) => {
            this.counter += 1;
            setTimeout(() => {
                resolve("data is resolved");
            }, 2000)
        });
    }

    getCounter(): number {
        return this.counter;
    }

}

const sampleData = new SamplePromiseApplication();

sampleData.somePromiseFunction().then((data) => {
    console.log(`data for the first time: ${data}`);
    console.log(`First time: ${sampleData.counter}`);
    return sampleData.somePromiseFunction();
}).then((data) => {
    console.log(`data for the second time: ${data}`);
    console.log(`Second time: ${sampleData.counter}`);
})