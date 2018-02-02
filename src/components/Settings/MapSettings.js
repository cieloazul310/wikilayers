import React from 'react';
import PropTypes from 'prop-types';

import Subheader from 'material-ui/Subheader';
import { List, ListItem } from 'material-ui/List';
import CheckCircle from 'material-ui/svg-icons/action/check-circle';
import Remove from 'material-ui/svg-icons/content/remove';
import { greenA700 } from 'material-ui/styles/colors';

import { Translate } from 'react-redux-i18n';

const MapSettings = ({
  mapConfigure,
  toggleGeolocation,
  toggleShowLabels,
  i18n
}) => (
  <div>
    <List>
      <Subheader>
        <Translate value="settings.mapSettings" />
      </Subheader>
      <ListItem
        onClick={() => toggleShowLabels()}
        leftIcon={
          mapConfigure.showLabels ? (
            <CheckCircle color={greenA700} />
          ) : (
            <Remove />
          )
        }
      >
        <Translate value="settings.showLabels" />
      </ListItem>
      <ListItem
        onClick={() => toggleGeolocation()}
        leftIcon={
          mapConfigure.geolocation.tracking ? (
            <CheckCircle color={greenA700} />
          ) : (
            <Remove />
          )
        }
      >
        <Translate value="settings.geolocation" />
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
  toggleShowLabels: PropTypes.func.isRequired
};

export default MapSettings;
