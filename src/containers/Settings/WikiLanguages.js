import { connect } from 'react-redux';
import { setSearchLang } from '../../actions';
import { setLocale } from 'react-redux-i18n';
import Languages from '../../components/Settings/Languages';

const mapStateToProps = ({ i18n, searchLang }) => {
  return {
    locale: i18n.locale,
    searchLang
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLocale: (lang) => {
      dispatch(setLocale(lang));
    },
    setSearchLang: (lang) => {
      dispatch(setSearchLang(lang));
    }
  };
};

const WikiLanguages = connect(
  mapStateToProps,
  mapDispatchToProps
)(Languages);

export default WikiLanguages;
