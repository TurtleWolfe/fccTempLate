import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span className="App-hammer">
          <img src={logo} className="App-logo" alt="logo" />
        </span>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <a
          className="App-link"
          href="https://github.com/TurtleWolfe/fccTempLate"
          target="_blank"
          rel="noopener noreferrer"
        >
          FreeCodeCamp.com React Template
        </a>
        <a
          className="App-link"
          href="https://www.twitch.tv/videos/836894977"
          target="_blank"
          rel="noopener noreferrer"
        >
          This Episode on Twitch
        </a>
        <hr></hr>
        <a
          className="App-link"
          href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine"
          target="_blank"
          rel="noopener noreferrer"
        >
          Random Quote Machine
        </a>
        <a
          className="App-link"
          href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer"
          target="_blank"
          rel="noopener noreferrer"
        >
          Markdown Previewer
        </a>
        <a
          className="App-link"
          href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine"
          target="_blank"
          rel="noopener noreferrer"
        >
          Drum Machine
        </a>
        <a
          className="App-link"
          href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator"
          target="_blank"
          rel="noopener noreferrer"
        >
          JavaScript Calculator
        </a>
        <a
          className="App-link"
          href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clockhttps://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clock"
          target="_blank"
          rel="noopener noreferrer"
        >
          25 + 5 Clock
        </a>
        <hr></hr>
        <a
          className="App-link"
          href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects"
          target="_blank"
          rel="noopener noreferrer"
        >
          FreeCodeCamp.com Front End Projects
        </a>
        <hr></hr>
        <a
          className="App-link"
          href="https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet#links"
          target="_blank"
          rel="noopener noreferrer"
        >
          Markdown Cheatsheet
        </a>
        <a
          className="App-link"
          href="https://css-tricks.com/essential-meta-tags-social-media/"
          target="_blank"
          rel="noopener noreferrer"
        >
          The Essential Meta Tags for Social Media
        </a>
        <a
          className="App-link"
          href="https://youtu.be/SKXkC4SqtRk?t=865"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub Pages, Deploy & Domain: Traversy Media
        </a>
        <hr></hr>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
