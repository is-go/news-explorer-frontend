import React from "react";
import "./NewsCard.css";

function NewsCard({ article, token, isSaved, handleSave }) {

  return (
    <li className="card">
      <img src={article.urlToImage} alt="Article Image" className="card__img" />
      <div className="card__header">
        <p className="card__topic">{article.source.name}</p>
        <button className="card__button" onClick={handleSave}>
          <img
            src={isSaved ? savedIcon : unsavedIcon}
            alt={isSaved ? "unsave button" : "save button"}
            className="card__button-img"
          />
        </button>
      </div>
      <div className="card__info">
        <p className="card__date">{article.publishedAt}</p>
        <p className="card__title">{article.title}</p>
        <p className="card__text">{article.description}</p>
        <p className="card__source">{article.source.name}</p>
      </div>
    </li>
  );
}

export default NewsCard;

//sign in to save articles note when (not) logged in
//removed from saved when logged in
