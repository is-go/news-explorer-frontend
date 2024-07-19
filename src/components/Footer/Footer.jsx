import { Link } from "react-router-dom";
import "./Footer.css";
import fblogo from "../../assets/fb.png";
import githublogo from "../../assets/github.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__author">
        <p className="footer__text">Developed By Isaic Gonzalez</p>
        <p className="footer__text">2024</p>
      </div>
      <section className="footer__links">
        <Link to="/" className="nav__link">
          Home
        </Link>
        <a
          href="https://tripleten.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          TripleTen
        </a>
        <a href="#">
          <img src={fblogo} alt="facebook logo" className="footer__logo" />
        </a>
        <a href="#">
          <img src={githublogo} alt="github logo" className="footer__logo" />
        </a>
      </section>
    </footer>
  );
}

export default Footer;
