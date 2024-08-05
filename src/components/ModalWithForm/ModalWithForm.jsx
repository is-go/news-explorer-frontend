import "./ModalWithForm.css";

function ModalWithForm({
  children,
  title,
  buttonText,
  isOpen,
  closeActiveModal,
  otherModal,
  otherModalSpan,
  errorSpan,
  handleSubmit,
  isClicked,
}) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content">
        <form action="#" className="modal__form">
          <h2 className="modal__title">{title}</h2>
          <button
            onClick={closeActiveModal}
            type="button"
            className="modal__close"
          ></button>
          {children}
          <div className="modal__button-cont">
            {errorSpan && (
              <span className="modal__error modal__error_signup">
                {errorSpan}
              </span>
            )}
            <button
              type="submit"
              className={`modal__submit ${isClicked ? "modal__submit_clicked" : ""}`}
              onClick={handleSubmit}
              // disabled
            >
              {buttonText}
            </button>
            <button
              type="button"
              className="modal__other-button"
              onClick={otherModal}
            >
              or <span className="modal__span">{otherModalSpan}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ModalWithForm;
