import { useLocation } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";
import menuIcon from "../../assets/menu.svg"
import menuIconSaved from "../../assets/menu-black.svg";

function Header({
  loggedIn,
  handleLoginButton,
  handleLogoutSubmit,
  handleMenuButton,
  isHidden
}) {
  const location = useLocation();
  const savedLocation = location.pathname === "/saved-articles";

  return (
    <header className={`header ${isHidden ? "header_hidden" : ""}`}>
      <p
        className={`header__title ${
          savedLocation ? "header__title_saved" : ""
        }`}
      >
        NewsExplorer
      </p>
      <button className="header__menu-button" onClick={handleMenuButton}>
        <img src={savedLocation ? menuIconSaved : menuIcon} alt="Menu" />
      </button>
      <section className="header__navigation">
        <Navigation
          loggedIn={loggedIn}
          handleLoginButton={handleLoginButton}
          handleLogoutSubmit={handleLogoutSubmit}
        />
      </section>
    </header>
  );
}

export default Header;