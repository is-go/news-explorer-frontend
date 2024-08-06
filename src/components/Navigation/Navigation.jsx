import { NavLink } from "react-router-dom";
import { useSavedLocation } from "../../contexts/LocationContext";
import "./Navigation.css";
import logOutIcon from "../../assets/logout.svg";
import logOutIconBlack from "../../assets/logout-black.svg";

function Navigation({ loggedIn, handleLoginButton, handleLogoutSubmit }) {
  const savedLocation = useSavedLocation();
  const iconSrc = savedLocation ? logOutIconBlack : logOutIcon;

  return (
    <nav className={`nav ${savedLocation ? "nav_saved" : ""}`}>
      <NavLink
        to="/"
        className={`nav__text nav__home ${
          savedLocation ? "nav__text_saved" : "nav__home_link"
        }`}
      >
        Home
      </NavLink>
      {loggedIn ? (
        <>
          <NavLink
            to="/saved-articles"
            className={`nav__text nav__saved ${
              savedLocation ? "nav__saved_link nav__text_saved" : ""
            }`}
          >
            Saved Articles
          </NavLink>
          <button
            type="button"
            className={`nav__button nav__button_logout ${
              savedLocation ? "nav__button_saved" : ""
            }`}
            onClick={handleLogoutSubmit}
          >
            <span
              className={`nav__text_logout ${
                savedLocation ? "nav__text_logout-saved" : ""
              }`}
            >
              Elise
            </span>
            <img
              src={iconSrc}
              alt="log out icon"
              className="nav__logout-image"
            />
          </button>
        </>
      ) : (
        <button
          type="button"
          className={`nav__button ${
            savedLocation.pathname === "/saved-articles"
              ? "nav__button_saved"
              : ""
          }`}
          onClick={handleLoginButton}
        >
          Sign in
        </button>
      )}
    </nav>
  );
}

export default Navigation;
