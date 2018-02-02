import { connect } from 'react-redux';
import { initialize } from '../../actions';

import MapActions from '../../components/Settings/MapActions';

const mapStateToProps = ({ features, i18n }) => {
  return { features, i18n };
};

const mapDispatchToProps = dispatch => {
  return {
    initialize: target => {
      dispatch(initialize(target));
    }
  };
};

const WikiMapActions = connect(mapStateToProps, mapDispatchToProps)(MapActions);

export default WikiMapActions;
