import { connect } from 'react-redux';
import Intro from '../../components/Search/Intro';

const mapStateToProps = ({ featureCard }) => {
  return {
    featureCard
  };
};

const mapDispatchToProps = dispatch => {
  return {

  };
};

const WikiIntro = connect(
  mapStateToProps,
)(Intro);

export default WikiIntro;
