import { connect } from 'react-redux';
import { toggleLayer } from '../../actions';
import LayerList from '../../components/Settings/LayerList';

const mapStateToProps = ({ baseLayers }) => {
  return {
    baseLayers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleLayer: (index) => {
      dispatch(toggleLayer(index));
    }
  };
}

const WikiLayerList = connect(
  mapStateToProps,
  mapDispatchToProps
)(LayerList);

export default WikiLayerList;
