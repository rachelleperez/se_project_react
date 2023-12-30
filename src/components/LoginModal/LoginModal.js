import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const LoginModal = ({ onClose, onSubmit, isLoading }) => {
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

    onSubmit(data);
  };

  return (
    <ModalWithForm
      title="Log In"
      onClose={onClose}
      onSubmit={handleSubmit}
      name="addGarment"
      isLoading={isLoading}
      submitButtonText="Add Garment"
      loadingSubmitButtonText="Adding Garment ..."
    >
      <label className="modal__form-label">
        Email
        <input
          className="modal__form-text-input"
          type="text"
          name="itemName"
          value={itemName}
          minLength="1"
          maxLength="30"
          placeholder="Name"
          required
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__form-label">
        Password
        <input
          className="modal__form-text-input"
          type="url"
          name="itemLink"
          value={itemLink}
          minLength="1"
          maxLength="30"
          placeholder="Image URL"
          required
          onChange={handleLinkChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
