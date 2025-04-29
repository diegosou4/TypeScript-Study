
import ModalProps from "./Types";


const ButtonModal = ({setModal, value, acao} : ModalProps ) => {
    return (
        <>
        <button className=" bg-cyan-300 px-8 py-1 rounded-md cursor-pointer
         hover:bg-cyan-500 hover:text-white"
        onClick={() => setModal(value)}>{acao}</button>
        </>
        )


};

export default ButtonModal;