import { Link } from "react-router-dom";
import "./Header.css";
import Navigation from "../Navigation/Navigation";

function Header({ loggedIn, handleLoginButton }) {
  //create function for nav and pass for active styles?

  return (
    <header className="header">
      <p className="header__title">NewsExplorer</p>
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
