import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SearchIcon from 'material-ui/svg-icons/action/search';

import commonStyles from '../../commonStyles';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    const { width } = this.props.windowSize;
    const isMobile = width < 450;
    return (
      <div style={Object.assign({}, commonStyles.form, {
        margin: '0 auto .5em auto',
        padding: '1em .2em',
        textAlign: 'center',
      })}>
        <TextField
          hintText="https://ja.wikipedia.org/wiki/偕楽園 or 偕楽園"
          value={this.state.name}
          onChange={this.handleChange}
          hintStyle={{
            fontSize: isMobile ? '70%' : '100%'
          }}
          style={{
            width: Math.min(width * 0.8, 600 * 0.8)
          }}
        />
        <RaisedButton
          primary={true}
          icon={<SearchIcon />}
          onClick={() => {
            this.props.fetchSummary(this.state.name);
          }}
          style={{
            minWidth: 40,
            width: Math.min(width * 0.15, 600 * 0.15)
          }}
        />
      </div>
    );
  }
}

Forms.propTypes = {
  fetchSummary: PropTypes.func.isRequired,
  windowSize: PropTypes.shape({
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }).isRequired
};

export default Forms;
