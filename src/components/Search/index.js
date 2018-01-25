import React from 'react';
import Paper from 'material-ui/Paper';

/*
import Intro from './Intro';
*/
import WikiIntro from '../../containers/Search/WikiIntro';
import WikiForms from '../../containers/Search/WikiForms';
import WikiResult from '../../containers/Search/WikiResult';
import WikiFeatureList from '../../containers/Search/WikiFeatureList';
import AdBox from '../AdBox';

import commonStyles from '../../commonStyles';

const Searcher = () => (
  <div style={commonStyles.appField}>
  <div style={commonStyles.containerOuter}>
    <Paper style={commonStyles.containerInner}>
      <WikiIntro />
      <WikiForms />
      <WikiResult />
      <WikiFeatureList />
      <AdBox />
    </Paper>
  </div>
  </div>
);

export default Searcher;
