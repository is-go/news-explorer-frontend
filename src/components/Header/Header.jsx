import { useLocation } from "react-router-dom";
import { useSavedLocation } from "../../contexts/LocationContext";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import menuIcon from "../../assets/menu.svg";
import menuIconSaved from "../../assets/menu-black.svg";

function Header({
  loggedIn,
  handleLoginButton,
  handleLogoutSubmit,
  handleMenuButton,
  isHidden,
}) {
const savedLocation = useSavedLocation();

  return (
    <header className={`header ${isHidden ? "header_hidden" : ""}`}>
      <h1
        className={`header__title ${
          savedLocation ? "header__title_saved" : ""
        }`}
      >
        NewsExplorer
      </h1>
      <button
        className="header__menu-button"
        onClick={handleMenuButton}
        aria-label="Menu"
      >
        <img src={savedLocation ? menuIconSaved : menuIcon} alt="Menu" />
      </button>
      <nav className="header__navigation">
        <Navigation
          loggedIn={loggedIn}
          handleLoginButton={handleLoginButton}
          handleLogoutSubmit={handleLogoutSubmit}
        />
      </nav>
    </header>
  );
}

export default Header;
