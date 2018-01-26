import React from 'react';
import PropTypes from 'prop-types';

import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Remove from 'material-ui/svg-icons/content/remove';
import { greenA700 } from 'material-ui/styles/colors';

const MapSettings = ({ mapConfigure, toggleGeolocation, toggleShowLabels }) => (
  <div>
    <List>
      <Subheader>地図の設定</Subheader>
      <ListItem
        onClick={() => toggleShowLabels()}
        leftIcon={
          mapConfigure.showLabels ?
          <CheckCircle color={greenA700} /> : <Remove />
        }
      >
        アイテムのラベルを常に表示
      </ListItem>
      <ListItem
        onClick={() => toggleGeolocation()}
        leftIcon={
          mapConfigure.geolocation.tracking ?
          <CheckCircle color={greenA700} /> : <Remove />
        }
      >
        現在地を表示
      </ListItem>
    </List>
  </div>
);

MapSettings.propTypes = {
  mapConfigure: PropTypes.shape({
    geolocation: PropTypes.object,
    showLabels: PropTypes.bool
  }).isRequired,
  toggleGeolocation: PropTypes.func.isRequired,
  toggleShowLabels: PropTypes.func.isRequired,
};

export default MapSettings;
