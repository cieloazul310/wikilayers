import React from 'react';
import Paper from 'material-ui/Paper';
import FontIcon from 'material-ui/FontIcon';

import commonStyles from '../../commonStyles';

const Intro = () => (
  <div style={commonStyles.pageHeader}>
    <h1 style={commonStyles.appTitle}>
      WikiLayers
    </h1>
    <p style={{
      fontSize: 14,
      color: '#777'
    }}>
      Wikipediaを検索して地図に表示しよう！
    </p>
  </div>
);

export default Intro;
