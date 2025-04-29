import React from "react";


type Dados = {
    nome: string;
    idade: number;
    faculdade?: string; 
};
  

const StateBtn = () =>
{
    const [ativo, setAtivo] = React.useState(true);
    const [dados, setDados] = React.useState<Dados>({
        nome: 'Diego',
        idade: 25,
    })

    function handleClick()
    {
        setDados({...dados,faculdade  : 'Possui'});
        setAtivo(!ativo);
    }
    return (
        <>
        <div className="m-8">
            <button 
                onClick={handleClick}
                className="px-8 py-2 rounded-md bg-blue-400 disabled:bg-blue-100 cursor-pointer" >
                        { ativo ? 'Ativo' : 'Invativo'}
                </button>
                <div>
                <p>{dados.nome}</p>
                <p>{dados.idade}</p>
                <p>{dados.faculdade}</p>
                </div>
        </div>
        </>
    )

}

export default StateBtn