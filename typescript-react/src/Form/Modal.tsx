import ModalProps from "./Types"
import ButtonModal from "./ButtonModal";

const Modal = ({modal,setModal,value,acao} : ModalProps) => {
    return(
        <>
            <div className={modal ? "hidden" : "display-inline"}>
                <p className='m-8'>o modal e {modal ? "True" : "Falso"}</p>
                <ButtonModal setModal={setModal} value={value} acao={acao}></ButtonModal>
            </div>
        </>
    )
}

export default Modal;