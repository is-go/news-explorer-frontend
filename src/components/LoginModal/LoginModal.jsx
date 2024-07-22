import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const LoginModal = ({
  closeActiveModal,
  isOpen,
  handleLogin,
  handleSignUpButton,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "" });

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
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();

    if (!errors.email) {
      handleLogin({ email, password });
    }
  }

  return (
    <ModalWithForm
      title="Sign in"
      closeActiveModal={closeActiveModal}
      handleSubmit={handleSubmit}
      buttonText="Log In"
      isOpen={isOpen}
      otherModalSpan=" Sign Up"
      otherModal={handleSignUpButton}
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
        />
      </label>
    </ModalWithForm>
  );
};

export default LoginModal;

