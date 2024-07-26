import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList({ savedArticles, token }) {
  return (
    <div className="cards">
      <ul className="cards__list">
        {savedArticles.map((article) => (
          <NewsCard key={article._id} article={article} token={token} />
        ))}
      </ul>
    </div>
  );
}

export default NewsCardList;
