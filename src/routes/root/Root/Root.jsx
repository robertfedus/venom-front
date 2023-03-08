import React, { Component } from 'react';
import './Root.css';

import Constrainter from './../../../global/Constrainter/Constrainter';
import Toolbar from './../../../global/Toolbar/Toolbar';
import SideDrawer from './../../../global/SideDrawer/SideDrawer';
import Backdrop from './../../../global/Backdrop/Backdrop';
import Banner from './../components/Banner/Banner';
import SectionTitle from './../../../global/SectionTitle/SectionTitle';
import About from './../components/About/About';
import Gallery from './../components/Gallery/Gallery';
import Contact from './../components/Contact/Contact';
import Footer from './../../../global/Footer/Footer';
import ScrollToTop from 'react-scroll-to-top';

class Root extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  closeSideDrawer = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div className="Root">
        <ScrollToTop smooth color="#a0ab91" />
        <Constrainter>
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} close={this.closeSideDrawer} />
          {backdrop}
          <Banner />
          <SectionTitle title="Genți de calitate" align="left" id="about" />
          <About />
        </Constrainter>
        <Gallery />
        <Constrainter>
          <SectionTitle title="Doriți să plasați o comandă?" align="center" id="contact" />
          <Contact />
        </Constrainter>
        <Footer />
      </div>
    );
  }
}

export default Root;
