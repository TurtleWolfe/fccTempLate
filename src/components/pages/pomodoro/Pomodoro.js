import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row, Col } from 'react-bootstrap';

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
      <Container>
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

        <Row className="justify-content-center">
          <Col as={Button} className="drum-pad" xs={1} sm={1} md={1} lg={1} value={9} variant="success" id="break-increment">+</Col>
          <Col as={Button} className="drum-pad" xs={1} sm={1} md={1} lg={1} value={10} variant="success" id="session-increment">+</Col>
        </Row>
        <Row className="justify-content-center">
          <Col as={Button} className="drum-pad" xs={2} sm={2} md={1} lg={1} value={1} variant="warning" id="break-label">Break</Col>
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1} value={2} variant="secondary" id="break-length">5</Col>
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1} value={4} variant="secondary" id="timer-label">25</Col>
          <Col as={Button} className="drum-pad" xs={2} sm={2} md={1} lg={1} value={3} variant="warning" id="session-label">Work</Col>
        </Row>
        <Row className="justify-content-center">
          <Col as={Button} className="drum-pad" xs={1} sm={1} md={1} lg={1} value={7} variant="info" id="break-decrement">-</Col>
          <Col as={Button} className="drum-pad" xs={1} sm={1} md={1} lg={1} value={8} variant="info" id="session-decrement">-</Col>
        </Row>
        <Row className="justify-content-center">
          <Col as={Button} className="drum-pad" xs={4} sm={3} md={2} lg={2} value={5} variant="warning" id="time-left"><h1>25:00</h1></Col>
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1} value={6} variant="secondary" id="session-length">25</Col>
        </Row>
        <Row className="justify-content-center">
          <Col as={Button} className="drum-pad" xs={3} sm={3} md={2} lg={2} value={11} id="start_stop">Start/Stop</Col>
          <Col as={Button} className="drum-pad" xs={3} sm={2} md={2} lg={1} value={12} id="reset">Reset</Col>
        </Row>
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
      </Container>
    );
  }
}

export default Pomodoro;
