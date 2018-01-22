import { connect } from 'react-redux';
import { fetchArticle } from '../../actions';
import Forms from '../../components/Search/Forms';

const mapStateToProps = () => {
  return {};
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
