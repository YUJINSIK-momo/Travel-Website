import React from 'react';
import { FiMapPin, FiTag, FiShield, FiHeadphones } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';
import './WhyChooseUs.css';

function WhyChooseUs() {
  const { t } = useLanguage();

  const items = [
    { icon: <FiMapPin />, title: t.why.item1Title, desc: t.why.item1Desc },
    { icon: <FiTag />, title: t.why.item2Title, desc: t.why.item2Desc },
    { icon: <FiShield />, title: t.why.item3Title, desc: t.why.item3Desc },
    { icon: <FiHeadphones />, title: t.why.item4Title, desc: t.why.item4Desc },
  ];

  return (
    <section className="why section" id="why">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{t.why.title}</h2>
          <p className="section__subtitle">{t.why.subtitle}</p>
        </div>
        <div className="why__grid">
          {items.map((item, i) => (
            <div key={i} className="why-card">
              <div className="why-card__icon">{item.icon}</div>
              <h3 className="why-card__title">{item.title}</h3>
              <p className="why-card__desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
