import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import NothingFound from "../NothingFound/NothingFound";
import About from "../About/About";
import Footer from "../Footer/Footer";

import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");

  const handleSignUpButton = () => setActiveModal("signup");
  const handleLoginButton = () => setActiveModal("login");
  const closeActiveModal = () => setActiveModal("");

  useEffect(() => {
    if (!activeModal) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeActiveModal();
      }
    };

    const handleClickOutsideModal = (event) => {
      if (event.target.classList.contains("modal_opened")) {
        closeActiveModal();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutsideModal);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutsideModal);
    };
  }, [activeModal]);

  return (
    <div className="page">
      <div className="page__image"></div>
      <div className="page__border"></div>
      <div className="page__section">
        <Header loggedIn={loggedIn} handleLoginButton={handleLoginButton} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/saved-articles" element={<SavedNews />} />
        </Routes>
        <About />
        <Footer />
      </div>
      <RegisterModal
        isOpen={activeModal === "signup"}
        closeActiveModal={closeActiveModal}
        handleLoginButton={handleLoginButton}
      />
      <LoginModal
        isOpen={activeModal === "login"}
        closeActiveModal={closeActiveModal}
        handleSignUpButton={handleSignUpButton}
      />
    </div>
  );
}

export default App;
