import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './configureStore';
import App from './App';

const store = configureStore();

export default class Root extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </MuiThemeProvider>
    )
  }
};
