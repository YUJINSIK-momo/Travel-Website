import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import galleryImages from '../data/gallery';
import GalleryGrid from './GalleryGrid';
import './Gallery.css';

const HOME_COUNT = 9;

function Gallery() {
  const { t } = useLanguage();

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{t.gallery.title}</h2>
          <p className="section__subtitle">{t.gallery.subtitle}</p>
        </div>
        <GalleryGrid images={galleryImages.slice(0, HOME_COUNT)} />
        <div className="section__cta">
          <Link to="/gallery" className="view-all-btn">
            {t.gallery.viewAll}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
