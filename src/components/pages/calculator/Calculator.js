import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Calculator.css';
import { CalcBtn } from "./CalcBtn";

export class Calculator extends Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      display: 0,
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  // static propTypes = {
  //   quote: PropTypes.string.isRequired,
  // };

  // handleClick(id) { this.setState(state => ({ display: {id} })); }
  handleClick() { this.setState(state => ({ display: 7 })); }
  handleClear() { this.setState(state => ({ display: 0 })); }

  render() {

    // let seven = 7;

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
          <CalcBtn
            icon="fas fa-divide"
            variant="warning"
            // value="/"
            id="divide"
          >/</CalcBtn>
          <CalcBtn
            // icon="fas fa-divide"
            variant="success"
            value="7"
            id="seven"
          >7</CalcBtn>
          <CalcBtn
            // icon="fas fa-divide"
            variant="success"
            value="8"
            id="eight"
          >8</CalcBtn>
          <CalcBtn
            // icon="fas fa-divide"
            variant="success"
            value="9"
            id="nine"
          >9</CalcBtn>
        </Row>
        <Row className="justify-content-center">
          <CalcBtn
            icon="fas fa-times"
            variant="warning"
            // value="*"
            id="divide"
          ></CalcBtn>
          <CalcBtn
            // icon="fas fa-divide"
            variant="success"
            value="4"
            id="four"
          >4</CalcBtn>
          <CalcBtn
            // icon="fas fa-divide"
            variant="success"
            value="5"
            id="five"
          >5</CalcBtn>
          <CalcBtn
            // icon="fas fa-divide"
            variant="success"
            value="6"
            id="six"
          >6</CalcBtn>
        </Row>
        <Row className="justify-content-center">
          <CalcBtn
            icon="fas fa-minus"
            variant="warning"
            // value="-"
            id="divide"
          >-</CalcBtn>
          <CalcBtn
            // icon="fas fa-divide"
            variant="success"
            value="1"
            id="one"
          >1</CalcBtn>
          <CalcBtn
            // icon="fas fa-divide"
            variant="success"
            value="2"
            id="two"
          >2</CalcBtn>
          <CalcBtn
            // icon="fas fa-divide"
            variant="success"
            value="3"
            id="three"
          >3</CalcBtn>
        </Row>
        <Row className="justify-content-center">
          <CalcBtn
            icon="fas fa-plus"
            variant="warning"
            // value="+"
            id="plus"
          >+</CalcBtn>
          <CalcBtn
            // icon="fas fa-divide"
            variant="dark"
            value="."
            id="decimal"
          >.</CalcBtn>
          <CalcBtn
            // icon="fas fa-divide"
            variant="success"
            value="0"
            id="zero"
          >0</CalcBtn>
          <CalcBtn
            icon="fas fa-equals"
            variant="warning"
            // value="="
            id="equals"
          >=</CalcBtn>
        </Row>
        <Row className="justify-content-center">
          <Col as={"h3"}
            className="key-pad" xs={4} sm={2} md={2} lg={2}
            id="display">
            {this.state.display}
          </Col>
          <Col as={Button}
            className="key-pad" xs={4} sm={3} md={2} lg={2} value={"c"}
            onClick={this.handleClear}
            variant="info"
            id="clear">
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
