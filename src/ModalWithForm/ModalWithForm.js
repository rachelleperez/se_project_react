import './ModalWithForm.css';

const ModalWithForm = ({children, buttonText = "Add Garment", title, onClose, name}) => {
    console.log('ModalWithForm');
    return (
        <div className= {`modal modal_type_${name}`}>
            <div className='modal__content'>
                <div className='modal__header'>
                    <button className= 'modal__close-button' type='button' onClick={onClose}>&#x2715;</button>
                    <h3 className= 'modal__title'>{title}</h3>
                </div>
                <form className= 'modal__form'>
                    {children}
                    <button className= 'modal__form-submit-button' type ='submit'>{buttonText}</button>
                </form>
            </div>
        </div>
    )
}

export default ModalWithForm;