import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
export class Calculator extends Component {
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
      <div id="drum-machine">
        <h4>
          <a
            className="App-link"
            href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator"
            target="_blank"
            rel="noopener noreferrer"
            title="JavaScript Calculator"
          >
            <i className="fas fa-calculator"></i> JavaScript Calculator <i className="fas fa-calculator"></i>
          </a>
        </h4>
        <Card style={{ width: '18rem' }}>
          {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
          <Card.Body className="bg-dark text-white">
            <Card.Title id="display">Card Title</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text> */}
            {/* <Button variant="primary">Go somewhere</Button> */}
          </Card.Body>
        </Card>
        <ButtonGroup>
          <Button className="drum-pad" value={0} variant="info" id="clear">clear
            <audio
              id="0"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
        </ButtonGroup>
        <br></br>
        <ButtonGroup>
          <Button className="drum-pad" value={0} variant="warning" id="add">+
            <audio
              id="0"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={0} variant="danger" id="decimal">.
            <audio
              id="0"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={0} variant="success" id="zero">0
            <audio
              id="0"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={0} variant="warning" id="equals">=
            <audio
              id="0"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
        </ButtonGroup>
        <br></br>
        <ButtonGroup>
          <Button className="drum-pad" value={0} variant="warning" id="subtract">-
            <audio
              id="0"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={1} variant="success" id="one">1
            <audio
              id="1"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={2} variant="success" id="two">2
            <audio
              id="2"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={3} variant="success" id="three">3
            <audio
              id="3"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
        </ButtonGroup>
        <br></br>
        <ButtonGroup>
          <Button className="drum-pad" value={0} variant="warning" id="multiply">*
            <audio
              id="0"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={4} variant="success" id="four">4
            <audio
              id="4"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={5} variant="success" id="five">5
            <audio
              id="5"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={6} variant="success" id="six">6
            <audio
              id="6"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
        </ButtonGroup>
        <br></br>
        <ButtonGroup>
          <Button className="drum-pad" value={0} variant="warning" id="divide">/
            <audio
              id="0"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={7} variant="success" id="seven">7
            <audio
              id="7"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={8} variant="success" id="eight">8
            <audio
              id="8"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={9} variant="success" id="nine">9
            <audio
              id="9"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
        </ButtonGroup>
        <h5>
          <a
            className="App-link"
            href="https://www.twitch.tv/videos/836894977"
            target="_blank"
            rel="noopener noreferrer"
            title="These Episodes on Twitch I work on the JavaScript Calculator for my freeCodeCamp certificate using React-BootStrap"
          >
            <i className="fab fa-twitch"></i> These Episodes on Twitch <i className="fab fa-twitch"></i>
          </a>
        </h5>
      </div>
    );
  }
}

export default Calculator;
