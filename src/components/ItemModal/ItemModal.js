import { useContext } from "react";
import "./ItemModal.css";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ItemModal = ({ selectedCard, onClose, onCardDelete }) => {
  // console.log('item modal');

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  // Does current user own this card, if so... allow delete option
  const { currentUser } = useContext(CurrentUserContext);
  const isOwn = selectedCard.owner === currentUser._id;

  const itemDeleteButtonClassName = `item__delete-button ${
    isOwn
      ? "modal__image-delete-button-visible"
      : "modal__image-delete-button-hidden"
  }`;

  return (
    <div className={"modal"}>
      <div className="modal__content modal__content-image">
        <button
          className="modal__close-button"
          type="button"
          onClick={handleClose}
        >
          &#x2715;
        </button>
        <img
          className="modal__image"
          src={selectedCard.imageUrl}
          alt={selectedCard.name}
        />
        <div className="modal__image-caption">
          <div className="modal__image-caption-line1">
            <p className="modal__image-caption-text">{selectedCard.name}</p>
            <button
              className={itemDeleteButtonClassName}
              type="text"
              onClick={onCardDelete}
            >
              {" "}
              Delete item{" "}
            </button>
          </div>
          <p className="modal__image-caption-text">
            {" "}
            Weather: {selectedCard.weather}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
