import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './layout';
import Map from './pages/Map';
import Search from './pages/Search';
import Article from './pages/Article';
import Settings from './pages/Settings';

function App(): JSX.Element {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/search" component={Search} />
          <Route path="/settings" component={Settings} />
          <Route path="/article" component={Article} />
          <Route path="/" component={Map} />
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
