import { useState } from "react";
import "./SearchForm.css";
import NewsCard from "../NewsCard/NewsCard";

function SearchForm({ articles, loggedIn, isSaved, handleToggleSave }) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleSeeMore = () => {
    setVisibleCount((prevCount) => Math.min(prevCount + 3, 6));
  };

  return (
    <section className="search">
      <div className="search__content">
        <p className="search__title">Search Results</p>
        <ul className="search__list">
          {articles.slice(0, visibleCount).map((article, index) => (
            <NewsCard
              key={article.title}
              article={article}
              loggedIn={loggedIn}
              isSaved={isSaved}
              index={index}
              handleToggleSave={handleToggleSave}
            />
          ))}
        </ul>
        <div className="search__buttons">
          {visibleCount < Math.min(articles.length, 6) && (
            <button className="search__more" onClick={handleSeeMore}>
              See more
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default SearchForm;
