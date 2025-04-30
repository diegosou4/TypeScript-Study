import React from "react";
import { ProdutoContext } from "./ProdutoContext";



const ProdutoComp = () =>{
    const prod = React.useContext(ProdutoContext);

    function handleClick(){
        console.log(prod);
        console.log("Cheguei aqui");
        prod.cleanData();
    }
    return(
        <>
            <div>
                {prod.dados && <p>Deu fetch 
                {prod.dados.map((prod : any, index : number)  =>
                <li key={`${prod.nome}-${index}`}>{prod.nome} </li>)}
                </p>}
                <button className="bg-red-300 hover:bg-red-500 w-28 cursor-pointer  mt-2" onClick={handleClick}>Limpar</button>

            </div>
        </>

    )
}

export default ProdutoComp;