import WhiskeyForm from './WhiskeyForm';


type ModalProps = {
    id?: string[];
    open: boolean;
    onClose: () => void;
}

const Modal = ( props: ModalProps ) => {
    if ( !props.open ) return (<></>)
    return (
        <div>
            <WhiskeyForm {...props}/>
        </div>
    )
}

export default Modal