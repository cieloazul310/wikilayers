import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

const Loader = ({ style, hidden }) =>  (
  <div style={
    Object.assign({}, style, {
      position: 'relative',
    })}
    hidden={hidden}
  >
    <CircularProgress style={
      {
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'block'
      }
    } />
  </div>
);

Loader.propTypes = {
  style: PropTypes.object,
  hidden: PropTypes.bool.isRequired
}

export default Loader;
