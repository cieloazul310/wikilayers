import { connect } from 'react-redux';
import PageWrapper from '../components/PageWrapper';

const mapStateToProps = ({ windowSize }) => {
  return {
    windowSize
  };
};

const WikiPageWrapper = connect(
  mapStateToProps
)(PageWrapper);

export default WikiPageWrapper;
