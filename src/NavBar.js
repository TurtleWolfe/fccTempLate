// rafc
// React Arrow Function Component
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import './NavBar.css';
const NavBar = ({ icon, iconFCC, title }) => {
  return (
    <Navbar collapseOnSelect fixed="top" expand="lg" className='navbar' bg="dark" variant="dark">
      <Navbar.Brand href="https://github.com/TurtleWolfe/fccTempLate"
        target="_blank"
        rel="noopener noreferrer"
        title="TempLate Scaffolding for Free Code Camp Projects, with FontAwesome, React-Router & Analytics">
        <h3>
          <i className={iconFCC} /> {title} <i className={icon} />
        </h3>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav collapseOnSelect className="mr-auto">
          <Nav.Link as={Link} to="/fccTempLate" href="/fccTempLate">Home</Nav.Link>
          <Nav.Link as={Link} to="/quote" href="/quote">Quote</Nav.Link>
          <Nav.Link as={Link} to="/markdown" href="/markdown">Markdown</Nav.Link>
          <Nav.Link as={Link} to="/calculator" href="/calculator">Calculator</Nav.Link>
          <Nav.Link as={Link} to="/drum" href="/drum">Drum</Nav.Link>
          <Nav.Link as={Link} to="/pomodoro" href="/pomodoro">Pomodoro</Nav.Link>
          <Nav.Link as={Link} to="/about" href="/about">About</Nav.Link>
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