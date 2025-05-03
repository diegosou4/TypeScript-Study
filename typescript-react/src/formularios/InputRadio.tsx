import React from "react"

const InputRadio = () => {
    const [radio, setRadio] = React.useState('');

    function handleChange(event : React.ChangeEvent<HTMLInputElement>){
        setRadio(event.target.value);
    }

     function handleSubmit(event: React.FormEvent<HTMLFormElement>){
            event.preventDefault();
            console.log(radio);
        }

    return (
        <form onSubmit={handleSubmit} 
        className="*:ml-2 cursor-pointer">
            <label>
                <input
                    type="radio"
                    value="notebook"
                    checked={radio === 'notebook'}

                    onChange={handleChange}
                />
                <span className="ml-2 cursor-pointer">
                Notebook
                </span>
            </label>
            <label>
                <input
                    type="radio"
                    value="smartphone"
                    checked={radio === 'smartphone'}
                    onChange={handleChange}
                />
                 <span className="ml-2 cursor-pointer">
                    Smartphone
                </span>
            </label>
            <label >
                <input
                    type="radio"
                    value="tablet"
                    checked={radio === 'tablet'}
                    onChange={handleChange}
                />
                 <span className="ml-2 cursor-pointer">
                    Tablet
                </span>
            </label>
            <button className="bg-yellow-200 w-20 ml-4 cursor-pointer hover:bg-yellow-500 rounded-sm">Enviar</button>
        </form>



    )
}


export default InputRadio;