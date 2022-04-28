import React from "react";
import style from "./Navbar.js";
import {Navbar as NavBar,Container,Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const Navbar = (props) => {
  return (
    <div className={style.Navbar} data-testid="Navbar">
      <NavBar bg="primary" variant="dark">
        <Container>
        <LinkContainer to="/">
              <NavBar.Brand>Navbar</NavBar.Brand>
            </LinkContainer>
          <Nav className="me-auto">
            <LinkContainer to="/thumbnail">
              <Nav.Link>Thumbnail</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/editor">
              <Nav.Link>Editor</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;
