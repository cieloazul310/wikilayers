import { connect } from 'react-redux';
import {
  updateMapView,
  selectFeature,
  clearSelectedFeature
} from '../actions';
import Mapper from '../components/Mapper';

const mapStateToProps = ({ baseLayers, features, mapView, selectedFeature }) => {
  return {
    baseLayers,
    features,
    mapView,
    selectedFeatureTitle: Object.keys(selectedFeature).length !== 0 ? selectedFeature.get('name') : '選択なし'
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

const WikiMapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Mapper);

export default WikiMapper;
