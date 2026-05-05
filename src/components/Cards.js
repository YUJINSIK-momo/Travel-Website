import React from 'react';
import CardItem from './CardItem';

import './Cards.css';

import waterfall from '../assets/dizuni.jpg';
import bali from '../assets/tokyo.jpg';
import camel from '../assets/jinzya.jpeg';
import football from '../assets/hokaido.jpeg';
import ocean from '../assets/kyouto.jpeg';

function Cards() {
  return (
    <div className="cards">
      <h1 className="cards_momo_title">国内　人気旅行！</h1>
      <h3 className="cards_momo_txt">日本からの旅行者に人気の目的地へのフライトを予約しよう</h3>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={waterfall}
              text="Discover hidden waterfalls deep within the Amazon forest"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={bali}
              text="Travel through the Islands of Bali in a Private Cruise"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={ocean}
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              path="/services"
            />
            <CardItem
              src={football}
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={camel}
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Thrill"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
