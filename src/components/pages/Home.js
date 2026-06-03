import React from 'react';
import HeroSection from '../HeroSection';
import DestinationCards from '../DestinationCards';
import TravelPackages from '../TravelPackages';
import Events from '../Events';
import WhyChooseUs from '../WhyChooseUs';
import Gallery from '../Gallery';
import Reviews from '../Reviews';
import Newsletter from '../Newsletter';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <DestinationCards />
      <TravelPackages />
      <Events />
      <WhyChooseUs />
      <Gallery />
      <Reviews />
      <Newsletter />
      <Footer />
    </>
  );
}

export default Home;
