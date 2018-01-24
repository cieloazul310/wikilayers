import React from 'react';
import PropTypes from 'prop-types';

import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Remove from 'material-ui/svg-icons/content/remove';
import Info from 'material-ui/svg-icons/action/info';
import IconButton from 'material-ui/IconButton';
import {
  grey500, greenA700,
} from 'material-ui/styles/colors';

const LayerList = ({ baseLayers, toggleLayer }) => (
  <div>
    <List>
      <Subheader>背景地図</Subheader>
      {baseLayers.map((layer, index) => (
        <ListItem
          key={index}
          primaryText={layer.get('title')}
          secondaryText={layer.get('subtitle')}
          leftIcon={
            layer.getVisible() ?
            <CheckCircle
              color={greenA700}
            /> :
            <Remove/>
          }
          onClick={() => {
            toggleLayer(index);
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
              <Info color={grey500}/>
            </IconButton>
          }
        />
      ))}
    </List>
  </div>
);

LayerList.propTypes = {
  baseLayers: PropTypes.arrayOf(
    PropTypes.object
  ).isRequired,
  toggleLayer: PropTypes.func.isRequired
};

export default LayerList;
