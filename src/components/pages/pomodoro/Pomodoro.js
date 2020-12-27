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
        <ToggleButtonGroup type="radio" name="options" defaultValue={22}>
          <ToggleButton value={1} variant="warning" id="break-label">Break</ToggleButton>
          <ToggleButton value={2} variant="warning" id="break-length">5:00</ToggleButton>
        </ToggleButtonGroup>
        <br></br>
        <ToggleButtonGroup type="radio" name="options" defaultValue={22}>
          <ToggleButton value={3} variant="warning" id="session-label">Work</ToggleButton>
          <ToggleButton value={4} variant="warning" id="timer-label">Session</ToggleButton>
        </ToggleButtonGroup>
        <br></br>
        <ToggleButtonGroup type="radio" name="options" defaultValue={22}>
          <ToggleButton value={5} variant="warning" id="time-left">25:00</ToggleButton>
          <ToggleButton value={6} variant="warning" id="session-length">25:00</ToggleButton>
        </ToggleButtonGroup>
        <br></br>
        <ToggleButtonGroup type="radio" name="options" defaultValue={22}>
          <ToggleButton value={7} variant="danger" id="break-decrement">- Break</ToggleButton>
          <ToggleButton value={9} variant="success" id="break-increment">+ Break</ToggleButton>
        </ToggleButtonGroup>
        <br></br>
        <ToggleButtonGroup type="radio" name="options" defaultValue={22}>
          <ToggleButton value={8} variant="danger" id="session-decrement">- Work</ToggleButton>
          <ToggleButton value={10} variant="success" id="session-increment">+ Work</ToggleButton>
        </ToggleButtonGroup>
        <br></br>
        <ToggleButtonGroup type="radio" name="options" defaultValue={22}>
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
      </div>
    );
  }
}

export default Pomodoro;
