import { connect } from 'react-redux';
import { fetchTextIfNeeded, showText } from '../../actions';
import TheContent from '../../components/Article/TheContent';

const mapStateToProps = ({ textCache }) => {
  return {
    textCache,
  };
}

const mapDispatchToProps = dispatch => {
  return {
    fetchText: (article) => {
      dispatch(fetchTextIfNeeded(article));
    },
    showText: (article) => {
      dispatch(showText(article));
    }
  };
}

const WikiContent = connect(
  mapStateToProps,
  mapDispatchToProps
)(TheContent);

export default WikiContent;
