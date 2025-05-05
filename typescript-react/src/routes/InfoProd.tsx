


const InfoProd = ({produto} : any) =>{
    return(
        <div className="grid grid-cols-1 mt-8">
            <div className="ml-23 grid-cols-3">
                <div className="flex flex-row">
                    <img src={produto.fotos[0].src} className="w-80 rounded-md" alt=""/>
                    <div className="ml-10 ">
                        <h1 className="text-3xl font-medium font-serif mb-4">{produto.nome}</h1>
                        <span className="text-xl bg-green-300 rounded-md px-2 py-1 inline-block">R${produto.preco}</span>
                        <p className="text-xl w-90 mt-4">{produto.descricao}</p>
                    </div>
                </div>
                <img src={produto.fotos[1].src} 
                className="w-80 rounded-md mt-10 " alt=""/>                
            </div>
            
        </div>
    )


}


export default InfoProd;