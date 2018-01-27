import React from 'react';

import PageWrapper from '../PageWrapper';
import WikiMapApp from '../../containers/Map/WikiMapApp';
import WikiMapInfo from '../../containers/Map/WikiMapInfo';

import { mapWrapper } from '../../commonStyles';

const MapComponent = () => (
  <div style={mapWrapper}>
    <WikiMapApp />
    <WikiMapInfo />
  </div>
);

const Map = () => <PageWrapper component={<MapComponent />} />;

export default Map;
