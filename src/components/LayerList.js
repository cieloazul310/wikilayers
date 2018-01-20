import React from 'react';
import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import Visibility from 'material-ui/svg-icons/action/visibility';
import VisibilityOff from 'material-ui/svg-icons/action/visibility-off';
import Info from 'material-ui/svg-icons/action/info';
import IconButton from 'material-ui/IconButton';
import {
  grey300, grey500,
} from 'material-ui/styles/colors';

const LayerList = ({ baseLayers, onLayerClick }) => (
  <div>
    <List>
      <Subheader>背景地図</Subheader>
      {baseLayers.map((layer, index) => (
        <ListItem
          key={index}
          primaryText={layer.get('title')}
          leftIcon={
            layer.getVisible() ?
            <Visibility
              color={grey500}
            /> :
            <VisibilityOff
              color={grey300}
            />
          }
          onClick={() => {
            onLayerClick(index);
          }}
          rightIconButton={
            <IconButton
              touch={true}
              tooltip={layer.get('summary')}
              tooltipPosition="top-left"
              tooltipStyles={{
                fontSize: 11
              }}
            >
              <Info
                color={grey500}
              />
            </IconButton>
          }
        />
      ))}
    </List>
  </div>
);

export default LayerList;
