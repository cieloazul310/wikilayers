import Forms from '../components/Forms';
import { connect } from 'react-redux';
import {
  fetchArticle
} from '../actions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: (title) => {
      dispatch(fetchArticle(title));
    }
  };
};

const WikiForms = connect(
  mapStateToProps,
  mapDispatchToProps
)(Forms);

export default WikiForms;
