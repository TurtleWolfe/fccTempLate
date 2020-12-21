import React, { Fragment } from 'react';

export const Pomodoro = () => {
  return (
    <Fragment>
      <h4>
        <a
          className="App-link"
          href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clockhttps://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-25--5-clock"
          target="_blank"
          rel="noopener noreferrer"
          title="25 + 5 Clock"
        >
          <i className="fas  fa-hourglass-start"></i> 25 + 5 Clock <i className="fas  fa-hourglass-half"></i>
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

export default Pomodoro;