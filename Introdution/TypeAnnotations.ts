
// Tipos basicos
let nome: string = 'Diego';
let idade: number = 23;
let adulto: boolean = true;
let simbolo: symbol = Symbol('qualquer-symbol');
let big: bigint = 10n;

// Arrays
let arrayDeNumeros: Array<number> = [1, 2, 3, 4, 5];
let arrayDeNumeros2: number[] = [1,2,3];
let arrayDeStrings: Array<string> = ['a', 'b'];
let arrayDeStrings2: string[] = ['a','b'];

// Objeto
//                                              ? Chave opcional
let pessoa: {nome: string, idade: number, adulto?: boolean} =
{
    nome: 'Diego', 
    idade: 18,
    adulto: true
}


function soma(x: number, y: number): number
{
    return x + y
}


const soma2: (x: number, y: number) => number = (x ,y) => x + y;
