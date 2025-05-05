

interface ButtonProps {
    desc : string;
    handleClick : any;

}


const Button = ({desc, handleClick} : ButtonProps) => {

    return (
        <>
            <button
                className="bg-gray-400 p-3 rounded-md cursor-pointer hover:bg-gray-200" onClick={handleClick}
                >{desc}</button>
        </>

    )

}


export default Button;