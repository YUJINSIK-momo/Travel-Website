import React from 'react';
import { FiZoomIn } from 'react-icons/fi';
import { useLanguage } from '../context/LanguageContext';

import img1 from '../assets/images/img-1.jpg';
import img2 from '../assets/images/img-2.jpg';
import img3 from '../assets/images/img-3.jpg';
import img4 from '../assets/images/img-4.jpg';
import img5 from '../assets/images/img-5.jpg';
import img6 from '../assets/images/img-6.jpg';
import img7 from '../assets/images/img-7.jpg';
import img8 from '../assets/images/img-8.jpg';
import img9 from '../assets/images/img-9.jpg';

import './Gallery.css';

const galleryImages = [
  { src: img1, tall: true },
  { src: img2, tall: false },
  { src: img3, tall: false },
  { src: img4, tall: false },
  { src: img5, tall: false },
  { src: img6, tall: true },
  { src: img7, tall: false },
  { src: img8, tall: false },
  { src: img9, tall: false },
];

function Gallery() {
  const { t } = useLanguage();

  return (
    <section className="gallery section" id="gallery">
      <div className="container">
        <div className="section__header">
          <h2 className="section__title">{t.gallery.title}</h2>
          <p className="section__subtitle">{t.gallery.subtitle}</p>
        </div>
        <div className="gallery__grid">
          {galleryImages.map((item, i) => (
            <div
              key={i}
              className={`gallery__item${item.tall ? ' gallery__item--tall' : ''}`}
            >
              <img src={item.src} alt={`Travel ${i + 1}`} />
              <div className="gallery__item__overlay">
                <div className="gallery__item__icon">
                  <FiZoomIn />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
