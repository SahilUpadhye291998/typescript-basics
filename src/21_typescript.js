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
function fetchData(todoNumber = "") {
    return __awaiter(this, void 0, void 0, function* () {
        const response = yield (yield fetch(`https://jsonplaceholder.typicode.com/todos/${todoNumber}`)).json();
        console.log(response);
    });
}
// fetchData();
// fetchData(2);
console.log("======================================");
;
function getTodoData(todoNumber) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield (yield fetch(`https://jsonplaceholder.typicode.com/todos/${todoNumber}`)).json();
        console.log(todos);
    });
}
// getTodoData(1);
console.log("======================================");
function fetchURLData(url) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch(url);
            if (!response.ok) {
                throw new Error(`Http error! Please recheck`);
            }
            const data = yield response.json();
            return data;
        }
        catch (error) {
            throw new Error(`Error fetching data ${error}`);
        }
    });
}
;
function postData() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield (yield fetch(`http://localhost:8080/`, {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: 1, name: "sid" })
            })).json();
            console.log(response);
        }
        catch (error) {
            console.log(error);
        }
    });
}
// postData();
function fetchTodos() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            console.log("---------------------------------------------");
            const todos = yield fetchURLData('https://jsonplaceholder.typicode.com/todos/1');
            console.log('Todos:', todos);
            const persons = yield fetchURLData('http://localhost:8080/');
            console.log('Person:', persons);
            console.log("---------------------------------------------");
        }
        catch (error) {
            console.error(error);
        }
    });
}
fetchTodos();
