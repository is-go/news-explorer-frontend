import { useEffect, useState, useRef } from "react";
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
import MenuModal from "../MenuModal/MenuModal";
import { searchArticles } from "../../utils/newsApi";
import { LocationProvider } from "../../contexts/LocationContext";

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  const [loggedIn, setLoggedIn] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [topic, setTopic] = useState("");
  const [articles, setArticles] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);
  const [savedArticles, setSavedArticles] = useState([]);
  const [isSaved, setIsSaved] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // For checking functionality
  // console.log(articles);
  // console.log(savedArticles);
  // console.log(isSaved);

  const handleModal = (modal) => setActiveModal(modal);
  const closeActiveModal = () => setActiveModal("");

  const handleClick = () => {
    setIsClicked(true);
    setTimeout(() => setIsClicked(false), 2000);
  };

  useEffect(() => {
    if (!activeModal) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeActiveModal();
    };

    const handleClickOutsideModal = (event) => {
      if (event.target.classList.contains("modal_opened")) closeActiveModal();
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

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [activeModal]);

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

  useEffect(() => {
    if (location.pathname === "/") {
      setArticles([]);
      setSearchPerformed(false);
      if (searchInputRef.current) {
        searchInputRef.current.value = "";
      }
    }
  }, [location]);

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
    navigate("/");
  };

  const handleSignUp = ({ email, password, username }) => {
    handleClick();
    console.log("User signed up:", { email, password, username });
    handleModal("completed registration");
  };

  const fetchArticles = (topic) => {
    setLoading(true);
    setError("");

    let isMounted = true;

    searchArticles(topic)
      .then((data) => {
        if (isMounted) {
          const filteredArticles = data.filter(
            (article) =>
              !article.title.includes("[Removed]") &&
              !article.description.includes("[Removed]") &&
              !article.content.includes("[Removed]") &&
              !article.source.name.includes("[Removed]")
          );

          setArticles(filteredArticles);
          setSearchPerformed(true);
        }
      })
      .catch((err) => {
        if (isMounted) {
          console.error(err);
          setError(
            "Sorry, something went wrong during the request. There may be a connection issue or the server may be down. Please try again later."
          );
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  };

  const handleTopicChange = (event) => setTopic(event.target.value);

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
      updatedSavedArticles = savedArticles.filter(
        (saved) => saved.title !== articleTitle
      );
      updatedIsSaved = isSaved.filter((title) => title !== articleTitle);
    } else {
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

    localStorage.setItem("savedArticles", JSON.stringify(updatedSavedArticles));
    localStorage.setItem("isSaved", JSON.stringify(updatedIsSaved));
  };

  return (
    <div className="page">
      <div
        className={`page__image  ${
          location.pathname === "/saved-articles"
            ? "page__image_saved"
            : "page__image_mobile"
        }`}
      ></div>
      <div className="page__border"></div>
      <LocationProvider>
        <div className="page__section">
          <Header
            handleMenuButton={() => handleModal("menu")}
            loggedIn={loggedIn}
            handleLoginButton={() => handleModal("login")}
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
                  searchInputRef={searchInputRef}
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
          handleLoginButton={() => handleModal("login")}
          isClicked={isClicked}
        />
        <LoginModal
          isOpen={activeModal === "login"}
          closeActiveModal={closeActiveModal}
          handleSignUpButton={() => handleModal("signup")}
          handleLoginSubmit={handleLoginSubmit}
          isClicked={isClicked}
        />
        <CompletedModal
          isOpen={activeModal === "completed registration"}
          handleLoginButton={() => handleModal("login")}
          closeActiveModal={closeActiveModal}
        />
        <MenuModal
          isOpen={activeModal === "menu"}
          loggedIn={loggedIn}
          closeActiveModal={closeActiveModal}
          handleLoginButton={() => handleModal("login")}
          handleLogoutSubmit={handleLogoutSubmit}
        />
      </LocationProvider>
    </div>
  );
}

export default App;
