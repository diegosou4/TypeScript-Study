import React from "react";


const Checkbox = () => {
    const [checkbox,setCheckbox] = React.useState(false);

    function handleChange(event : React.ChangeEvent<HTMLInputElement>)
    {
        setCheckbox(event.target.checked);
    }

    return(
        <>
            <label>
            <input
                type="checkbox"
                value="termos"
                checked={checkbox}
                onChange={handleChange}
                className="cursor-pointer"
            />
            <span className="ml-2 cursor-pointer">Selecionar</span>
            </label>
        </>
    )
}

export default Checkbox;