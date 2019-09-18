import React, { Component } from 'react';
import './NavigationBar.scss';

let Navbar = require("react-bootstrap/Navbar");
let NavDropdown = require("react-bootstrap/NavDropdown");
let Nav = require ("react-bootstrap/Nav");
let Container = require ("react-bootstrap/Container");

class NavigationBar extends Component {
  render() {
    const appNavbar = (
      <Navbar className="navigation-bar" bg="light" variant="light">
        <Container>
          <Navbar.Brand expand="lg" href="#home">DSA logo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
              <NavDropdown title="More" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
    return (
      <div>
        {appNavbar}
      </div>
    )
  }
}

export default NavigationBar;
