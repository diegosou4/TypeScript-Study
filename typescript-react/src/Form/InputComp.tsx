import React from "react";

interface InputProps  extends React.InputHTMLAttributes<HTMLInputElement> {
    type: string;
    label: string;
    id: string;
    setValue :  React.Dispatch<React.SetStateAction<string>>;
    value: string;
    required?: boolean;
    placeholder? : string;

}

const Input = ({type,label, id ,setValue, value , required = false , placeholder = '', ...props} : InputProps ) =>
{
    return(
        <>
           <label
           htmlFor={id}
           >{label}
            </label>
            <input 
            type={type} 
            id={id} 
            name={label} 
            value={value}
            placeholder={placeholder}
            onChange={({target}) => setValue(target.value)}
            className="bg-white ml-2 mt-2 rounded-sm border-1"
            required={required}
            {...props}
            /> 
          
        </>
    )


}

export default Input;