import React from "react";


export const ProdutoContext = React.createContext<any>(null);


export const ProdutoStorage = ({children} : any )=> {
    const [dados, setDados] = React.useState(null);


    async function getProd() {
        try{
            const prod = await fetch('https://ranekapi.origamid.dev/json/api/produto/')
            const object = await prod.json();
            setDados(object);
        }catch{
            console.log("Deu errado");
        }
    }

    React.useEffect(() => {
        getProd();
    },[]);

    function cleanData() {
        setDados(null);
    }

    return (
    <ProdutoContext.Provider value={{dados, cleanData}}>
        {children}
    </ProdutoContext.Provider>
    )

}

