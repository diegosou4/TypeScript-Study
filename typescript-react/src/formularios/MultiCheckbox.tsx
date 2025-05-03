import React from "react"

const coresArray: string[] = ['azul', 'roxo', 'laranja', 'verde', 'vermelho', 'cinza'];

const MultiCheckbox = () =>{
    const [cores,setCores] = React.useState<string[]>([]);

    function handleChange(event : React.ChangeEvent<HTMLInputElement>)
    {
        if(event.target.checked){
            setCores([...cores,event.target.value])
        }else{
            setCores(cores.filter((cor) => cor != event.target.value));
        }
    }

    function handleChecked(cor : string) : boolean{
        if(cores)
            return cores.includes(cor);
        return false;
    }
    return(
        <div>
            <form>
            {coresArray.map((cor) => (
                <label key={cor}>
                    <input 
                    type="checkbox"
                    value={cor}
                    checked={handleChecked(cor)}
                    onChange={handleChange}
                    className="ml-3  cursor-pointer"
                    />
                    <span
                        className="ml-2 capitalize cursor-pointer"
                    >{cor}</span>
                </label>
            ))}
            <ul>
                {cores.map((cor) =>
                    <li key={cor}>{cor}</li>
                )}
            </ul>
            </form>
        
        </div>

    )


}

export default MultiCheckbox