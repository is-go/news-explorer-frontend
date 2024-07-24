import { useLocation } from "react-router-dom";
import "./NewsCard.css";
import space from "../../assets/sapce.png";
import deleteIcon from "../../assets/trash.png";
import deleteIconHover from "../../assets/trash-hover.png";
import unsavedIcon from "../../assets/save.png";
import savedIcon from "../../assets/saved.png";
import unsaveabIconHover from "../../assets/save-hover.png";


function NewsCard({ loggedIn }) {
  const location = useLocation();

  return (
    <li className="card">
      <img src={space} alt="Article Image" className="card__img" />
      <div className="card__header">
        <p className="card__topic">Nature</p>
        {location.pathname === "/saved-articles" ? (
          <button className="card__button">
            <img
              src={deleteIcon}
              alt="delete button"
              className="card__button-img"
              onMouseEnter={(e) => (e.currentTarget.src = deleteIconHover)}
              onMouseLeave={(e) => (e.currentTarget.src = deleteIcon)}
            />
            <p className="card__note">Removed from saved</p>
          </button>
        ) : (
          <button className="card__button">
            <img
              src={unsavedIcon}
              alt="save button"
              className="card__button-img"
            />
            {!loggedIn && (
              <p className="card__note">Sign in to save articles</p>
            )}
          </button>
        )}
      </div>
      <div className="card__info">
        <p className="card__date">November 4, 2020</p>
        <p className="card__title">
          Scientists Don't Know Why Polaris Is So Weird{" "}
        </p>
        <p className="card__text">
          Humans have long relied on the starry sky to push into new frontiers,
          sail to the very edge of the world and find their way back home again.
          Even animals look to the stars to guide them.{" "}
        </p>
        <p className="card__source">treehugger</p>
      </div>
    </li>
  );
}

export default NewsCard;

//sign in to save articles note when (not) logged in
//removed from saved when logged in
