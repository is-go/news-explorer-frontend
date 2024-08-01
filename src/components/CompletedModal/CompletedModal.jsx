import "../ModalWithForm/ModalWithForm.css";

function CompletionModal({ isOpen, handleLoginButton, closeActiveModal }) {
  return (
    <div className={`modal ${isOpen ? "modal_opened" : ""}`}>
      <div className="modal__content modal__content_completed">
        <h2 className="modal__title">Registration successfully completed!</h2>
        <button
          onClick={closeActiveModal}
          type="button"
          className="modal__close"
        ></button>
        <button
          className="modal__other-button modal__other-button_completed"
          type="button"
          onClick={handleLoginButton}
        >
          <span className="modal__span_completed">Sign in</span>
        </button>
      </div>
    </div>
  );
}

export default CompletionModal;
