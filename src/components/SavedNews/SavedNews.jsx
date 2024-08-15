import "./SavedNews.css";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({
  loggedIn,
  isSaved,
  savedArticles,
  handleSave,
  handleDelete,
  handleToggleSave,
}) {
  return (
    <main className="saved">
      <div className="saved__content">
        <SavedNewsHeader savedArticles={savedArticles} />
        <NewsCardList
          loggedIn={loggedIn}
          isSaved={isSaved}
          savedArticles={savedArticles}
          handleSave={handleSave}
          handleDelete={handleDelete}
          handleToggleSave={handleToggleSave}
        />
      </div>
    </main>
  );
}

export default SavedNews;
