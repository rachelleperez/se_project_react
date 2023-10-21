import "./ItemModal.css";

const ItemModal = ({ selectedCard, onClose, handleClickModalOverlay }) => {
  // console.log('item modal');

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div className={"modal"} onMouseDown={handleClickModalOverlay}>
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
          src={selectedCard.link}
          alt={selectedCard.name}
        />
        <div className="modal__image-caption">
          <div>{selectedCard.name}</div>
          <div> Weather: {selectedCard.weather}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemModal;
