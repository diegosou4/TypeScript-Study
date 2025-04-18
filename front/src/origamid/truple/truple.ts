

function soma(data: Vendas[]): void
{
    let total = 0;
    for(let i = 0; i < data.length; i++)
        total = total + data[i][1];

    const soma = data.reduce((total, venda) =>{
        return total + venda[1];
    },0)
    document.body.innerHTML += `<p>Total: R$ ${soma}</p>`;
}

async function fetchback()
{
    const data = await fetch('https://api.origamid.dev/json/vendas.json');
    const json =  await data.json();
    soma(json);
}

fetchback();

interface Detalhes
{
    cor: string;
    marca: string;
}

type Vendas =[ string, number, string,Detalhes]