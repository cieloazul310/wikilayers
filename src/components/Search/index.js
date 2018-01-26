import React from 'react';
import Paper from 'material-ui/Paper';

import WikiPageWrapper from '../../containers/WikiPageWrapper';

import WikiIntro from '../../containers/Search/WikiIntro';
import WikiForms from '../../containers/Search/WikiForms';
import WikiResult from '../../containers/Search/WikiResult';
import WikiFeatureList from '../../containers/Search/WikiFeatureList';
import AdBox from '../AdBox';

import commonStyles from '../../commonStyles';

const SearcherComponent = () => (
  <div style={commonStyles.containerOuter}>
    <Paper style={commonStyles.containerInner}>
      <WikiIntro />
      <WikiForms />
      <WikiResult />
      <AdBox type="top" />
      <WikiFeatureList />
    </Paper>
  </div>
);

const Searcher = () => (
  <div>
    <WikiPageWrapper component={<SearcherComponent />} />
  </div>
);

export default Searcher;
