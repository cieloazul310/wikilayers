import Searcher from '../components/Searcher';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {
  fetchArticle,
  addFeature,
  selectFeature,
  setToFeature,
} from '../actions';

const mapStateToProps = ({ latestArticle, features }) => {
  return {
    latestArticle,
    features,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: (title) => {
      dispatch(fetchArticle(title));
    },
    onAddFeatureClick: (feature) => {
      dispatch(addFeature(feature))
    },
    onVisitClick: (feature) => {
      dispatch(selectFeature(feature));
      dispatch(setToFeature(feature));
      dispatch(push('/map'));
    }
  };
};

const WikiSearcher = connect(
  mapStateToProps,
  mapDispatchToProps
)(Searcher);

export default WikiSearcher;
