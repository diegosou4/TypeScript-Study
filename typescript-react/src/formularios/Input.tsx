import React from "react"



// Usando Multiplos campos
// const Input = () => {
//     const [nome,setNome] = React.useState('');
//     const [email,setEmail] = React.useState('');

//     function handleSubmit(event : any) {
//         event.preventDefault();
//         console.log(`Nome ${nome} e Email ${email}`);
//     }

//     return(
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label 
//                 htmlFor="nome"
//                 className="text-xl"
//                 >Nome:</label>
//                 <input
//                 type="text"
//                 id="nome"
//                 name="nome"
//                 className="bg-white rounded-sm ml-2 border-1"
//                 value={nome}
//                 onChange={(event) => setNome(event.target.value)}/>
//                 <label 
//                 htmlFor="Email"
//                 className="text-xl ml-3"
//                 >Email:</label>
//                 <input
//                 type="email"
//                 id="Email"
//                 name="Email"
//                 className="bg-white rounded-sm ml-2 border-1"
//                 value={email}
//                 onChange={(event) => setEmail(event.target.value)}/>
//                 <button className="bg-yellow-300 w-18 rounded-sm hover:bg-yellow-500 cursor-pointer mt-2 ml-3">Enviar</button>
//             </form>
//         </div>
//     )
// }

// Usando Objeto
const Input = () => {
    const [form,setForm] = React.useState({
        nome : '',
        email: ''
    });
    

    function handleSubmit(event : any) {
        event.preventDefault();
        console.log(`Nome ${form.nome} e Email ${form.email}`);
    }
    function handleChange({target} : any){
        const {id, value} = target;
        setForm({...form, [id]: value});
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label 
                htmlFor="nome"
                className="text-xl"
                >Nome:</label>
                <input
                type="text"
                id="nome"
                name="nome"
                className="bg-white rounded-sm ml-2 border-1"
                value={form.nome}
                onChange={handleChange}/>
                <label 
                htmlFor="email"
                className="text-xl ml-3"
                >Email:</label>
                <input
                type="email"
                id="email"
                name="email"
                className="bg-white rounded-sm ml-2 border-1"
                value={form.email}
                onChange={handleChange}/>
                <button className="bg-yellow-300 w-18 rounded-sm hover:bg-yellow-500 cursor-pointer mt-2 ml-3">Enviar</button>
            </form>
        </div>
    )
}


export default Input;