import { useLocation } from "react-router-dom"; 
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn, handleLoginButton }) {
  const location = useLocation();

  return (
    <header className="header">
      <p
        className={`header__title ${location.pathname === "/saved-articles" ? "header__title_saved" : ""}`}
      >
        NewsExplorer
      </p>
      <section className="header__navigation">
        <Navigation
          loggedIn={loggedIn}
          handleLoginButton={handleLoginButton}
        ></Navigation>
      </section>
    </header>
  );
}

export default Header;
