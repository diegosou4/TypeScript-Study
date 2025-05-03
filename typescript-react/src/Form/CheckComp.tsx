import React from "react"


interface CheckProps {
    options: string[];
    value: string[];
    setValue: React.Dispatch<React.SetStateAction<string[]>>;
}

const CheckComp = ({ options, value, setValue} : CheckProps) => {

    function handleChange(event: React.ChangeEvent<HTMLInputElement>){
        if(event.target.checked){
            setValue([...value, event.target.value]);
        } else {
            setValue(value.filter((cor) => cor !== event.target.value));
        }


    }
    return (
        <>
        <div className="flex flex-col gap-2">
        <h2 className="text-3xl mt-2">Checkbox</h2>

        {options.map(option => (
                <label key={option}>
                    <input 
                        type="checkbox"
                        value={option}
                        checked={value.includes(option)}
                        onChange={handleChange}
                        className="mr-2"
                    />
                    {option}
                </label>
            ))}
        </div>
        </>
    )




}


export default CheckComp;