// rafc
// React Arrow Function Component
import React from 'react';
import PropTypes from 'prop-types';
// import './NavBar.css';
import { Link } from "react-router-dom";
const NavBar = ({ icon, iconFCC, title }) => {
  return (
    <nav className='navbar bg-primary navbar-expand-md'>
      <Link
        className="App-link"
        to="https://github.com/TurtleWolfe/fccTempLate"
        target="_blank"
        rel="noopener noreferrer"
        title="TempLate Scaffolding for Free Code Camp Projects, with FontAwesome, React-Router & Analytics"
      >
        <h1>
          <i className={iconFCC} /> {title} <i className={icon} />
        </h1>
      </Link>
      {/* <Link to='/'>Home</Link> */}
      {/* <Link to='/quote'>quote</Link> */}
      {/* <Link to='/markdown'>markdown</Link> */}
      {/* <Link to='/calculator'>calculator</Link> */}
      {/* <Link to='/drum'>drum</Link> */}
      {/* <Link to='/pomodoro'>pomodoro</Link> */}
      {/* <Link to='/about'>About</Link> */}


      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon navbar-dark"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <Link class="nav-link" to="/">Home <span class="sr-only">(current)</span></Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="quote">Quote</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/markdown">Markdown</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="calculator">Calculator</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="drum">Drum</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="pomodoro">Pomodoro</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="about">About</Link>
          </li>
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
        </Link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link class="dropdown-item" to="#">Action</Link>
              <Link class="dropdown-item" to="#">Another action</Link>
              <div class="dropdown-divider"></div>
              <Link class="dropdown-item" to="#">Something else here</Link>
            </div>
          </li>
        </ul>
        {/* <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> */}
      </div>

    </nav>
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