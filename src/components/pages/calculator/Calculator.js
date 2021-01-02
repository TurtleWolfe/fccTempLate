import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Calculator.css';

export class Calculator extends Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      display: 0,
    };

    // This binding is necessary to make `this` work in the callback
    // this.setQuote = this.setQuote.bind(this);

  }
  // static propTypes = {
  //   quote: PropTypes.string.isRequired,
  // };

  render() {
    return (
      <Container id="calculator">
        <h4>
          <a
            className="App-link"
            href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-javascript-calculator"
            target="_blank"
            rel="noopener noreferrer"
            title="JavaScript Calculator"
          >
            <i className="fas fa-calculator"></i> Calculator <i className="fas fa-calculator"></i>
          </a>
        </h4>
        {/* <br></br> */}
        <Row className="justify-content-center">
          <Col as={Button} className="key-pad" xs={2} sm={2} md={1} lg={1} value={0} variant="warning" id="divide">
            <h2>
              <i class="fas fa-divide"></i>
            </h2>
          </Col>
          <Col as={Button} className="key-pad" xs={2} sm={2} md={1} lg={1} value={7} variant="success" id="seven">
            <h2>
              7
            </h2>
          </Col>
          <Col as={Button} className="key-pad" xs={2} sm={2} md={1} lg={1} value={8} variant="success" id="eight">
            <h2>
              8
            </h2>
          </Col>
          <Col as={Button} className="key-pad" xs={2} sm={2} md={1} lg={1} value={9} variant="success" id="nine">
            <h2>
              9
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col as={Button} className="key-pad" xs={2} sm={2} md={1} lg={1} value={0} variant="warning" id="multiply">
            <h2>
              <i class="fas fa-times"></i>
            </h2>
          </Col>
          <Col as={Button} className="key-pad" xs={2} sm={2} md={1} lg={1} value={4} variant="success" id="four">
            <h2>
              4
            </h2>
          </Col>
          <Col as={Button} className="key-pad" xs={2} sm={2} md={1} lg={1} value={5} variant="success" id="five">
            <h2>
              5
            </h2>
          </Col>
          <Col as={Button} className="key-pad" xs={2} sm={2} md={1} lg={1} value={6} variant="success" id="six">
            <h2>
              6
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col as={Button} className="key-pad" xs={2} sm={2} md={1} lg={1} value={0} variant="warning" id="subtract">
            <h2>
              <i class="fas fa-minus"></i>
            </h2>
          </Col>
          <Col as={Button} className="key-pad" xs={2} sm={2} md={1} lg={1} value={1} variant="success" id="one">
            <h2>
              1
            </h2>
          </Col>
          <Col as={Button} className="key-pad" xs={2} sm={2} md={1} lg={1} value={2} variant="success" id="two">
            <h2>
              2
            </h2>
          </Col>
          <Col as={Button} className="key-pad" xs={2} sm={2} md={1} lg={1} value={3} variant="success" id="three">
            <h2>
              3
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col as={Button} className="key-pad" xs={2} sm={2} md={1} lg={1} value={0} variant="warning" id="add">
            <h2>
              <i class="fas fa-plus"></i>
            </h2>
          </Col>
          <Col as={Button} className="key-pad" xs={2} sm={2} md={1} lg={1} value={0} variant="dark" id="decimal">
            <h1 className="decim">
              .
            </h1>
          </Col>
          <Col as={Button} className="key-pad" xs={2} sm={2} md={1} lg={1} value={0} variant="success" id="zero">
            <h2>
              0
            </h2>
          </Col>
          <Col as={Button} className="key-pad" xs={2} sm={2} md={1} lg={1} value={0} variant="warning" id="equals">
            <h2>
              <i class="fas fa-equals"></i>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col as={"h3"} className="key-pad" xs={4} sm={2} md={2} lg={2} id="display">
            {this.state.display}
          </Col>
          <Col as={Button} className="key-pad" xs={4} sm={3} md={2} lg={2} value={0} variant="info" id="clear">
            <h2>
              clear
            </h2>
          </Col>
        </Row>
        <br></br>
        <h5>
          <a
            className="App-link"
            href="https://www.twitch.tv/collections/1DAbboLDVBZxxA"
            target="_blank"
            rel="noopener noreferrer"
            title="These Episodes on Twitch I work on the JavaScript Calculator for my freeCodeCamp certificate using React-BootStrap"
          >
            <i className="fab fa-twitch"></i> These Episodes on Twitch <i className="fab fa-twitch"></i>
          </a>
        </h5>
      </Container>
    );
  }
}

export default Calculator;
