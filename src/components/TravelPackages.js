import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import packages from '../data/packages';
import PackageCard from './PackageCard';
import './TravelPackages.css';

const HOME_COUNT = 4;

function TravelPackages() {
  const { t } = useLanguage();

  return (
    <section className="packages section" id="packages">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{t.packages.title}</h2>
          <p className="section__subtitle">{t.packages.subtitle}</p>
        </div>
        <div className="packages__grid">
          {packages.slice(0, HOME_COUNT).map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
        <div className="section__cta">
          <Link to="/packages" className="view-all-btn">
            {t.packages.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default TravelPackages;
