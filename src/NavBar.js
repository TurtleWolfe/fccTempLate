// rafc
// React Arrow Function Component
import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';
import { Link } from "react-router-dom";
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Navbar, Nav, Form, FormControl, Button, NavItem } from 'react-bootstrap';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
const NavBar = ({ icon, iconFCC, title }) => {
  return (
    <Navbar fixed="top" expand="lg" className='navbar bg-primary'>
      <Navbar.Brand href="https://github.com/TurtleWolfe/fccTempLate"
        target="_blank"
        rel="noopener noreferrer"
        title="TempLate Scaffolding for Free Code Camp Projects, with FontAwesome, React-Router & Analytics">
        <h2>
          <i className={iconFCC} /> {title} <i className={icon} />
        </h2>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavItem eventkey={1} href="/fccTempLate">
            <Nav.Link as={Link} to="/fccTempLate" >Home</Nav.Link>
          </NavItem>
          <NavItem eventkey={2} href="/quote">
            <Nav.Link as={Link} to="/quote" >Quote</Nav.Link>
          </NavItem>
          <NavItem eventkey={3} href="/markdown">
            <Nav.Link as={Link} to="/markdown" >Markdown</Nav.Link>
          </NavItem>
          <NavItem eventkey={4} href="/calculator">
            <Nav.Link as={Link} to="/calculator" >Calculator</Nav.Link>
          </NavItem>
          <NavItem eventkey={5} href="/drum">
            <Nav.Link as={Link} to="/drum" >Drum</Nav.Link>
          </NavItem>
          <NavItem eventkey={6} href="/pomodoro">
            <Nav.Link as={Link} to="/pomodoro" >Pomodoro</Nav.Link>
          </NavItem>
          <NavItem eventkey={7} href="/about">
            <Nav.Link as={Link} to="/about" >About</Nav.Link>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

NavBar.defaultProps = {
  title: 'fccTempLate',
  icon: 'fab fa-github',
  iconFCC: 'fab fa-free-code-camp'
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  iconFCC: PropTypes.string.isRequired
};

export default NavBar;