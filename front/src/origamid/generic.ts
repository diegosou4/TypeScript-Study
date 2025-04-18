// type Variavel = boolean | string | number;

// function retorno<Variavel>(a:Variavel) :Variavel{
//     return a;
// }

// console.log(retorno<string>("A Game"));
// console.log(retorno<number>(200));
// console.log(retorno<boolean>(true));


const number : number[] = [1,2,3,4,5,6,7,8,9];
const frutas: string[] = ["Banana", "Pera", "Uva", "Laranja", "Limao", "Maca"];
// O Uso desse T e muito comum
function firstFive<T>(lista: T[]): T[]{
    return lista.slice(0,5);
}

console.log(firstFive(number));
console.log(firstFive(frutas).map(item => item.toUpperCase()));



function notNull<T>(arg: T)
{
    if(arg !== null) return arg;
    else return null;
}

console.log(notNull('Diego')?.toLocaleLowerCase());
console.log(notNull(10)?.toFixed(1));



function tipoDado<T>(a: T) : { dado : T, tipo: string} {
    const resultado = {
        dado : a,
        tipo: typeof a,
    };
    console.log(resultado);
    return(resultado);
}

tipoDado(200).tipo;
tipoDado(true).tipo;