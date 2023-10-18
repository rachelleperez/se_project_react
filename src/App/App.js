import './App.css';
import 'normalize.css'; 
import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer'
import ModalWithForm from '../ModalWithForm/ModalWithForm';
import {useState, useEffect} from "react";
import ItemModal from '../ItemModal/ItemModal';
import { getForecastWeather, parseWeatherData } from '../util/weatherApi';


function App() {
  // const weatherTemp = '50';

  const [activeModal, setActiveModal] = useState("") // sets default state for modals
  const [selectedCard, setSelectedCard] = useState({}) // empty object as filled one is object from defaultClothingItems
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [isDaytime, setIsDaytime] = useState(true);
  const [weatherType, setWeatherType] = useState('sunny');

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
  
  useEffect(() => { // app already rendered, then it calls API
    getForecastWeather().then((data) => {
      setTemp(parseWeatherData(data).temperature);
      setCity(parseWeatherData(data).cityName);
      setIsDaytime(parseWeatherData(data).isDaytime);
      setWeatherType(parseWeatherData(data).weatherType);
    })
  }, []) // dependencies

  return (
    <div className='app'>
    <Header onCreateModal={handleCreateModal} city = {city}/>
    <Main weatherTemp = {temp} onSelectCard={handleSelectedCard} weatherType = {weatherType} isDaytime = {isDaytime}/>
    <Footer/>

    {activeModal === 'create' && (
      <ModalWithForm title='New garment' onClose={handleCloseModal} name ='addGarment'>
        <label className='modal__form-label'>
          Name<input className = 'modal__form-text-input' type='text' name='name' minLength='1'maxLength = '30' placeholder='Name'/>
        </label>
        <label className='modal__form-label'>
          Image<input className = 'modal__form-text-input'type='url' name='link' minLength='1'maxLength = '30'placeholder='Image URL'/>
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
    )}

    {activeModal ==='preview' && <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />} 

    </div>
  );

}

export default App;
