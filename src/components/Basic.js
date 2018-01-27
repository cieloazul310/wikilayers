import React from 'react';
import PropTypes from 'prop-types';

import { basic as basicStyle } from '../commonStyles';

const Basic = ({ component }) => (
  <div style={basicStyle}>
    {component}
  </div>
);

Basic.propTypes = {
  component: PropTypes.element
};

export default Basic;
