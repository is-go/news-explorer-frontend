import React from "react";
import "./NewsCardList.css";
import NewsCard from "../NewsCard/NewsCard";

function NewsCardList() {
  const cards = Array(6).fill(<NewsCard />);

  return (
    <div className="cards">
      <ul className="cards__list">
        {cards.map((card, index) => (
          <React.Fragment key={index}>{card}</React.Fragment>
        ))}
      </ul>
    </div>
  );
}

export default NewsCardList;
