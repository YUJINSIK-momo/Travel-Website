import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { FiMapPin } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import reviews from '../data/reviews';
import './Reviews.css';

function Reviews() {
  const { t, lang } = useLanguage();

  return (
    <section className="reviews section" id="reviews">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{t.reviews.title}</h2>
          <p className="section__subtitle">{t.reviews.subtitle}</p>
        </div>
        <div className="reviews__grid">
          {reviews.map((review) => (
            <article key={review.id} className="review-card">
              <div className="review-card__quote">"</div>
              <div className="review-card__stars">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>
              <p className="review-card__text">{review.text[lang]}</p>
              <div className="review-card__author">
                <img
                  src={review.avatar}
                  alt={review.name[lang]}
                  className="review-card__avatar"
                />
                <div className="review-card__info">
                  <span className="review-card__name">{review.name[lang]}</span>
                  <span className="review-card__dest">
                    <FiMapPin size={11} />
                    {review.destination[lang]}
                  </span>
                </div>
                <span className="review-card__date">{review.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
