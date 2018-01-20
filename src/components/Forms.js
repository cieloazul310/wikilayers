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
    this.setState({
      title: e.target.value
    });
  }

  render() {
    return (
      <div>
        <TextField
          hintText="https://ja.wikipedia.org/wiki/偕楽園 or 偕楽園"
          fullWidth={true}
          value={this.state.title}
          onChange={this.handleChange}
        />
        <br />
        <RaisedButton
          label="検索"
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
