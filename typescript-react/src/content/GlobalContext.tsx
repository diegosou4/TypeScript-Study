import React from "react";


export const GlobalContext = React.createContext<any>(null);


export const GlobalStorage = ({children} : any) => {

    const [contar, setContar] = React.useState(0);


    return <GlobalContext.Provider value={{nome: 'Diego', nac: 'Brasileiro', contar, setContar}}>{children}</GlobalContext.Provider>
}