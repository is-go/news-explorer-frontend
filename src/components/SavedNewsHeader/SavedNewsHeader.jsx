import "./SavedNewsHeader.css"

function SavedNewsHeader() {
    return (
      <div className="saved-header">
        <p className="saved-header__title">Saved Articles</p>
        <p className="saved-header__header">Elise, you have 5 saved articles</p>
        <p className="saved-header__keywords">
          By keywords:{" "}
          <span className="saved-header__span">
            Nature, Yellowstone, and 2 other
          </span>
        </p>
      </div>
    );
}

export default SavedNewsHeader;