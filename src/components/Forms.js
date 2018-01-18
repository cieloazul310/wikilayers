import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log(this);
    this.setState({
      title: e.target.value
    });
  }

  render() {
    return (
      <div>
        <TextField
          hintText="https://ja.wikipedia.org/wiki/水戸市 or 水戸市"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <br />
        <RaisedButton
          label="Search"
          primary={true}
          onClick={() => {
            this.props.onButtonClick(this.state.title);
          }}
        />
      </div>
    );
  }
}

export default Forms;
