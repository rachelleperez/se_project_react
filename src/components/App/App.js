import "./App.css";
import "normalize.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";

import { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AddItemModal from "../AddItemModal/AddItemModal";
import ItemModal from "../ItemModal/ItemModal";
import DeleteItemModal from "../DeleteItemModal/DeleteItemModal";
import { getForecastWeather, parseWeatherData } from "../../utils/weatherApi";
import RegisterModal from "../RegisterModal/RegisterModal";
import LoginModal from "../LoginModal/LoginModal";
import CurrentTemperatureUnitContext from "./../../contexts/CurrentTemperatureUnitContext";
import { CurrentUserContext } from "./../../contexts/CurrentUserContext";

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
  const [isLoading, setIsLoading] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  const handleCreateModal = () => {
    setActiveModal("create");
  };

  const handleSignupModal = () => {
    setActiveModal("register");
  };

  const handleLoginModal = () => {
    setActiveModal("login");
  };

  const handleCloseModal = () => {
    setActiveModal("");
  };

  const handleSelectedCard = (card) => {
    setActiveModal("preview");
    setSelectedCard(card);
  };

  const handleSignup = (data) => {
    console.log("User Registration Submitted");
    console.log(data);
  };

  const handleLogin = () => {
    console.log("User Login Submitted");
  };

  const handleAddItemSubmit = (item) => {
    // console.log(item);

    setIsLoading(true);

    api
      .addItem(item)
      .then((newItem) => {
        setClothingItems([newItem, ...clothingItems]);
        handleCloseModal();
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
  };

  // request to delete item
  const handleCardDelete = () => {
    // console.log("request to delete this card");
    setActiveModal("delete");
  };

  // delete item request confirmed.
  const handleCardDeleteConfirmation = () => {
    // console.log("request to delete CONFIRMED");

    setIsLoading(true);

    api
      .removeItem(selectedCard._id)
      .then(() => {
        setClothingItems((clothingItems) =>
          clothingItems.filter((item) => item._id !== selectedCard._id)
        );

        handleCloseModal();
      })
      .catch(console.error)
      .finally(() => setIsLoading(false));
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
      .catch(console.error);
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
      .catch(console.error);
  }, []);

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
        <CurrentUserContext.Provider value={{ currentUser, isLoggedIn }}>
          <BrowserRouter>
            <Header
              onCreateModal={handleCreateModal}
              onLoginModal={handleLoginModal}
              onSignupModal={handleSignupModal}
              city={city}
            />

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
              isLoading={isLoading}
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
              onClose={handleCloseModal}
              onCardDeleteConfirmation={handleCardDeleteConfirmation}
              isLoading={isLoading}
            />
          )}

          {activeModal === "register" && (
            <RegisterModal
              onClose={handleCloseModal}
              onSubmit={handleSignup}
              isLoading={isLoading}
            />
          )}

          {activeModal === "login" && (
            <LoginModal
              onClose={handleCloseModal}
              onSubmit={handleLogin}
              isLoading={isLoading}
            />
          )}
        </CurrentUserContext.Provider>
      </CurrentTemperatureUnitContext.Provider>
    </div>
  );
}

export default App;
