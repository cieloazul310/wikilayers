import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import CustomHeader from './containers/CustomHeader';

import Map from './components/Map';
import Search from './components/Search';
import Article from './components/Article';
import Settings from './components/Settings';

import { history } from './configureStore';
import './App.css';
import commonStyles from './commonStyles';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <div style={commonStyles.appField}>
            <Route path="/map" component={Map} />
            <Route exact path="/" component={Search} />
            <Route path="/article" component={Article} />
            <Route path="/settings" component={Settings} />
          </div>
          <div style={commonStyles.bottomNav}>
            <CustomHeader />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
