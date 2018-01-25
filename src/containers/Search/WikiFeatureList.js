import { connect } from 'react-redux';
import {
  toggleFeature,
  selectFeature,
  setToFeature,
  zoomToFeature,
  removeFeature,
  clearSelectedFeature
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
    onFeatureClick: (feature) => {
      if (feature.get('selected')) {
        dispatch(clearSelectedFeature());
      } else {
        dispatch(selectFeature(feature));
      }
    },
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
    moveToArticle: (feature) => {
      dispatch(selectFeature(feature));
      dispatch(push('/article'));
    }
  };
};

const WikiFeatureList = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeatureList);

export default WikiFeatureList;
