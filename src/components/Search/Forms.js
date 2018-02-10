import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Translate } from 'react-redux-i18n';

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import SearchIcon from 'material-ui/svg-icons/action/search';

import { form as formStyle } from '../../commonStyles';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  // @FIXME: TextField loses Focus
  render() {
    // @TODO: should remove window.innerWidth
    const width = window.innerWidth;
    const isMobile = width < 450;
    return (
      <div style={formStyle}>
        <TextField
          hintText={<Translate value="form.hint" />}
          defaultValue={this.state.name}
          onChange={this.handleChange}
          hintStyle={{
            // @TODO: should remove isMobile
            fontSize: isMobile ? '70%' : '100%'
          }}
          onKeyPress={e => {
            if (e.key === 'Enter' && this.state.name !== '') {
              this.props.fetchSummary(this.state.name, this.props.searchLang);
            }
          }}
          style={{
            width: '80%'
          }}
        />
        <RaisedButton
          primary={true}
          icon={<SearchIcon />}
          onClick={() => {
            this.props.fetchSummary(this.state.name, this.props.searchLang);
          }}
          style={{
            minWidth: 40,
            width: '15%'
          }}
        />
      </div>
    );
  }
}

Forms.propTypes = {
  fetchSummary: PropTypes.func.isRequired,
  searchLang: PropTypes.shape({
    code: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
};

export default Forms;
