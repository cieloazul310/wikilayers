import { connect } from 'react-redux';
import { resize } from './actions';
import EventListener from 'react-event-listener';

const mapStateToProps = () => {
  return {
    target: window
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onResize: () => {
      dispatch(resize(window.innerWidth, window.innerHeight));
    }
  }
};

const ResizeEventListener = connect(
  mapStateToProps,
  mapDispatchToProps
)(EventListener);

export default ResizeEventListener;
