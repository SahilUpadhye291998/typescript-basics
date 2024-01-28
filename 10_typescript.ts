class Parent {
    name: string;
    mobileNumber: string;

    constructor(name: string, mobileNumber: string){
        this.name = name;
        this.mobileNumber = mobileNumber;
    }

    contact(): string{
        return `Name is ${this.name} | contact is ${this.mobileNumber}`
    }

    getName(): string {
        return this.name;
    }

    getMobileNumber(): string {
        return this.mobileNumber
    }

}

class Child extends Parent {

    cName: string;
    marks: number;

    constructor(name: string, mobile: string, cName: string, marks: number) {
        super(name, mobile);
        this.cName = cName;
        this.marks = marks;
    }

    getCName(): string {
        return this.cName;
    }

    getMarks(): number {
        return this.marks;
    }

}

let child: Child = new Child("Parent", "124567890", "Child",12);

console.log(child.contact())

console.log(child.getCName())
console.log(child.getMarks())
