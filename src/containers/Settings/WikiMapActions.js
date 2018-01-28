import { connect } from 'react-redux';
import {
  initialize,
 } from '../../actions';

import MapActions from '../../components/Settings/MapActions';

const mapStateToProps = ({ features }) => {
  return { features };
};

const mapDispatchToProps = dispatch => {
  return {
    initialize: (target) => {
      dispatch(initialize(target));
    }
  };
}

const WikiMapActions = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapActions);

export default WikiMapActions;
