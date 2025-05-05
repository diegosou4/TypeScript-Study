

const Produtos = ({ref ,id, handleClick} :any) =>{

    return(
        <div className="row-span-1 flex flex-col items-center space-y-2">  
            <img src={ref.fotos[0].src} alt=""
            id={id}
            onClick={handleClick}
            className="w-80 hover:w-86 hover:z-10 rounded-md cursor-pointer shadow-md transition duration-500 ease-in"/>
            <h1
                className="text-xl font-medium"
            >{ref.nome}</h1>
        </div>


    )


}


export default Produtos;