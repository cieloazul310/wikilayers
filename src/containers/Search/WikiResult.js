import { connect } from 'react-redux';
import { addFeature, clearFeatureCard } from '../../actions';
import Result from '../../components/Search/Result';

const mapStateToProps = ({ latestArticle, featureCard }) => {
  return {
    latestArticle,
    featureCard,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addFeature: (feature) => {
      dispatch(addFeature(feature));
    },
    clearFeatureCard: () => {
      dispatch(clearFeatureCard());
    }
  };
};

const WikiResult = connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);

export default WikiResult;