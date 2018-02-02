import React from 'react';
import PropTypes from 'prop-types';

import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Remove from 'material-ui/svg-icons/content/remove';
import Info from 'material-ui/svg-icons/action/info';
import IconButton from 'material-ui/IconButton';
import { grey500, greenA700 } from 'material-ui/styles/colors';

import { layersConfig } from '../../map/initialBaseLayers';

import { Translate } from 'react-redux-i18n';

const LayerList = ({ toggleLayer, visibleBaseLayer, i18n }) => (
  <div>
    <List>
      <Subheader>
        <Translate value="settings.baseLayers" />
      </Subheader>
      {layersConfig.map((layer, index) => (
        <ListItem
          key={index}
          primaryText={layer.title}
          secondaryText={layer.subtitle}
          leftIcon={
            layer.title === visibleBaseLayer ? (
              <CheckCircle color={greenA700} />
            ) : (
              <Remove />
            )
          }
          onClick={() => {
            toggleLayer(layer.title);
          }}
          rightIconButton={
            <IconButton
              touch={true}
              tooltip={layer.summary}
              tooltipPosition="top-left"
              tooltipStyles={{
                fontSize: 11
              }}
            >
              <Info color={grey500} />
            </IconButton>
          }
        />
      ))}
    </List>
  </div>
);

LayerList.propTypes = {
  visibleBaseLayer: PropTypes.string.isRequired,
  toggleLayer: PropTypes.func.isRequired
};

export default LayerList;
