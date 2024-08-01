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
      <div className="saved_content">
        <SavedNewsHeader savedArticles={savedArticles}></SavedNewsHeader>
        <NewsCardList
          loggedIn={loggedIn}
          isSaved={isSaved}
          savedArticles={savedArticles}
          handleSave={handleSave}
          handleDelete={handleDelete}
          handleToggleSave={handleToggleSave}
        ></NewsCardList>
      </div>
    </main>
  );
}

export default SavedNews;
