import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const NAV_SECTIONS = [
  { key: 'home', section: 'hero' },
  { key: 'destinations', section: 'destinations' },
  { key: 'packages', section: 'packages' },
  { key: 'gallery', section: 'gallery' },
  { key: 'reviews', section: 'reviews' },
  { key: 'contact', section: 'contact' },
];

const LANGS = ['ko', 'en', 'ja'];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, switchLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const nextLang = LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length];

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo">
          <span>TRVL</span>
          <span className="navbar__logo-icon">✈</span>
        </Link>

        <ul className={`navbar__menu${menuOpen ? ' navbar__menu--open' : ''}`}>
          {NAV_SECTIONS.map(({ key, section }) => (
            <li key={key}>
              <button
                className="navbar__link"
                onClick={() => scrollToSection(section)}
              >
                {t.nav[key]}
              </button>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <button className="navbar__lang" onClick={() => switchLang(nextLang)}>
            <FiGlobe size={13} />
            <span>{lang.toUpperCase()}</span>
          </button>
          <button className="navbar__login navbar__login-desktop">
            {t.nav.login}
          </button>
          <button
            className="navbar__hamburger"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
