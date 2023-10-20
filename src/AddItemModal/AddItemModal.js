import ModalWithForm from '../ModalWithForm/ModalWithForm';

const testCloseModal = () => {
    console.log('AddItemModal Close');
  }

const AddItemModal = ({onClose}) => {
    console.log('item modal');

    return (
        <ModalWithForm title='New garment' onClose={onClose} name ='addGarment'>
        <label className='modal__form-label'>
          Name<input className = 'modal__form-text-input' type='text' name='name' minLength='1'maxLength = '30' placeholder='Name' required/>
        </label>
        <label className='modal__form-label'>
          Image<input className = 'modal__form-text-input'type='url' name='link' minLength='1'maxLength = '30'placeholder='Image URL' required/>
        </label>
        <p className='modal__form-subtitle'>Select the weather type:</p>
        <div>
          <div className = 'modal__form-radio-container'>
            <input className = 'modal__form-radio-input' type='radio' id='hot' value='hot' name='weather'/>
            <label className = 'modal__form-radio-label' >Hot</label>
          </div>
          <div className = 'modal__form-radio-container'>
            <input className = 'modal__form-radio-input' type='radio' id='warm' value='warm' name='weather'/>
            <label className = 'modal__form-radio-label'>Warm</label>
          </div>
          <div className = 'modal__form-radio-container'>
            <input className = 'modal__form-radio-input' type='radio' id='cold' value='cold' name='weather'/>
            <label className = 'modal__form-radio-label' >Cold</label>
          </div>
        </div>
      </ModalWithForm>
    )

}

export default AddItemModal

