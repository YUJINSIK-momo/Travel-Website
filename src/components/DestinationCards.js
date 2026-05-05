import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useLanguage } from '../context/LanguageContext';
import destinations from '../data/destinations';
import './DestinationCards.css';

const TAG_CLASS = {
  'Best Seller': 'dest-card__tag--bestseller',
  'Trending': 'dest-card__tag--trending',
  'Recommended': 'dest-card__tag--recommended',
};

function DestinationCards() {
  const { t, lang } = useLanguage();

  return (
    <section className="destinations section" id="destinations">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{t.destinations.title}</h2>
          <p className="section__subtitle">{t.destinations.subtitle}</p>
        </div>
        <div className="destinations__grid">
          {destinations.map((dest) => (
            <article key={dest.id} className="dest-card">
              <div className="dest-card__img-wrap">
                <img
                  src={dest.image}
                  alt={dest.name[lang]}
                  className="dest-card__img"
                />
                <span className={`dest-card__tag ${TAG_CLASS[dest.tag] || ''}`}>
                  {dest.tag}
                </span>
              </div>
              <div className="dest-card__body">
                <h3 className="dest-card__name">{dest.name[lang]}</h3>
                <p className="dest-card__desc">{dest.description[lang]}</p>
                <div className="dest-card__footer">
                  <div className="dest-card__meta">
                    <div className="dest-card__rating">
                      <AiFillStar className="dest-card__stars" />
                      <span>{dest.rating}</span>
                    </div>
                    <div className="dest-card__price">
                      {t.destinations.from}{' '}
                      <strong>{dest.price}</strong>
                    </div>
                  </div>
                  <button className="dest-card__btn">{t.destinations.explore}</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DestinationCards;
