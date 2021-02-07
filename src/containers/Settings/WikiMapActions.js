import { connect } from 'react-redux';
import { loadTranslations } from 'react-redux-i18n';
import { initialize } from '../../actions';
import translationsObject from '../../translationsObject';

import MapActions from '../../components/Settings/MapActions';

const mapStateToProps = ({ features }) => {
  return { features };
};

const mapDispatchToProps = dispatch => {
  return {
    initialize: target => {
      dispatch(initialize(target));
      dispatch(loadTranslations(translationsObject));
    }
  };
};

const WikiMapActions = connect(mapStateToProps, mapDispatchToProps)(MapActions);

export default WikiMapActions;
