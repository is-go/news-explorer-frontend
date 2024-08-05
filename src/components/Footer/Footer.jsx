import { Link } from "react-router-dom";
import "./Footer.css";
import fblogo from "../../assets/fb.svg";
import githublogo from "../../assets/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">&copy; 2024 Supersite, Powered by News API</p>

      <section className="footer__links">
        <div className="footer__link-cont">
          <Link to="/" className="footer__link">
            Home
          </Link>
          <a
            href="https://tripleten.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            TripleTen
          </a>
        </div>
        <div className="footer__media">
          <a href="#">
            <img src={githublogo} alt="github logo" className="footer__logo" />
          </a>
          <a href="#">
            <img src={fblogo} alt="facebook logo" className="footer__logo" />
          </a>
        </div>
      </section>
    </footer>
  );
}

export default Footer;
