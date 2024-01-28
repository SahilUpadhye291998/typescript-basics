"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
class SamplePromiseApplication {
    constructor() {
        this.counter = 0;
        console.log(this.counter);
    }
    somePromiseFunction() {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.counter += 1;
                setTimeout(() => {
                    resolve("data is resolved");
                }, 2000);
            });
        });
    }
    getCounter() {
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
});
