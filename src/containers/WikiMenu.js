import { connect } from 'react-redux';
import ViewMenu from '../components/ViewMenu';
import { changeView } from '../actions';

const mapStateToProps = state => {
  return {

  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: (filter) => {
      dispatch(changeView(filter));
    }
  };
};

const WikiMenu = connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewMenu);

export default WikiMenu;
