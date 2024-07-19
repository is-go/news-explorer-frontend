import "./About.css"
import author from "../../assets/author-section-image.png";

function About() {
<section className="about">
    <image className="about__image"
    href={author} alt="Image of the author"></image>
    <div className="about__section">
        <h2 className="about__title"></h2>
        <p className="about__text"></p>
    </div>
</section>
}

export default About;