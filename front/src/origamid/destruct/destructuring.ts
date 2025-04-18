const { body }: { body: HTMLElement } = document;



interface Produto {
    nome: string;
    preco: number
}

function handleData({ nome , preco} : Produto) {
    nome.includes('book');
    preco?.toFixed();
}

handleData({
    nome: "Notebook",
    preco: 500,
});


interface Mouse {
    currentTarget : EventTarget | null;
    pageX: Number;
}

function handleClick({ currentTarget, pageX} : Mouse){
    if(currentTarget instanceof HTMLElement)
        currentTarget.innerHTML = `<h1>Mouse click em x: ${pageX} </h1>`;
}


document.documentElement.addEventListener('click', handleClick);


function comparar(tpo :string,...nuros : number[])
{
    if(tpo === "menor")
        return Math.min(...nuros);
    if(tpo == "maior")
        return Math.max(...nuros);
}

console.log(comparar('menor', 3,4,5,6,29,10,31));