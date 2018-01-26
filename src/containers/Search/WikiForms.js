import { connect } from 'react-redux';
import { fetchSummary } from '../../actions';
import Forms from '../../components/Search/Forms';

const mapStateToProps = ({ windowSize }) => {
  return {
    windowSize
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchSummary: (name) => {
      dispatch(fetchSummary(name));
    }
  }
}

const WikiForms = connect(
  mapStateToProps,
  mapDispatchToProps
)(Forms);

export default WikiForms;
