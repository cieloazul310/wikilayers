import { connect } from 'react-redux';
import Mapper from '../components/Mapper';

const mapStateToProps = ({ currentView, baseLayers }) => {
  return {
    currentView,
    baseLayers
  };
};

const WikiMapper = connect(
  mapStateToProps
)(Mapper);

export default WikiMapper;
