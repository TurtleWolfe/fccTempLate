import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Pomodor.css';

export class Pomodoro extends Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      tglStart: "Start",
      tglVariant: 'btn-success drum-pad slab',
      // timeLft: 1500,
      timeLft: 1500,
      timeWorkSession: 1500,
      timeBreak: 300,
    };
    // This binding is necessary to make `this` work in the callback
    // this.setToggleOnOff = this.setToggleOnOff.bind(this);
    // or not necessary if using an arrow function..
  }

  static propTypes = {
    tglStart: PropTypes.string.isRequired,
    tglVariant: PropTypes.string.isRequired,
    timeLft: PropTypes.number.isRequired,
    timeWorkSession: PropTypes.number.isRequired,
    timeBreak: PropTypes.number.isRequired,
  };

  incrementBreak = () => {
    let { timeBreak } = this.state;
    if (timeBreak < 3540) {
      this.setState({
        timeBreak: timeBreak + 60
      });
    }
  };

  incrementWorkSession = () => {
    let { timeWorkSession } = this.state;
    if (timeWorkSession < 3540) {
      this.setState({
        timeWorkSession: timeWorkSession + 60
      });
    }
  };

  decrementBreak = () => {
    let { timeBreak } = this.state;
    if (timeBreak > 61) {
      this.setState({
        timeBreak: timeBreak - 60
      });
    }
  };

  decrementWorkSession = () => {
    let { timeWorkSession } = this.state;
    if (timeWorkSession > 61) {
      this.setState({
        timeWorkSession: timeWorkSession - 60
      });
    }
  };

  setReset = () => {
    // Clearing the interval
    clearInterval(this.interval);
    // let { tglStart } = this.state;
    // let { tglVariant } = this.state;
    // let { timeLft } = this.state;
    this.setState({
      tglStart: "Start",
      tglVariant: 'btn-success drum-pad slab',
      timeLft: 1500,
      timeWorkSession: 1500,
      timeBreak: 300,
    });
  };

  setToggleOnOff = () => {
    let { tglStart } = this.state;
    if (tglStart === "Start") {
      this.interval = setInterval(this.countDown, 1000);
      this.setState({
        tglStart: "Pause",
        tglVariant: 'btn-warning drum-pad slab',
      });
    } else {
      this.setState({
        tglStart: "Start",
        tglVariant: 'btn-success drum-pad slab',
      });
      // Clearing the interval
      clearInterval(this.interval);
    }
  };

  countDown = () => {
    // If the time reach 0 then we display Buzzzz! alert.
    if (this.state.timeLft === 0) {
      this.setState({
        tglStart: "Start",
        tglVariant: 'btn-success drum-pad slab',
        timeLft: 1500
      });
      clearInterval(this.interval);
    } else {
      // We decrease the time second by second
      this.setState({
        timeLft: this.state.timeLft - 1
      });
    }
  };
  // <Col as={Button} className="drum-pad slab" xs={5} sm={3} md={3} lg={2} value={11} id="start_stop">

  displayTimer(seconds) {
    // Formatting the time into mm:ss
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 3600 % 60);

    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  displayMinutes(seconds) {
    // Formatting the time into mm:ss
    const m = Math.floor(seconds % 3600 / 60);
    // const s = Math.floor(seconds % 3600 % 60);

    return `${m}`;
  }

  render() {
    let { tglStart } = this.state;
    let { tglVariant } = this.state;
    let { timeLft } = this.state;
    let { timeWorkSession } = this.state;
    let { timeBreak } = this.state;

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
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1} value={9}
            variant="success"
            id="break-increment"
            onClick={this.incrementBreak}>
            <i class="fas fa-plus-circle">
            </i>
          </Col>
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1} value={10}
            variant="success"
            id="session-increment"
            onClick={this.incrementWorkSession}>
            <i class="fas fa-plus-circle">
            </i>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col as={Button} className="drum-pad slab" xs={3} sm={3} md={2} lg={2} value={1} variant="warning" id="break-label">
            <h5>
              Break
          </h5>
          </Col>
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1} value={2} variant="dark" id="break-length">
            <h5>
              {/* {this.displayTimer(timeBreak)} */}
              {/* <br></br> */}
              {this.displayMinutes(timeBreak)}
              {/* {timeBreak} */}
            </h5>
          </Col>
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1} value={4} variant="dark" id="timer-label">
            <h5>
              {/* {this.displayTimer(timeWorkSession)} */}
              {this.displayMinutes(timeWorkSession)}
              {/* {timeWorkSession} */}
            </h5>
          </Col>
          <Col as={Button} className="drum-pad slab" xs={3} sm={3} md={2} lg={2} value={3} variant="warning"
            id="session-label">
            <h5>
              Work
          </h5>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1}
            value={7}
            variant="info"
            id="break-decrement"
            onClick={this.decrementBreak}>
            <i class="fas fa-minus-square">
            </i>
          </Col>
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1}
            value={8}
            variant="info"
            id="session-decrement"
            onClick={this.decrementWorkSession}>
            <i class="fas fa-minus-square">
            </i>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col as={Button} className="drum-pad" xs={5} sm={4} md={3} lg={2} value={5} variant="warning"
            id="time-left">
            <h1 className="slab">
              {/* {timeLft} */}
              {/* <br></br> */}
              {this.displayTimer(timeLft)}
            </h1>
          </Col>
          <Col as={Button} className="drum-pad" xs={2} sm={1} md={1} lg={1} value={6} variant="dark"
            id="session-length">
            <h5>
              {/* {this.displayTimer(timeLft)} */}
              {this.displayMinutes(timeLft)}
              {/* {timeLft} */}
            </h5>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col as={Button} className={tglVariant} xs={5} sm={3} md={3} lg={2} value={11}
            id="start_stop"
            onClick={this.setToggleOnOff}>
            <h5>
              {tglStart}
              <br></br>
              {/* {tglVariant} */}
            </h5>
          </Col>
          <Col as={Button} className="drum-pad slab" xs={3} sm={2} md={2} lg={1} value={12}
            id="reset"
            onClick={this.setReset}>
            <h5>
              Reset
            </h5>
          </Col>
        </Row>
        <audio
          id="beep"
          // controls
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
          Your browser does not support the
            <code>audio</code> element.
        </audio>
        <br></br>
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
//       id="time-left"
//       id="session-length"
//       "timer-label"