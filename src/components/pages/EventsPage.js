import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import events, { campaignBanners } from '../../data/events';
import EventCard from '../EventCard';
import Footer from '../Footer';
import '../Events.css';
import './SubPage.css';

function EventsPage() {
  const { t } = useLanguage();

  return (
    <>
      <main className="subpage">
        <div className="container">
          <div className="subpage__header">
            <h1 className="subpage__title">{t.events.title}</h1>
            <p className="subpage__subtitle">{t.events.subtitle}</p>
          </div>

          <div className="campaign">
            <h2 className="campaign__title">{t.events.campaign}</h2>
            <div className="campaign__grid">
              {campaignBanners.map((src, i) => (
                <div className="campaign__banner" key={i}>
                  <img src={src} alt={`Campaign ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          <div className="events__grid events__grid--page">
            {events.map((ev) => (
              <EventCard key={ev.id} event={ev} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default EventsPage;
