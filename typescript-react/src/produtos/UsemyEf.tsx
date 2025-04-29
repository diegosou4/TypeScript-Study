// Quando o usuário clicar em um dos botões, faça um fetch do produto clicado utilizando a api abaixo
// https://ranekapi.origamid.dev/json/api/produto/notebook
// https://ranekapi.origamid.dev/json/api/produto/smartphone
// Mostre o nome e preço na tela (separe essa informação em um componente Produto.js)
// Defina o produto clicado como uma preferência do usuário no localStorage
// Quando o usuário entrar no site, se existe um produto no localStorage, faça o fetch do mesmo


import ProdutosT from "./TypeProdutos";
import React from "react";

function UsemyEf(){
    const [produtos, setProdutos] = React.useState<ProdutosT | null>(null);
    async function loadProdutos(select: string): Promise<void> {
        
        try {
            const url : string = `https://ranekapi.origamid.dev/json/api/produto/${select}`;
            const prod = await fetch(url);
            const jsonF: ProdutosT = await prod.json();
            setProdutos(jsonF);
            window.localStorage.setItem('produto', JSON.stringify(jsonF.id));
        } catch (e) {
            console.log(e);
        }
    }


    React.useEffect(() => {
        if (produtos !== null) 
            window.localStorage.setItem('produto', produtos.id);
    }, [produtos]);
    React.useEffect(() => {
        const pref = window.localStorage.getItem('produto');
        if (pref !== null) {
            loadProdutos(pref);
        }
    }, []);

    return ( 
        <>  
            <div className="text-start w-96">
               {produtos && <h1 className="text-4xl capitalize font-semibold">Preferencia : {produtos.id}</h1>}
            <div className="flex flex-row gap-10 mb-2 mt-2">
               
                <button className="bg-yellow-300 rounded-xl w-25  h-8 cursor-pointer hover:bg-yellow-500 mt-2" onClick={() => loadProdutos('notebook')}>Notebook</button>
                <button className="bg-yellow-300 rounded-xl w-30 h-8  cursor-pointer hover:bg-yellow-500 mt-2" onClick={() => loadProdutos( 'smartphone')}>Smartphone</button>
            </div>
            {produtos && (
                <>
                    <h2 className="text-3xl capitalize font-semibold">{produtos.id}</h2>
                    <h2 className="text-2xl">R${produtos.preco}</h2>
                </>
                )}

            </div>
        
        </>
    )
}


export default UsemyEf;