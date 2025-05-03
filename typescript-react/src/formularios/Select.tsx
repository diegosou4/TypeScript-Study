import React from "react"

const Select = () => {
    const [myselect, SetMyselect] = React.useState(''); 

    return (
        <form>
            <select 
            value={myselect}
            onChange={({target}) => SetMyselect(target.value)}
            className="bg-white rounded-sm w-28 h-6 text-center
            cursor-pointer"
            >
                <option disabled value ="">Selecione </option>
                <option value="Notebook">Notebook</option>
                <option value="Tablet">Tablet</option>
                <option value="Speaker">Speaker</option>
            </select>
            <p
            className="text-2xl font-semibold mt-2"
            >{myselect}</p>
        </form>


    )
}

export default Select;