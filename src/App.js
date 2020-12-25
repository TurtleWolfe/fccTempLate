import logo from './logo.svg';
import NavBar from './NavBar';
import About from "./components/pages/About";
import Quote from "./components/pages/quote/quote";
import MarkDown from "./components/pages/markdown/markdown";
import Calculator from "./components/pages/calculator/calculator";
import Drum from "./components/pages/drum/drum";
import Pomodoro from "./components/pages/pomodoro/pomodoro";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <header className="App-header">
          <Switch>
            <Route exact path='/fccTempLate' render={props => (
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
                <h4>
                  <a
                    className="App-link"
                    href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="FreeCodeCamp.com Front End Projects"
                  >
                    <i className="fab fa-free-code-camp"></i>Front End Projects <i className="fab fa-free-code-camp"></i>
                  </a>
                </h4>
                <h5>
                  <a
                    className="App-link"
                    href="https://www.twitch.tv/videos/836894977"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="This Episode on Twitch I build a template for my freeCodeCamp projects, with FontAwesome & Analytics"
                  >
                    <i className="fab fa-twitch"></i> This Episode on Twitch <i className="fab fa-twitch"></i>
                  </a>
                </h5>
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
