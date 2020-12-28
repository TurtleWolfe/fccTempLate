import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
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
          <Card.Body className="bg-dark text-white">
            <Card.Title id="display">
              <h3>
                Card Title
              </h3>
            </Card.Title>
          </Card.Body>
        </Card>
        <Fragment>
          <Button className="drum-pad" value={9} variant="success" id="q">
            <h5>
              Q
            </h5>
            <audio
              id="Q"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          {' '}
          <Button className="drum-pad" value={10} variant="success" id="w">
            <h5>
              W
            </h5>
            <audio
              id="W"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          {' '}
          <Button className="drum-pad" value={10} variant="success" id="e">
            <h5>
              E
            </h5>
            <audio
              id="E"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          {' '}
        </Fragment>
        <br></br>
        <Fragment>
          <Button className="drum-pad" value={9} variant="success" id="a">
            <h5>
              A
            </h5>
            <audio
              id="A"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          {' '}
          <Button className="drum-pad" value={10} variant="success" id="s">
            <h5>
              S
            </h5>
            <audio
              id="S"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          {' '}
          <Button className="drum-pad" value={10} variant="success" id="d">
            <h5>
              D
            </h5>
            <audio
              id="D"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          {' '}
        </Fragment>
        <br></br>
        <Fragment>
          <Button className="drum-pad" value={9} variant="success" id="z">
            <h5>
              Z
            </h5>
            <audio
              id="Z"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          {' '}
          <Button className="drum-pad" value={10} variant="success" id="x">
            <h5>
              X
            </h5>
            <audio
              id="X"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          {' '}
          <Button className="drum-pad" value={10} variant="success" id="c">
            <h5>
              C
            </h5>
            <audio
              id="C"
              className="clip"
              src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav">
              Your browser does not support the
            <code>audio</code> element.
            </audio>
          </Button>
          {' '}
        </Fragment>
        <h5>
          <a
            className="App-link"
            href="https://www.twitch.tv/collections/Zh4cSjzCVBaSEw"
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
