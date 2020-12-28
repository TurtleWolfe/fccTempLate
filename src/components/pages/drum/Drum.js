import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, ButtonGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

export class Drum extends Component {
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
            href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-drum-machine"
            target="_blank"
            rel="noopener noreferrer"
            title="Drum Machine"
          >
            <i className="fas fa-drum"></i> Drum Machine <i className="fas fa-drum"></i>
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
          <Button className="drum-pad" value={9} variant="success" id="q">Q
            <audio
              id="Q"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={10} variant="success" id="w">W
            <audio
              id="W"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={10} variant="success" id="e">E
            <audio
              id="E"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
        </ButtonGroup>
        <br></br>
        <ButtonGroup>
          <Button className="drum-pad" value={9} variant="success" id="a">A
            <audio
              id="A"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={10} variant="success" id="s">S
            <audio
              id="S"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={10} variant="success" id="d">D
            <audio
              id="D"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
        </ButtonGroup>
        <br></br>
        <ButtonGroup>
          <Button className="drum-pad" value={9} variant="success" id="z">Z
            <audio
              id="Z"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={10} variant="success" id="x">X
            <audio
              id="X"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          <Button className="drum-pad" value={10} variant="success" id="c">C
            <audio
              id="C"
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
            title="These Episodes on Twitch I build a drum machine for my freeCodeCamp projects with React-BootStrap"
          >
            <i className="fab fa-twitch"></i> These Episodes on Twitch <i className="fab fa-twitch"></i>
          </a>
        </h5>
      </div>
    );
  }
}

export default Drum;
