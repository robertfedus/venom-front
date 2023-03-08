import React, { useState, useEffect } from 'react';
import './SideDrawer.css';

const SideDrawer = props => {
  const [shouldShow, setShouldShow] = useState();
  const scrlTo = destination => {
    setShouldShow(undefined);
    props.close();
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

  useEffect(() => {
    setShouldShow(props.show);
  }, [props]);

  let drawerClasses = 'side-drawer';

  if (shouldShow) {
    drawerClasses = 'side-drawer open';
  }

  return (
    <nav className={drawerClasses}>
      <div className="title-background">
        <h3>MENIU</h3>
      </div>
      <div className="drawer-items">
        <span onClick={() => scrlTo('toolbar')}>Acasă</span>
        <span>Produse</span>
        <span onClick={() => scrlTo('about')}>Despre noi</span>
        <span onClick={() => scrlTo('gallery')}>Galerie</span>
        <span onClick={() => scrlTo('contact')}>Plasează o comandă</span>
      </div>
    </nav>
  );
};

export default SideDrawer;
