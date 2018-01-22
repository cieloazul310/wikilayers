import { connect } from 'react-redux';
import { addFeature } from '../../actions';
import Result from '../../components/Search/Result';

const mapStateToProps = ({ latestArticle }) => {
  return {
    latestArticle,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFeature: (feature) => {
      dispatch(addFeature(feature));
    },
  };
};

const WikiResult = connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);

export default WikiResult;
