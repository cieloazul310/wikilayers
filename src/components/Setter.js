import React from 'react';
import FeatureList from './FeatureList';
import LayerList from './LayerList';
import commonStyles from '../commonStyles';

const Setter = ({ currentView, baseLayers, features, onLayerClick, handleVisibility, onVisitClick, onRemoveClick }) => (
  <div style={commonStyles.container}>
    <h4>設定</h4>
    <FeatureList
      features={features}
      handleVisibility={(feature) => handleVisibility(feature)}
      onVisitClick={(feature) => onVisitClick(feature)}
      onRemoveClick={(feature) => onRemoveClick(feature)}
    />
    <LayerList
      baseLayers={baseLayers}
      onLayerClick={(index) => onLayerClick(index)}
    />
  </div>
);

export default Setter;
