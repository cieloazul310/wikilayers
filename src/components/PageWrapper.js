import React from 'react';
import PropTypes from 'prop-types';

import { appField } from '../commonStyles';

const PageWrapper = ({component}) => (
  <div className="app-field" style={appField}>
    {component}
  </div>
);

PageWrapper.propTypes = {
  component: PropTypes.element.isRequired
};

export default PageWrapper;
