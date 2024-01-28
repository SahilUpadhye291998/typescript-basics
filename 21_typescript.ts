async function fetchData(todoNumber: number | string = "") : Promise<void> {
    const response = await (await fetch(`https://jsonplaceholder.typicode.com/todos/${todoNumber}`)).json();
    console.log(response);
}

// fetchData();
// fetchData(2);

console.log("======================================")

interface Todo {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};

async function getTodoData(todoNumber: number): Promise<void> {
    const todos: Todo[] = await (await fetch(`https://jsonplaceholder.typicode.com/todos/${todoNumber}`)).json(); 
    console.log(todos)
}

// getTodoData(1);

console.log("======================================")

async function fetchURLData<T>(url: string): Promise<T> {
    try{
        const response = await fetch(url);

        if(!response.ok){
            throw new Error(`Http error! Please recheck`);
        }

        const data = await response.json();

        return data;
    } catch(error) {
        throw new Error(`Error fetching data ${error}`);
    }
}

interface Person {
    id: number,
    name: string,
};

async function postData(): Promise<void>{
    try {
        const response = await (await fetch(`http://localhost:8080/`, {
            method :"POST", 
            headers : {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            body : JSON.stringify({id: 1, name: "sid"})
        })).json();
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

// postData();

async function fetchTodos(): Promise<void> {
    try {
        console.log("---------------------------------------------")
        const todos: Todo[] = await fetchURLData<Todo[]>('https://jsonplaceholder.typicode.com/todos/1');
        console.log('Todos:', todos);
        
        const persons: Person[] = await fetchURLData<Person[]>('http://localhost:8080/');
        console.log('Person:', persons);
        console.log("---------------------------------------------")
    } catch (error) {
      console.error(error);
    }
  }
  
  fetchTodos();