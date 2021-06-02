import React from 'react';

import {  
  Navbar,
  Nav,
  Container,
} from 'react-bootstrap';
import Icon from './Icon'


const Navigations = ({}) => {
    return (
      <Navbar bg="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home"><Icon src='images/logo/Full/Horizontal/Color-white.png'/> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Download</Nav.Link>
              <Nav.Link href="#link">Support</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Navigations;