import React, { useState } from 'react';
import { FiSearch, FiCalendar, FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import destinations from '../data/destinations';
import './HeroSection.css';

function HeroSection() {
  const { t, lang } = useLanguage();
  const [destination, setDestination] = useState('');

  const scrollToDestinations = () => {
    const el = document.getElementById('destinations');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const titleLines = t.hero.title.split('\n');

  return (
    <section className="hero" id="hero">
      <div className="hero__overlay" />
      <div className="hero__content">
        <h1 className="hero__title">
          {titleLines.map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < titleLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h1>
        <p className="hero__subtitle">{t.hero.subtitle}</p>

        <div className="hero__search">
          <div className="hero__search-item">
            <FiMapPin className="hero__search-icon" />
            <select
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
            >
              <option value="">{t.hero.searchPlaceholder}</option>
              {destinations.map((d) => (
                <option key={d.id} value={d.id}>
                  {d.name[lang]}
                </option>
              ))}
            </select>
          </div>
          <div className="hero__search-item">
            <FiCalendar className="hero__search-icon" />
            <input type="date" />
          </div>
          <div className="hero__search-item">
            <FiCalendar className="hero__search-icon" />
            <input type="date" />
          </div>
          <button className="hero__search-btn">
            <FiSearch />
            {t.hero.searchBtn}
          </button>
        </div>

        <div className="hero__btns">
          <button className="hero__btn hero__btn--primary" onClick={scrollToDestinations}>
            {t.hero.cta}
          </button>
          <button className="hero__btn hero__btn--outline">
            ▶ {t.hero.watchTrailer}
          </button>
        </div>
      </div>

      <div className="hero__scroll">
        <div className="hero__scroll-bar" />
      </div>
    </section>
  );
}

export default HeroSection;
