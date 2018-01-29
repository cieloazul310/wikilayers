import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import ReactGA from 'react-ga';
import withTracker from './withTracker';

import CustomHeader from './containers/CustomHeader';
import Map from './components/Map';
import Search from './components/Search';
import Article from './components/Article';
import Settings from './components/Settings';
import About from './components/About';

import { history } from './configureStore';
//import './App.css';
import { bottomNav } from './commonStyles';

injectTapEventPlugin();
ReactGA.initialize('UA-74683419-4', {debug: true});
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div style={{
          width: '100%',
          height: '100%',
          minHeight: '100vh',
        }}>
          <Route path="/map" component={withTracker(Map)} />
          <Route exact path="/" component={withTracker(Search)} />
          <Route path="/article" component={withTracker(Article)} />
          <Route path="/settings" component={withTracker(Settings)} />
          <Route path="/about" component={withTracker(About)} />
          <nav style={bottomNav}>
            <CustomHeader />
          </nav>
        </div>
      </Router>
    );
  }
}

export default App;
