import React from 'react';
import LayerList from './LayerList';

const Setter = ({ currentView, baseLayers, onLayerClick }) => (
  <div
    hidden={currentView !== 'Settings'}
  >
    <h4>Setting</h4>
    <p>Setting for features, map layers and personal config.</p>
    <LayerList
      baseLayers={baseLayers}
      onLayerClick={(index) => onLayerClick(index)}
    />
  </div>
);

export default Setter;
