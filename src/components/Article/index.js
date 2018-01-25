import React from 'react';
import Paper from 'material-ui/Paper';

import WikiContent from '../../containers/Article/WikiContent';
import AdBox from '../AdBox';

import commonStyles from '../../commonStyles';

const Article = () => (
  <div style={commonStyles.appField}>
  <div style={commonStyles.containerOuter}>
    <Paper style={commonStyles.containerInner}>
      <WikiContent />
      <AdBox />
    </Paper>
  </div>
  </div>
);
export default Article;
