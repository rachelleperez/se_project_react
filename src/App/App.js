import './App.css';
import 'normalize.css'; 
import Header from '../Header/Header'
import Main from '../Main/Main';
import Footer from '../Footer/Footer'

import {useState, useEffect} from "react";
import AddItemModal from '../AddItemModal/AddItemModal';
import ItemModal from '../ItemModal/ItemModal';
import { getForecastWeather, parseWeatherData } from '../util/weatherApi';

function App() {
  // const weatherTemp = '50';

  const [activeModal, setActiveModal] = useState('') // sets default state for modals
  const [selectedCard, setSelectedCard] = useState({}) // empty object as filled one is object from defaultClothingItems
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [isDaytime, setIsDaytime] = useState(true);
  const [weatherType, setWeatherType] = useState('sunny');

  const handleCreateModal = () => {
    setActiveModal('create');
  }

  const handleCloseModal = () => {
    // console.log('close Modal App.js');
    // console.log(activeModal);
    setActiveModal(''); //TODO: page keeps refreshing but can't identify reason.
  }

  const handleSelectedCard = (card) => {
    setActiveModal('preview')
    setSelectedCard(card)
  }

  // temp pending API work
  const handleAddItemSubmit = (data) => {
    console.log('NEW ITEM!');
    console.log(data.itemName);
    console.log(data.itemLink);
    console.log(data.itemWeather);
  }

  const handleClickModalOverlay = (e) => {
    if (e.target.classList.contains('modal')) {
      handleCloseModal();
    }
  };
  
  useEffect(() => { // app already rendered, then it calls API
    getForecastWeather().then((data) => {
      setTemp(parseWeatherData(data).temperature);
      setCity(parseWeatherData(data).cityName);
      setIsDaytime(parseWeatherData(data).isDaytime);
      setWeatherType(parseWeatherData(data).weatherType);
    })
  }, []) // dependencies

  // close upon Esc
  useEffect(() => {
    if (activeModal) {

      const handleEsc = (e) => {
        if (e.key === "Escape") {
          handleCloseModal();
        }
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    }

    else {return;}
  }, [activeModal]);

  return (
    <div className='app'>
    <Header onCreateModal={handleCreateModal} city = {city}/>
    <Main weatherTemp = {temp} onSelectCard={handleSelectedCard} weatherType = {weatherType} isDaytime = {isDaytime}/>
    <Footer/>

    {activeModal === 'create' && <AddItemModal onClose={handleCloseModal} onAddItem = {handleAddItemSubmit} handleClickModalOverlay={handleClickModalOverlay}/>}

    {activeModal ==='preview' && <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} handleClickModalOverlay={handleClickModalOverlay}/>} 

    </div>
  );

}

export default App;
