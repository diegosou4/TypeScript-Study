// function extractText<Tipo extends HTMLElement>(el: Tipo)
// {
//     return {
//         text: el.innerText,
//         el,
//     }
// }

// const linkp = document.querySelector('a');


// if(linkp){
//     console.log(extractText(linkp).el)
// }


// function $<Tipo extends Element>(selector: string): Tipo | null{
//     return document.querySelector(selector);
// }

// const linka = $<HTMLAnchorElement>('a')?.href;


const linkb = document.querySelector<HTMLAnchorElement>('.link');


if(linkb instanceof HTMLAnchorElement){
    linkb?.href;
}

async function getData<T>(url:string): Promise<T> {
    const response = await fetch(url);
    return await response.json();
}

interface Notebook {
    nome: string,
    preco: number,
}

async function handleData()
{
    const notebook = await getData<Notebook>('https://api.origamid.dev/json/notebook.json');
    console.log(notebook.preco);
}

handleData();