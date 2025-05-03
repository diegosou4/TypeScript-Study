import React from "react"


const TextArea = () => {
    const [textarea,setTextarea] = React.useState('');

    function handleChange(event: React.ChangeEvent<HTMLTextAreaElement>){
        setTextarea(event.target.value);
    }
    
    function handleSubmit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log("Enviado");
        console.log(textarea);
    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea
            rows={3}
            value={textarea}
            onChange={handleChange}   
            className="bg-white"
            />
            <button className="bg-yellow-200 w-20 ml-4 cursor-pointer hover:bg-yellow-500 rounded-sm">Enviar</button>
        </form>
    )
}

export default TextArea;