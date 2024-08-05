import "./SearchBar.css";
import { useState } from "react";

function SearchBar({ handleTopicChange, handleSearchSubmit, isClicked, }) {
  
  return (
    <div className="search-bar">
      <form
        action="#"
        className="search-bar__form"
        onSubmit={handleSearchSubmit}
      >
        <input
          type="text"
          name="search-bar"
          className="search-bar__input"
          placeholder="Enter topic"
          minLength="1"
          maxLength="30"
          onChange={handleTopicChange}
          autoComplete="on"
        />
        <button type="submit" name="search" className={`search-bar__button ${isClicked ? "search-bar__button_clicked" : "" }`}>
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
