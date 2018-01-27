import { connect } from 'react-redux';
import {
  toggleGeolocation,
  toggleShowLabels,
  initialize,
 } from '../../actions';

import MapSettings from '../../components/Settings/MapSettings';

const mapStateToProps = ({ mapConfigure, }) => {
  return {
    mapConfigure,
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
