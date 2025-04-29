import ProdutosT from "./TypeProdutos";



function Produtos({produtos} : ProdutosT | any) {
    if(produtos === null) 
        return null;
    return(
        <>
            <div className="bg-gray-100 rounded-md mt-3 *:mt-2 *:pb-2 shadow-md">
                <p className="text-2xl font-bold pt-2 text-shadow-sm">{produtos.id}</p> 
                <div className="flex justify-center items-center mt-2 ">
                <img src={produtos.fotos[0].src} alt={produtos.fotos[0].titulo} className="w-50 justify-center rounded-xl shadow-md"></img>
                </div>
                <p className="text-md font-semibold text-shadow-sm">R${produtos.preco}</p>
                <p className="text-md text-shadow-sm">{produtos.descricao}</p>
                <p className={`${!produtos.vendido ? "text-red-500" : "text-green-500"} text-shadow-sm`}>
                {!produtos.vendido ? "Esgotado" : "Disponível"}</p>
                <p className="text-shadow-sm">Contato: <span className="font-semibold text-shadow-sm">{produtos.usuario_id}</span></p>
                </div>   
        </>
    )
}

export default {
    Produtos
}