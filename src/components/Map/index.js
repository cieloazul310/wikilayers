import React from 'react';

import WikiPageWrapper from '../../containers/WikiPageWrapper';
import WikiMapApp from '../../containers/Map/WikiMapApp';
import WikiMapInfo from '../../containers/Map/WikiMapInfo';

import commonStyles from '../../commonStyles';

const MapComponent = () => (
  <div>
    <WikiMapApp />
    <WikiMapInfo />
  </div>
);

const Map = () => (
  <div>
    <WikiPageWrapper component={<MapComponent />} />
  </div>
);

export default Map;
