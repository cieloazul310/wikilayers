import React, { Component } from 'react';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './configureStore';
import { PersistGate } from 'redux-persist/lib/integration/react'

import App from './App';
import customMuiTheme from './customMuiTheme';

let { store, persistor } = configureStore();

export default class Root extends Component {
  render() {
    return (
      <MuiThemeProvider muiTheme={customMuiTheme}>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </MuiThemeProvider>
    )
  }
};
