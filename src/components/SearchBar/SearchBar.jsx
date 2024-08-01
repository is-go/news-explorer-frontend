import "./SearchBar.css";

function SearchBar({ handleTopicChange, handleSearchSubmit }) {
  return (
    <div className="search-bar">
      <form
        action="#"
        className="search-bar__form"
        onSubmit={handleSearchSubmit}
      >
        <input
          type="text"
          className="search-bar__input"
          placeholder="Enter topic"
          minLength="1"
          maxLength="30"
          onChange={handleTopicChange}
        />
        <button type="submit" name="search" className="search-bar__button">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
