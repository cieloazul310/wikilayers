import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './configureStore';
import App from './App';
import customMuiTheme from './customMuiTheme';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={customMuiTheme}>
        <Provider store={store}>
          <App />
        </Provider>
      </MuiThemeProvider>
    )
  }
};
