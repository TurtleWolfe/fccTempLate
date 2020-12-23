import React, { Fragment } from 'react';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Quote = ({ quote, source, author }) => {
  return (
    <Fragment>
      <Card bg="dark" style={{ width: '90%' }} id="quote-box">
        <Card.Header>

          <h4>
            <a
              className="App-link"
              href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-random-quote-machine"
              target="_blank"
              rel="noopener noreferrer"
              title=" Random Quote Machine"
            >
              <i className="fas fa-quote-left"></i> Random Quote Machine <i className="fas fa-quote-right"></i>
            </a>
          </h4>

          {/* Random Quote */}

        </Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p id="text">
              {' '}
              {quote}
              {' '}
            </p>
            <footer className="blockquote-footer" id="author">
              {author} <cite title="Source Title">{source}</cite>
            </footer>
          </blockquote>
          <ButtonGroup aria-label="Basic example" style={{ width: '20%' }}>
            <Button variant="primary" id="new-quote">new quote</Button>
            <Button as="a" variant="primary" id="tweet-quote" href="twitter.com/intent/tweet" ><i className="fab fa-twitter"></i></Button>
          </ButtonGroup>
        </Card.Body>
      </Card>

      <h5>
        <a
          className="App-link"
          href="https://www.twitch.tv/videos/836894977"
          target="_blank"
          rel="noopener noreferrer"
          title="This Episode on Twitch I build a template for my freeCodeCamp projects, with FontAwesome & Analytics"
        >
          <i className="fab fa-twitch"></i> These Episodes on Twitch <i className="fab fa-twitch"></i>
        </a>
      </h5>
    </Fragment>
  );
};

Quote.defaultProps = {
  quote: "And as he drove on, the rainclouds dragged down the sky after him, for, though he did not know it, Rob McKenna was a Rain God. All he knew was that his working days were miserable and he had a succession of lousy holidays. All the clouds knew was that they loved him and wanted to be near him, to cherish him, and to water him.",
  source: "So Long, and Thanks for All the Fish",
  author: 'Douglas Adams'
};

Quote.propTypes = {
  quote: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
};

export default Quote;