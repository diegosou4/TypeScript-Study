export class Person {
    constructor(
        public name: string,
        public lastname: string, 
        private age: number,
        protected nif: string,

    ){}

    public getAge(): number {
        return this.age;
    }
    public getName(): string {
        return this.name;
    }
    public getLast(): string {
        return this.lastname;
    }
    public getFullName(): string {
        return this.getName() +  ' ' + this.getLast();
    }
    public getNif(): string{
        return this.nif;
    }
}

export class Student extends Person {
    constructor(
        name: string,
        lastname: string, 
        age: number,
        nif: string,
        public classmate: string,
    ){
      super(name,lastname,age,nif);  
    }
    public getClassmate(): string {
        return this.classmate;
    }
}
export class Client extends Person {
    public getFullName(): string {
        return 'O nome do cliente e ' + this.getName() +  ' ' + this.getLast();
    }
}


const person = new Person('Diego', 'Souza', 24, '434343434');
const student = new Student('Joao', 'Souza', 24, '30393030', '2B');
const client = new Client('Jose', 'Souza', 24, '30393030');

console.log("Person", person.getFullName());
console.log("Age", student.getAge());
console.log("Student Classmate", student.getClassmate());