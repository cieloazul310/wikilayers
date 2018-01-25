import React from 'react';
import WikiMapApp from '../../containers/Map/WikiMapApp';
import WikiMapInfo from '../../containers/Map/WikiMapInfo';

import commonStyles from '../../commonStyles';

const Map = () => (
  <div style={commonStyles.appField}>
    <WikiMapApp />
    <WikiMapInfo />
  </div>
);

export default Map;
