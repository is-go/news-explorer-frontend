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
          Hello there! I'm Isaic Gonzalez, a full-stack engineer with a passion
          for both the frontend and backend of applications. I graduated from
          TripleTen, where I picked up a bunch of skills like HTML, CSS,
          JavaScript, and React on the frontend, and Node.js, Express, and
          MongoDB on the backend. TripleTen really helped me understand the full
          cycle of web development, from creating responsive designs to building
          robust APIs.
        </p>
        <p className="about__text">
          As an artist and musician, I bring a unique creative flair to my work,
          ensuring that every project is not only functional but also visually
          appealing and refined. This means I can help you bring your ideas to
          life, ensuring everything looks great and works smoothly from start to
          finish. Whether it's a sleek user interface or a powerful backend
          system, I've got you covered.
        </p>
      </div>
    </section>
  );
}

export default About;
