import { connect } from 'react-redux';
import {
  updateMapView,
  selectFeature,
  clearSelectedFeature,
} from '../../actions';
import MapApp from '../../components/Map/MapApp';

const mapStateToProps = ({ baseLayers, features, mapView, selectedFeature }) => {
  return {
    baseLayers,
    features,
    mapView,
    selectedFeature
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateMapView: (view) => {
      dispatch(updateMapView(view));
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
