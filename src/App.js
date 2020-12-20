import logo from './logo.svg';
import NavBar from './NavBar';
import About from "./components/pages/About";
import Quote from "./components/pages/quote";
import MarkDown from "./components/pages/markdown";
import Calculator from "./components/pages/calculator";
import Drum from "./components/pages/drum";
import Pomodoro from "./components/pages/pomodoro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Switch>
            <Route exact path='/' render={props => (
              <Fragment>
                <a
                  className="App-link"
                  href="https://github.com/TurtleWolfe/fccTempLate"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="fccTempLate"
                >
                  {/* fccTempLate */}
                  <span className="App-hammer">
                    <img src={logo} className="App-logo" alt="logo" />
                  </span>
                </a>
                {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
                <a
                  className="App-link"
                  href="https://www.twitch.tv/videos/836894977"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="This Episode on Twitch I build a template for my freeCodeCamp projects, with FontAwesome & Analytics"
                >
                  <i className="fab fa-twitch"></i> This Episode on Twitch <i className="fab fa-twitch"></i>
                </a>
                <hr></hr>
                <a
                  className="App-link"
                  href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="FreeCodeCamp.com Front End Projects"
                >
                  <i className="fab fa-free-code-camp"></i> FreeCodeCamp.com Front End Projects <i className="fab fa-free-code-camp"></i>
                </a>
                <hr></hr>
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
            )} />
            <Route exact path='/quote' component={Quote} />
            <Route exact path='/markdown' component={MarkDown} />
            <Route exact path='/calculator' component={Calculator} />
            <Route exact path='/drum' component={Drum} />
            <Route exact path='/pomodoro' component={Pomodoro} />
            <Route exact path='/about' component={About} />
          </Switch>

        </header>
      </div>
    </Router>
  );
}

export default App;
