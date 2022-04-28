import React from "react";
import style from "./Navbar.js";
import {Navbar as NavBar,Container,Nav} from 'react-bootstrap'

const Navbar = (props) => {
  return (
    <div className={style.Navbar} data-testid="Navbar">
      <NavBar bg="primary" variant="dark">
        <Container>
          <NavBar.Brand href="#home">Navbar</NavBar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;
