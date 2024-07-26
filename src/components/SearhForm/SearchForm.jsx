import "./SearchForm.css";
import NewsCard from "../NewsCard/NewsCard";
import NothingFound from "../NothingFound/NothingFound";
import PreLoader from "../Preloader/Preloader";

function SearchForm( {handleSave}) {
  return (
    <section className="search">
      <div className="search__content">
        <p className="search__title">Search Results</p>
        {/* <div className="search__load">
          <PreLoader/>
        </div> */}
        <NewsCard handleSave={handleSave}/>
        <NothingFound />
        <button className="search__more">See more</button>
      </div>
    </section>
  );
}

export default SearchForm;
