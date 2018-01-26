import { connect } from 'react-redux';
import { fetchArticle } from '../../actions';
import Forms from '../../components/Search/Forms';

const mapStateToProps = ({ windowSize }) => {
  return {
    windowSize
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchArticle: (title) => {
      dispatch(fetchArticle(title));
    }
  }
}

const WikiForms = connect(
  mapStateToProps,
  mapDispatchToProps
)(Forms);

export default WikiForms;
