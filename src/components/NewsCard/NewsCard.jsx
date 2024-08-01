import React from "react";
import { useLocation } from "react-router-dom";
import "./NewsCard.css";

import deleteIcon from "../../assets/trash.svg";
import deleteIconHover from "../../assets/trash-hover.svg";
import unsavedIcon from "../../assets/save.svg";
import unsavedIconHover from "../../assets/save-hover.svg";
import savedIcon from "../../assets/saved.svg";

function NewsCard({ article, loggedIn, isSaved, handleToggleSave }) {
  const location = useLocation();
  const savedLocation = location.pathname === "/saved-articles";
  const isArticleSaved = isSaved.includes(article.title);

  const handleSaveClick = (title) => {
    if (loggedIn) {
      handleToggleSave(title);
    } else {
      alert("You need to be logged in to save articles.");
    }
  };

  return (
    <li className="card">
      <div className="card__content">
        <img src={article.imageUrl} alt="Article Image" className="card__img" />
        <div className="card__header">
          <p className={!savedLocation ? "card__topic" : "card__topic_saved"}>
            {article.keyword}
          </p>
          {!savedLocation && (
            <button
              className="card__button"
              onClick={() => handleSaveClick(article.title)}
            >
              <img
                src={isArticleSaved ? savedIcon : unsavedIcon}
                alt={isArticleSaved ? "unsave button" : "save button"}
                className="card__button-img"
              />
              {!isArticleSaved && (
                <img
                  src={unsavedIconHover}
                  alt="save button hover"
                  className="card__button-img_hover"
                />
              )}
              {!loggedIn && (
                <p className="card__note">Sign in to save articles</p>
              )}
            </button>
          )}
          {savedLocation && (
            <button
              className="card__button"
              onClick={() => handleToggleSave(article.title)}
            >
              <img
                src={deleteIcon}
                alt="trash button"
                className="card__button-img"
              />
              <img
                src={deleteIconHover}
                alt="trash button hover"
                className="card__button-img_hover"
              />
              {loggedIn && <p className="card__note">Remove from saved</p>}
            </button>
          )}
        </div>
        <div className="card__info">
          <p className="card__date">{article.publishedAt}</p>
          <p className="card__title">{article.title}</p>
          <p className="card__text">{article.description}</p>
          <p className="card__source">{article.sourceName}</p>
        </div>
      </div>
    </li>
  );
}

export default NewsCard;
