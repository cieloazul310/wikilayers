import { connect } from 'react-redux';
import { zoomToFeature } from '../../actions';
import { push } from 'react-router-redux';
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
    moveToArticle: () => {
      dispatch(push('/article'));
    },
  };
};

const WikiMapInfo = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapInfo);

export default WikiMapInfo;
