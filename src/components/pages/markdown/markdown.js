import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import marked from 'marked';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';

export class Markdown extends Component {
  constructor(props) {
    super(props);
    // Initial State
    this.state = {
      markdown: `# H1 Header
## h2 header
[**\`inline code\`**](https://www.google.com "Google's Homepage")  

\`\`\`bash
code block
\`\`\`  
> Quote Block
1. Inline-style:
![ScritpHammer.com](https://raw.githubusercontent.com/TurtleWolfe/fccTempLate/master/src/images/ScriptHammerSM.gif 'ScriptHammer.com')  
`,
    };
  }

  static propTypes = {
    markdown: PropTypes.string.isRequired,
  };

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    let { markdown } = this.state;
    return (
      <Fragment>
        <h4>
          <a
            className="App-link"
            href="https://www.freecodecamp.org/learn/front-end-libraries/front-end-libraries-projects/build-a-markdown-previewer"
            target="_blank"
            rel="noopener noreferrer"
            title="Markdown Previewer"
          >
            <i className="fab fa-markdown"></i> Markdown Previewer <i className="fab fa-markdown"></i>
          </a>
        </h4>
        <Form
          style={{ width: '90%' }}>
          <Form.Group controlId="editor" >
            <Form.Control as="textarea"
              className="bg-dark text-white"
              rows={3}
              value={markdown}
              onChange={(e) => {
                this.updateMarkdown(e.target.value);
              }}
            />
            <Form.Text id="passwordHelpBlock" muted>
              enter markdown in the text area above
      </Form.Text>
          </Form.Group>
        </Form>

        <Card id="preview"
          className="bg-dark text-white"
          style={{ width: '90%' }}
          dangerouslySetInnerHTML={{ __html: marked(markdown) }}
        >
        </Card>
        <h5>
          <a
            className="App-link"
            href="https://www.twitch.tv/videos/836894977"
            target="_blank"
            rel="noopener noreferrer"
            title="This Episode on Twitch I build a MarkDown Previewer"
          >
            <i className="fab fa-twitch"></i> These Episodes on Twitch <i className="fab fa-twitch"></i>
          </a>
        </h5>
      </Fragment>
    );
  }
}

export default Markdown;

// Set options
// `highlight` example uses `highlight.js`
marked.setOptions({
  renderer: new marked.Renderer(),
  // pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: true,
  // smartLists: true,
  // smartypants: false,
  // xhtml: false
});
