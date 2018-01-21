import Searcher from '../components/Searcher';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import {
  fetchArticle,
  addFeature,
  setFeatureView,
} from '../actions';

const mapStateToProps = ({ latestArticle, currentView }) => {
  return {
    latestArticle,
    currentView
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
      dispatch(setFeatureView(feature));
      dispatch(push('/map'));
    }
  };
};

const WikiSearcher = connect(
  mapStateToProps,
  mapDispatchToProps
)(Searcher);

export default WikiSearcher;
