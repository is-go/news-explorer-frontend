import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logOutIcon from "../../assets/logout.png";

function Navigation({ loggedIn }) {
  return (
    <nav className="nav">
      <NavLink to="/" className="nav__text nav__home" activeclassname="active" exact>
        Home
      </NavLink>
      {loggedIn ? (
        <>
          <NavLink
            to="/saved-articles"
            className="nav__text nav__saved"
            activeclassname="active"
          >
            Saved Articles
          </NavLink>
          <button type="button" className="nav__button">
            NAME
            <img src={logOutIcon} alt="log out icon" className="nav__logout" />
          </button>
        </>
      ) : (
        <button type="button" className="nav__button">
          Sign in
        </button>
      )}
    </nav>
  );
}

export default Navigation;
