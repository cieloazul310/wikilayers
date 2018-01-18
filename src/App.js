import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import CustomHeader from './containers/CustomHeader';
import WikiSearcher from './containers/WikiSearcher';
import WikiMapper from './containers/WikiMapper';
import WikiSetter from './containers/WikiSetter';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div className="App">
        <CustomHeader />
        <div>
          <WikiSearcher />
          <WikiMapper />
          <WikiSetter />
        </div>
      </div>
    );
  }
}

export default App;
