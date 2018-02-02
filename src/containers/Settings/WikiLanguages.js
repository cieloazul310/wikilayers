import { connect } from 'react-redux';
import { setLocale } from 'react-redux-i18n';
import Languages from '../../components/Settings/Languages';

const mapStateToProps = ({ i18n }) => {
  return { i18n };
};

const mapDispatchToProps = dispatch => {
  return {
    setLocale: (lang) => {
      dispatch(setLocale(lang));
    }
  };
};

const WikiLanguages = connect(
  mapStateToProps,
  mapDispatchToProps
)(Languages);

export default WikiLanguages;
