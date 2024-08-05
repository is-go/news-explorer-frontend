import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useState, useEffect } from "react";

const RegisterModal = ({
  isOpen,
  closeActiveModal,
  handleSignUp,
  handleLoginButton,
  isClicked,
}) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "" });

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setErrors({
      ...errors,
      email: e.target.validity.valid ? "" : "This email is not available",
    });
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  useEffect(() => {
    if (isOpen) {
      setEmail("");
      setPassword("");
      setUsername("");
      setErrors({ email: "" });
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    if (!errors.email) {
      handleSignUp({ email, password, username });
    }
  }

  return (
    <ModalWithForm
      title="Sign up"
      closeActiveModal={closeActiveModal}
      handleSubmit={handleSubmit}
      buttonText="Sign up"
      isOpen={isOpen}
      otherModal={handleLoginButton}
      otherModalSpan=" Log in"
      errorSpan={errors.email}
      isClicked={isClicked}
    >
      <label className="modal__label">
        Email
        <input
          type="email"
          name="email"
          minLength="1"
          maxLength="30"
          placeholder="Email"
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
          placeholder="Password"
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
          placeholder="Username"
          className="modal__input"
          onChange={handleUsernameChange}
          value={username}
          required
          autoComplete="on"
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;
