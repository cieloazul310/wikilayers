import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import CustomHeader from './containers/CustomHeader';
import WikiSearcher from './containers/WikiSearcher';
import WikiMapper from './containers/WikiMapper';
import WikiSetter from './containers/WikiSetter';

import { history } from './configureStore';
import './App.css';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <div style={{
              height: window.innerHeight - 60,
              overflow: 'scroll'
            }}>
              <Route exact path="/" component={WikiSearcher} />
              <Route path="/map" component={WikiMapper} />
              <Route path="/settings" component={WikiSetter} />
            </div>
            <div style={{
              height: 60
            }}>
              <CustomHeader />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
