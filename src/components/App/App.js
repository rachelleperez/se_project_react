import "./App.css";
import "normalize.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";

import { useState, useEffect, useRef } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";

import CurrentTemperatureUnitContext from "./../../contexts/CurrentTemperatureUnitContext";

import api from "../../utils/api";

function App() {
  // const weatherTemp = '50';

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState(""); // sets default state for modals
  const [selectedCard, setSelectedCard] = useState({}); // empty object as filled one is object from defaultClothingItems
  const [temp, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [isDaytime, setIsDaytime] = useState(true);
  const [weatherType, setWeatherType] = useState("sunny");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    // console.log('close Modal App.js');
    // console.log(activeModal);
    setActiveModal(""); //TODO: page keeps refreshing but can't identify reason.
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  // temp pending API work
  const handleAddItemSubmit = (item) => {
    // console.log("NEW ITEM!");
    // console.log(data.itemName);
    // console.log(data.itemLink);
    // console.log(data.itemWeather);
    api
      .addItem(item)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleCardDelete = (card) => {
    api
      .removeItem(card.id)
      .then(() => {
        setClothingItems((cards) => cards.filter((c) => c.id !== card.id));
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    // app already rendered, then it calls API
    getForecastWeather()
      .then((data) => {
        setTemp(parseWeatherData(data).temperature);
        setCity(parseWeatherData(data).cityName);
        setIsDaytime(parseWeatherData(data).isDaytime);
        setWeatherType(parseWeatherData(data).weatherType);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // dependencies

  // close upon Esc and click overlay
  useEffect(() => {
    if (!activeModal) return; // here you stop the effect

    const handleEsc = (e) => {
      // here the effect will proceed if the modal is active
      if (e.key === "Escape") {
        handleCloseModal();
      }
    };

    const handleClickModalOverlay = (e) => {
      if (e.target.classList.contains("modal")) {
        handleCloseModal();
      }
    };

    const handleToggleSwitchChange = () => {
      currentTemperatureUnit === "F"
        ? setCurrentTemperatureUnit("C")
        : setCurrentTemperatureUnit("F");
    };

    window.addEventListener("keydown", handleEsc);
    window.addEventListener("mousedown", handleClickModalOverlay);
    return () => {
      window.removeEventListener("keydown", handleEsc);
      window.removeEventListener("mousedown", handleClickModalOverlay);
    };
  }, [activeModal]);

  return (
    <div className="app">
      <CurrentTemperatureUnitContext.Provider
      // value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <BrowserRouter>
          <Header onCreateModal={handleCreateModal} city={city} />
          <Main
            weatherTemp={temp}
            onSelectCard={handleSelectedCard}
            weatherType={weatherType}
            isDaytime={isDaytime}
          />

          {/* <Switch>
            <Route
              exact
              path="/"
              element={
                <Main
                  weatherTemp={temp}
                  onSelectCard={handleSelectedCard}
                  weatherType={weatherType}
                  isDaytime={isDaytime}
                />
              }
            />

            <Route
              exact
              path="/profile"
              element={
                clothingItems.length !== 0 && (
                  <Profile
                    cards={clothingItems}
                    // onCardClick={handleCardClick}
                    onCardDelete={handleCardDelete}
                    onAddNewClick={() => setActiveModal("create")}
                  />
                )
              }
            />
          </Switch> */}

          <Footer />
        </BrowserRouter>

        {activeModal === "create" && (
          <AddItemModal
            onClose={handleCloseModal}
            onAddItem={handleAddItemSubmit}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal selectedCard={selectedCard} onClose={handleCloseModal} />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
