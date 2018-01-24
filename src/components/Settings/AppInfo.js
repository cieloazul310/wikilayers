import React from 'react';
import Subheader from 'material-ui/Subheader';

import commonStyles from '../../commonStyles';

const AppInfo = () => (
  <div style={commonStyles.components}>
    <Subheader>About WikiLayers!</Subheader>
    <p>WikiLayersは位置情報を持つWikipediaの記事を地図上に表示するアプリケーションです。</p>
    <ul>
      <li>作成者: @cieloazul310</li>
      <li>GitHub Repository</li>
    </ul>
  </div>
);

export default AppInfo;
