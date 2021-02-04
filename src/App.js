import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Route } from 'react-router-dom';
import { ConnectedRouter as Router } from 'react-router-redux';
import ReactGA from 'react-ga';

import CustomHeader from './containers/CustomHeader'; /*
import About from './components/About';*/ /*
import Map from './components/Map';
import Search from './components/Search';
import Article from './components/Article';
import Settings from './components/Settings';*/
import AsyncContainer from './AsyncContainer';

import { history } from './configureStore';
import ScrollToTop from './ScrollToTop';
import withTracker from './withTracker';
import { bottomNav } from './commonStyles';

injectTapEventPlugin();
ReactGA.initialize('UA-74683419-4');
ReactGA.pageview(window.location.pathname + window.location.search);

const Map = AsyncContainer(
  () => import('./components/Map').then(module => module.default),
  { name: 'Map Page' }
);
const Search = AsyncContainer(
  () => import('./components/Search').then(module => module.default),
  { name: 'Search Page' }
);
const Article = AsyncContainer(
  () => import('./components/Article').then(module => module.default),
  { name: 'Wikipedia Article' }
);
const Settings = AsyncContainer(
  () => import('./components/Settings').then(module => module.default),
  { name: 'Map Settings' }
);
const About = AsyncContainer(
  () => import('./components/About').then(module => module.default),
  { name: 'About WikiLayers' }
);

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div style={{ width: '100%', height: '100%', position: 'relative' }}>
          <ScrollToTop>
            <Route path="/map" component={withTracker(Map)} />
            <Route exact path="/" component={withTracker(Search)} />
            <Route path="/article" component={withTracker(Article)} />
            <Route path="/settings" component={withTracker(Settings)} />
            <Route path="/about" component={withTracker(About)} />
          </ScrollToTop>
          <nav style={bottomNav}>
            <CustomHeader />
          </nav>
        </div>
      </Router>
    );
  }
}

export default App;
