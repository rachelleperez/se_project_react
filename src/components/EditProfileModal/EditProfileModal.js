import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState } from "react";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const EditProfileModal = ({ onClose, onSubmit, isLoading }) => {
  // Extract data for existing user to pre-fill form
  const { currentUser } = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {};

    // track values changed only
    if (name !== currentUser.name) data.name = name;
    if (avatar !== currentUser.avatar) data.avatar = avatar;

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
      modalReroute={null}
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
          maxLength="2000"
          placeholder="Avatar URL"
          onChange={handleAvatarChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default EditProfileModal;
