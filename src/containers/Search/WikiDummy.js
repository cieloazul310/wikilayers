import { connect } from 'react-redux';
import { addFeature } from '../../actions';
import DummyFeature from '../../components/Search/DummyFeature';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    addFeature: (feature) => {
      dispatch(addFeature(feature));
    }
  };
};

const WikiDummy = connect(
  mapStateToProps,
  mapDispatchToProps
)(DummyFeature);

export default WikiDummy;