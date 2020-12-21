import React, { Fragment } from 'react';

export const About = () => {
  return (
    <Fragment>
      <p>fccTempLate</p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
        title="Learn React"
      >
        <i className="fab fa-react"></i> Learn React <i className="fab fa-react"></i>
      </a>
      <a
        className="App-link"
        href="https://fontawesome.com"
        target="_blank"
        rel="noopener noreferrer"
        title="Awesome Fonts"
      >
        <i className="fab fa-font-awesome-alt"></i> Font Awesome <i className="fab fa-font-awesome-alt"></i>
      </a>
      <a
        className="App-link"
        href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links"
        target="_blank"
        rel="noopener noreferrer"
        title="Markdown Cheatsheet"
      >
        <i className="fab fa-markdown"></i> Markdown Cheatsheet <i className="fab fa-markdown"></i>
      </a>
      <a
        className="App-link"
        href="https://youtu.be/SKXkC4SqtRk?t=865"
        target="_blank"
        rel="noopener noreferrer"
        title="GitHub Pages, Deploy & Domain: Traversy Media"
      >
        <i className="fab fa-github"></i> GitHub Pages, Deploy & Domain <i className="fab fa-github"></i>
      </a>
      <a
        className="App-link"
        href="https://css-tricks.com/essential-meta-tags-social-media/"
        target="_blank"
        rel="noopener noreferrer"
        title="The Essential Meta Tags for Social Media"
      >
        <i className="far fa-file-code"></i> Essential Meta Tags for Social Media <i className="far fa-file-code"></i>
      </a>
    </Fragment>
  );
};

export default About;