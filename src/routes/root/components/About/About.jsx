import React from 'react';
import './About.css';

import aboutIMG1 from './../../../../assets/About/about1.jpg';
import aboutIMG2 from './../../../../assets/About/about2.jpg';

const About = () => {
  return (
    <div className="About">
      <div className="about-container">
        <div className="about-slice">
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <a href="/">Alege geanta potrivită</a>
          </div>

          <div className="image-container">
            <img src={aboutIMG1} alt="" />
          </div>
        </div>

        <div style={{ marginTop: '3em' }}></div>

        <div className="about-slice about-slice-2">
          <div className="image-container">
            <img src={aboutIMG2} alt="" />
          </div>

          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.
            </p>
            <a href="/">Alege geanta potrivită</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
