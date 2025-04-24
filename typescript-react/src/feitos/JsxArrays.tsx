import React from "react";

const produtos = [
    {
      id: 1,
      nome: 'Smartphone',
      preco: 'R$ 2000',
      cores: ['#29d8d5', '#252a34', '#fc3766'],
    },
    {
      id: 2,
      nome: 'Notebook',
      preco: 'R$ 3000',
      cores: ['#ffd045', '#d4394b', '#f37c59'],
    },
    {
      id: 3,
      nome: 'Tablet',
      preco: 'R$ 1500',
      cores: ['#365069', '#47c1c8', '#f95786'],
    },
  ];


  const ShowProdutos = () =>
  {
    return(
        <div>
        {produtos.
            filter(({preco}) => Number(preco.replace("R$ ",'')) > 1500)
            .map((produto) => (
                <div className="*:mt-2" key={produto.id}>
                    <h1 className="text-white">Produto: {produto.nome}</h1>
                    <p className="text-white text-2xl">Preco: {produto.preco}</p>
                    <ul>
                    {produto.cores.map(cores => (
                        <li style={{ color: 'white', background : cores}} 
                            className="text-cyan-400 text-lg" key={cores}>{cores}  
                            </li>
                    ))}
                    </ul>
                </div>
            ))}
        </div>
    )
  }


  export default {
    ShowProdutos
  }