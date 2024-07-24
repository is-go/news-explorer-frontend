import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";
import logOutIcon from "../../assets/logout.svg";
import logOutIconBlack from "../../assets/logout-black.svg";

function Navigation({ loggedIn, handleLoginButton }) {
const location = useLocation();
const iconSrc = location.pathname === "/saved-articles" ? logOutIconBlack : logOutIcon;

  return (
    <nav
      className={`nav ${location.pathname === "/saved-articles" ? "nav_saved" : ""}`}
    >
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "nav__text nav__home active"
            : "nav__text nav__text_saved nav__home"
        }
      >
        Home
      </NavLink>
      {loggedIn ? (
        <>
          <NavLink
            to="/saved-articles"
            className={({ isActive }) =>
              isActive
                ? "nav__text nav__text_saved nav__saved active"
                : "nav__text nav__saved"
            }
          >
            Saved Articles
          </NavLink>
          <button
            type="button"
            className={`nav__button nav__button_logout ${location.pathname === "/saved-articles" ? "nav__button_saved" : ""}`}
          >
            <span
              className={`nav__text_logout ${location.pathname === "/saved-articles" ? "nav__text_logout-saved" : ""}`}
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
          className={`nav__button ${location.pathname === "/saved-articles" ? "nav__button_saved" : ""}`}
          onClick={handleLoginButton}
        >
          Sign in
        </button>
      )}
    </nav>
  );
}

export default Navigation;
