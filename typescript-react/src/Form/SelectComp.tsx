import React from "react";

interface SelectProp {
    options: string[];
    value: string;
    setValue : React.Dispatch<React.SetStateAction<string>>;
};

const SelectComp = ({options, value, setValue} : SelectProp) => {

    return(
        <>
        <select 
        className="bg-white rounded-sm" 
        value={value}
        onChange={({target}) => setValue(target.value)}
        >
        <option value="" disabled>Selecione</option>
        {options.map(option =>
        <option key={option} value={option}>{option}</option>)}
        </select>
        
        </>

    )



}


export default SelectComp;