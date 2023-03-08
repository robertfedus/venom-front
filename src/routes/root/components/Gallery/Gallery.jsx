import React from 'react';
import './Gallery.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img1 from './../../../../assets/Gallery/1.jpg';
import img2 from './../../../../assets/Gallery/2.jpg';
import img3 from './../../../../assets/Gallery/3.jpg';
import img4 from './../../../../assets/Gallery/4.jpg';
import img5 from './../../../../assets/Gallery/5.jpg';
import img6 from './../../../../assets/Gallery/6.jpg';
import SectionTitle from './../../../../global/SectionTitle/SectionTitle';

const Gallery = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="Gallery" id="gallery">
      <div className="carousel-wrapper">
        <SectionTitle title="Galerie" align="left" color="#ffffff" />

        <div className="carousel-container">
          <Slider {...settings}>
            <div className="carousel-image-container">
              <img src={img1} alt="" />
            </div>
            <div className="carousel-image-container">
              <img src={img2} alt="" />
            </div>
            <div className="carousel-image-container">
              <img src={img3} alt="" />
            </div>
            <div className="carousel-image-container">
              <img src={img4} alt="" />
            </div>
            <div className="carousel-image-container">
              <img src={img5} alt="" />
            </div>
            <div className="carousel-image-container">
              <img src={img6} alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
