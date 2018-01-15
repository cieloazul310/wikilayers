import { connect } from 'react-redux';
import Header from '../components/Header';
import {
  reload
} from '../actions';

const mapStateToProps = (state, ownProps) => {
  return {};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(reload(new Date()));
    }
  }
};

const CustomHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default CustomHeader;
