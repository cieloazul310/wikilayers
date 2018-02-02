import { connect } from 'react-redux';
import HowTo from '../../components/Search/HowTo';

const mapStateToProps = ({ i18n }) => {
  return { i18n };
};

const WikiHowTo = connect(mapStateToProps)(HowTo);

export default WikiHowTo;
