import Searcher from '../components/Searcher';
import { connect } from 'react-redux';
import {
  fetchArticle
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
    }
  };
};

const WikiSearcher = connect(
  mapStateToProps,
  mapDispatchToProps
)(Searcher);

export default WikiSearcher;
