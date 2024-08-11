import { Link, useLocation } from "react-router-dom";
import "./Footer.css";
import fblogo from "../../images/fb.svg";
import githublogo from "../../images/github.svg";

function Footer() {
  const location = useLocation();

  const handleHomeClick = () => {
    if (location.pathname === "/") {
      window.scrollTo(0, 0);
    }
  };

  return (
    <footer className="footer">
      <div className="footer__content">
        <p className="footer__text">
          &copy; 2024 Supersite, Powered by News API
        </p>

        <nav className="footer__links">
          <div className="footer__link-cont">
            <Link to="/" className="footer__link" onClick={handleHomeClick}>
              Home
            </Link>
            <a
              href="https://tripleten.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TripleTen"
              className="footer__link"
            >
              TripleTen
            </a>
          </div>
          <div className="footer__media">
            <a
              href="https://github.com/is-go"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Github"
            >
              <img
                src={githublogo}
                alt="GitHub logo"
                className="footer__logo"
              />
            </a>
            <a
              href="https://www.facebook.com/tripleten.tech/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img src={fblogo} alt="Facebook logo" className="footer__logo" />
            </a>
          </div>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
