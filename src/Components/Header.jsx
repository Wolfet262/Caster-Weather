import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Route, Switch, Link } from 'react-router-dom'
import Features from './Features.jsx'
import About from './About.jsx'
import Memes from './Memes'

function Header() {
  return (
    <div>
      <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/">Caster</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/Features">Features</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="About">About</Nav.Link>
          <Nav.Link eventKey={2} as={Link} to="Memes">
            Weather Puns
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    </div>
    <div>
    <Switch>
        <Route exact path="/Features">
          <Features />
        </Route>
          <Route exact path="/About">
            <About />
          </Route>
        <Route exact path="/Memes">
          <Memes />
        </Route>
        </Switch>
    </div>

    </div>
  );
}

export default Header;
