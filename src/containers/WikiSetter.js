import { connect } from 'react-redux';
import {
  toggleLayer,
  toggleFeature,
  selectFeature,
  removeFeature,
  setToFeature
} from '../actions';
import { push } from 'react-router-redux';
import Setter from '../components/Setter';

const mapStateToProps = ({ baseLayers, features }) => {
  return {
    baseLayers,
    features,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLayerClick: (index) => {
      dispatch(toggleLayer(index));
    },
    handleVisibility: (feature) => {
      dispatch(toggleFeature(feature));
    },
    onVisitClick: (feature) => {
      dispatch(selectFeature(feature));
      dispatch(setToFeature(feature));
      dispatch(push('/map'));
    },
    onRemoveClick: (feature) => {
      dispatch(removeFeature(feature));
    },
  };
};

const WikiSetter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Setter);

export default WikiSetter;
