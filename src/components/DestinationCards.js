import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import destinations from '../data/destinations';
import DestinationCard from './DestinationCard';
import './DestinationCards.css';

const HOME_COUNT = 6;

function DestinationCards() {
  const { t } = useLanguage();

  return (
    <section className="destinations section" id="destinations">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{t.destinations.title}</h2>
          <p className="section__subtitle">{t.destinations.subtitle}</p>
        </div>
        <div className="destinations__grid">
          {destinations.slice(0, HOME_COUNT).map((dest) => (
            <DestinationCard key={dest.id} dest={dest} />
          ))}
        </div>
        <div className="section__cta">
          <Link to="/destinations" className="view-all-btn">
            {t.destinations.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default DestinationCards;
