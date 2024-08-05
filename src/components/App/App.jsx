import { useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Preloader from "../Preloader/Preloader";
import SavedNews from "../SavedNews/SavedNews";
import SearchForm from "../SearhForm/SearchForm";
import NothingFound from "../NothingFound/NothingFound";
import About from "../About/About";
import Footer from "../Footer/Footer";

import LoginModal from "../LoginModal/LoginModal";
import RegisterModal from "../RegisterModal/RegisterModal";
import CompletedModal from "../CompletedModal/CompletedModal";
import { searchArticles } from "../../utils/newsApi";
import { LocationProvider } from "../../contexts/LocationContext";
import MenuModal from "../MenuModal/MenuModal";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(true);
  const [activeModal, setActiveModal] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [topic, setTopic] = useState("");
  const [articles, setArticles] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isSaved, setIsSaved] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignUpButton = () => setActiveModal("signup");
  const handleLoginButton = () => setActiveModal("login");
  const handleCompletedModal = () => setActiveModal("completed registration");
  const handleMenuButton = () => setActiveModal("menu");
  const closeActiveModal = () => setActiveModal("");
  const handleClick = () => {
   setIsClicked(true);
   setTimeout(() => setIsClicked(false), 2000); 
 };
 

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



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 425 && activeModal) {
        document.body.classList.add("page__no-scroll");
      } else {
        document.body.classList.remove("page__no-scroll");
      }
    };

    handleResize(); // Call once to set initial state
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeModal]);

  const handleLoginSubmit = (email, password) => {
    handleClick();
    setLoggedIn(true);
    localStorage.setItem("token", "sample-token");
    closeActiveModal();
  };

  const handleLogoutSubmit = (event) => {
    event.preventDefault();
    setLoggedIn(false);
    setSavedArticles([]);
    setIsSaved([]);
    setArticles([]);
    setSearchPerformed(false);
    localStorage.removeItem("token");
    localStorage.removeItem("savedArticles");
    localStorage.removeItem("isSaved");
    navigate("/"); // Redirect to home page on logout
  };

  const handleSignUp = ({ email, password, username }) => {
    handleClick();
    // Mock sign-up process
    console.log("User signed up:", { email, password, username });
    handleCompletedModal(); // Show the completed registration modal
  };

  useEffect(() => {
    const savedArticlesFromStorage = localStorage.getItem("savedArticles");
    const isSavedFromStorage = localStorage.getItem("isSaved");

    if (savedArticlesFromStorage) {
      setSavedArticles(JSON.parse(savedArticlesFromStorage));
    }
    if (isSavedFromStorage) {
      setIsSaved(JSON.parse(isSavedFromStorage));
    }
  }, []);

  const fetchArticles = (topic) => {
    setLoading(true);
    setError("");

    searchArticles(topic)
      .then((data) => {
        setArticles(data);
        setSearchPerformed(true);
      })
      .catch((err) => {
        console.error(err);
        setError(
          "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
        );
      })
      .finally(() => setLoading(false));
  };

  const handleTopicChange = (event) => {
    setTopic(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    handleClick();
    event.preventDefault();
    fetchArticles(topic);
  };

  const handleToggleSave = (articleTitle) => {
    const isAlreadySaved = savedArticles.some(
      (saved) => saved.title === articleTitle
    );

    let updatedSavedArticles;
    let updatedIsSaved;

    if (isAlreadySaved) {
      ///// Delete the article/////
      updatedSavedArticles = savedArticles.filter(
        (saved) => saved.title !== articleTitle
      );
      updatedIsSaved = isSaved.filter((title) => title !== articleTitle);
    } else {
      ////// Save the article/////
      const articleToSave = articles.find(
        (article) => article.title === articleTitle
      );
      if (articleToSave) {
        updatedSavedArticles = [...savedArticles, articleToSave];
        updatedIsSaved = [...isSaved, articleTitle];
      }
    }

    setSavedArticles(updatedSavedArticles);
    setIsSaved(updatedIsSaved);

    // Store in local storage
    localStorage.setItem("savedArticles", JSON.stringify(updatedSavedArticles));
    localStorage.setItem("isSaved", JSON.stringify(updatedIsSaved));
  };

  return (
    <LocationProvider>
      <div className="page">
        <div
          className={`page__image ${
            location.pathname === "/saved-articles" ? "page__image_saved" : ""
          }`}
        ></div>
        <div className="page__border"></div>
        <div className="page__section">
          <Header
            handleMenuButton={handleMenuButton}
            loggedIn={loggedIn}
            handleLoginButton={handleLoginButton}
            handleLoginSubmit={handleLoginSubmit}
            handleLogoutSubmit={handleLogoutSubmit}
            isHidden={["login", "signup", "completed registration"].includes(
              activeModal
            )}
          />
          <Routes>
            <Route
              path="/"
              element={
                <Main
                  handleTopicChange={handleTopicChange}
                  handleSearchSubmit={handleSearchSubmit}
                  isClicked={isClicked}
                />
              }
            />
            <Route
              path="/saved-articles"
              element={
                <SavedNews
                  loggedIn={loggedIn}
                  isSaved={isSaved}
                  savedArticles={savedArticles}
                  handleToggleSave={handleToggleSave}
                />
              }
            />
          </Routes>
          {location.pathname === "/" && loading && <Preloader />}
          {location.pathname === "/" && error && (
            <p className="page__error-message">{error}</p>
          )}
          {location.pathname === "/" &&
            !loading &&
            searchPerformed &&
            !error &&
            (articles.length > 0 ? (
              <SearchForm
                articles={articles}
                loggedIn={loggedIn}
                isSaved={isSaved}
                handleToggleSave={handleToggleSave}
              />
            ) : (
              <NothingFound />
            ))}
          {location.pathname === "/" && <About />}
          <Footer />
        </div>
        <RegisterModal
          isOpen={activeModal === "signup"}
          closeActiveModal={closeActiveModal}
          handleSignUp={handleSignUp}
          handleLoginButton={handleLoginButton}
          isClicked={isClicked}
        />
        <LoginModal
          isOpen={activeModal === "login"}
          closeActiveModal={closeActiveModal}
          handleSignUpButton={handleSignUpButton}
          handleLoginSubmit={handleLoginSubmit}
          isClicked={isClicked}
        />
        <CompletedModal
          isOpen={activeModal === "completed registration"}
          handleLoginButton={handleLoginButton}
          closeActiveModal={closeActiveModal}
        />
        <MenuModal
          isOpen={activeModal === "menu"}
          loggedIn={loggedIn}
          closeActiveModal={closeActiveModal}
          handleLoginButton={handleLoginButton}
          handleLogoutSubmit={handleLogoutSubmit}
        />
      </div>
    </LocationProvider>
  );
}

export default App;