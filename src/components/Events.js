import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import events from '../data/events';
import EventCard from './EventCard';
import './Events.css';

const HOME_COUNT = 3;

function Events() {
  const { t } = useLanguage();

  return (
    <section className="events section section--light" id="events">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{t.events.title}</h2>
          <p className="section__subtitle">{t.events.subtitle}</p>
        </div>
        <div className="events__grid">
          {events.slice(0, HOME_COUNT).map((ev) => (
            <EventCard key={ev.id} event={ev} />
          ))}
        </div>
        <div className="section__cta">
          <Link to="/events" className="view-all-btn">
            {t.events.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Events;
