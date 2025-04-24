import React, { Children } from "react"

const Titulo = (props : any) => {
    return( <>
    <h1 
    className="text-center text-2xl text-purple-400 font-bold"
    >{props.texto}
    </h1>
    <p className="text-center font-bold text-gray-700">{props.prf}</p>
    </>
    )
}


const TituloDestruturuado = ( {texto, prf} : any) => {
    return( <>
        <h1 
        className="text-center text-2xl text-purple-400 font-bold"
        >{texto}
        </h1>
        <p className="text-center font-bold text-gray-700">{prf}</p>
        </>
        )
}

const TituloChildren = ({texto,prf , children} : any) => {
    return( <>
        <h1 
        className="text-center text-2xl text-purple-400 font-bold"
        >{texto}
        </h1>
        <p className="text-center font-bold text-gray-700">{prf}</p>
        {children ? <p className="text-center font-bold text-yellow-400">{children}</p> : null}
        </>
        )


}

export default {
    Titulo, 
    TituloDestruturuado,
    TituloChildren
} 