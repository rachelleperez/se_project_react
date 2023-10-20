import ModalWithForm from '../ModalWithForm/ModalWithForm';

const AddItemModal = ({onClose, onAddItem}) => {
    console.log('item modal');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('AddItem Form Submit');

        onAddItem({ 
            itemName: 'umbrella',
            itemLink: 'https://images.unsplash.com/photo-1584036553516-bf83210aa16c?auto=format&fit=crop&q=80&w=1580&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            itemWeather: 'hot'
        }); // temp: hard-coded

        // onAddItem({ itemName, itemLink, itemWeather}); // passing data object

        // close after submitted
        onClose();
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

