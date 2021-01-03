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
    this.handleClick = this.handleClick.bind(this);
    this.handleClear = this.handleClear.bind(this);
  }

  // static propTypes = {
  //   quote: PropTypes.string.isRequired,
  // };

  // handleClick(id) { this.setState(state => ({ display: {id} })); }
  handleClick(e) {
    console.log(e);
    this.setState(state => ({ display: 7 }));
  }

  handleClear() { this.setState(state => ({ display: 0 })); }

  render() {
    return (
      <Container
        id="calculator">
        <Row className="justify-content-center">
          <Col as={Button}
            value="/"
            id="divide">
            <h2>
              <i class="fas fa-divide"></i>
            </h2>
          </Col>
          <Col as={Button}
            id="seven"
            value="7"
            // onClick={this.handleClick}
            onClick={(e) => this.handleClick(this.id, e)}
          // onClick={this.handleClick.bind(this, id)}
          // onClick={e => this.handleClick(this.value)}
          // onClick={this.handleClick.bind(this, id)}
          // onClick={this.handleClick.bind(this, this.props.value)}
          >
            <h2>
              7
            </h2>
          </Col>
          <Col as={Button}
            value="8"
            onClick={this.handleClick}
            id="eight">
            <h2>
              8
            </h2>
          </Col>
          <Col as={Button}
            value="9"
            onClick={this.handleClick}
            id="nine">
            <h2>
              9
            </h2>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Calculator;
