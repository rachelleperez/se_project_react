import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const LoginModal = ({ onClose, onSubmit, isLoading, onModalReroute }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    onSubmit(data);
  };

  return (
    <ModalWithForm
      title="Log In"
      onClose={onClose}
      onSubmit={handleSubmit}
      name="login"
      isLoading={isLoading}
      submitButtonText="Log In"
      loadingSubmitButtonText="Logging in ..."
      modalReroute={{
        new: "register",
        text: "Register",
        onRerouteClick: onModalReroute,
      }}
    >
      <label className="modal__form-label">
        Email
        <input
          className="modal__form-text-input"
          type="email"
          name="email"
          value={email}
          minLength="1"
          maxLength="30"
          placeholder="Email"
          required
          onChange={handleEmailChange}
        />
      </label>
      <label className="modal__form-label">
        Password
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
    </ModalWithForm>
  );
};

export default LoginModal;
