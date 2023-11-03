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
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";

import CurrentTemperatureUnitContext from "./../../contexts/CurrentTemperatureUnitContext";

import api from "../../utils/api";

function App() {
  // const weatherTemp = '50';

  const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState("F");
  const [clothingItems, setClothingItems] = useState([]);
  const [activeModal, setActiveModal] = useState(""); // sets default state for modals
  const [selectedCard, setSelectedCard] = useState({}); // empty object as filled one is object from clothing items
  const [tempF, setTemp] = useState(0);
  const [city, setCity] = useState("");
  const [isDaytime, setIsDaytime] = useState(true);
  const [weatherType, setWeatherType] = useState("sunny");

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleAddItemSubmit = (item) => {
    // console.log(item);

    // setClothingItems([item, ...clothingItems]); // TODO: api handling with .then/.catch

    api
      .addItem(item)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  // request to delete item
  const handleCardDelete = () => {
    // console.log("request to delete this card");
    setActiveModal("delete");
  };

  // delete item request confirmed.
  const handleCardDeleteConfirmation = () => {
    // console.log("request to delete CONFIRMED");

    api
      .removeItem(selectedCard._id)
      .then(() => {
        setClothingItems((clothingItems) =>
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );

        handleCloseModal();
      })
      .catch((err) => console.log(err));
  };

  const handleToggleSwitchChange = () => {
    currentTemperatureUnit === "F"
      ? setCurrentTemperatureUnit("C")
      : setCurrentTemperatureUnit("F");
  };

  // app already rendered, then it calls Weather API
  useEffect(() => {
    getForecastWeather()
      .then((data) => {
        setTemp(parseWeatherData(data).temperatureF);
        setCity(parseWeatherData(data).cityName);
        setIsDaytime(parseWeatherData(data).isDaytime);
        setWeatherType(parseWeatherData(data).weatherType);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); // dependencies

  //app already rendered, then it calls User API
  useEffect(() => {
    // console.log("ready to retrieve items");
    api
      .getItemList()
      .then((data) => {
        // console.log(data);
        setClothingItems(data);
      })
      .catch((err) => {
        console.log("failure");
        console.log(err);
      });
  }, [api]);

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
        value={{ currentTemperatureUnit, handleToggleSwitchChange }}
      >
        <BrowserRouter>
          <Header onCreateModal={handleCreateModal} city={city} />

          <Switch>
            <Route exact path="/profile">
              <Profile
                itemData={clothingItems}
                onSelectCard={handleSelectedCard}
                onCardDelete={handleCardDelete}
                onAddNewClick={() => setActiveModal("create")}
              />
            </Route>

            <Route path="/">
              <Main
                weatherTemp={tempF}
                onSelectCard={handleSelectedCard}
                weatherType={weatherType}
                isDaytime={isDaytime}
                clothingItems={clothingItems}
              />
            </Route>
          </Switch>

          <Footer />
        </BrowserRouter>

        {activeModal === "create" && (
          <AddItemModal
            onClose={handleCloseModal}
            onAddItem={handleAddItemSubmit}
          />
        )}

        {activeModal === "preview" && (
          <ItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onCardDelete={handleCardDelete}
          />
        )}

        {activeModal === "delete" && (
          <DeleteItemModal
            selectedCard={selectedCard}
            onClose={handleCloseModal}
            onCardDeleteConfirmation={handleCardDeleteConfirmation}
          />
        )}
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
