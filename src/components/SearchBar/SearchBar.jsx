import { useState } from "react";
import "./SearchBar.css";

function SearchBar({
  handleTopicChange,
  handleSearchSubmit,
  isClicked,
  searchInputRef,
}) {
  const [isActive, setIsActive] = useState(false);

  const handleInputChange = (e) => {
    handleTopicChange(e);
    setIsActive(e.target.value.trim() !== ""); // Button is active if input filled
  };

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
          ref={searchInputRef}
          onChange={handleInputChange}
          autoComplete="on"
        />
        <button
          type="submit"
          name="search"
          className={`search-bar__button ${isClicked ? "search-bar__button_clicked" : ""}`}
          disabled={!isActive}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
