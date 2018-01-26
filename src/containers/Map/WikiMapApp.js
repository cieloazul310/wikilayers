import { connect } from 'react-redux';
import {
  updateMapView,
  saveGeolocation,
  selectFeature,
  clearSelectedFeature,
} from '../../actions';
import MapApp from '../../components/Map/MapApp';

const mapStateToProps = ({ visibleBaseLayer, features, mapView, selectedFeature, mapConfigure, windowSize }) => {
  return {
    visibleBaseLayer,
    features,
    mapView,
    selectedFeature,
    mapConfigure,
    windowSize
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateMapView: (view) => {
      dispatch(updateMapView(view));
    },
    saveGeolocation: (glObj) => {
      dispatch(saveGeolocation(glObj));
    },
    selectFeature: (feature) => {
      dispatch(selectFeature(feature));
    },
    clearSelectedFeature: () => {
      dispatch(clearSelectedFeature());
    }
  }
}

const WikiMapApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapApp);

export default WikiMapApp;
