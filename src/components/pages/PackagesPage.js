import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import packages from '../../data/packages';
import PackageCard from '../PackageCard';
import Footer from '../Footer';
import '../TravelPackages.css';
import './SubPage.css';

function PackagesPage() {
  const { t } = useLanguage();

  return (
    <>
      <main className="subpage">
        <div className="container">
          <div className="subpage__header">
            <h1 className="subpage__title">{t.packages.title}</h1>
            <p className="subpage__subtitle">{t.packages.subtitle}</p>
          </div>
          <div className="packages__grid">
            {packages.map((pkg) => (
              <PackageCard key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default PackagesPage;
