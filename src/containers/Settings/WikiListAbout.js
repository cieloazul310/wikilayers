import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import ListAbout from '../../components/Settings/ListAbout';

const mapStateToProps = ({ i18n }) => {
  return {
    i18n
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: path => {
      dispatch(push(path));
    }
  };
};

const WikiListAbout = connect(mapStateToProps, mapDispatchToProps)(ListAbout);

export default WikiListAbout;
