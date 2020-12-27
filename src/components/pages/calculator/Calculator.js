import React, { Fragment } from 'react';

export const Calculator = () => {
  return (
    <Fragment>
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

export default Calculator;