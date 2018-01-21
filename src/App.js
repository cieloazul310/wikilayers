import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import CustomHeader from './containers/CustomHeader';
import WikiSearcher from './containers/WikiSearcher';
import WikiMapper from './containers/WikiMapper';
import WikiSetter from './containers/WikiSetter';
import Article from './components/Article';

import { history } from './configureStore';
import './App.css';
import commonStyles from './commonStyles';

injectTapEventPlugin();

class App extends Component {
  render() {
    return (
      <div>
        <Router history={history}>
          <div>
            <div style={commonStyles.appField}>
              <Route path="/map" component={WikiMapper} />
              <Route exact path="/" component={WikiSearcher} />
              <Route path="/article" component={Article} />
              <Route path="/settings" component={WikiSetter} />
            </div>
            <div style={commonStyles.bottomNav}>
              <CustomHeader />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
