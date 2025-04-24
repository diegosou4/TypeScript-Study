import React, { ReactElement } from "react";

function ShowFruits(){
    const fruits : ReactElement[] = [<li key='e1'>Notebook</li>, <li key='e2'>Tablet</li>];

    return(
        <React.Fragment>
            {fruits}
        </React.Fragment>

    )
}

// Maneira correta de retornar um array
// Utilizando o map e o key
function ShowFruitsMap() {
    const fruits: string[] = ['Banana', 'Limao', 'Laranja'];

    return(
            <ul>
            {fruits.map(fruits => (
                <li className="text-cyan-400 text-lg" key={fruits}>{fruits}  </li>
            ))}
            </ul>
    )
}

function FilterBook(){
    const livros = [
        { nome: 'Game of Thrones', ano: 1996},
        { nome: 'Clash of Kings', ano: 1998},
        { nome: 'Storm of Swords', ano: 2000},
    ]
    return (
        <ul>
        {
        livros
            .filter(({ano}) => ano >= 1998 )
            .map(({nome,ano}) => (
            <li className="text-pink-400 text-lg" 
                key={nome}>{nome}, {ano} 
            </li>
        ))}
        </ul>
    );
}


export default {
    ShowFruits,
    ShowFruitsMap,
    FilterBook
} 