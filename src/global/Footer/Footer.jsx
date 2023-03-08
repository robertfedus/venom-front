import React from 'react';
import './Footer.css';
import FacebookSVG from './../../assets/svgs/facebook';
import InstagramSVG from './../../assets/svgs/instagram';

const scrlTo = destination => {
  const findPos = obj => {
    var curtop = 0;
    if (obj.offsetParent) {
      do {
        curtop += obj.offsetTop;
      } while ((obj = obj.offsetParent));
      return [curtop];
    }
  };

  window.scroll(0, findPos(document.getElementById(destination)) - 15);
};

const Footer = () => (
  <footer>
    <div className="title">
      <h1 className="footer-title">Venom</h1>
    </div>

    <div className="links">
      <div className="column left">
        <span onClick={() => scrlTo('toolbar')} style={{ marginTop: '0' }}>
          Acasă
        </span>
        <span>Produse</span>
        <span onClick={() => scrlTo('about')}>Despre noi</span>
        <span onClick={() => scrlTo('gallery')}>Galerie</span>
        <span onClick={() => scrlTo('contact')}>Plasează o comandă</span>
      </div>
      <div className="separator" />
      <div className="column mid">
        <div style={{ marginTop: '1em' }} className="icon-marginer" />
        <FacebookSVG />
        <div style={{ marginTop: '1em' }}>
          <a href="https://www.instagram.com/venom.handmade.bags/" target="_blank" rel="noreferrer noopener">
            <InstagramSVG />
          </a>
        </div>
      </div>
      <div className="separator" />
      <div className="column right">
        <span>+4074 385 2617</span>
        <span>venom.handmadebags@gmail.com</span>
      </div>
    </div>

    <div className="copyright">
      <div className="line" />
      <p>
        Copyright © Venom Handmade Bags. Toate drepturile rezervate. Design oferit de{' '}
        <a href="https://instagram.com/ambertech.dev/">Amber Tech</a>.
      </p>
    </div>
  </footer>
);

export default Footer;
