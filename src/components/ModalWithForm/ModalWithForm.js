import "./ModalWithForm.css";

import React, { useState, useRef, useEffect } from "react";

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

  // to update submit button style based on if valid
  const [isFormValid, setIsFormValid] = useState(false);
  const formRef = useRef(null);

  const handleInputChange = () => {
    // Check the validity of each input on change
    const formElements = formRef.current.elements;
    const isValid = Array.from(formElements).every((element) =>
      element.checkValidity()
    );
    setIsFormValid(isValid);
  };

  useEffect(() => {
    // Initialize form validity on mount
    handleInputChange();
  }, []);

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
        <form
          className="modal__form"
          onSubmit={onSubmit}
          ref={formRef}
          onChange={handleInputChange}
        >
          {children}
          <button
            className={`modal__form-submit-button${
              isFormValid ? "" : "-disabled"
            }`}
            type="submit"
            disabled={!isFormValid}
          >
            {isLoading ? loadingSubmitButtonText : submitButtonText}
          </button>
          {handleRerouteHTML}
        </form>
      </div>
    </div>
  );
};

export default ModalWithForm;
