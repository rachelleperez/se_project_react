import ModalWithForm from '../ModalWithForm/ModalWithForm';

const AddItemModal = ({onClose, onAddItem}) => {
    console.log('item modal');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log('AddItem Form Submit');

        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);

        const data = { 
            itemName: formProps.itemName,
            itemLink: formProps.itemLink,
            itemWeather: formProps.itemWeather
        }

        onAddItem(data); 

        // close after submitted
        // onClose();
    };

    return (
        <ModalWithForm title='New garment' onClose={onClose} onSubmit={handleSubmit} name ='addGarment'>
            <label className='modal__form-label'>
            Name<input className = 'modal__form-text-input' type='text' name='itemName' minLength='1'maxLength = '30' placeholder='Name' required/>
            </label>
            <label className='modal__form-label'>
            Image<input className = 'modal__form-text-input'type='url' name='itemLink' minLength='1'maxLength = '30'placeholder='Image URL' required/>
            </label>
            <p className='modal__form-subtitle'>Select the weather type:</p>
            <div>
                <div className = 'modal__form-radio-container'>
                    <input className = 'modal__form-radio-input' type='radio' id='hot' value='hot' name='itemWeather'/>
                    <label className = 'modal__form-radio-label' >Hot</label>
                </div>
                <div className = 'modal__form-radio-container'>
                    <input className = 'modal__form-radio-input' type='radio' id='warm' value='warm' name='itemWeather'/>
                    <label className = 'modal__form-radio-label'>Warm</label>
                </div>
                <div className = 'modal__form-radio-container'>
                    <input className = 'modal__form-radio-input' type='radio' id='cold' value='cold' name='itemWeather'/>
                    <label className = 'modal__form-radio-label' >Cold</label>
                </div>
            </div>
        </ModalWithForm>
    )

}

export default AddItemModal

