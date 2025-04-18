
// interface Produto {
//     nome: string;
//     preco: number;
//     novo: boolean;
// }

// let chave: keyof Produto;
// // let chave: "nome" | "preco" | "novo";

// chave = 'preco';

// function coordenadas(x: number, y : number){
//     return { x, y};
// }


// let coord: typeof coordenadas;

// coord = (x: number, y: number) => {
//     return {
//         x,
//         y
//     };
// };


interface Elementos {
    a: HTMLAnchorElement;
    video: HTMLVideoElement;
    div: HTMLElement;
    body: HTMLBodyElement;
    audio: HTMLAudioElement;
}


// Assim eu garanto que meu seletor vai ser um dos valores da interface
function selecionar<Chave extends keyof Elementos>(
    seletor: Chave
    ): Elementos[Chave] | null {
    return document.querySelector(seletor);
}

selecionar('a');