import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const AddItemModal = ({ onClose, onAddItem }) => {
  const [itemName, setItemName] = useState("");

  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };

  const [itemLink, setItemLink] = useState("");

  const handleLinkChange = (e) => {
    setItemLink(e.target.value);
  };

  const [itemWeather, setItemWeather] = useState("");

  const handleWeatherChange = (e) => {
    // console.log(e.target.value);
    setItemWeather(e.target.value);
  };

  // console.log('item modal');

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: itemName,
      imageUrl: itemLink,
      weather: itemWeather,
    };

    onAddItem(data);

    // close after submitted
    onClose();
  };

  return (
    <ModalWithForm
      title="New garment"
      onClose={onClose}
      onSubmit={handleSubmit}
      name="addGarment"
    >
      <label className="modal__form-label">
        Name
        <input
          className="modal__form-text-input"
          type="text"
          name="itemName"
          minLength="1"
          maxLength="30"
          placeholder="Name"
          required
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__form-label">
        Image
        <input
          className="modal__form-text-input"
          type="url"
          name="itemLink"
          minLength="1"
          maxLength="30"
          placeholder="Image URL"
          required
          onChange={handleLinkChange}
        />
      </label>
      <p className="modal__form-subtitle">Select the weather type:</p>
      <div>
        <div className="modal__form-radio-container">
          <label className="modal__form-radio-label">
            <input
              className="modal__form-radio-input"
              type="radio"
              id="hot"
              value="hot"
              name="itemWeather"
              onChange={handleWeatherChange}
            />
            Hot
          </label>
        </div>
        <div className="modal__form-radio-container">
          <label className="modal__form-radio-label">
            <input
              className="modal__form-radio-input"
              type="radio"
              id="warm"
              value="warm"
              name="itemWeather"
              onChange={handleWeatherChange}
            />
            Warm
          </label>
        </div>
        <div className="modal__form-radio-container">
          <label className="modal__form-radio-label">
            <input
              className="modal__form-radio-input"
              type="radio"
              id="cold"
              value="cold"
              name="itemWeather"
              onChange={handleWeatherChange}
            />
            Cold
          </label>
        </div>
      </div>
    </ModalWithForm>
  );
};

export default AddItemModal;
