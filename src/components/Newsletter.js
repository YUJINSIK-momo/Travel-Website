import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Newsletter.css';

function Newsletter() {
  const { t } = useLanguage();
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <section className="newsletter" id="contact">
      <div className="newsletter__inner">
        <h2 className="newsletter__title">{t.newsletter.title}</h2>
        <p className="newsletter__subtitle">{t.newsletter.subtitle}</p>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <input
            type="email"
            className="newsletter__input"
            placeholder={t.newsletter.placeholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="newsletter__btn">
            {t.newsletter.subscribe}
          </button>
        </form>

        <div className="newsletter__divider">
          <span>OR</span>
        </div>

        <button className="newsletter__contact-btn">
          {t.newsletter.contact}
          <span className="newsletter__contact-desc">{t.newsletter.contactDesc}</span>
        </button>
      </div>
    </section>
  );
}

export default Newsletter;
