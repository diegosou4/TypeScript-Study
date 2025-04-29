import React from "react";
import ProdutosT from "./TypeProdutos";
import Prod from "./Produtos";
import Produtos from "./Produtos";

type ButtonProdutosProps = {
    nomeProduto : string,
}





function ButtonProdutos({nomeProduto} : ButtonProdutosProps){

    async function ApiProdutos(event : any) {
     
        setLoading(true);
        try{

            const response = await fetch(`https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`,);
            const produtos : ProdutosT = await response.json();
            setProdutos(produtos);
        }catch{
            console.log('Erro ao carregar produtos');
        } finally{
            setTimeout(() => {
                setLoading(false);
            },2000);
        }
    }
    const [produtos, setProdutos] =  React.useState<ProdutosT | null>(null);
    const [loading, setLoading] = React.useState(false);
    return(
        <>
            <button className=" bg-yellow-300 px-8 py-1 rounded-md cursor-pointer
         hover:bg-yellow-500 hover:text-white" onClick={ApiProdutos}>
            {nomeProduto}
         </button>
         {loading  && <p className="text-center">Carregando...</p>}
        {!loading && produtos  &&<Prod.Produtos produtos={produtos} />}
        
        </>
    )
}


export default ButtonProdutos