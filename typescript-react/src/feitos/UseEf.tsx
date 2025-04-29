import React from "react";

type fotosT = {
    titulo : string;
    src : string;

}


type ProdutosT = {
    id : string;
    fotos : fotosT,
    nome: string,
    preco: number,
    descricao: string,
    vendido: boolean,
    usuario_id: string
}

export function UseEF(){
    const [contar, setContar] = React.useState(0);
    const [dados, setDados] = React.useState<ProdutosT | null>(null);

    React.useEffect(() => {
        fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
        .then((response) => response.json()
        .then((json) => {
            console.log(json);
            const produtos : ProdutosT = json;
            setDados(produtos);
        }));
    }, []);

    return (
        <div>
          {dados && (
            <div>
              <h1>{dados.nome}</h1>
              <p>R$ {dados.preco * contar}</p>
            </div>
          )}
          <button className="bg-yellow-300 rounded-md w-10 cursor-pointer hover:bg-yellow-500 mt-2" onClick={() => setContar(contar + 1)}>{contar}</button>
        </div>
    );
}