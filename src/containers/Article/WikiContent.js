import { connect } from 'react-redux';
import { fetchTextIfNeeded } from '../../actions';
import TheContent from '../../components/Article/TheContent';

const mapStateToProps = ({ selectedFeature, textCache }) => {
  return {
    selectedFeature,
    textCache
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchText: (article) => {
      dispatch(fetchTextIfNeeded(article));
    }
  };
}

const WikiContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheContent);

export default WikiContent;
