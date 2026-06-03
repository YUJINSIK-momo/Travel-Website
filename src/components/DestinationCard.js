import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { useLanguage } from '../context/LanguageContext';
import './DestinationCards.css';

const TAG_CLASS = {
  'Best Seller': 'dest-card__tag--bestseller',
  Trending: 'dest-card__tag--trending',
  Recommended: 'dest-card__tag--recommended',
};

function DestinationCard({ dest }) {
  const { t, lang } = useLanguage();

  return (
    <article className="dest-card">
      <div className="dest-card__img-wrap">
        <img src={dest.image} alt={dest.name[lang]} className="dest-card__img" />
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
              {t.destinations.from} <strong>{dest.price}</strong>
            </div>
          </div>
          <button className="dest-card__btn">{t.destinations.explore}</button>
        </div>
      </div>
    </article>
  );
}

export default DestinationCard;
