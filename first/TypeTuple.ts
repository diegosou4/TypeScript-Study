
//                  Imutavel
const dadosCliente: readonly [number, string ] =  [ 1, 'DIEGO'];
const dadosCliente1: [number, boolean, string] = [2 , true, 'Diego'];
const dadosCliente2: [number, boolean, string?] = [2 , true];
const dadosCliente3: [number, boolean, ...string[]] = [2 , true];


const array: readonly string[] = ['Diego', 'Souza'];
const array1: ReadonlyArray<string> = ['Diego', 'Souza'];