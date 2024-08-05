import "./About.css";
import author from "../../assets/author.jpg";

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
          Hello there! I'm Isaic Gonzalez, a full-stack engineer passionate
          about both the frontend and backend of applications. At TripleTen, I
          learned HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB,
          covering the full cycle of web development.
        </p>
        <p className="about__text">
          As an artist and musician, I bring a creative flair to my work,
          ensuring every project is functional, visually appealing, and refined.
          Whether it's a sleek user interface or a powerful backend, I can help
          bring your ideas to life.
        </p>
      </div>
    </section>
  );
}

export default About;
