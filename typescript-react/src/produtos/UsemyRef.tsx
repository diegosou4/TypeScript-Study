import React from "react"





function UsemyRef() {
    const [comentarios, setComentarios] = React.useState<string[]>([])
    const [input, setInput] = React.useState('');
    const inputElement = React.useRef<HTMLInputElement>(null);

    function handleClick(){
        setComentarios([...comentarios, input]);
        setInput('');
        if (inputElement.current)
            inputElement.current.focus()
    }
    return(
        <>
            <div>
                <ul className="*:mt-2">
                    {comentarios.map(comentario => <li key={comentario}> {comentario}</li>) }
                </ul>
                <input
                type="text"
                value={input}
                ref={inputElement}
                className="bg-white rounded-md border-1 mt-2"
                onChange={({target}) => setInput(target.value)}>
                </input>
            </div>
                <button className="mt-2 bg-gray-300 w-32 rounded-sm hover:bg-gray-100 cursor-pointer" onClick={handleClick}>Enviar</button>
        </>


    )
}

export default UsemyRef;