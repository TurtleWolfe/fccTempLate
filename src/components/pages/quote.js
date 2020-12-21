import React, { Fragment } from 'react';

export const Quote = () => {
  return (
    <Fragment>
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
      <h5>
        <a
          className="App-link"
          href="https://www.twitch.tv/videos/836894977"
          target="_blank"
          rel="noopener noreferrer"
          title="This Episode on Twitch I build a template for my freeCodeCamp projects, with FontAwesome & Analytics"
        >
          <i className="fab fa-twitch"></i> This Episode on Twitch <i className="fab fa-twitch"></i>
        </a>
      </h5>
    </Fragment>
  );
};

export default Quote;