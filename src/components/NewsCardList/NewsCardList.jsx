import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ savedArticles, loggedIn, isSaved, handleToggleSave }) {
  const keywordFrequency = savedArticles.reduce((acc, article) => {
    acc[article.keyword] = (acc[article.keyword] || 0) + 1;
    return acc;
  }, {});

  const sortedArticles = [...savedArticles].sort((a, b) => {
    return keywordFrequency[b.keyword] - keywordFrequency[a.keyword];
  });

  const topArticles = sortedArticles.slice(0, 6);

  return (
    <div className="cards">
      <ul className="cards__list">
        {topArticles.map((article) => (
          <NewsCard
            key={article.title}
            article={article}
            loggedIn={loggedIn}
            isSaved={isSaved}
            handleToggleSave={handleToggleSave}
          />
        ))}
      </ul>
    </div>
  );
}

export default NewsCardList;
