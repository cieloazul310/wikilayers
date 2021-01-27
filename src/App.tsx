import * as React from 'react';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, useLocation, useParams } from 'react-router';
import { Route } from 'react-router-dom';
//import { ConnectedRouter as Router } from 'react-router-redux';
//import ReactGA from 'react-ga';

import Layout from './layout';
//import About from './components/About';
import Map from './pages/Map';
//import Search from './components/Search';
//import Article from './components/Article';
//import Settings from './components/Settings';
//import AsyncContainer from './AsyncContainer';

import { history } from './configureStore';
//import ScrollToTop from './ScrollToTop';
//import withTracker from './withTracker';
/*
injectTapEventPlugin();
ReactGA.initialize('UA-74683419-4');
ReactGA.pageview(window.location.pathname + window.location.search);
*/
/*
const Map = AsyncContainer(() => import('./components/Map').then((module) => module.default), { name: 'Map Page' });
const Search = AsyncContainer(() => import('./components/Search').then((module) => module.default), { name: 'Search Page' });
const Article = AsyncContainer(() => import('./components/Article').then((module) => module.default), { name: 'Wikipedia Article' });
const Settings = AsyncContainer(() => import('./components/Settings').then((module) => module.default), { name: 'Map Settings' });
const About = AsyncContainer(() => import('./components/About').then((module) => module.default), { name: 'About WikiLayers' });
*/


function App() {
  /*
  const location = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  */

  return (
    <Router history={history}>
      <Layout>
        <Map />
        {/*<Route path="/map" component={withTracker(Map)} />
          <Route exact path="/" component={withTracker(Search)} />
          <Route path="/article" component={withTracker(Article)} />
          <Route path="/settings" component={withTracker(Settings)} />
  <Route path="/about" component={withTracker(About)} />*/}
      </Layout>
    </Router>
  );
}

export default App;
