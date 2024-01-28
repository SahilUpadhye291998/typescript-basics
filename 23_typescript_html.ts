// TODO: we will add table from API
async function fetchPersonURLData<T>(url: string): Promise<T> {
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
async function fetchPerson(): Promise<Person[]> {
    let persons: Person[] = [];
    try {
        console.log("---------------------------------------------")
        persons = await fetchPersonURLData<Person[]>('http://localhost:8080/');
        console.log('Person:', persons);
        console.log("---------------------------------------------")
        return new Promise((resolve) => resolve(persons));
    } catch (error) {
      console.error(error);
      return new Promise((resolve, reject) => reject(persons));

    }
}

let element: HTMLOutputElement = document.getElementById("info") as HTMLOutputElement;

async function addData() {
    const data: Person[] = await fetchPerson();
    console.log(data);
    let trData = ``;
    for(let i: number = 0;i<data.length;i++){
        trData += `
            <tr>
                <td>${data[i].id}</td>
                <td>${data[i].name}</td>
            </tr>
        `;
    }
    element.innerHTML = trData;
}
addData();

addData();
