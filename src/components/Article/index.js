import React from 'react';
import Paper from 'material-ui/Paper';

import WikiPageWrapper from '../../containers/WikiPageWrapper';
import WikiContent from '../../containers/Article/WikiContent';
import AdBox from '../AdBox';
import Basic from '../Basic';

import commonStyles from '../../commonStyles';

const ArticleComponent = () => (
  <div style={commonStyles.containerOuter}>
    <Paper style={commonStyles.containerInner}>
      <WikiContent />
      <Basic component={<AdBox />} />
    </Paper>
  </div>
);

const Article = () => (
  <div>
    <WikiPageWrapper component={<ArticleComponent />} />
  </div>
);

export default Article;
