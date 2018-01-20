import React from 'react';
import FeatureList from './FeatureList';
import LayerList from './LayerList';

const Setter = ({ currentView, baseLayers, features, onLayerClick, handleVisibility, onVisitClick }) => (
  <div>
    <h4>設定</h4>
    <FeatureList
      features={features}
      handleVisibility={(index) => handleVisibility(index)}
      onVisitClick={() => onVisitClick()}
    />
    <LayerList
      baseLayers={baseLayers}
      onLayerClick={(index) => onLayerClick(index)}
    />
  </div>
);

export default Setter;
