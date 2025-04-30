import React from "react";

const UseFetch = () => {
    const [data,setData] = React.useState(null);
    const [error,setError] = React.useState<string | null>(null);
    const [loading,setLoading] = React.useState< boolean | null>(null);

    const  request = React.useCallback(async (url : string , options? : RequestInit) => {
        let response;
        let json;
        try{
            setLoading(true);
            setError(null);
            response = await fetch(url,options);
            json = await response.json();
            setData(json);    
        } catch(error){
            json = null;
            setError('Error ao carregar dados por favor tente novamente');
        } finally{
            setLoading(false);
            return {response, json};
        }
    },[]);

    return {data, error, loading, request}
}


export default UseFetch;