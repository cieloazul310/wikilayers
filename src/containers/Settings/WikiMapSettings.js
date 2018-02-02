import { connect } from 'react-redux';
import {
  toggleGeolocation,
  toggleShowLabels,
  initialize,
 } from '../../actions';

import MapSettings from '../../components/Settings/MapSettings';

const mapStateToProps = ({ mapConfigure, i18n }) => {
  return {
    mapConfigure,
    i18n
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleGeolocation: () => {
      dispatch(toggleGeolocation());
    },
    toggleShowLabels: () => {
      dispatch(toggleShowLabels());
    },
    initialize: () => {
      dispatch(initialize());
    }
  };
}

const WikiMapSettings = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapSettings);

export default WikiMapSettings;
