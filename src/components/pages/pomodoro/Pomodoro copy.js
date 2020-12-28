import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

export class Pomodoro extends Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      author: "Douglas Adams",
      source: "So Long, and Thanks for All the Fish",
      quote: "change all this",
    };

    // This binding is necessary to make `this` work in the callback
    // this.setQuote = this.setQuote.bind(this);

  }
  static propTypes = {
    quote: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired
  };

  render() {
    return (
      <div>
        <h4>
          <a
            className="App-link"
            href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clockhttps://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clock"
            target="_blank"
            rel="noopener noreferrer"
            title="25 + 5 Clock"
          >
            <i className="fas  fa-hourglass-start"></i> 25 + 5 Clock <i className="fas  fa-hourglass-half"></i>
          </a>
        </h4>

        <>
          <Button value={9} variant="success" id="break-increment">+ Break</Button>
          {' '}
          <Button value={10} variant="success" id="session-increment">+ Work</Button>
        </>
        <br></br>
        <>
          <Button value={1} variant="warning" id="break-label">Break</Button>
          <Button value={2} variant="secondary" id="break-length">5</Button>
          {' '}
          <Button value={4} variant="secondary" id="timer-label">25</Button>
          <Button value={3} variant="warning" id="session-label">Work</Button>
        </>
        <br></br>
        <>
          <Button value={7} variant="info" id="break-decrement">- Break</Button>
          {' '}
          <Button value={8} variant="info" id="session-decrement">- Work</Button>
        </>
        <br></br>
        <br></br>
        <>
          <Button value={5} variant="warning" id="time-left"><h1>25:00</h1></Button>
          <Button value={6} variant="secondary" id="session-length">25</Button>
        </>
        <br></br>
        <>
          <Button value={11} id="start_stop">Start/Stop</Button>
          {' '}
          <Button value={12} id="reset">Reset</Button>
          <br></br>
        </>
        <audio
          id="beep"
          controls
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
          Your browser does not support the
            <code>audio</code> element.
        </audio>
        <h5>
          <a
            className="App-link"
            href="https://www.twitch.tv/collections/Z-WfaCrBVBZa9w"
            target="_blank"
            rel="noopener noreferrer"
            title="These Episodes on Twitch I'm working on the Pomodor timer for FreeCodeCamp using ReactBootstrap"
          >
            <i className="fab fa-twitch"></i> These Episodes on Twitch <i className="fab fa-twitch"></i>
          </a>
        </h5>
      </div>
    );
  }
}

export default Pomodoro;
