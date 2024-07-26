import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import SavedNews from "../SavedNews/SavedNews";
import About from "../About/About";
import Footer from "../Footer/Footer";

import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import {
  getArticles,
  saveArticle,
  deleteArticle,
  getSavedArticles,
} from "../../utils/newsApi";
import SearchForm from "../SearhForm/SearchForm";

function App() {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);

  const handleSignUpButton = () => setActiveModal("signup");
  const handleLoginButton = () => setActiveModal("login");
  const closeActiveModal = () => setActiveModal("");

// console.log(articles);
// console.log(savedArticles);

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

  const fetchArticles = (topic) => {
    getArticles(topic)
      .then((data) => setArticles(data.articles))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (loggedIn) {
      getSavedArticles()
        .then((data) => setSavedArticles(data))
        .catch((err) => console.error(err));
    }
  }, [loggedIn]);


  const handleSave = () => {
    if (isSaved) {
      deleteArticle(article._id, token).then(() => {
        // Handle successful deletion
      });
    } else {
      saveArticle(article, token).then(() => {
        // Handle successful save
      });
    }
  };

  //////unsave??????//////////////////////////////////////////////////

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <div className="page">
      <div
        className={`page__image ${location.pathname === "/saved-articles" ? "page__image_saved" : ""}`}
      ></div>
      <div className="page__border"></div>
      <div className="page__section">
        <Header loggedIn={loggedIn} handleLoginButton={handleLoginButton} />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route
            path="/saved-articles"
            element={
              <SavedNews loggedIn={loggedIn} savedArticles={savedArticles} />
            }
          />
        </Routes>
        {location.pathname === "/" && (
          <SearchForm
            articles={articles}
            
            handleSave={handleSave}
          />
        )}
        {location.pathname === "/" && <About />}
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
