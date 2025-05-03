

interface RadioProps {
    options: string[];
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

const RadioComp = ({options, value, setValue} : RadioProps) => {

    return(
        <>
            {options.map((option) => (
            <label key={option} 
                className="ml-4"
            >
            <input
                type="radio"
                value={option}
                checked={value === option}
                onChange={({ target }) => setValue(target.value)}
                
            />
            <span className="ml-2 capitalize">{option}</span> 
            </label>
        ))}
        </>
    );


}


export default RadioComp;