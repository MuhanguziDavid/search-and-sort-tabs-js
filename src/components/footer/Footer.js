import React, { Component } from 'react';
import './Footer.scss';

let Navbar = require("react-bootstrap/Navbar");

class Footer extends Component {
  render() {
    const appFooter = (
      <Navbar sticky="bottom" className="footer-bar" bg="light" variant="light">
        <Navbar.Brand className="navbar-brand-custom" expand="lg" href="#home">David Muhanguzi 2019</Navbar.Brand>
      </Navbar>
    )
    return (
      <div>
        {appFooter}
      </div>
    )
  }
}

export default Footer;
