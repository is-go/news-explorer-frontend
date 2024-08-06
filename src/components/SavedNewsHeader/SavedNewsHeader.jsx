import "./SavedNewsHeader.css";

function SavedNewsHeader({ savedArticles }) {


/// Find amount of times keywords saved and display accordingly

  const keywordFrequency = savedArticles.reduce((acc, article) => {
    const keyword = article.keyword;
    acc[keyword] = (acc[keyword] || 0) + 1;
    return acc;
  }, {});

  const sortedKeywords = Object.entries(keywordFrequency)
    .sort((a, b) => b[1] - a[1])
    .map(([keyword]) => keyword);

  let keywordsDisplay;
  if (sortedKeywords.length === 1) {
    keywordsDisplay = sortedKeywords[0];
  } else if (sortedKeywords.length === 2) {
    keywordsDisplay = sortedKeywords.join(" and ");
  } else if (sortedKeywords.length > 2) {
    keywordsDisplay = `${sortedKeywords[0]}, ${sortedKeywords[1]}, and ${
      sortedKeywords.length - 2
    } other${sortedKeywords.length - 2 > 1 ? "s" : ""}`;
  } else {
    keywordsDisplay = "No keywords";
  }

  return (
    <div className="saved-header">
      <p className="saved-header__title">Saved Articles</p>
      <p className="saved-header__header">
        Elise, you have {savedArticles.length} saved articles
      </p>
      <p className="saved-header__keywords">
        By keywords:{" "}
        <span className="saved-header__span">{keywordsDisplay}</span>
      </p>
    </div>
  );
}

export default SavedNewsHeader;