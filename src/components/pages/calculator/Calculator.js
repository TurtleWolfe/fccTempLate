import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Calculator.css';
import { evaluate } from 'mathjs';

export class Calculator extends Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      display: 0,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    // this.handleClear = this.handleClear.bind(this);
  }

  // static propTypes = {
  //   quote: PropTypes.string.isRequired,
  // };

  // handleClick(id) {
  //   // console.log(id);
  //   // this.setState(state => ({ display: id }));
  //   this.setState({
  //     display: id
  //   });
  // }

  handleClick = (button) => {
    console.log(this.state.display);
    if (this.state.disply === "0")
      this.setState({
        display: ""
      });
    if (button === "=") {
      this.calculate();
    }
    else if (button === "c") {
      this.reset();
    }
    else if (button === "CE") {
      this.backspace();
    }
    else {
      this.setState({
        display: this.state.display + button
      });
    }
  };

  calculate = () => {
    try {
      this.setState({
        // eslint-disable-next-line
        display: (evaluate(this.state.display) || "") + ""
      });
    } catch (e) {
      this.setState({
        display: "error"
      });
    }
  };

  reset = () => {
    this.setState({
      display: 0
    });
  };

  // backspace = () => {
  //   this.setState({
  //     display: this.state.display.slice(0, -1)
  //   });
  // };

  render() {
    return (
      <Container
        id="calculator">
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
          {/* 789 */}
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="warning"
            id="divide"
            value="/"
            onClick={() => this.handleClick("/")}
          >
            <h2>
              <i class="fas fa-divide"></i>
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="seven"
            value="7"
            onClick={() => this.handleClick("7")}
          >
            <h2>
              7
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="eight"
            value="8"
            onClick={() => this.handleClick("8")}
          >
            <h2>
              8
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="nine"
            value="9"
            onClick={() => this.handleClick("9")}
          >
            <h2>
              9
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* 456 */}
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="warning"
            id="multiply"
            value="*"
            onClick={() => this.handleClick("*")}
          >
            <h2>
              <i class="fas fa-times"></i>
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="four"
            value="4"
            onClick={() => this.handleClick("4")}
          >
            <h2>
              4
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="five"
            value="5"
            onClick={() => this.handleClick("5")}
          >
            <h2>
              5
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="six"
            value="6"
            onClick={() => this.handleClick("6")}
          >
            <h2>
              6
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* 123 */}
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="warning"
            id="subtract"
            value="-"
            onClick={() => this.handleClick("-")}
          >
            <h2>
              <i class="fas fa-minus"></i>
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="one"
            value="1"
            onClick={() => this.handleClick("1")}
          >
            <h2>
              1
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="two"
            value="2"
            onClick={() => this.handleClick("2")}
          >
            <h2>
              2
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="three"
            value="3"
            onClick={() => this.handleClick("3")}
          >
            <h2>
              3
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* +.0 */}
          {/*  */}
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="warning"
            id="add"
            value="+"
            onClick={() => this.handleClick("+")}
          >
            <h2>
              <i class="fas fa-plus"></i>
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="dark"
            id="decimal"
            value="."
            onClick={() => this.handleClick(".")}
          >
            <h1 className="decim">
              .
            </h1>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="success"
            id="zero"
            value="0"
            onClick={() => this.handleClick("0")}
          >
            <h2>
              0
            </h2>
          </Col>
          <Col as={Button}
            className="key-pad" xs={2} sm={2} md={1} lg={1}
            variant="warning"
            id="equals"
            value="="
            onClick={() => this.handleClick("=")}
          >
            <h2>
              =<i class="fas fa-equals"></i>
            </h2>
          </Col>
        </Row>
        <Row className="justify-content-center">
          {/* display & clear */}
          {/*  */}
          <Col as={"h3"}
            className="key-pad" xs={4} sm={2} md={2} lg={2}
            id="display">
            {this.state.display}
          </Col>
          <Col as={Button}
            className="key-pad" xs={4} sm={3} md={2} lg={2}
            variant="info"
            id="clear"
            value="c"
            onClick={this.reset}
          >
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
