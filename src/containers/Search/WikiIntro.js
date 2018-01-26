import { connect } from 'react-redux';
import Intro from '../../components/Search/Intro';

const mapStateToProps = ({ featureCard }) => {
  return {
    featureCard
  };
};

const WikiIntro = connect(
  mapStateToProps,
)(Intro);

export default WikiIntro;
