import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import packages from '../data/packages';
import './TravelPackages.css';

const STYLE_CLASS = {
  Luxury: 'pkg-card__style--luxury',
  럭셔리: 'pkg-card__style--luxury',
  ラグジュアリー: 'pkg-card__style--luxury',
  Adventure: 'pkg-card__style--adventure',
  어드벤처: 'pkg-card__style--adventure',
  アドベンチャー: 'pkg-card__style--adventure',
  Thrill: 'pkg-card__style--thrill',
  스릴: 'pkg-card__style--thrill',
  スリル: 'pkg-card__style--thrill',
};

function TravelPackages() {
  const { t, lang } = useLanguage();

  return (
    <section className="packages section" id="packages">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{t.packages.title}</h2>
          <p className="section__subtitle">{t.packages.subtitle}</p>
        </div>
        <div className="packages__grid">
          {packages.map((pkg) => {
            const styleName = pkg.style[lang];
            return (
              <article key={pkg.id} className="pkg-card">
                <div className="pkg-card__img-wrap">
                  <img
                    src={pkg.image}
                    alt={pkg.name[lang]}
                    className="pkg-card__img"
                  />
                  <span className="pkg-card__duration">{pkg.duration[lang]}</span>
                </div>
                <div className="pkg-card__body">
                  <span className={`pkg-card__style ${STYLE_CLASS[styleName] || ''}`}>
                    {styleName}
                  </span>
                  <h3 className="pkg-card__name">{pkg.name[lang]}</h3>
                  <p className="pkg-card__desc">{pkg.description[lang]}</p>
                  <div className="pkg-card__pricing">
                    <span className="pkg-card__original">{pkg.originalPrice}</span>
                    <span className="pkg-card__price">{pkg.price}</span>
                  </div>
                  <div className="pkg-card__actions">
                    <button className="pkg-card__btn pkg-card__btn--outline">
                      {t.packages.viewDetails}
                    </button>
                    <button className="pkg-card__btn pkg-card__btn--primary">
                      {t.packages.book}
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default TravelPackages;
