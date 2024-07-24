import "./SavedNews.css"
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";
import NewsCardList from "../NewsCardList/NewsCardList";

function SavedNews({loggedIn}) {
return (
  <main className="saved">
    <div className="saved_content">
      <SavedNewsHeader></SavedNewsHeader>
      <NewsCardList loggedIn={loggedIn}></NewsCardList>
    </div>
  </main>
);
}

export default SavedNews;