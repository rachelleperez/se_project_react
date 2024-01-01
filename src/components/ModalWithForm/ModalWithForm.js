import "./ModalWithForm.css";

const ModalWithForm = ({
  children,
  title,
  onClose,
  name,
  onSubmit,
  isLoading,
  submitButtonText,
  loadingSubmitButtonText,
  modalReroute,
}) => {
  // console.log('ModalWithForm');

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  const handleRerouteHTML =
    modalReroute === null || modalReroute === undefined ? null : ( //undefined is defensive in case it's not proactively defined as null
      <div className="modal__form-reroute">
        or
        <button
          className="modal__form-reroute-button"
          type="button"
          onClick={() => modalReroute.onRerouteClick(modalReroute.new)}
          // className="sidebag__navigation-button"
        >
          {modalReroute.text}
        </button>
      </div>
    );

  return (
    <div className={`modal modal_type_${name}`}>
      <div className="modal__content">
        <div className="modal__header">
          <button
            className="modal__close-button"
            type="button"
            onClick={handleClose}
          >
            &#x2715;
          </button>
          <h3 className="modal__title">{title}</h3>
        </div>
        <form className="modal__form" onSubmit={onSubmit}>
          {children}
          <button className="modal__form-submit-button" type="submit">
            {isLoading ? loadingSubmitButtonText : submitButtonText}
          </button>
          {handleRerouteHTML}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
