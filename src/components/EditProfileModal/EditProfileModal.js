import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";

const LoginModal = ({ onClose, onSubmit, isLoading }) => {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: name,
    };

    // avatar is optional
    if (avatar !== "") data.avatar = avatar;

    onSubmit(data);
  };

  return (
    <ModalWithForm
      title="Change profile data"
      onClose={onClose}
      onSubmit={handleSubmit}
      name="editProfile"
      isLoading={isLoading}
      submitButtonText="Save changes"
      loadingSubmitButtonText="Saving ..."
    >
      <label className="modal__form-label">
        Name*
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
          maxLength="300"
          placeholder="Avatar URL"
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;
