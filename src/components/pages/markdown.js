import React, { Fragment } from 'react';

export const MarkDown = () => {
  return (
    <Fragment>
      <h1>
        <a
          className="App-link"
          href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer"
          target="_blank"
          rel="noopener noreferrer"
          title="Markdown Previewer"
        >
          <i className="fab fa-markdown"></i> Markdown Previewer <i className="fab fa-markdown"></i>
        </a>
      </h1>
      <h2>
        <a
          className="App-link"
          href="https://www.twitch.tv/videos/836894977"
          target="_blank"
          rel="noopener noreferrer"
          title="This Episode on Twitch I build a template for my freeCodeCamp projects, with FontAwesome & Analytics"
        >
          <i className="fab fa-twitch"></i> This Episode on Twitch <i className="fab fa-twitch"></i>
        </a>
      </h2>
    </Fragment>
  );
};

export default MarkDown;