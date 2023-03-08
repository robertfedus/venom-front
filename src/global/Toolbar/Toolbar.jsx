import React, { Component } from 'react';
import DrawerToggleButton from './../SideDrawer/DrawerToggleButton';
import FacebookSVG from './../../assets/svgs/facebook';
import InstagramSVG from './../../assets/svgs/instagram';
import './Toolbar.css';
import logo from './../../assets/logo.png';

class Toolbar extends Component {
  render() {
    return (
      <header className="toolbar" id="toolbar">
        <div className="toolbar-toggle-button">
          <DrawerToggleButton click={this.props.drawerClickHandler} />
          <span className="hamburger-title">MENIU</span>
        </div>
        <nav className="toolbar-navigation">
          <a href="/">
            <img src={logo} alt="Venom Handmade Bags Genti Venom Dame Femei Design" className="logo" />
          </a>
        </nav>
        <div className="social">
          <FacebookSVG />
          <InstagramSVG />
        </div>
      </header>
    );
  }
}

export default Toolbar;
