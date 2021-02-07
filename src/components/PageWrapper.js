import React from 'react';
import PropTypes from 'prop-types';

import { mapField, appField } from '../commonStyles';

const PageWrapper = ({ component, type }) => (
  <div className="app-field" style={type === 'map' ? mapField : appField}>
    {component}
  </div>
);

PageWrapper.propTypes = {
  component: PropTypes.element.isRequired
};

export default PageWrapper;
