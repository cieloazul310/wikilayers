import React, { Component } from 'react';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';

const LayerList = ({ baseLayers, onLayerClick }) => (
  <div>
    <List>
      <Subheader>Base Layers</Subheader>
      {baseLayers.map((layer, index) => (
        <ListItem
          key={index}
          primaryText={layer.get('title')}
          leftIcon={layer.getVisible() ? <Visibility /> : <VisibilityOff style={{fill: 'silver'}} />}
          onClick={() => {
            onLayerClick(index);
          }}
        />
      ))}
    </List>
  </div>
);


export default LayerList;
