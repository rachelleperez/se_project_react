import './App.css';
import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import {useState} from "react";
import ItemModal from '../ItemModal/ItemModal';

function App() {
  const weatherTemp = '102';

  const [activeModal, setActiveModal] = useState("") // sets default state for modals
  const [selectedCard, setSelectedCard] = useState({}) // empty object as filled one is object from defaultClothingItems

  const handleCreateModal = () => {
    setActiveModal('create');
  }

  const handleCloseModal = () => {
    setActiveModal("");
  }

  const handleSelectedCard = (card) => {
    setActiveModal('preview')
    setSelectedCard(card)
  }

  // console.log(selectedCard);

  return (
    <div>
    <Header onCreateModal={handleCreateModal}/>
    <Main weatherTemp = {weatherTemp} onSelectCard={handleSelectedCard}/>
    <Footer/>

    {activeModal === 'create' && (
      <ModalWithForm title='New Garment' onClose={handleCloseModal}>
        <label>
          Name<input type='text' name='name' minLength='1'maxLength = '30'/>
        </label>
        <label>
          Image<input type='url' name='link' minLength='1'maxLength = '30'/>
        </label>
        <p>Select the weather type:</p>
        <div>
          <div>
            <input type='radio' id='hot' value='hot'/>
            <label>Hot</label>
          </div>
          <div>
            <input type='radio' id='warm' value='warm'/>
            <label>Warm</label>
          </div>
          <div>
            <input type='radio' id='cold' value='cold'/>
            <label>Cold</label>
          </div>
        </div>
      </ModalWithForm>
    )}

    {activeModal ==='preview' && <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />} 

    </div>
  );

}

export default App;
