import "./SearchBar.css";
import SearchForm from "../SearhForm/SearchForm";

function SearchBar() {
  return (
    <div className="search-bar">
      <form action="" className="search-bar__form">
        <input
          type="text"
          className="search-bar__input"
          placeholder="Enter topic"
          minLength="1"
          maxLength="30"
        />
        <button type="button" name="search" className="search-bar__button">
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
