import React from 'react';
import { FiZoomIn } from 'react-icons/fi';
import './Gallery.css';

function GalleryGrid({ images }) {
  return (
    <div className="gallery__grid">
      {images.map((item, i) => (
        <div
          key={i}
          className={`gallery__item${item.tall ? ' gallery__item--tall' : ''}`}
        >
          <img src={item.src} alt={`Travel ${i + 1}`} loading="lazy" />
          <div className="gallery__item__overlay">
            <div className="gallery__item__icon">
              <FiZoomIn />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GalleryGrid;
