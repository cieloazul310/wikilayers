import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import AppStateProvider from './AppStateProvider';
import MapProvider from './MapProvider';

import Layout from './layout';
import Map from './pages/Map';
import Search from './pages/Search';
import Article from './pages/Article';
import Settings from './pages/Settings';
import About from './pages/About';

function App(): JSX.Element {
  return (
    <AppStateProvider>
      <MapProvider>
        <Router>
          <Layout>
            <Switch>
              <Route path="/search" component={Search} />
              <Route path="/article" component={Article} />
              <Route path="/settings" component={Settings} />
              <Route path="/about" component={About} />
              <Route path="/" component={Map} />
            </Switch>
          </Layout>
        </Router>
      </MapProvider>
    </AppStateProvider>
  );
}

export default App;
