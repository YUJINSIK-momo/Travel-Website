import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Events.css';

function EventCard({ event }) {
  const { lang } = useLanguage();

  return (
    <article className="event-card">
      <div className="event-card__img-wrap">
        <img
          src={event.image}
          alt={event.title[lang]}
          className="event-card__img"
          loading="lazy"
        />
        <span className="event-card__season">{event.season[lang]}</span>
      </div>
      <div className="event-card__body">
        <h3 className="event-card__title">{event.title[lang]}</h3>
        <p className="event-card__desc">{event.description[lang]}</p>
      </div>
    </article>
  );
}

export default EventCard;
