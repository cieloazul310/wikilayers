import React from 'react';
import PropTypes from 'prop-types';

import commonStyles from '../commonStyles';

const PageWrapper = ({component, windowSize }) => (
  <div className="app-field" style={commonStyles.appField(windowSize.height)}>
    {component}
  </div>
);

PageWrapper.propTypes = {
  windowSize: PropTypes.object.isRequired,
  component: PropTypes.element.isRequired
};

export default PageWrapper;
