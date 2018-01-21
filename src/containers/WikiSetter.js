import { connect } from 'react-redux';
import {
  toggleLayer,
  toggleFeature,
  setFeatureView
} from '../actions';
import { push } from 'react-router-redux';
import Setter from '../components/Setter';

const mapStateToProps = ({ currentView, baseLayers, features }) => {
  return {
    currentView,
    baseLayers,
    features
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLayerClick: (index) => {
      dispatch(toggleLayer(index));
    },
    handleVisibility: (index) => {
      dispatch(toggleFeature(index));
    },
    onVisitClick: (feature) => {
      dispatch(setFeatureView(feature));
      dispatch(push('/map'));
    },
  };
};

const WikiSetter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Setter);

export default WikiSetter;
