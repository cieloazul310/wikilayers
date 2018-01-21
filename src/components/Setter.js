import React from 'react';
import FeatureList from './FeatureList';
import LayerList from './LayerList';
import commonStyles from '../commonStyles';

const Setter = ({ currentView, baseLayers, features, onLayerClick, handleVisibility, onVisitClick }) => (
  <div style={commonStyles.container}>
    <h4>設定</h4>
    <FeatureList
      features={features}
      handleVisibility={(index) => handleVisibility(index)}
      onVisitClick={(feature) => onVisitClick(feature)}
    />
    <LayerList
      baseLayers={baseLayers}
      onLayerClick={(index) => onLayerClick(index)}
    />
  </div>
);

export default Setter;
