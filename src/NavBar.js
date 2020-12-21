// rafc
// React Arrow Function Component
import React from 'react';
import PropTypes from 'prop-types';
import './NavBar.css';
import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
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
          {/* <Nav.Link href="/fccTempLate">Home</Nav.Link>
          <Nav.Link href="/quote">Link</Nav.Link>
          <Nav.Link href="/markdown">Home</Nav.Link>
          <Nav.Link href="/calculator">Link</Nav.Link>
          <Nav.Link href="/drum">Link</Nav.Link>
          <Nav.Link href="/pomodoro">Link</Nav.Link>
          <Nav.Link href="/about">Link</Nav.Link> */}
          <Link to='/fccTempLate'>Home</Link>
          <Link to='/quote'>quote</Link>
          <Link to='/markdown'>markdown</Link>
          <Link to='/calculator'>calculator</Link>
          <Link to='/drum'>drum</Link>
          <Link to='/pomodoro'>pomodoro</Link>
          <Link to='/about'>About</Link>
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