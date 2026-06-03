import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import destinations from '../../data/destinations';
import DestinationCard from '../DestinationCard';
import Footer from '../Footer';
import '../DestinationCards.css';
import './SubPage.css';

function DestinationsPage() {
  const { t } = useLanguage();

  return (
    <>
      <main className="subpage">
        <div className="container">
          <div className="subpage__header">
            <h1 className="subpage__title">{t.destinations.title}</h1>
            <p className="subpage__subtitle">{t.destinations.subtitle}</p>
          </div>
          <div className="destinations__grid">
            {destinations.map((dest) => (
              <DestinationCard key={dest.id} dest={dest} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default DestinationsPage;
