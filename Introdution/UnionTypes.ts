

let nome : string | number | boolean = 'Diego';


function addOrConcat(a: number | string, b: number | string)
{
    if(typeof a === 'number' && typeof b === 'number') return a + b;
    if(typeof a === 'string' && typeof b === 'string') return `${a}${b}`;
}