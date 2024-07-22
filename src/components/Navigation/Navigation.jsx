import { NavLink } from "react-router-dom";
import "./Navigation.css";
import logOutIcon from "../../assets/logout.png";

function Navigation({ loggedIn, handleLoginButton, }) {
  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav__text nav__home active" : "nav__text nav__home"
        }
      >
        Home
      </NavLink>
      {loggedIn ? (
        <>
          <NavLink
            to="/saved-articles"
            className={({ isActive }) =>
              isActive ? "nav__text nav__saved active" : "nav__text nav__saved"
            }
          >
            Saved Articles
          </NavLink>
          <button type="button" className="nav__button">
            NAME
            <img src={logOutIcon} alt="log out icon" className="nav__logout" />
          </button>
        </>
      ) : (
        <button
          type="button"
          className="nav__button"
          onClick={handleLoginButton}
        >
          Sign in
        </button>
      )}
    </nav>
  );
}

export default Navigation;
