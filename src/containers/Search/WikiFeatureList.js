import { connect } from 'react-redux';
import {
  toggleFeature,
  selectFeature,
  setToFeature,
  zoomToFeature,
  removeFeature,
} from '../../actions';
import { push } from 'react-router-redux';

import FeatureList from '../../components/Search/FeatureList';

const mapStateToProps = ({ features }) => {
  return {
    features,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleFeature: (feature) => {
      dispatch(toggleFeature(feature));
    },
    onVisitClick: (feature) => {
      dispatch(selectFeature(feature));
      dispatch(setToFeature(feature));
      dispatch(zoomToFeature(feature));
      dispatch(push('/map'));
    },
    onRemoveClick: (feature) => {
      dispatch(removeFeature(feature));
    },
  };
};

const WikiFeatureList = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeatureList);

export default WikiFeatureList;
