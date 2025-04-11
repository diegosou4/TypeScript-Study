export class Person {
    constructor(
        private name: string,
        private lastname: string, 
        private age: number,
        private _nif: string,

    ){}
    set nif(value: string){
        this._nif = value;
    }
    get nif(): string{
        return this._nif;
    }

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
    
}


const person = new Person('Diego', 'Souza', 24, '434343434');

console.log(person.nif)
person.nif = '432.123.3442'
console.log(person.nif);