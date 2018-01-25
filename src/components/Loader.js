import React from 'react';
import CircularProgress from 'material-ui/CircularProgress';

const Loader = ({ style }) =>  (
  <div style={
    Object.assign({}, style, {
      position: 'relative',
    })
  }>
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

export default Loader;