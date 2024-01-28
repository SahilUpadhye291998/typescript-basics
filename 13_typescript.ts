class Student {
    private name: string;
  
    constructor(name: string) {
      this.name = name;
    }
  
    getStudentName(): string {
      return this.name;
    }
  }
  
  const student = new Student("Sid");
  console.log(student.getStudentName()); // Output: Sid
  // console.log(student.name); // Error: Property 'name' is private.
  