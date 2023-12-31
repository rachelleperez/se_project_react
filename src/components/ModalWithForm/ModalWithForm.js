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
  modalRerouteText,
}) => {
  // console.log('ModalWithForm');

  const handleClose = (e) => {
    e.preventDefault();
    onClose();
  };

  console.log(modalReroute);

  const handleRerouteHTML =
    modalReroute === null ? null : "or " + modalRerouteText;

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
