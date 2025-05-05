
import Button from "./Button";
import React from 'react';
import Load from "./Load";
import InfoProd from "./InfoProd";
import { useParams , useNavigate} from 'react-router-dom';


const Produto = () =>{
    const params = useParams();
    const [ref, setRef] = React.useState('');
    const [produtos,setProdutos] = React.useState(null);
    const [loading, setLoading] = React.useState<boolean | null>(null);
    const navigate =  useNavigate();

    async function fetchProduto() {
        const url = `https://ranekapi.origamid.dev/json/api/produto/${params.id}`
        let response;
        let json : any;
        try{
            setLoading(true);
            response = await fetch(url);
            json = await response.json();
        }catch(error)
        {
            console.log(error);
        }finally{
            setTimeout(() => {
                setProdutos(json);
                setLoading(false);
            }, 500);
           
        }
    } 

    React.useEffect(() =>{
        fetchProduto();
    },[])

    React.useEffect(() => {
            renderSection();
        }, [ref]);
    
        function renderSection() {
            if(ref === 'Produtos')
                navigate('/');
            else if(ref == 'Contato'){
                setLoading(true);
                    setTimeout(() =>{
                        navigate('/contato');
                    },500);
            }
             
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
            {loading === true && <Load/>}
            {produtos && loading === false && <InfoProd produto={produtos}/> }
        </div>
    )
}


export default Produto;