import "./Main.css";
import SearchBar from "../SearchBar/SearchBar";

function Main({
  handleTopicChange,
  handleSearchSubmit,
  isClicked,
  searchInputRef,
}) {
  return (
    <main className="main">
      <h1 className="main__title">What's going on in the world?</h1>
      <p className="main__text">
        Find the latest news on any topic and save them in your personal
        account.
      </p>
      <SearchBar
        handleTopicChange={handleTopicChange}
        handleSearchSubmit={handleSearchSubmit}
        isClicked={isClicked}
        searchInputRef={searchInputRef}
      />
    </main>
  );
}

export default Main;
