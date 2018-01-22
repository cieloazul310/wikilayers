import React from 'react';
import Paper from 'material-ui/Paper';

import Intro from './Intro';
import WikiForms from '../../containers/Search/WikiForms';
import WikiDummy from '../../containers/Search/WikiDummy';
import WikiResult from '../../containers/Search/WikiResult';
import WikiFeatureList from '../../containers/Search/WikiFeatureList';

import commonStyles from '../../commonStyles';

const Searcher = () => (
  <div style={commonStyles.containerOuter}>
    <Paper style={commonStyles.containerInner}>
      <Intro />
      <WikiForms />
      <WikiDummy />
      <WikiResult />
      <WikiFeatureList />
    </Paper>
  </div>
);

export default Searcher;
