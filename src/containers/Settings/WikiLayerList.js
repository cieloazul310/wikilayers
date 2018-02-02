import { connect } from 'react-redux';
import { toggleLayer } from '../../actions';
import LayerList from '../../components/Settings/LayerList';

const mapStateToProps = ({ visibleBaseLayer }) => {
  return {
    visibleBaseLayer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleLayer: (title) => {
      dispatch(toggleLayer(title));
    }
  };
}

const WikiLayerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayerList);

export default WikiLayerList;
