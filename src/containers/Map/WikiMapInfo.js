import { connect } from 'react-redux';
import { zoomToFeature } from '../../actions';
import MapInfo from '../../components/Map/MapInfo';

const mapStateToProps = ({ selectedFeature }) => {
  return {
    selectedFeature
  };
};

const mapDispatchToProps = dispatch => {
  return {
    zoomToFeature: (feature) => {
      dispatch(zoomToFeature(feature));
    },
  };
};

const WikiMapInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapInfo);

export default WikiMapInfo;