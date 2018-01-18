import { connect } from 'react-redux';
import { toggleLayer } from '../actions';
import Setter from '../components/Setter';

const mapStateToProps = ({ currentView, baseLayers }) => {
  return {
    currentView,
    baseLayers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onLayerClick: (index) => {
      dispatch(toggleLayer(index));
    }
  };
};

const WikiSetter = connect(
  mapStateToProps,
  mapDispatchToProps
)(Setter);

export default WikiSetter;
