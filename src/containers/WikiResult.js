import { connect } from 'react-redux';
import Result from '../components/Result';

const mapStateToProps = state => {
  const { latestArticle } = state;
  return {
    latestArticle
  };
};

const mapDispatchToProps = () => {
  return {};
}

const WikiResult = connect(
  mapStateToProps,
  mapDispatchToProps
)(Result);

export default WikiResult;
