import { connect } from 'react-redux';
import { addFeature } from '../../actions';
import Result from '../../components/Search/Result';

const mapStateToProps = ({ latestArticle, featureCard }) => {
  return {
    latestArticle,
    featureCard
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
