import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ToggleButton, ToggleButtonGroup } from 'react-bootstrap';

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
        <ToggleButtonGroup type="radio" name="options" defaultValue={22}>
          <ToggleButton value={5} variant="warning" id="time-left"><h1>25:00</h1></ToggleButton>
          <ToggleButton value={6} variant="warning" id="session-length">25</ToggleButton>
        </ToggleButtonGroup>
        <br></br>
        <ToggleButtonGroup type="radio" name="options">
          <ToggleButton value={1} variant="warning" id="break-label">Break</ToggleButton>
          <span> _ </span>
          <ToggleButton value={3} variant="warning" id="session-label">Work</ToggleButton>
        </ToggleButtonGroup>
        <br></br>
        <ToggleButtonGroup type="radio" name="options">
          <ToggleButton value={2} variant="warning" id="break-length">5</ToggleButton>
          <span> _ </span>
          <ToggleButton value={4} variant="warning" id="timer-label">25</ToggleButton>
        </ToggleButtonGroup>
        <br></br>
        <ToggleButtonGroup type="radio" name="options">
          <ToggleButton value={7} variant="danger" id="break-decrement">- Break</ToggleButton>
          <ToggleButton value={8} variant="danger" id="session-decrement">- Work</ToggleButton>
        </ToggleButtonGroup>
        <br></br>
        <ToggleButtonGroup type="radio" name="options">
          <ToggleButton value={9} variant="success" id="break-increment">+ Break</ToggleButton>
          <ToggleButton value={10} variant="success" id="session-increment">+ Work</ToggleButton>
        </ToggleButtonGroup>
        <br></br>
        <ToggleButtonGroup type="radio" name="options">
          <ToggleButton value={11} id="start_stop">Start/Stop</ToggleButton>
          <ToggleButton value={12} id="reset">Reset</ToggleButton>
        </ToggleButtonGroup>
        <figure>
          {/* <figcaption>Listen to the T-Rex:</figcaption> */}
          <audio
            id="beep"
            controls
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
            Your browser does not support the
            <code>audio</code> element.
        </audio>
        </figure>
        {/* <audio
          id="beep"
          preload="auto"
          ref={(audio) => {
            this.audioBeep = audio;
          }}
          controls
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        /> */}
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
