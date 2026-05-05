import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaTwitter,
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div>
            <div className="footer__brand-logo">
              <span>TRVL</span>
              <span>✈</span>
            </div>
            <p className="footer__tagline">{t.footer.tagline}</p>
            <div className="footer__social">
              <a
                href="https://instagram.com"
                className="footer__social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://facebook.com"
                className="footer__social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://youtube.com"
                className="footer__social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
              <a
                href="https://twitter.com"
                className="footer__social-link"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          <div>
            <h4 className="footer__col-title">{t.footer.aboutUs}</h4>
            <ul className="footer__links">
              <li><Link to="/">{t.footer.howItWorks}</Link></li>
              <li><Link to="/">{t.footer.testimonials}</Link></li>
              <li><Link to="/">{t.footer.careers}</Link></li>
              <li><Link to="/">{t.footer.sponsorships}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">{t.footer.contactUs}</h4>
            <ul className="footer__links">
              <li><Link to="/">{t.footer.contactUs}</Link></li>
              <li><Link to="/">{t.footer.support}</Link></li>
              <li><Link to="/">{t.footer.destinations}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="footer__col-title">{t.footer.social}</h4>
            <ul className="footer__links">
              <li><a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
              <li><a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a></li>
              <li><a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a></li>
              <li><a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span className="footer__rights">{t.footer.rights}</span>
          <div className="footer__bottom-links">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms of Service</a>
            <a href="/">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
