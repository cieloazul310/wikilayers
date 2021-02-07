import { connect } from 'react-redux';
import { fetchSummary } from '../../actions';
import Forms from '../../components/Search/Forms';

const mapStateToProps = ({ searchLang }) => {
  return {
    searchLang
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSummary: (name, searchLang) => {
      dispatch(fetchSummary(name, searchLang));
    }
  }
}

const WikiForms = connect(
  mapStateToProps,
  mapDispatchToProps
)(Forms);

export default WikiForms;
