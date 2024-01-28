class User {
    private id: number;
    private name: string;

    static count: number = 0;

    constructor(id: number, name: string){
        this.id = id;
        this.name = name;
        User.addCount();
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    static addCount() : void {
        this.count++;
        console.log(this.count);
    }

}

const user: User = new User(1, "Sahil");
const user1: User = new User(2, "Sid");

console.log(`User id:   ${user.getId()}`);
console.log(`User Name: ${user.getName()}`);

User.addCount()