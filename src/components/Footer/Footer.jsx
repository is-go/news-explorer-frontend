import { Link } from "react-router-dom";
import "./Footer.css";
import fblogo from "../../assets/fb.svg";
import githublogo from "../../assets/github.svg";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">&copy; 2024 Supersite, Powered by News API</p>

      <nav className="footer__links">
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
          <a href="https://github.com/is-go" aria-label="Github">
            <img src={githublogo} alt="GitHub logo" className="footer__logo" />
          </a>
          <a
            href="https://www.facebook.com/tripleten.tech/"
            aria-label="Facebook"
          >
            <img src={fblogo} alt="Facebook logo" className="footer__logo" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

export default Footer;
