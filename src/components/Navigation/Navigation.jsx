import { Link } from "react-router-dom";
import ".Navigation.css"
import logOutIcon from "../../assets/logout.png"

function Navigation({ isLoggedIn }) {
  return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn ? (
        <>
          <Link to="/saved-articles">Saved Articles</Link>
          <button type="button" className="nav__button">
            NAME
            <img src={ logOutIcon } alt="log out icon" className="nav__logout" />
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
