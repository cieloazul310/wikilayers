import React, { Component } from 'react';
import Paper from 'material-ui/Paper';

import WikiContent from '../../containers/Article/WikiContent';

import commonStyles from '../../commonStyles';

const Article = () => (
  <div style={commonStyles.containerOuter}>
    <Paper style={commonStyles.containerInner}>
      <WikiContent />
    </Paper>
  </div>
);
export default Article;
