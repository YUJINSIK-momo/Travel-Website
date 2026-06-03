import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import galleryImages from '../../data/gallery';
import GalleryGrid from '../GalleryGrid';
import Footer from '../Footer';
import './SubPage.css';

function GalleryPage() {
  const { t } = useLanguage();

  return (
    <>
      <main className="subpage">
        <div className="container">
          <div className="subpage__header">
            <h1 className="subpage__title">{t.gallery.title}</h1>
            <p className="subpage__subtitle">{t.gallery.subtitle}</p>
          </div>
          <GalleryGrid images={galleryImages} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default GalleryPage;
