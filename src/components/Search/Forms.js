import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SearchIcon from 'material-ui/svg-icons/action/search';

import WikiDummy from '../../containers/Search/WikiDummy';
import commonStyles from '../../commonStyles';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      title: e.target.value
    });
  }

  render() {
    return (
          <div style={commonStyles.components}>
            <div>
              <TextField
                hintText="https://ja.wikipedia.org/wiki/偕楽園 or 偕楽園"
                value={this.state.title}
                onChange={this.handleChange}
                fullWidth={true}
              />
            </div>
            <div style={{
              textAlign: 'center'
            }}>
              <RaisedButton
                label="検索"
                primary={true}
                icon={<SearchIcon />}
                onClick={() => {
                  this.props.fetchArticle(this.state.title);
                }}
                style={{
                  marginRight: '.5em'
                }}
              />
              <WikiDummy />
            </div>
          </div>
    );
  }
}

Forms.propTypes = {
  fetchArticle: PropTypes.func.isRequired
};

export default Forms;
