import React from 'react';
import PropTypes from 'prop-types';

const Basic = ({ component }) => (
  <div style={{
    margin: '0 auto 1em auto',
    padding: '1em',
  }}>
    {component}
  </div>
);

Basic.propTypes = {
  component: PropTypes.element
};

export default Basic;
