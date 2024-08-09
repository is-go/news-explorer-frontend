import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

function LoginModal({
  closeActiveModal,
  isOpen,
  handleSignUpButton,
  handleLoginSubmit,
  isClicked,
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "" });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors({
      ...errors,
      email: e.target.validity.valid ? "" : "Please enter a valid email.",
    });
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setErrors({ email: "" });
      setIsFormValid(false);
    }
  }, [isOpen]);

  useEffect(() => {
    setIsFormValid(email && password && !errors.email && !errors.password);
  }, [email, password, errors]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!errors.email) {
      handleLoginSubmit(email, password);
    }
  }

  return (
    <ModalWithForm
      title="Sign in"
      closeActiveModal={closeActiveModal}
      handleSubmit={handleSubmit}
      buttonText="Log in"
      isOpen={isOpen}
      otherModalSpan=" Sign up"
      otherModal={handleSignUpButton}
      isClicked={isClicked}
      isFormValid={isFormValid}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          value={email}
          minLength="1"
          maxLength="30"
          placeholder="Enter email"
          className="modal__input"
          onChange={handleEmailChange}
          required
          autoComplete="on"
        />
        {errors.email && <span className="modal__error">{errors.email}</span>}
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          value={password}
          minLength="6"
          maxLength="20"
          placeholder="Enter password"
          className="modal__input"
          onChange={(e) => setPassword(e.target.value)}
          required
          autoComplete="on"
        />
      </label>
    </ModalWithForm>
  );
}

export default LoginModal;
