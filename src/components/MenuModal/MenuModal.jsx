import "./MenuModal.css";
import { Link } from "react-router-dom";
import { useSavedLocation } from "../../contexts/LocationContext";

import logOutIcon from "../../images/logout.svg";

function MenuModal({
  isOpen,
  loggedIn,
  handleLoginButton,
  handleLogoutSubmit,
  closeActiveModal,
}) {
  const savedLocation = useSavedLocation();

  return (
    <div className={`menu ${isOpen ? "menu_opened" : ""}`}>
      <div className="menu__content">
        <div className="menu__header">
          <p className="menu__title">NewsExplorer</p>
          <button
            className="menu__close"
            onClick={closeActiveModal}
            aria-label="Close"
          ></button>
        </div>
        <div className="menu__options">
          <div className="menu__links">
            <Link to="/" className="menu__link" onClick={closeActiveModal}>
              Home
            </Link>
            {loggedIn && (
              <Link
                to="/saved-articles"
                className="menu__link"
                onClick={closeActiveModal}
              >
                Saved articles
              </Link>
            )}
          </div>
          {loggedIn ? (
            <button
              type="button"
              className={`menu__button menu__button_logout ${
                savedLocation ? "menu__button_saved" : ""
              }`}
              onClick={handleLogoutSubmit}
            >
              <span
                className={`menu__text_logout ${
                  savedLocation ? "menu__text_logout-saved" : ""
                }`}
              >
                Elise
              </span>
              <img
                src={logOutIcon}
                alt="Log out icon"
                className="menu__logout-image"
              />
            </button>
          ) : (
            <button
              type="button"
              className={`menu__button ${
                savedLocation ? "menu__button_saved" : ""
              }`}
              onClick={handleLoginButton}
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default MenuModal;
