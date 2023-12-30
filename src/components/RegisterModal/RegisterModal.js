import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const RegisterModal = ({ onClose, onSubmit, isLoading }) => {
  // console.log('item modal');

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
      name: name,
      avatar: avatar,
    };

    onSubmit(data);
  };

  return (
    <ModalWithForm
      title="Sign Up"
      onClose={onClose}
      onSubmit={handleSubmit}
      name="register"
      isLoading={isLoading}
      submitButtonText="Next"
      loadingSubmitButtonText="Signing Up ..."
    >
      <label className="modal__form-label">
        Email*
        <input
          className="modal__form-text-input"
          type="email"
          name="email"
          value={email}
          minLength="1"
          maxLength="30"
          placeholder="Email*"
          required
          onChange={handleEmailChange}
        />
      </label>
      <label className="modal__form-label">
        Password*
        <input
          className="modal__form-text-input"
          type="password"
          name="password"
          value={password}
          minLength="1"
          maxLength="30"
          placeholder="Password"
          required
          onChange={handlePasswordChange}
        />
      </label>
      <label className="modal__form-label">
        Name
        <input
          className="modal__form-text-input"
          type="text"
          name="name"
          value={name}
          minLength="1"
          maxLength="30"
          placeholder="Name"
          required
          onChange={handleNameChange}
        />
      </label>
      <label className="modal__form-label">
        Avatar URL
        <input
          className="modal__form-text-input"
          type="url"
          name="avatar"
          value={avatar}
          minLength="1"
          maxLength="30"
          placeholder="Avatar URL"
          required
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
