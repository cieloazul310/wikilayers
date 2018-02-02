import { connect } from 'react-redux';
import { setLocale } from 'react-redux-i18n';
import Intro from '../../components/Search/Intro';

const mapStateToProps = ({ featureCard, i18n }) => {
  return {
    featureCard,
    locale: i18n.locale
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setLocale: lang => {
      dispatch(setLocale(lang));
    }
  };
};

const WikiIntro = connect(
  mapStateToProps,
  mapDispatchToProps
)(Intro);

export default WikiIntro;
