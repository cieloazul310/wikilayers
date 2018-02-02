import { connect } from 'react-redux';
import Intro from '../../components/Search/Intro';

const mapStateToProps = ({ featureCard, i18n }) => {
  return {
    featureCard,
    i18n
  };
};

const WikiIntro = connect(
  mapStateToProps,
)(Intro);

export default WikiIntro;
