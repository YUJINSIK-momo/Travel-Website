import React, { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FiMenu, FiX, FiGlobe } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

const NAV_ITEMS = [
  { key: 'home', type: 'route', to: '/' },
  { key: 'destinations', type: 'route', to: '/destinations' },
  { key: 'packages', type: 'route', to: '/packages' },
  { key: 'gallery', type: 'route', to: '/gallery' },
  { key: 'events', type: 'route', to: '/events' },
  { key: 'reviews', type: 'section', section: 'reviews' },
  { key: 'contact', type: 'section', section: 'contact' },
];

const LANGS = ['ko', 'en', 'ja'];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, switchLang } = useLanguage();
  const history = useHistory();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Hero가 없는 페이지에서는 항상 solid (투명 배경 위 흰 글씨 방지)
  const solid = scrolled || !isHome;

  const goRoute = (to) => {
    setMenuOpen(false);
    if (location.pathname !== to) history.push(to);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goSection = (section) => {
    setMenuOpen(false);
    const scroll = () => {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    };
    if (isHome) {
      scroll();
    } else {
      history.push('/');
      // 홈이 마운트된 뒤 해당 섹션으로 이동
      setTimeout(scroll, 150);
    }
  };

  const nextLang = LANGS[(LANGS.indexOf(lang) + 1) % LANGS.length];

  return (
    <nav className={`navbar${solid ? ' navbar--scrolled' : ''}`}>
      <div className="navbar__inner">
        <Link
          to="/"
          className="navbar__logo"
          onClick={() => setMenuOpen(false)}
        >
          <span>TRVL</span>
          <span className="navbar__logo-icon">✈</span>
        </Link>

        <ul className={`navbar__menu${menuOpen ? ' navbar__menu--open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <li key={item.key}>
              <button
                className="navbar__link"
                onClick={() =>
                  item.type === 'route'
                    ? goRoute(item.to)
                    : goSection(item.section)
                }
              >
                {t.nav[item.key]}
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
