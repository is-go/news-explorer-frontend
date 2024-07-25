import "./About.css";
import author from "../../assets/author-section-image.png";

function About() {
  return (
    <section className="about">
      <img
        className="about__image"
        src={author}
        alt="Image of the author"
      ></img>
      <div className="about__section">
        <h2 className="about__title">About the author</h2>
        <p className="about__text">
          This block describes the project author. Here you should indicate your
          name, what you do, and which development technologies you know.
        </p>
        <p className="about__text">
          You can also talk about your experience with TripleTen, what you
          learned there, and how you can help potential customers.
        </p>
      </div>
    </section>
  );
}

export default About;
