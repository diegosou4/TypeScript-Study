export class Person {
    static defaultAge: number = 0;
    static defaultNif: string = '000.000.000';
    constructor(
        private name: string,
        private lastname: string, 
        private age: number,
        private nif: string,

    ){}
    
    static helloW():void{
        console.log('Hello');
    }
    commomMetod(): void{
        console.log(`O default Age ${Person.defaultAge} e Default NIF ${Person.defaultNif}`);
    }

    static defaultP(name: string, lastname: string): Person{
        return new Person(name,lastname, this.defaultAge, this.defaultNif);
    }
}


const person = new Person('Diego', 'Souza', 24, '434343434');

Person.helloW();


// Posso criar funcoes estaticas para criar nossas classes as vezes nao tenho todas as informacoes , mas consigo criar com o que ja tenho
const incomplete = Person.defaultP('Renato', 'Araujo');
incomplete.commomMetod();
console.log(incomplete);