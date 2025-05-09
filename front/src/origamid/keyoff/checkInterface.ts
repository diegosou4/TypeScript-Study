
async function fetchData<T>(url:string): Promise<T> {
    const base = 'https://api.origamid.dev/json';
    const response = await fetch(base + url);
    return await response.json();
}

function checkInterface<T>(
    obj : unknown,
    key: keyof T
    ): obj is T{
    if(obj && typeof obj === 'object' && key in obj)
        return true;
    return false;
}

async function handleData() {

    const jogo = await fetchData<Jogo>("/jogo.json");
    if(checkInterface<Jogo>(jogo, "desenvolvedora"))
        console.log(jogo.desenvolvedora)

    const livro = await fetchData<Livro>("/livro.json");
    if(checkInterface<Livro>(livro, "autor"))
        console.log(livro.autor);
}

handleData();


interface Jogo {
    nome: string;
    ano: number;
    desenvolvedora: string;
    plataformas: string[]
}

interface Livro {
    nome: string;
    ano: number;
    autor: string;
    paginas: number;
}