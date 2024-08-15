import "./NothingFound.css";
import notFound from "../../images/not-found.png";

function NothingFound() {
  return (
    <section className="not-found">
      <img
        src={notFound}
        alt="image to illustrate search not found"
        className="not-found__image"
      />
      <p className="not-found__title">Nothing Found</p>
      <p className="not-found__text">
        Sorry, but nothing matched your search terms.
      </p>
    </section>
  );
}

export default NothingFound;
