import Button from "./Button";
import React from 'react'
import Load from "./Load";
import Produtos from './Produtos'
import { useNavigate } from 'react-router-dom';
import UseLocalStorage from "../content/UseLocalStorage";


const Home = () =>{
    const [ref, setRef] = React.useState('');
    const [produtos,setProdutos] = React.useState(null);
    const [loading, setLoading] = React.useState<boolean | null>(null);
    const navigate =  useNavigate();
    const [state, setState] = UseLocalStorage('Produtos', '');

    React.useEffect(() =>{
        if(state === '')
            return;
        setLoading(false);
        setRef('Produtos');
        setProdutos(JSON.parse(state));
    },[])
    React.useEffect(() => {
        renderSection();
    }, [ref]);

    function renderSection() {
        if(ref === 'Produtos')
            fetchApi();
        else if(ref == 'Contato')
        {
            setLoading(true);
            setTimeout(() =>{
                navigate('contato');
            },500);
            
        }
            
    }
     async function fetchApi() {
        const url = 'https://ranekapi.origamid.dev/json/api/produto'
        let response;
        let json : any;
       
        try{
            setLoading(true);
            if(ref === '')
                throw new Error("ref e vazio");
            response = await fetch(url);
            json = await response.json();
        }catch(error)
        {
            console.log(error);
        }finally{
            setTimeout(() => {
                setState(JSON.stringify(json));
                setProdutos(json);
                setLoading(false);
            }, 500);
           
        }

    }

    function handleProdut(event : any){        
        navigate('produtos/' + event.target.id);
    }

    function handleClick(event :  React.MouseEvent<HTMLElement>) {
        const button = event.target as HTMLButtonElement;
        setRef(button.innerText);
    }

    return(
        <div className="container mx-auto h-full   mb-10">
            <div  className="flex flex-row gap-4 pt-10 ml-23">
                <Button desc="Produtos" handleClick={handleClick}></Button>
                <Button desc="Contato" handleClick={handleClick}></Button>
            </div>
                <div className="grid md:grid-cols-3 gap-4  mt-8 mb-8 sm:grid-cols-1">
                {loading === true && <Load/>}
                {ref === 'Produtos' && produtos && loading === false && 
                        produtos.map((produto : any) => (
                            <Produtos ref={produto} key={produto.id} id={produto.id} handleClick={handleProdut}/>
                        ))
                }

                </div>
            </div>
    )

};


export default Home;