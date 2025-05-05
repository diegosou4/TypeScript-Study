import contato from '../assets/contato.jpg'
import React from 'react';
import Button from './Button';
import Load from "./Load";
import {  useNavigate} from 'react-router-dom';


const Contato = () =>{

    const [ref, setRef] = React.useState('');
 
       const navigate =  useNavigate();


        React.useEffect(() => {
           
                   renderSection();
            }, [ref]);
           
    function renderSection() {
        if(ref === 'Produtos')
            navigate('/');
        }
     function handleClick(event :  React.MouseEvent<HTMLElement>) {
             const button = event.target as HTMLButtonElement;
             setRef(button.innerText);
         }
    return(
        <div className="container mx-auto h-full mb-10">
            <div className="flex flex-row gap-4 pt-10 ml-23">
                <Button desc="Produtos" handleClick={handleClick}></Button>
                <Button desc="Contato" handleClick={handleClick}></Button>
            </div>
            <div className="grid grid-cols-1 mt-8">
                <div className="ml-23 md:grid-cols-3 sm:grid-cols-1">
                    <div className="flex flex-row">
                        <img src={contato} className="w-80 rounded-md" alt="" />
                        <div className="ml-10 ">
                            <h1 className="text-3xl font-medium font-serif mb-4">Entre em contato</h1>
                            <p className="text-xl font-semibold w-90 mt-4">99999-999</p>
                            <p className="text-xl font-semibold w-90 mt-4">Rua ali perto</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )


}


export default Contato;