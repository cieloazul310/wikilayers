import { connect } from 'react-redux';
import { updateMapView } from '../actions';
import Mapper from '../components/Mapper';

const mapStateToProps = ({ currentView, baseLayers, features, mapView }) => {
  return {
    currentView,
    baseLayers,
    features,
    mapView
  };
};

const mapDispatchToProps = dispatch => {
  return {
    updateMapView: (view) => {
      dispatch(updateMapView(view));
    }
  }
}

const WikiMapper = connect(
  mapStateToProps,
  mapDispatchToProps
)(Mapper);

export default WikiMapper;
