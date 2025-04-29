import React from "react";

// Use Ref e bem bacana pois consigo evitar bugs de reuso de funcao para um botao
// Quando e precionados varias vezes



function UsemyReft(){

    const [carrinho, setCarrinho] = React.useState(0);
    const [notificacao, setNotificacao] = React.useState<string | null>(null);
    const timeoutRef  = React.useRef<any>(null);

    function handleClick(){
        setCarrinho(carrinho + 1);
        setNotificacao('Item adicionado ao carrinho');
        timeoutRef.current = setTimeout(() =>{
            setNotificacao(null);
        },2000);
    }
    return (
        <>
            <div> 
                <p>{notificacao}</p>
                <button
                className="bg-yellow-300 hover:bg-yellow-500 w-50 h-8 rounded-sm cursor-pointer" onClick={handleClick}>Adicionar carrinho
                </button>
                <p 
                className="mt-2"
                >Carrinho : {carrinho} </p>
            </div>
        </>
    )

}

export default UsemyReft;