import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

function RegisterModal({
  isOpen,
  closeActiveModal,
  handleSignUp,
  handleLoginButton,
  isClicked,
}) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "" });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors({
      ...errors,
      email: e.target.validity.valid ? "" : "This email is not available",
    });
  };

  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUsernameChange = (e) => setUsername(e.target.value);

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setUsername("");
      setErrors({ email: "" });
      setIsFormValid(false);
    }
  }, [isOpen]);

  useEffect(() => {
    setIsFormValid(
      email &&
        password &&
        username &&
        !errors.email &&
        !errors.password &&
        !errors.username
    );
  }, [email, password, username, errors]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!errors.email) {
      handleSignUp({ email, password, username });
    }
  };

  return (
    <ModalWithForm
      title="Sign up"
      closeActiveModal={closeActiveModal}
      handleSubmit={handleSubmit}
      buttonText="Sign up"
      isOpen={isOpen}
      otherModal={handleLoginButton}
      otherModalSpan="Sign in"
      errorSpan={errors.email}
      isClicked={isClicked}
      isFormValid={isFormValid}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Eneter email"
          className="modal__input"
          onChange={handleEmailChange}
          value={email}
          required
          autoComplete="on"
        />
      </label>
      <label className="modal__label">
        Password
        <input
          type="password"
          name="password"
          minLength="1"
          maxLength="30"
          placeholder="Enter password"
          className="modal__input"
          onChange={handlePasswordChange}
          value={password}
          required
          autoComplete="on"
        />
      </label>
      <label className="modal__label">
        Username
        <input
          type="text"
          name="username"
          minLength="1"
          maxLength="30"
          placeholder="Enter username"
          className="modal__input"
          onChange={handleUsernameChange}
          value={username}
          required
          autoComplete="on"
        />
      </label>
    </ModalWithForm>
  );
}

export default RegisterModal;
