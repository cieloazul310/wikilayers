import { connect } from 'react-redux';
import {
  updateMapView,
  selectFeature,
  clearSelectedFeature,
  zoomToFeature
} from '../actions';
import Mapper from '../components/Mapper';

const mapStateToProps = ({ baseLayers, features, mapView, selectedFeature }) => {
  return {
    baseLayers,
    features,
    mapView,
    selectedFeature: selectedFeature
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
    },
    zoomToFeature: (feature) => {
      dispatch(zoomToFeature(feature));
    }
  }
}

const WikiMapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Mapper);

export default WikiMapper;
