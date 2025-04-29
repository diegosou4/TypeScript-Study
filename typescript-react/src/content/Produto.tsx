import React from "react"
import { GlobalContext } from "./GlobalContext"


function Produto()
{
    const global = React.useContext(GlobalContext);
    function handleClick(){
        global.setContar(global.contar + 1);
    }
    return (
        <>
            <div>
                    <p>{global.nome}</p>
                    <p className="mt-2">{global.nac}</p>
                    <button className="bg-green-300 hover:bg-green-500 cursor-pointer w-28 rounded-sm mt-3" onClick={handleClick}>Contar {global.contar}</button>
            </div>
        </>

    )

}

export default Produto