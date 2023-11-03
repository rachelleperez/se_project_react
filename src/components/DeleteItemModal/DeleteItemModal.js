import "./DeleteItemModal.css";

const DeleteItemModal = ({ onClose, onCardDeleteConfirmation }) => {
  // console.log('delete item modal');

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className={"modal"}>
      <div className="modal__content  modal__delete-item">
        <button
          className="modal__close-button"
          type="button"
          onClick={handleClose}
        >
          &#x2715;
        </button>
        <p>
          Are you sure you want to delete this item? <br /> This action is
          irreversible.
        </p>

        <div className="modal__image-delete-options-container">
          <button
            className="modal__image-delete-button"
            type="text"
            onClick={onCardDeleteConfirmation}
          >
            {" "}
            Yes, delete item{" "}
          </button>

          <button
            className="modal__image-delete-cancel-button"
            type="text"
            onClick={onClose}
          >
            {" "}
            Cancel{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteItemModal;
