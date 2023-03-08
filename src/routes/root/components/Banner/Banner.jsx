import React from 'react';
import './Banner.css';
import ArrowSVG from './ArrowSVG';
import bannerPNG from './../../../../assets/Banner/banner.png';

const Banner = () => {
  return (
    <div className="Banner">
      <div className="left">
        <h1>
          <span>Venom</span> Handmade Bags
        </h1>

        <p className="description">
          Atelierul nostru este gata să vă onoreze cu comenzile
          <br className="break" />
          &nbsp;lucrate din diferite materiale
        </p>

        <p className="more">
          Vezi produsele noastre <ArrowSVG />
        </p>
      </div>

      <div className="right">
        <img
          src={bannerPNG}
          alt="venom bags genti handmade sarpe snake venin femei dame genti posete"
          className="banner-img"
        />
      </div>
    </div>
  );
};

export default Banner;
