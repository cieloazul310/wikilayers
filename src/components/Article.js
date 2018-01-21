import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';
import commonStyles from '../commonStyles';

import wikitext from '../wikitext.json';

class Article extends Component {
  constructor(props) {
    super(props);
    this.appendArticle = this.appendArticle.bind(this);
  }

  appendArticle() {
    document.getElementById('article').innerHTML = wikitext.query.pages[0].extract;
  }

  render() {
    return (
      <Paper style={commonStyles.container}>
        <FlatButton
          label="get html"
          onClick={() => this.appendArticle()}
        />
        <div ref={node => this.node = node}>
          <div id="article">
            <h3>Article</h3>
            <p>This is a Wikipedia Article.</p>
          </div>
        </div>
      </Paper>
    );
  }
}
export default Article;
