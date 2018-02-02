import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import Header from '../components/Header';

const mapStateToProps = ({ router, i18n }) => {
  return {
    router,
    i18n
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onMenuClick: pathname => {
      dispatch(push(pathname));
    },
  }
};

const CustomHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default CustomHeader;
